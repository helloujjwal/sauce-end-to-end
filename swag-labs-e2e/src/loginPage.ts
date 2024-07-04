import { Page, expect } from "@playwright/test";
import { loginPage } from "./loginPage.locator";



const pageURL = ("https://www.saucedemo.com/")


export class Login_Page {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async launchURL() {
        await this.page.goto(pageURL);
        await this.page.waitForLoadState();
    }

    async verifyLoginPage() {
        await this.page.waitForLoadState();
        await expect(this.page.locator(loginPage.user_name_field)).toBeVisible();
        await this.page.locator(loginPage.user_name_field).fill('standard_user');
        await expect(this.page.locator(loginPage.password_field)).toBeVisible();
        await this.page.locator(loginPage.password_field).fill('secret_sauce');
        await this.page.locator(loginPage.login_button).click();
        await this.page.waitForLoadState();
    }





}




















