import { test, expect } from '@playwright/test';

test('1. Valid Login - should go to Products page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('.login_logo')).toBeVisible();
  await expect(page.locator('#login-button')).toBeEnabled();

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#password').press('Enter');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
  await expect(page.locator('.title')).toBeVisible();
});