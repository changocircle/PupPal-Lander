/**
 * Static pre-rendering script for PupPal landing page.
 *
 * Run after `vite build` to generate pre-rendered HTML files for each route.
 * Each file is a complete HTML document with the React-rendered content
 * injected inline — giving Google and AI crawlers full content without JS.
 *
 * Usage (automatically invoked by `bun run build:prerender`):
 *   1. `vite build`                   — normal client build → dist/
 *   2. `vite build --ssr src/entry-server.tsx` — SSR bundle → dist/server/
 *   3. `bun run scripts/prerender.ts` — render routes and write HTML files
 *
 * Output:
 *   dist/index.html         (/)
 *   dist/privacy/index.html (/privacy)
 *   dist/terms/index.html   (/terms)
 *   dist/affiliate/index.html (/affiliate)
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

// Blog slugs (must match blog-posts.ts)
const blogSlugs = [
  "when-do-puppies-stop-biting",
  "puppy-potty-training-schedule",
  "how-to-crate-train-a-puppy",
  "first-week-new-puppy-checklist",
  "stop-puppy-jumping",
  "puppy-socialization-timeline",
  "how-much-sleep-does-a-puppy-need",
  "best-training-treats-for-puppies",
  "stop-puppy-whining-at-night",
  "puppy-teething-timeline",
];

// Routes to pre-render: [urlPath, outputFile]
const routes: [string, string][] = [
  ["/", "index.html"],
  ["/privacy", "privacy/index.html"],
  ["/terms", "terms/index.html"],
  ["/affiliate", "affiliate/index.html"],
  ["/blog", "blog/index.html"],
  ...blogSlugs.map((slug): [string, string] => [`/blog/${slug}`, `blog/${slug}/index.html`]),
];

// Blog post meta (title and excerpt for meta description)
const blogMeta: Record<string, { title: string; description: string }> = {
  "when-do-puppies-stop-biting": {
    title: "When Do Puppies Stop Biting? (Complete Guide)",
    description: "Puppies bite because it is how they explore the world. Here is exactly what to expect month by month, and how to make it stop faster.",
  },
  "puppy-potty-training-schedule": {
    title: "Puppy Potty Training Schedule by Age",
    description: "The schedule is the secret weapon. Here is exactly when to take your puppy outside based on their age, plus what to do when accidents happen.",
  },
  "how-to-crate-train-a-puppy": {
    title: "How to Crate Train a Puppy (Step by Step)",
    description: "Crate training done right gives your puppy a safe den they actually want to be in. Here is the right way, week by week.",
  },
  "first-week-new-puppy-checklist": {
    title: "First Week with a New Puppy Checklist",
    description: "The first week sets the tone for everything. Here is exactly what to do each day, from the moment your puppy comes home.",
  },
  "stop-puppy-jumping": {
    title: "How to Stop a Puppy from Jumping on People",
    description: "Jumping is the number one complaint from puppy owners who have guests. The fix is counterintuitive but it works every time.",
  },
  "puppy-socialization-timeline": {
    title: "Puppy Socialization Timeline (What to Do and When)",
    description: "The window between 8 and 16 weeks shapes your dog's personality for life. Here is exactly what to expose your puppy to, and when.",
  },
  "how-much-sleep-does-a-puppy-need": {
    title: "How Much Sleep Does a Puppy Need?",
    description: "Puppies need 16-20 hours of sleep per day. Here is what is normal by age and how sleep affects behavior and training.",
  },
  "best-training-treats-for-puppies": {
    title: "Best Training Treats for Puppies",
    description: "The right treat makes training go 3x faster. Here is exactly what to look for, what to avoid, and recommendations by breed size.",
  },
  "stop-puppy-whining-at-night": {
    title: "How to Stop Puppy Whining at Night",
    description: "It is 2am and your puppy will not stop crying. Here is what actually works and what makes it worse.",
  },
  "puppy-teething-timeline": {
    title: "Puppy Teething Timeline and What to Expect",
    description: "Teething makes the biting worse and explains why your puppy is destroying everything. Here is the full timeline and how to get through it.",
  },
};

// Page-specific meta for title / description injection
const pageMeta: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "PupPal — AI-Powered Puppy Training App | Personalized Plans for Your Breed",
    description:
      "Train your puppy with an AI mentor that knows your breed. Personalized training plans, 160+ exercises, health tracking, and the Good Boy Score. $3.33/month. Try free for 3 days.",
    canonical: "https://puppal.dog/",
  },
  "/privacy": {
    title: "Privacy Policy — PupPal",
    description:
      "PupPal's privacy policy. Learn how we protect your data and your puppy's information.",
    canonical: "https://puppal.dog/privacy",
  },
  "/terms": {
    title: "Terms of Service — PupPal",
    description:
      "PupPal's terms of service. Read about our terms and conditions for using the app.",
    canonical: "https://puppal.dog/terms",
  },
  "/affiliate": {
    title: "Affiliate Program — Earn With PupPal",
    description:
      "Join PupPal's affiliate program. Earn 20-30% commission promoting the #1 AI puppy training app.",
    canonical: "https://puppal.dog/affiliate",
  },
  "/blog": {
    title: "Puppy Training Blog | PupPal",
    description:
      "Practical puppy training advice from the PupPal team. Bite inhibition, potty training, crate training, socialization, and more.",
    canonical: "https://puppal.dog/blog",
  },
  // Blog post pages
  ...Object.fromEntries(
    blogSlugs.map((slug) => [
      `/blog/${slug}`,
      {
        title: `${blogMeta[slug]?.title ?? slug} | PupPal Blog`,
        description: blogMeta[slug]?.description ?? "",
        canonical: `https://puppal.dog/blog/${slug}`,
      },
    ]),
  ),
};

async function main() {
  // Load the SSR entry module (built by `vite build --ssr`)
  const serverEntryPath = resolve(distDir, "server/entry-server.js");
  const { render } = await import(serverEntryPath);

  // Load the client-built index.html as the template
  const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

  console.log("🐾 PupPal — Static pre-rendering...\n");

  for (const [urlPath, outputFile] of routes) {
    const meta = pageMeta[urlPath]!;

    // Render the route to an HTML string
    const appHtml = render(urlPath) as string;

    // Inject rendered HTML into the root div
    let html = template.replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`,
    );

    // Update page title for sub-pages
    if (urlPath !== "/") {
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${meta.title}</title>`,
      );
      html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${meta.description}"`,
      );
      html = html.replace(
        /<link rel="canonical" href="[^"]*"/,
        `<link rel="canonical" href="${meta.canonical}"`,
      );
    }

    // Write the output file
    const outputPath = resolve(distDir, outputFile);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, "utf-8");

    console.log(`  ✓  ${urlPath}  →  dist/${outputFile}`);
  }

  console.log("\n✅ Pre-rendering complete.");
}

main().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
