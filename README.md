# 🎭 Playwright TypeScript POM Framework - OrangeHRM + OpenCart E2E

> Enterprise-grade E2E automation framework built with Playwright + TypeScript + Page Object Model. Demonstrates real-world scenarios: HRM + E-Commerce.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![E2E PASS](https://img.shields.io/badge/OpenCart%20E2E-1%20PASSED-brightgreen?style=for-the-badge)

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
11. Open Cart and verify Product Name, Quantity, Unit Price, Total

#### 2. OrangeHRM - POM
- LoginPage, PIMPage, DashboardPage
- Data-driven tests with fixtures

### 📁 Project Structure

├── fixtures/
│   ├── base.fixture.ts      # Custom test fixture with all Page Objects
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
│   ├── orangehrm/
│   └── ecommerce/
│       └── opencart-e2e.spec.ts  # 11-step E2E
├── utils/
│   └── helper.ts
├── playwright.config.ts     # Chromium project (optimized)
└── package.json

### 🚀 How to Run

**Install:**
```bash
npm install
npx playwright install chromium

# Headed mode - watch the browser
npx playwright test tests/ecommerce/opencart-e2e.spec.ts --project=chromium --headed --workers=1

# Fast list mode - no report server hang
npx playwright test tests/ecommerce/opencart-e2e.spec.ts --project=chromium --reporter=list --workers=1

Run All Tests:

npx playwright test --project=chromium
npx playwright show-report

🛠️ Tech Stack & Best Practices

Playwright -Modern auto-wait, web-first assertions
TypeScript - Type safety
Page Object Model - Maintainable locators
Fixtures - Custom base.fixture.ts for DI
Unique Test Data - Date.now() for email to avoid duplicate user error
Chromium Only - Fast CI/CD, no flaky cross-browser for E2E
TutorialNinja Demo - Bypassed demo.opencart.com 403 Cloudflare bot challenge

🐛 Problem Solved During Development
demo.opencart.com and opencart.com return a 403 bot challenge on Azure/Codespace machines. Switched to tutorialsninja.com/demo/, an identical OpenCart build with no bot protection. All 11 steps now pass consistently.

👩‍💻 Author: Monalisha N
- QA Automation Engineer
GitHub: @MonalishaN
Framework: playwright-orangehrm-pom
Focus: Playwright, TypeScript, E2E, POM

⭐ Star this repo if you are learning Playwright E2E!

 
