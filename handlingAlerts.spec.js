import {test, expect} from '@playwright/test';


test('JS Alert', async ({page}) =>{

    await page.waitForTimeout(10000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialog) =>{
        expect(dialog.message()).toBe("I am a JS Alert");
        expect(dialog.type()).toBe("alert");
        await page.waitForTimeout(5000);
        await dialog.accept();
    });
    await page.getByRole('button', {name : "Click for JS Alert"}).click();
    await page.waitForTimeout(5000);
    expect(await page.locator('//p[text()="You successfully clicked an alert"]')).toContainText("You successfully clicked an alert");

});


test('JS Confirm', async({page}) => {
    await page.waitForTimeout(10000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialog) =>{
        expect(dialog.message()).toBe("I am a JS Confirm");
        expect(dialog.type()).toBe("confirm");
        await page.waitForTimeout(5000);
        await dialog.accept();
    });
    await page.getByRole('button', {name : "Click for JS Confirm"}).click();
    await page.waitForTimeout(5000);
    await expect(page.locator('//p[text()="You clicked: Ok"]')).toContainText("You clicked: Ok");

});


test ('JS Prompt', async({page}) =>{

    await page.waitForTimeout(10000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialog) =>{
        expect(dialog.message()).toBe("I am a JS prompt");
        expect(dialog.type()).toBe("prompt");
        await page.waitForTimeout(5000);
        await dialog.accept("Playwright");
    });
    await page.getByRole('button', {name : "Click for JS Prompt"}).click();
    await page.waitForTimeout(5000);
   // expect(await page.locator('//p[text()="You entered: Playwright"]')).toContainText("You entered: Playwright");
    await expect(page.locator('//p[text()="You entered: Playwright"]')).toBeVisible();


});

