import { expect, type Page } from '@playwright/test';

export class RegisterPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/register', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await expect(
      this.page.getByRole('heading', { name: /register account/i }),
    ).toBeVisible({ timeout: 20000 });
  }

  async registerCustomer(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<void> {
    await this.page.locator('input[name="firstname"]').fill(firstName);
    await this.page.locator('input[name="lastname"]').fill(lastName);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="telephone"]').fill('9876543210');
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[name="confirm"]').fill(password);
    await this.page.locator('input[name="agree"]').check();
    await this.page.getByRole('button', { name: /continue/i }).click();

    await expect(
      this.page.getByText('Your Account Has Been Created!'),
    ).toBeVisible();
  }
}
