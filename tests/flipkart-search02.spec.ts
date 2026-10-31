import { test } from '@playwright/test';
import { FlipkartSearchPage } from './pages/flipkart-search.page';

test('search for Mobilephone and verify REDMI Note 15 SE 5G', async ({
  page,
}) => {
  const flipkartSearchPage = new FlipkartSearchPage(page);

  await flipkartSearchPage.open();
  await flipkartSearchPage.searchFor('Mobilephone');
  await flipkartSearchPage.expectProductListed('REDMI Note 15 SE 5G');
});
