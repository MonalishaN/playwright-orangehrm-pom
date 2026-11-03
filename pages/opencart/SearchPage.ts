import { expect, type Page } from '@playwright/test';

export class SearchPage {
  constructor(private readonly page: Page) {}

  async searchForProduct(productName: string): Promise<void> {
    const searchInput = this.page.locator('#search input[name="search"]').first();

    await searchInput.fill(productName);
    await this.page.locator('#search button').first().click();

    await expect(this.page).toHaveURL(new RegExp(`search=.*${productName}`, 'i'), { timeout: 20000 });
  }

  async openFirstProduct(productName: string): Promise<void> {
    const firstProduct = this.page
      .locator('.product-layout .product-thumb')
      .filter({ has: this.page.getByRole('link', { name: new RegExp(productName, 'i') }) })
      .first();

    await expect(firstProduct).toBeVisible();
    await firstProduct.getByRole('link', { name: new RegExp(productName, 'i') }).first().click();

    await expect(
      this.page.getByRole('heading', { name: new RegExp(productName, 'i') }),
    ).toBeVisible({ timeout: 15000 });
  }
}
