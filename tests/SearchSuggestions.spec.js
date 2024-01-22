const {test, expect}=require('@playwright/test')

test('Search Suggestion', async({page})=>{
    await page.goto('https://www.redbus.in/#backHome')

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromSuggestOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromSuggestOptions)
    {
        const value=await option.textContent()
        //console.log(value);
        if(value.includes('Azadpur'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000);


})