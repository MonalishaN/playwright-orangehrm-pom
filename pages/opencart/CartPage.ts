import { expect, type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async openCart(): Promise<void> {
    await this.page.locator('#cart').click();
    await this.page.getByRole('link', { name: /view cart/i }).click();

    await expect(
      this.page.getByRole('heading', { name: /shopping cart/i }),
    ).toBeVisible({ timeout: 15000 });
  }

  async verifyProductInCart(productName: string): Promise<void> {
    const productRow = this.page
      .locator('table tbody tr')
      .filter({ has: this.page.getByRole('link', { name: new RegExp(productName, 'i') }) })
      .first();

    await expect(productRow).toBeVisible({ timeout: 15000 });
    await expect(
      productRow.getByRole('link', { name: new RegExp(productName, 'i') }).first(),
    ).toBeVisible({ timeout: 15000 });
  }
}
