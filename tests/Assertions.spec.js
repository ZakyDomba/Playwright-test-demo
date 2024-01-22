const {test, expect}=require('@playwright/test')
const { hasUncaughtExceptionCaptureCallback } = require('process')

test('AssertionsTest',async ({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    //1. expect(page).toHaveURL()       Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2. expect(page).toHaveTitle()     Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3. expect(locator).toBeVisible()       element is Visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4. expect(locator).toBeEnabled()       Control is enable
    const SearchBox=await page.locator('#small-searchterms')
    await expect(SearchBox).toBeEnabled()

    //5. expect(locator).toBeChecked()       Radio/Checkbox is checked

    //radio button
    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //check box
    const newsletterCheckBox=await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    //6. expect(locator).toHaveAttribute()   Element has attribute
    const RegButton=await page.locator('#register-button')
    await expect(RegButton).toHaveAttribute('type','submit')

    //7. expect(locator).toHaveText()        Element match text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //8. expect(locator).toContaintText()    Element contain text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')

    //9. expect(locator).toHaveValue()       Input has a value
    const FirstnameInput=await page.locator ('#FirstName')
    await FirstnameInput.fill ('Muzaky');
    await expect(FirstnameInput).toHaveValue('Muzaky')

    //9(2) Expect(locator).toHaveValue()     Input has a value
    const EmailInput=await page.locator ('#Email')
    await EmailInput.fill ('zakykece@gmail.com');
    await expect(EmailInput).toHaveValue('zakykece@gmail.com')

    //10. expect(locator).tohaveCount()      List of element has given length
    const OptionDate=await page.locator ('select[name="DateOfBirthDay"] option')
    await expect(OptionDate).toHaveCount(32)

    //10.1 expect(locator).tohaveCount()      List of element has given length
    const OptionMounth=await page.locator ('select[name="DateOfBirthMonth"] option')
    await expect(OptionMounth).toHaveCount(13)

    //10.2 expect(locator).tohaveCount()      List of element has given length
    const OptionYear=await page.locator ('select[name="DateOfBirthYear"] option')
    await expect(OptionYear).toHaveCount(112)

    /*10.3 expect(locator).tohaveCount()      List of element has given length (example negative case)
    const OptionYear=await page.locator ('select[name="DateOfBirthYear"] option')
    await expect(OptionYear).not.toHaveCount(115)*/

    



})