const { test, expect } = require('@playwright/test');

test('handle input box', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await page.locator("//input[@id='gender-male']").check();
  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
  await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();

  await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();

  await page.waitForTimeout(5000)

})

//Test Berhasil