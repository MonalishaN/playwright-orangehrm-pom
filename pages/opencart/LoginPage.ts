 import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(email: string, password: string) {
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[value="Login"]').click();
  }

  async logout() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/logout');
    await this.page.waitForLoadState('domcontentloaded');
  }
}