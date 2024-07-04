import { test, Page } from '@playwright/test';
import { Cart_Page } from '../src/cartPage';
import { Inventory_Products } from '../src/productsPage';
import { Login_Page } from '../src/loginPage';

let cartPage: Cart_Page;
let loginPage: Login_Page;
let productsPage: Inventory_Products;
let page: Page;

test.describe('swag labs e2e tests', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        cartPage = new Cart_Page(page);
        loginPage = new Login_Page(page);
        productsPage = new Inventory_Products(page);
        await loginPage.launchURL();
        await loginPage.verifyLoginPage();
        await productsPage.clickAddToCartButton();
        await cartPage.clickCartButton();
    });


    test('Verify Your Cart Heading', async ({ }) => {
        await cartPage.verifyYourCartHeading();
    })

    test('Verify Quantity Heading', async ({ }) => {
        await cartPage.verfiyQuantityHeading();
    })

    test('Verify Description Heading', async ({ }) => {
        await cartPage.verifyDescriptionHeading();
    })

    test('Verfiy Number of the Iteams Added to The Cart', async ({ }) => {
        await cartPage.countProducts();
    })

    test('Verify Iteams Heading', async ({ }) => {
        await cartPage.verifyIteamsHeading();
        await cartPage.clickRemoveButton();
    })

    test('Verify the Countinue Shopping Button', async ({ }) => {
        await cartPage.verfiyCountinueButtonShopping();
    })

    test('Verify the Checkout Button', async ({ }) => {
        await cartPage.verfiyChckOutButton();
    })

    test('Verify the Cart Number Visible On the Cart Icon', async ({ }) => {
        await cartPage.verifyCartNumberCount();
    })

    test('Click Continue Shopping Button', async ({ }) => {
        await cartPage.clickContinueShoppingButton();
        await cartPage.clickCartButton();
    })













})



