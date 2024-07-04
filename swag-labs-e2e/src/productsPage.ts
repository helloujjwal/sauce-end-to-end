import { Page, expect } from '@playwright/test'
import { products } from './productsPage.locator';



export class Inventory_Products {
    private page: Page;
    constructor(page: Page) {
        this.page = page;

    }

    async validateProductsHeading() {
        await this.page.waitForLoadState();
        await expect(this.page.locator(products.products_heading_title)).toHaveText('Products')
    }

    async verifyCartButton() {
        await expect(this.page.locator(products.cart_button)).toBeVisible();
    }

    async clickCartButton() {
        await this.page.locator(products.cart_button).click();
    }

    async verifyFilterButton() {
        await expect(this.page.locator(products.filter_button)).toBeVisible();
    }

    async verifyIteamsInInventory() {
        await expect(this.page.locator(products.inventory_iteams)).toBeVisible
        const inventoryIteams = await this.page.locator(products.inventory_iteams).count();

        for (let i = 0; i < inventoryIteams; i++) {
            await expect(this.page.locator(products.iteams_images).nth(i)).toBeVisible();
            await expect(this.page.locator(products.iteams_heading).nth(i)).toBeVisible();
            await expect(this.page.locator(products.iteams_description).nth(i)).toBeVisible();
            await expect(this.page.locator(products.iteams_prices).nth(i)).toBeVisible();
            await expect(this.page.locator(products.iteams_addToCart).nth(i)).toBeVisible();
        }
    }

    async clickAddToCartButton() {
        await (this.page.locator(products.iteams_addToCart).nth(0)).click();
        await (this.page.locator(products.iteams_addToCart).nth(1)).click();
        await (this.page.locator(products.iteams_addToCart).nth(2)).click()
    }

    async verfiyRemoveButton() {
        await expect(this.page.locator(products.iteams_remove).nth(1)).toBeVisible();
    }

    async clickRemoveButton() {
        await this.page.locator(products.iteams_remove).nth(1).click();
    }



}