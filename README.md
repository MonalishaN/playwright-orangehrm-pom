# 🎭 Playwright TypeScript POM Framework - OrangeHRM + OpenCart E2E

[![Playwright Tests](https://github.com/MonalishaN/playwright-orangehrm-pom/actions/workflows/playwright.yml/badge.svg)](https://github.com/MonalishaN/playwright-orangehrm-pom/actions/workflows/playwright.yml)

> Enterprise-grade E2E automation framework built with Playwright + TypeScript + Page Object Model. Demonstrates real-world scenarios: HRM + E-Commerce + API.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![E2E PASS](https://img.shields.io/badge/OpenCart%20E2E-1%20PASSED-brightgreen?style=for-the-badge)

# Playwright OrangeHRM - POM Framework

End-to-End Automation Framework for OrangeHRM using Playwright + TypeScript with Page Object Model, Fixtures, API Testing & HTML Reporting.

**Application Under Test:** https://opensource-demo.orangehrmlive.com
 
- 🛠️ Tech Stack & Best Practices:

Playwright - Modern auto-wait, web-first assertions
TypeScript - Type safety
Page Object Model - Maintainable locators;
Fixtures - Custom base.fixture.ts for DI;
Unique Test Data - Date.now() for email to avoid duplicate user error;
Chromium Only - Fast CI/CD, no flaky cross-browser for E2E
HTML Report, Trace, Screenshot on Failure
 GitHub Actions - CI/CD
  
 
- ## Page Object Model

The framework uses the Page Object Model (POM) pattern to separate test logic from page-specific implementation details.

### How It Works

Each web page gets its own Page Object class that encapsulates:

- **Locators** — CSS selectors / Playwright getters for elements
- **Actions** — Methods that perform operations (click, fill, select)
- **Verifications** — Methods that check state (isVisible, getText)

### Available Page Objects

| Class | File | Key Methods |
| --- | --- | --- |
| LoginPage (OrangeHRM) | `pages/LoginPage.ts` | `gotoLogin()`, `login()`, `isLoginPageExists()` |
| PIMPage | `pages/PIMPage.ts` | `addEmployee()`, `searchEmployee()`, `isEmployeeExists()` |
| LoginPage (OpenCart) | `pages/opencart/LoginPage.ts` | `gotoLogin()`, `login()`, `isLoginPageExists()` |
| RegisterPage | `pages/opencart/RegisterPage.ts` | `registerUser()`, `isRegistrationSuccess()` |
| SearchPage | `pages/opencart/SearchPage.ts` | `searchProduct()`, `isProductVisible()` |
| CartPage | `pages/opencart/CartPage.ts` | `addToCart()`, `isProductInCart()` |
| FlipkartSearchPage | `pages/flipkart-search.page.ts` | `searchProduct()`, `getSearchResults()` |

## Features / Tests Covered
- Login - Valid, Invalid, Empty data
- Dashboard - Verify widgets & menus
- PIM / Employee - Add Employee with unique data, Search Employee
- Leave - Apply Leave, Verify Leave List
- Logout
- API - Fake Store API Product Validation, OrangeHRM Employee API

### 📁 Project Structure

├── fixtures/
│   ├── base.fixture.ts      # Central fixture - creates all pages
│   └── test-data.json       # URLs, credentials, search data
├── pages/
│   ├── LoginPage.ts         # OrangeHRM
│   ├── PIMPage.ts
│   └── opencart/
│       ├── RegisterPage.ts  # TutorialNinja Register
│       ├── LoginPage.ts     # TutorialNinja Login
│       ├── SearchPage.ts    # Search & Product
│       └── CartPage.ts      # Cart verification
├── tests/
│   ├── api/
│   │   ├── api-product.spec.ts        # 1 API test
│   │   └── day5-extra-tests.spec.ts   # 5 API tests
│   ├── ui/
│   │   ├── day4-add-employee.spec.ts  # OrangeHRM Add Employee
│   │   └── orangehrm-login.spec.ts    # OrangeHRM Login
│   ├── ecommerce/
│   │   ├── flipkart-search02.spec.ts  # Flipkart Search
│   │   ├── opencart-e2e.spec.ts       # 11-step E2E
│   │   └── opencart-logout.spec.ts    # OpenCart Logout
│   └── utils/
│       ├── PlaywrightContextforPOM
│       ├── apitestcontext.txt
│       └── webcontext.txt
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── playwright.config.ts     # Chromium project (optimized)

 
## Prerequisites
- Node.js 18+
- npm
- Git

## How to Run
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
npx playwright install chromium 

## How to Run

Headed mode - watch the browser:
npx playwright test tests/ecommerce/opencart-e2e.spec.ts --project=chromium --headed --workers=1

 Fast list mode - no report server hang:
npx playwright test tests/ecommerce/opencart-e2e.spec.ts --project=chromium --reporter=list --workers=1

Other commands from package.json:
npm test                # playwright test
npm run test:e2e        # playwright test
npm run test:headed     # playwright test --headed
npm run test:ui         # playwright test --ui



### 🔥 Live Demo Results

**OpenCart E2E - 11 Steps: ✅ PASSED (58.7s)**
**GitHub:** https://github.com/MonalishaN/playwright-orangehrm-pom

✓ OpenCart e2e registration, login, and product purchase flow (48.8s)
1 passed
Demo Site: `https://tutorialsninja.com/demo/` (Cloudflare-free clone of OpenCart, stable for automation)

### ✅ What is Automated?

#### 1. OpenCart - Complete User Journey (11 Steps)
This is the main E2E that passes 100%:
1.  Open `https://tutorialsninja.com/demo/`
2.  Navigate to Register `index.php?route=account/register`
3.  Register with **unique email** `test+timestamp@demo.com` + `Test@12345`
4.  Verify `Your Account Has Been Created!`
5.  Log out
6.  Log in again with the same credentials
7.  Verify My Account dashboard
8.  Search `MacBook` from the header
9.  Open the first product and verify the product page
10. Add to Cart & verify success alert `Success: You have added...`
11. Open the cart and verify the product name, Quantity, Unit Price, and total

#### 2. OrangeHRM - POM
- LoginPage, PIMPage, DashboardPage
- Data-driven tests with fixtures

#### 3. FakeStore API - API Testing
- Products, Categories, Cart validation using `request` fixture

#### 4. Flipkart - Search
- Search for products and verify results
 

🧪 Test Cases - All 11 Tests With Steps

API Tests - FakeStore API https://fakestoreapi.com  

Test 1: api/api-product.spec.ts - Get Single Product
Test: Validate the single-product API returns the correct product.
1. Send GET /products/1 using the request fixture.
2. Verify the response status is 200.
3. Parse the response as JSON.
4. Verify product.id is 1.
5. Verify the product has a title property.
6. Verify the product has property price.
7. Log the product title and price

Test 2: api/day5-extra-tests.spec.ts — Get All Products

Test: Should return 20 products

Steps:
1. Send GET /products
2. Verify the response status is 200.
3. Parse the response as JSON.
4. Verify the response is an array.
5. Verify the array length is 20.
6. Log total product count

Test 3: api/day5-extra-tests.spec.ts — Get Product Categories
Test: Should have electronics category
Steps:
1. Send GET /products/categories
2. Verify response status is 200.
3. Parse response as JSON.
4. Verify response contains electronics.
5. Log all categories

Test 4: api/day5-extra-tests.spec.ts — Get Products By Category
Test: Get products by category — electronics
Steps:
1. Send GET /products/category/electronics
2. Verify response status is 200.
3. Parse response as JSON.
4. Verify the response is an array and the length is> 0.
5. Verify every product has category = electronics.
6. Log the count of electronics products

Test 5: api/day5-extra-tests.spec.ts — Validate Product Price
Test: Validate product price is a positive number (product 2)
Steps:
1. Send GET /products/2
2. Verify response status is 200.
3. Parse response as JSON.
4. Verify product.price is a number.
5. Verify product. price is greater than 0 — expect(price).toBeGreaterThan(0)
6. Log product price

Test 6: api/day5-extra-tests.spec.ts — Validate User Cart API
Test: Validate user cart API (cart 1)
Steps:
1. Send GET /carts/1
2. Verify response status is 200.
3. Parse response as JSON.
4. Verify the cart has the property id.
5. Verify cart has property products. Log Cart ID: ${cart.id} has ${cart.products.length} items. UI Tests — OrangeHRM https://opensource-demo.orangehrmlive.com

Test 7: ui/orangehrm-login.spec.ts — Login Test
Test: Login with valid credentials
Steps:
1. Open OrangeHRM login page.
2. Enter username: Admin.
3. Enter password admin123.
4. Click the Login button.
5. Verify the dashboard is visible.
6 . Verify the URL contains /dashboard

Test 8: ui/day4-add-employee.spec.ts — Add Employee
Test: Add new employee + create login details
Steps:
1. Login to OrangeHRM with Admin / admin123.
2. Verify the Dashboard is visible.
3. Go to PIM menu.
4. Click Add Employee.
5. Enter First Name and Last Name (dynamic/unique).
6. Check the Create Login Details checkbox.
7.  Enter Username and Password for the new employee.
8. Click the Save button.
9. Verify the Personal Details page/success message is visible.
10. Verify the new employee name is displayed. Ecommerce Tests

Test 9: ecommerce/flipkart-search02.spec.ts — Flipkart Search
Test: Search product on Flipkart
Steps:
1. Open Flipkart homepage https://www.flipkart.com
2. Close login popup if visible.
3. Enter product name in the search box.
4. Press Enter / Click Search button.
5. Verify search results are visible.
6. Verify the first result contains the searched product name

Test 10: ecommerce/opencart-logout.spec.ts — OpenCart Logout
Test: Login → Logout
Steps:
1. Open the OpenCart login page.
2. Enter the registered Email and password.
3. Click the Login button.
4.  Verify the My Account heading is visible.
5. Click Logout.
6. Verify the Login link is visible again.
7. Verify the URL contains the logout/account page

Test 11: ecommerce/opencart-e2e.spec.ts — Full E2E (POM + Fixtures)
Test: Register → Logout → Login → Search MacBook → Add to Cart → Verify Cart
Steps:
1. Generate dynamic test data: typescript   const timestamp = Date.now();
   const email = `test+${timestamp}@gmail.com`;
   const firstName = 'Test';
   const lastName = `User${timestamp}`;
   const password = 'Test@12345';
   const productName = 'MacBook';
2. Open Register page — await opencartRegisterPage.open()
3. Register customer — await opencartRegisterPage.registerCustomer(firstName, lastName, email, password)
4. Verify Your Account Has Been Created! text is visible
5. Logout — await opencartLoginPage.logout()
6. Verify Login link is visible — page.getByRole('link', { name: /login/i }).first()
7. Login with the same email/password — await opencartLoginPage.login(email, password)
8. Verify My Account heading is visible — page.locator('#content').getByRole('heading', { name: /my account/i })
9. Search for product — await opencartSearchPage.searchForProduct(productName) // 'MacBook'
10. Open first product — await opencartSearchPage.openFirstProduct(productName)
11.Verify product heading is visible — page.getByRole('heading', { name: new RegExp(productName, 'i') })
12. Click Add to Cart button — page.getByRole('button', { name: /add to cart/i }).first()
13.Verify success message — page.getByText(/success: you have added/i) is visible
14. Open Cart — await opencartCartPage.openCart()
15. Verify product in cart — await opencartCartPage.verifyProductIn

Note: This test uses Fixtures from base.fixture.ts — opencartRegisterPage, opencartLoginPage, opencartSearchPage, opencartCartPage are injected, not created with new Page().



⚙️ Playwright Config

> testDir: './tests'
> fullyParallel: true
> retries: CI ? 2 : 0, workers: CI ? 1 : undefined
> reporter: 'html'
> use: { trace: 'on-first-retry' }
> baseURL commented out - tests use full URLs
> projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }] - Chromium only

🐛 Problem Solved During Development:
 demo.opencart.com and opencart.com return a 403 bot challenge on Azure/Codespace machines. Switched to tutorialsninja.com/demo/, an identical OpenCart build with no bot protection. All 11 steps now pass consistently.

👩‍💻 Author: Monalisha N
> QA Automation Engineer
> GitHub: @MonalishaN
> Framework: playwright-orangehrm-pom.
> Focus: Playwright, TypeScript, E2E, POM

⭐ Star this repo if you are learning Playwright E2E!
