import { test } from '@playwright/test';
import { Page } from '@playwright/test';
import { Inventory_Products } from '../src/productsPage';
import { Login_Page } from '../src/loginPage';

let productsPage: Inventory_Products;
let page: Page;
let loginPage: Login_Page;




test.describe('swag labs e2e tests', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        loginPage = new Login_Page(page);
        productsPage = new Inventory_Products(page);
        await loginPage.launchURL();
        await loginPage.verifyLoginPage();
    });

    test('Product Heading Title', async ({ }) => {
        await productsPage.validateProductsHeading();
    })

    test('Verify Cart Button is Visible', async ({ }) => {
        await productsPage.verifyCartButton();
    })

    test('Verify Filter Button is Visible', async ({ }) => {
        await productsPage.verifyFilterButton();
    })

    test('Verify the Inventory Iteams and Its Details', async ({ }) => {
        await productsPage.verifyIteamsInInventory();
    })

    test('Click on Iteams Add to Cart Button and Remove Button', async ({ }) => {
        await productsPage.clickAddToCartButton();
        await productsPage.verfiyRemoveButton();
        await productsPage.clickRemoveButton();
    })
});
