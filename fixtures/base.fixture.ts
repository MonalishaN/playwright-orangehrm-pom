import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { FlipkartSearchPage } from '../pages/flipkart-search.page';
import { RegisterPage } from '../pages/opencart/RegisterPage';
import { LoginPage as OpenCartLoginPage } from '../pages/opencart/LoginPage';
import { SearchPage } from '../pages/opencart/SearchPage';
import { CartPage } from '../pages/opencart/CartPage';

type MyFixtures = {
  loginPage: LoginPage;
  pimPage: PIMPage;
  flipkartPage: FlipkartSearchPage;
  opencartRegisterPage: RegisterPage;
  opencartLoginPage: OpenCartLoginPage;
  opencartSearchPage: SearchPage;
  opencartCartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },
  flipkartPage: async ({ page }, use) => {
    await use(new FlipkartSearchPage(page));
  },
  opencartRegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  opencartLoginPage: async ({ page }, use) => {
    await use(new OpenCartLoginPage(page));
  },
  opencartSearchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  opencartCartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };