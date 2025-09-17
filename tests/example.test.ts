import { test, expect } from "@playwright/test";

test("Basic Test", async ({ page }) => {
  await page.goto("https://www.example.com");
  const pageTitle = page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
  await page.waitForTimeout(3000);
});
