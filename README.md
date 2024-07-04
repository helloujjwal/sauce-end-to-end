# sauce-end-to-end

Description:-

    Swag Labs is basic online store with required login from Sauce Labs. Great for example web UI tests.

End to End testing using:

Playwright https://playwright.dev/
TypeScript https://www.typescriptlang.org/
This tests are purely for Playwright features practice, usage of Page Object Model.

Getting Started

Prerequisites

Install Playwright and browser binaries for Chromium, Firefox and WebKit.

    npm i -D playwright
    You need to have Node.js installed.

Useful Commands

    Run All Tests:
    Open terminal in the project root directory
    Login Page: npx playwright test swag-labs-e2e/tests/loginPage.spec.ts 
    LeftNav: npx playwright test swag-labs-e2e/tests/leftPanel.spec.ts 
    Products Page: npx playwright test swag-labs-e2e/tests/productsPage.spec.ts
    Cart Page: npx playwright test swag-labs-e2e/tests/cartPage.spec.ts



