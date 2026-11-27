import { test, expect } from '@playwright/test';

test('Assertion Test for Flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(2000);

  // 1. Login popup ho to uska X band karo
  try {
    await page.locator('button:has-text("✕")').first().click({ timeout: 3000 });
  } catch {
    // popup nahi tha, koi baat nahi - aage badho
  }

  // 2. Ab search box dikhega, tab fill karo
  await page.locator('input[name="q"]').waitFor({ timeout: 15000 });
  await page.locator('input[name="q"]').click();
  await page.locator('input[name="q"]').fill('vivo 5g mobile');
  await page.keyboard.press('Enter');
  await expect(page.getByText('vivo 5g mobile').first()).toBeVisible();
});