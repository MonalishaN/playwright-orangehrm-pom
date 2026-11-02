# 🎭 Playwright OrangeHRM POM - Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![POM Design](https://img.shields.io/badge/Design-POM-blue?style=for-the-badge)]()

> A professional end-to-end automation framework built with **Playwright + TypeScript + Page Object Model (POM)**. Covers OrangeHRM UI, E-commerce (Flipkart) and API testing.

**GitHub:** https://github.com/MonalishaN/playwright-orangehrm-pom

### 📁 Project Structure - Senior SDET Level
playwright-orangehrm-pom/
├── pages/                      # Page Object Model
│   ├── LoginPage.ts            # OrangeHRM Login Page
│   ├── PIMPage.ts              # PIM / Add Employee Page
│   └── flipkart-search.page.ts # E-commerce Page Object
│
├── tests/
│   ├── ui/                     # OrangeHRM UI Tests
│   │   ├── orangehrm-login.spec.ts
│   │   └── day4-add-employee.spec.ts
│   │
│   ├── api/                    # API Automation
│   │   ├── api-product.spec.ts
│   │   └── day5-extra-tests.spec.ts
│   │
│   └── ecommerce/              # E-commerce UI Tests
│       ├── flipkart-search01.spec.ts
│       └── flipkart-search02.spec.ts
│
├── utils/                      # Test Data & Helpers
├── playwright.config.ts
├── package.json
└── .gitignore

### 🚀 Tech Stack

- **Tool:** Playwright
- **Language:** TypeScript
- **Design Pattern:** Page Object Model (POM)
- **Test Types:** UI, API, E-commerce
- **Version Control:** Git & GitHub

### ✅ Features Covered

**Day 1-2:** Playwright Setup & First Tests
**Day 3:** OrangeHRM Login Automation
**Day 4:** PIM Module - Add Employee with POM
**Day 5:** Project Refactoring & API Testing
- Organized into `api / ui / ecommerce`
- Clean GitHub with proper `.gitignore`
- Kept all test cases without deletion

### ⚙️ How to Run Tests

```bash
# Install dependencies
npm install
npx playwright install

# Run all tests
npx playwright test

# Run only OrangeHRM UI tests
npx playwright test tests/ui --headed

# Run only API tests
npx playwright test tests/api

# Run only E-commerce tests
npx playwright test tests/ecommerce

# View Report
npx playwright show-report

📊 Best Practices Followed
✅ POM Design Pattern
✅ Separation of Pages and Tests
✅ Organized folders: api, ui, ecommerce
✅ Clean .gitignore - No node_modules, test-results, .playwright-mcp
✅ Reusable Page Objects
✅ Interview-ready structure

👩‍💻 Author Monalisha N 
QA Automation Engineer | Learning Playwright + TypeScript
GitHub: @MonalishaN
⭐ If you like this repo, please give it a star!


 
