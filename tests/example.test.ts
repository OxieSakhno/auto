import { test, expect } from "@playwright/test";

test.skip("First Basic Test", async ({ page }) => {
  await page.goto("https://www.example.com");
  const pageTitle = page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
  await page.waitForTimeout(3000);
});

test("Click on Element", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.click("#signin_button");
  await page.click("text=Sign in");
  const errMsg = page.locator(".alert-error");
  await expect(errMsg).toContainText("Login and/or password are wrong.");
  await page.waitForTimeout(3000);
});
