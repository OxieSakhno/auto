import { test, expect } from "@playwright/test";

test("Second Basic Test", async ({ page }) => {
  await page.goto("https://www.fortnite.com/item-shop");
  //const pageTitle = page.locator("h1");
  //await expect(pageTitle).toContainText("Example Domain");
  await page.waitForTimeout(3000);
});
