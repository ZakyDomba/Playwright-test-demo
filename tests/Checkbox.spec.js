const {test, expect}=require('@playwright/test')

test("Handle Checkbox", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Single checkbox
    await expect(page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();

    
    // Multiple checkbox harus ada looping
    const checkboxLocators=[
         "//input[@id='sunday' and @type='checkbox']",
         "//input[@id='tuesday' and @type='checkbox']",
         "//input[@id='wednesday' and @type='checkbox']"
        ];

    for (const locator of checkboxLocators)
    {
        await page.locator(locator).check();
    }
    
    await page.waitForTimeout(5000)

    // Multiple uncheckbox harus ada looping seperti checkbox
    for (const locator of checkboxLocators)
    {
        if (await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000)

})