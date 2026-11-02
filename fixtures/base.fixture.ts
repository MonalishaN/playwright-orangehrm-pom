import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
// If your Flipkart page class name is different, change it here
import { FlipkartSearchPage } from '../pages/flipkart-search.page';

type MyFixtures = {
  loginPage: LoginPage;
  pimPage: PIMPage;
  flipkartPage: FlipkartSearchPage;
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
});

export { expect };