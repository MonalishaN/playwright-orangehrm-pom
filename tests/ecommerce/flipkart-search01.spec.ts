import { test, expect } from '@playwright/test';

test('search for Mobilephone and verify Micromax X742', async ({ page }) => {
  await page.goto('https://www.flipkart.com/realme-techlife-realfit', {
    waitUntil: 'commit',
  });

  const homepageLink = page.getByRole('link', { name: 'GO TO HOMEPAGE' });
  await expect(homepageLink).toBeVisible();
  await homepageLink.click();

  const closeLoginButton = page.getByRole('button', { name: '✕' });
  if (await closeLoginButton.isVisible().catch(() => false)) {
    await closeLoginButton.click();
  }

  const searchInput = page.getByRole('textbox', {
    name: 'Search for Products, Brands and More',
  });
  await searchInput.fill('Mobilephone');
  await page.getByRole('button', {
    name: 'Search for Products, Brands and More',
  }).click();

  await expect(page).toHaveURL(/\/search\?q=Mobilephone/);
  await expect(page.getByRole('link', { name: /Micromax X742/i })).toBeVisible();
});