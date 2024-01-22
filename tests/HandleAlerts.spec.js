/*
const {test, expect}=require('@playwright/test')

test('Handle Success Alert', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click('//button[normalize-space()="Alert"]')
    await page.waitForTimeout(10000)

})
*/

/*
const {test, expect}=require('@playwright/test')

test('Handle Dialog with OK and Cancel button Alert', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Dialog window handler (OK and Cancel)
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
       // await dialog.accept() // >> code untuk Close by using OK button
        await dialog.dismiss() // >> code untuk Close by using Cancel button
    })

    await page.click('//button[normalize-space()="Confirm Box"]')
    await expect(page.locator(' //p[@id="demo"]')).toHaveText('You pressed Cancel!')

    await page.waitForTimeout(15000)

})
*/

const {test, expect}=require('@playwright/test')

test('Handle Dialog Prompt Allert with Default or Fill the Field', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Dialog window handler (OK and Cancel)
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        await (dialog.defaultValue()).toContain('Harry Potter') // >> code untuk default value
        await dialog.accept('John') // >> code untuk Close by using manual fill the field
    })

    await page.click('//button[normalize-space()="Prompt"]')
    await expect(page.locator(' //p[@id="demo"]')).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(10000)

})