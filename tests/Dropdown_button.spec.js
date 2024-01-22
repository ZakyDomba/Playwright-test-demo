const {test, expect}=require('@playwright/test')

test ("Handle Dropdown button", async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Muiltiple ways to select option from dropdown button
   // await page.locator("#country").selectOption({label:'France'})             // cara pertama bisa pake 'label'
   // await page.locator("#country").selectOption('France')                     // cara kedua bisa menggunakan text dengan menghilangkan fungsi 'label' (tidak memakai fungsi 'label')
   // await page.locator("#country").selectOption({value: 'uk'})                // cara ketiga bisa menggunakan value
   // await page.locator("#country").selectOption({index: 2})                   // cara ketiga bisa menggunakan indeks (urutan dropdown)

   // Menyederhanakan syntax
   // await page.selectOption("#country",'uk')                                  // cara sederhana tidak menggunakan page.locator dan menggunakan value
   // await page.selectOption("#country",'United Kingdom')                      // cara sederhana tidak menggunakan page.locator dan menggunakan text
   // await page.selectOption("#country",{index: 2})                            // cara sederhana tidak menggunakan page.locator dan menggunakan index number
   // await page.selectOption("#country",{label: 'United Kingdom' })            // cara sederhana tidak menggunakan page.locator dan menggunakan index number

   //Assertions
   // 1. Check number option in dropdown
   // const option=await page.locator('#country option')
  //  await expect(option).toHaveCount(10)

   // 2. Check number option in dropdown
    const labels=await page.$$('#country option')
     for (const label of labels) {
        const ValueOption=await label.textContent()
        console.log('list of country :', ValueOption)
     
    }


   await page.waitForTimeout(5000)

    
}) 