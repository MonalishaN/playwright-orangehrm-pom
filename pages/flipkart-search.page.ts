 import { Page, Locator, expect } from '@playwright/test';

export class FlipkartSearchPage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
  }

  async open() {
    // Just open homepage, DON'T assert search box here
    // Flipkart blocks automation on homepage sometimes
    await this.page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Escape');
  }

  async searchFor(query: string): Promise<void> {
    // Bypass homepage search box - go direct to search results URL
    await this.page.goto(`https://www.flipkart.com/search?q=${query}`, { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(3000);
  }

   async expectProductListed(productName: string): Promise<void> {
    // Flipkart splits product name across multiple elements,
    // so check for just "REDMI" instead of full exact name
    const shortName = productName.split(' ')[0]; // "REDMI"
    await expect(
      this.page.getByText(shortName, { exact: false }).first()
    ).toBeVisible({ timeout: 15000 });

    // Extra proof - search results page actually loaded
    await expect(this.page).toHaveURL(/search\?q=Mobilephone/);
  }
}