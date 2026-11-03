import { expect, type Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await expect(
      this.page.getByRole('heading', { name: /returning customer/i }),
    ).toBeVisible({ timeout: 15000 });
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[type="submit"][value="Login"]').click();

    await expect(
      this.page.locator('#content').getByRole('heading', { name: /my account/i }),
    ).toBeVisible({ timeout: 20000 });
  }

  async logout(): Promise<void> {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/logout', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await expect(
      this.page.getByRole('heading', { name: /account logout/i }),
    ).toBeVisible({ timeout: 15000 });

    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await expect(
      this.page.getByRole('heading', { name: /returning customer/i }),
    ).toBeVisible({ timeout: 15000 });
  }
}
