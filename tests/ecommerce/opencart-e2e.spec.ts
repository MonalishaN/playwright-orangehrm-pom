import { test, expect } from '../../fixtures/base.fixture';

test.setTimeout(120000);

test('OpenCart e2e registration, login and product purchase flow', async ({
  page,
  opencartRegisterPage,
  opencartLoginPage,
  opencartSearchPage,
  opencartCartPage,
}) => {
  const timestamp = Date.now();
  const email = `test+${timestamp}@gmail.com`;
  const firstName = 'Test';
  const lastName = `User${timestamp}`;
  const password = 'Test@12345';
  const productName = 'MacBook';

  await opencartRegisterPage.open();
  await opencartRegisterPage.registerCustomer(
    firstName,
    lastName,
    email,
    password,
  );

  await expect(page.getByText('Your Account Has Been Created!')).toBeVisible();

  await opencartLoginPage.logout();
  await expect(page.getByRole('link', { name: /login/i }).first()).toBeVisible();

  await opencartLoginPage.login(email, password);
  await expect(
    page.locator('#content').getByRole('heading', { name: /my account/i }),
  ).toBeVisible();

  await opencartSearchPage.searchForProduct(productName);
  await opencartSearchPage.openFirstProduct(productName);

  await expect(
    page.getByRole('heading', { name: new RegExp(productName, 'i') }),
  ).toBeVisible();

  const addToCartButton = page
    .getByRole('button', { name: /add to cart/i })
    .first();
  await addToCartButton.click();

  await expect(page.getByText(/success: you have added/i)).toBeVisible();

  await opencartCartPage.openCart();
  await opencartCartPage.verifyProductInCart(productName);
});
