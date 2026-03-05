import { chromium } from "playwright";

const APP_URL = process.env.APP_URL || "http://localhost:4173";
const route = process.argv[2] || "/";
const filename = process.argv[3] || "screenshot.png";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.goto(`${APP_URL}${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000); // Let animations settle

  // Full page screenshot
  await page.screenshot({
    path: filename,
    fullPage: false,
  });
  console.log(`Screenshot saved: ${filename}`);

  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: filename.replace(".png", "-mobile.png"),
    fullPage: false,
  });
  console.log(`Mobile screenshot saved: ${filename.replace(".png", "-mobile.png")}`);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
