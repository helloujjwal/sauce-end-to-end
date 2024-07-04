import { expect, Page } from '@playwright/test'
import { leftNav } from './leftPanel.locator'




export class Left_Nav {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async verifyLeftNav() {
        await expect(this.page.locator(leftNav.left_hamburger)).toBeVisible();
        await this.page.locator(leftNav.left_hamburger).click()
        await this.page.locator(leftNav.left_nav_closeButton).click();
        await this.page.waitForLoadState();
    }

    async verifyLeftnavTopics() {
        await this.page.locator(leftNav.left_hamburger).click()
        const leftNavTopics = await this.page.locator(leftNav.left_nav_topics).count()


        for (let i = 0; i < leftNavTopics; i++) {
            await expect(this.page.locator(leftNav.left_nav_topics).nth(i)).toBeVisible();
            if (leftNavTopics === 4) {
                console.log("passed")
            } else {
                console.log("failed")
            }

        }
        await this.page.waitForLoadState();
        console.log(leftNavTopics);

    }

}