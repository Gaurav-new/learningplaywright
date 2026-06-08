import {test, expect} from '@playwright/test';

test("Verify OrangeHRM login functionality", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
    await page.getByRole("textbox", { name : "Username"}).fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@class = 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    await expect(page.getByRole("heading", { name : "Dashboard"})).toBeVisible();
    
    
});