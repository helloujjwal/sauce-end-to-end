import { expect, Page } from "playwright/test";
import { cart } from './cartPage.locator'
import { products } from "./productsPage.locator";

export class Cart_Page {
    private page: Page;
    constructor(page: Page) {
        this.page = page;

    }

    async clickCartButton() {
        await (this.page.locator(products.cart_button)).click();
    }

    async verifyYourCartHeading() {
        await expect(this.page.locator(cart.your_cart_heading)).toBeVisible();
    }

    async verfiyQuantityHeading() {
        await expect(this.page.locator(cart.quantiy_heading)).toBeVisible();
    }

    async verifyDescriptionHeading() {
        await expect(this.page.locator(cart.description)).toBeVisible();
    }

    async countProducts() {
        await expect(this.page.locator(cart.iteams_count).nth(0)).toBeVisible();
        const checkoutIteams = await (this.page.locator(cart.iteams_count)).count();

        for (let i = 0; i < checkoutIteams; i++) {
            await expect(this.page.locator(cart.iteams_count).nth(i)).toHaveCount(1)
            await expect(this.page.locator(cart.iteam_remove_button).nth(i)).toBeVisible();
        }

    }

    async verifyIteamsHeading() {
        await (this.page.locator(cart.iteam_heading)).nth(0).getByText("Sauce Labs Bike Light");
        await (this.page.locator(cart.iteam_heading)).nth(1).getByText("Sauce Labs Backpack")
    }

    async clickRemoveButton() {
        await (this.page.locator(cart.iteam_remove_button).nth(2)).click();
    }

    async verfiyCountinueButtonShopping() {
        await expect(this.page.locator(cart.countinue_shopping_button)).toBeVisible();
    }

    async verfiyChckOutButton() {
        await expect(this.page.locator(cart.checkout_button)).toBeVisible();
    }

    async verifyCartNumberCount() {
        await expect(this.page.locator(cart.checkoutIteam_number)).toBeVisible();
        await expect(this.page.locator(cart.checkoutIteam_number)).toHaveText('2');
    }

    async clickContinueShoppingButton() {
        await this.page.locator(cart.countinue_shopping_button).click();
    }
















}