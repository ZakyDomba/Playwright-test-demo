const {test, expect}=require('@playwright/test')

test ("Select Multiple Dropdown", async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com')

    //select multiple options from multiple select dropdown
    //await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])

    //Assertion on Check Multiple Select Dropdown
    // 1. check number of options in dropdown
    //const options=await page.locator('#colors option')
    //await expect(options).toHaveCount(5);

    // 2. check number of options in dropdown using JS array
    // const options=await page.$$('#colors option')
    //console.log("Number of options:",options.length)  -- baris ini ga dipake pun bisa jalan
    // await expect(options.length).toBe(5);

    // 3. check presence of value in the dropdown
    // Positive case
    //const content=await page.locator('#colors').textContent()
    //await expect(content.includes('Blue')).toBeTruthy();
    
    // Negative case
    const content=await page.locator('#colors').textContent()
    await expect(content.includes('Black')).toBeFalsy();


    await page.waitForTimeout(5000)

})