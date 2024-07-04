import { test } from '@playwright/test';
import { Page } from '@playwright/test';
import { Left_Nav } from '../src/leftPanel';
import { Login_Page } from '../src/loginPage';

let page: Page;
let leftPanel: Left_Nav;
let loginPage: Login_Page;

test.describe('swag labs e2e tests', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        loginPage = new Login_Page(page);
        leftPanel = new Left_Nav(page);
        await loginPage.launchURL();
        await loginPage.verifyLoginPage();
    });

    test('Verify LeftNav Hamburger and Topics', async ({ page }) => {
        await leftPanel.verifyLeftNav();
        await leftPanel.verifyLeftnavTopics();
    });


});

