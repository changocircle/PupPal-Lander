/**
 * PupPal Sitemap Generator
 *
 * Generates public/sitemap.xml from breed and blog data.
 * Run manually or as a build step: node scripts/generate-sitemap.js
 *
 * Wire as a build step in package.json:
 *   "build": "node scripts/generate-sitemap.js && tsc -b && vite build"
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const TODAY = new Date().toISOString().split("T")[0];

// --- Static pages ---
const staticPages = [
  { loc: "https://puppal.dog/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
  { loc: "https://puppal.dog/breeds/", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "https://puppal.dog/blog/", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { loc: "https://puppal.dog/privacy", changefreq: "monthly", priority: "0.3", lastmod: TODAY },
  { loc: "https://puppal.dog/terms", changefreq: "monthly", priority: "0.3", lastmod: TODAY },
  { loc: "https://puppal.dog/affiliate", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
];

// --- Breed pages (from PupPal-app breeds.json or local copy) ---
// Look for breeds data in multiple locations
let breedSlugs = [];

const breedDataPaths = [
  resolve(rootDir, "src/data/breeds.json"),
  resolve(rootDir, "../PupPal-app/src/data/breeds.json"),
];

for (const p of breedDataPaths) {
  try {
    const raw = readFileSync(p, "utf-8");
    const breeds = JSON.parse(raw);
    breedSlugs = breeds.map((b) => b.slug).filter(Boolean);
    console.log(`  Loaded ${breedSlugs.length} breeds from ${p}`);
    break;
  } catch {
    // Try next path
  }
}

if (breedSlugs.length === 0) {
  // Fallback: hardcoded breed slugs (keep in sync with app)
  breedSlugs = [
    "labrador-retriever", "french-bulldog", "golden-retriever", "german-shepherd",
    "poodle", "bulldog", "rottweiler", "beagle", "dachshund",
    "german-shorthaired-pointer", "pembroke-welsh-corgi", "australian-shepherd",
    "yorkshire-terrier", "cavalier-king-charles-spaniel", "doberman-pinscher",
    "boxer", "miniature-schnauzer", "cane-corso", "great-dane", "shih-tzu",
    "siberian-husky", "bernese-mountain-dog", "pomeranian", "boston-terrier",
    "havanese", "english-springer-spaniel", "shetland-sheepdog", "brittany",
    "cocker-spaniel", "miniature-american-shepherd", "border-collie", "vizsla",
    "maltese", "weimaraner", "chihuahua", "bichon-frise", "basset-hound",
    "belgian-malinois", "collie", "newfoundland", "rhodesian-ridgeback",
    "west-highland-white-terrier", "shiba-inu", "bloodhound", "akita",
    "portuguese-water-dog", "chesapeake-bay-retriever", "dalmatian", "samoyed",
    "australian-cattle-dog", "mixed-breed",
  ];
  console.log(`  Using ${breedSlugs.length} hardcoded breed slugs`);
}

// --- Blog posts (from blog-posts.ts — parse slugs) ---
let blogSlugs = [];

const blogDataPaths = [
  resolve(rootDir, "src/data/blog-posts.ts"),
];

for (const p of blogDataPaths) {
  try {
    const raw = readFileSync(p, "utf-8");
    // Extract slugs from `slug: "..."` patterns
    const matches = raw.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g);
    const found = [];
    for (const m of matches) {
      if (m[1] && !found.includes(m[1])) {
        found.push(m[1]);
      }
    }
    // Filter out non-blog slugs (like relatedSlugs entries that appear multiple times)
    // Use BlogPost top-level slugs only (they appear before "relatedSlugs")
    blogSlugs = found.slice(0, 10); // first 10 unique slugs = our 10 articles
    console.log(`  Loaded ${blogSlugs.length} blog post slugs`);
    break;
  } catch {
    console.warn("  Could not load blog-posts.ts, using empty blog list");
  }
}

// --- Build URL entries ---
const breedEntries = breedSlugs.map((slug) => ({
  loc: `https://puppal.dog/breeds/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: TODAY,
}));

const blogEntries = blogSlugs.map((slug) => ({
  loc: `https://puppal.dog/blog/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: TODAY,
}));

const allUrls = [...staticPages, ...breedEntries, ...blogEntries];

// --- Generate XML ---
function urlToXml({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(urlToXml).join("\n")}
</urlset>`;

const outputPath = resolve(rootDir, "public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");

console.log(`\n✅ Sitemap generated: ${allUrls.length} URLs written to public/sitemap.xml`);
console.log(`   Static pages: ${staticPages.length}`);
console.log(`   Breed pages:  ${breedEntries.length}`);
console.log(`   Blog posts:   ${blogEntries.length}`);
