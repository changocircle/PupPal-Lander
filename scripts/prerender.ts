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

// Routes to pre-render: [urlPath, outputFile]
const routes: [string, string][] = [
  ["/", "index.html"],
  ["/privacy", "privacy/index.html"],
  ["/terms", "terms/index.html"],
  ["/affiliate", "affiliate/index.html"],
];

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
