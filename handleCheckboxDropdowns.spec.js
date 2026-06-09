/*
Assignment:
 
1. Goto https://nichethyself.com/tourism/customised.html
2. Enter Fullname and enter email address
3. Flights with snacks provided - select No
4. Drop down select "Home Stay".
5. Checkbox - select England
6. Verify that Switzerland checkbox is disabled.
7. Click on Submit button
*/

import { test, expect } from "@playwright/test";

test("Handk=ling checkboxes,Radio button, dropdowns", async({ page}) => {
    await page.goto("https://nichethyself.com/tourism/customised.html");
    await page.getByRole("textbox", { name : "Full name"}).fill("Gaurav");
    await page.getByRole("textbox", { name : "Email address"}).fill("gaurav.pawar1708@gmail.com");
    await page.getByRole("radio", { name : "Yes"}).click(); // radio button
    await page.getByRole("combobox").selectOption({ value : "Home Stay"}); // select drop down
    await expect(page.getByRole("checkbox", {name : "Switzerland"})).toBeDisabled(); // verify switzerland checkbox is disabled
    await page.getByRole("button", {name : "Submit"}).click(); // click on submit button
});