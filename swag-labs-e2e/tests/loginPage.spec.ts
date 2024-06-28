import { test } from '@playwright/test';
import { Page } from '@playwright/test';
import { Login_Page } from '../src/loginPage';
let loginPage: Login_Page;
let page: Page;


test.describe('swag labs e2e tests', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        loginPage = new Login_Page(page);
        await loginPage.launchURL();
    });

    test('Login Page Field', async ({ page }) => {
        await loginPage.verifyUserNameField();
        await loginPage.verifyPasswordField();
        await loginPage.verifyLoginButton();
    });







});    
