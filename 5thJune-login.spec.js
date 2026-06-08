import {test, expect} from '@playwright/test';

test ("Verify Login functionality and take screenshot", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox", { name : "Username"}).fill("Admin");
    await page.getByRole("textbox", { name : "Password"}).fill("admin123");
    await page.locator("//button[@class = 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    await expect(page).toHaveTitle("OrangeHRM");
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "screenshots/myaccount.png" });

});
