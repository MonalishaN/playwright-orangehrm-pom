import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test('add Narayan Das and verify the employee profile', async ({ page }) => {
  test.setTimeout(90000);

  const loginPage = new LoginPage(page);
  const pimPage = new PIMPage(page);

  await loginPage.open();
  await loginPage.login('Admin', 'admin123');
  await pimPage.navigateToPIM();
  await pimPage.clickAddEmployee();
  await pimPage.addEmployee('Narayan', 'Das');
});
