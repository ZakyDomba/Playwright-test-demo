const {test, expect} = require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto('https://mola.tv/');

    const pageTitle=page.title();
    console.log('page title is:', pageTitle);

    await expect(page).toHaveTitle('Mola');

    const pageURL=page.url();
    console.log('page URL is', pageURL);

    await expect(page).toHaveURL('https://mola.tv/');

    await page.close();
} )