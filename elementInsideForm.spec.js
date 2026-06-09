import { test, expect } from "@playwright/test";

test("Headings - basic getByRole functionality", async ({ page }) => {
  await page.goto("https://nichethyself.com/tourism/");
  await page.getByRole("textbox", { name: "Username" }).fill("stc123"); //Find the element
  await page.getByRole("textbox", { name: "Password" }).fill("12345"); //Find the element
  const form = page.locator('//form[@name = "loginform"]');
  await form.getByRole("button", {name : "Submit"}).click();

});