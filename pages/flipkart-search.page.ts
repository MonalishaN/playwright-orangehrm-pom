import { expect, Page } from '@playwright/test';

export class FlipkartSearchPage {
  private readonly searchInput;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByRole('textbox', {
      name: 'Search for Products, Brands and More',
    });
  }

  async open(): Promise<void> {
    await this.page.goto('https://www.flipkart.com/realme-techlife-realfit', {
      waitUntil: 'commit',
    });

    const homepageLink = this.page.getByRole('link', {
      name: 'GO TO HOMEPAGE',
    });
    if (await homepageLink.isVisible()) {
      await homepageLink.click();
    }

    await expect(this.searchInput).toBeVisible();
  }

  async searchFor(query: string): Promise<void> {
    const closeLoginButton = this.page.getByRole('button', { name: '✕' });
    if (await closeLoginButton.isVisible()) {
      await closeLoginButton.click();
    }

    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
    await expect(this.page).toHaveURL(new RegExp(`/search\\?q=${query}`));
  }

  async expectProductListed(productName: string): Promise<void> {
    await expect(
      this.page.getByRole('link', { name: new RegExp(productName, 'i') }),
    ).toBeVisible();
  }
}
