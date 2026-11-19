 import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/opencart/RegisterPage';
import { LoginPage } from '../../pages/opencart/LoginPage';

test('OpenCart logout after registration', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const email = `test${Date.now()}@gmail.com`;

  await registerPage.open();
  await registerPage.registerCustomer('Test', 'User', email, 'Test@1234');

  await loginPage.logout();

  await expect(page.getByRole('heading', { name: /account logout/i })).toBeVisible({ timeout: 15000 });
});