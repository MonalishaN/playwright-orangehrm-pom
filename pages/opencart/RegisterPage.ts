 import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async registerCustomer(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<void> {
    await this.page.locator('input[name="firstname"]').waitFor({ timeout: 15000 });
    await this.page.locator('input[name="firstname"]').fill(firstName);
    await this.page.locator('input[name="lastname"]').fill(lastName);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="telephone"]').fill('9876543210');
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[name="confirm"]').fill(password);

    await this.page.evaluate(() => {
      const el = document.querySelector('input[name="agree"]') as HTMLInputElement | null;
      if (el && !el.checked) {
        el.scrollIntoView();
        el.click();
      }
    });

    await this.page.evaluate(() => {
      const btn = document.querySelector('input[value="Continue"]') as HTMLInputElement | null;
      if (btn) {
        btn.scrollIntoView();
        btn.click();
      }
    });
  }
}