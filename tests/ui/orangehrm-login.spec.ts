import { test, expect } from '@playwright/test';

test('OrangeHRM Admin can log in and see the Dashboard', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/dashboard\/index/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 20000 });
});
