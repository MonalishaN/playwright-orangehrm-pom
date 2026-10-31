import { test, expect } from '@playwright/test';

const productEndpoint = 'https://fakestoreapi.com/products/1';

test('gets product 1 from Fake Store API', async ({ request }) => {
  const response = await request.get(productEndpoint);

  expect(response.status()).toBe(200);

  const product = await response.json();
  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('title');
  expect(product).toHaveProperty('price');
  expect(product).toHaveProperty('category');
  expect(product).toHaveProperty('description');

  console.log(`Product title: ${product.title}; price: ${product.price}`);
});
