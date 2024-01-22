//const {test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    //click on login button  - property
    //await page.locator('id=identity').click()
    await page.click('id=login2')

    //provide username  - CSS
    //await page.locator('#loginusername').fill("zaky")
    await page.fill('#loginusername','zaky')
    //await page.type('#loginusername','zaky')

    //provide password  - CSS
    await page.fill("input[id=loginpassword]",'Muzaky95')

    //Click on login button  - XPath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link precense  - XPath
    const logoutlink= await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();

    await page.close()


})