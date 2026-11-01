import { test, expect } from '@playwright/test';

const baseUrl = 'https://fakestoreapi.com';

test.describe('Day 5 - Extra 5 Tests', () => {

  test('1. Get all products - should return 20 products', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products`);
    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products.length).toBe(20);
    console.log(`Total products: ${products.length}`);
  });

  test('2. Get product categories - should have electronics', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products/categories`);
    expect(response.status()).toBe(200);
    const categories = await response.json();
    expect(categories).toContain('electronics');
    console.log(`Categories: ${categories}`);
  });

  test('3. Get products by category - electronics', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products/category/electronics`);
    expect(response.status()).toBe(200);
    const products = await response.json();
    expect(products.length).toBeGreaterThan(0);
    console.log(`Electronics count: ${products.length}`);
  });

  test('4. Validate product price is positive number', async ({ request }) => {
    const response = await request.get(`${baseUrl}/products/2`);
    const product = await response.json();
    expect(typeof product.price).toBe('number');
    expect(product.price).toBeGreaterThan(0);
    console.log(`Product 2 price is valid: ${product.price}`);
  });

  test('5. Validate user cart API', async ({ request }) => {
    const response = await request.get(`${baseUrl}/carts/1`);
    expect(response.status()).toBe(200);
    const cart = await response.json();
    expect(cart).toHaveProperty('id');
    expect(cart).toHaveProperty('products');
    console.log(`Cart ID: ${cart.id} has ${cart.products.length} items`);
  });

});