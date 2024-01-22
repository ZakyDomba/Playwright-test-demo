const {test, expect} = require('@playwright/test');

test('LocatingMultipleElements', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    /*const links = await page.$$('a');

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }
    */
   const Products = await page.$$("//div[@id='tbodyid']//div//h4/a")

   for (const Product of Products) {
    const ProductName = await Product.textContent()
    console.log('ProductName', ProductName)
   }
})