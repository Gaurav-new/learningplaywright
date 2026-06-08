import {test, expect} from '@playwright/test';

test (" Verify logout functionality", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByRole("textbox", {name : "Username"}).fill("tomsmith");
    await page.getByRole("textbox", {name : "Password"}).fill("SuperSecretPassword!");
    await page.locator("//i[@class = 'fa fa-2x fa-sign-in']").click();
    await expect(page.locator("//div[@id='flash-messages']")).toContainText("You logged into a secure area!");
    await page.locator("//i[@class = 'icon-2x icon-signout']").click();
    await expect(page.locator("//div[@id='flash']")).toContainText("You logged out of the secure area!");


});