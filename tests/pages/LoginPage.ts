import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();

    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(
      this.page.getByRole('heading', { name: 'Dashboard' }),
    ).toBeVisible();
  }
}
