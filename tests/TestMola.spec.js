
const {test, expect} = require('@playwright/test');

test('UI Link Mola Profile Pages', async ({ page }) => {

    await page.goto('https://mola.tv/accounts/profile');
  
    // Mola, Facebook, Instagram, Playstore, App Store Logo on Mola Profile Pages
    const images = await page.$$('[class="mWx3v"], [class="_3-352"],[class="_3aiyx _25ELL"], [class="_3aiyx _2IHPK"], [class="_3M8Nd"], [class="_3M8Nd"]');
  
    // Button Login & Button seamles login google, facebook, apple on Mola Profile Pages
    const button = await page.$$('[class="_3C-S2 nA5CF f2bIi"], [class="_2fSFb"]');
  
    // Find a text elements that contain links and not contain links on Mola's profile page
    const elements = await page.$$('[name="Mola Originals"], [name="Movies"], [name="Kids"], [name="Promo"], [name="Subscription Plan"], [name="FAQ"], [name="System Info"], [name="Privacy"], [name="Term and Conditions"], [name="Forgot the password ?"], [name="or login with"], [name="Subscription Plan"], [name="Settings"], [name="Email"], [name="Password"], [name="Register"], [name="Login"], [name="© 2023 Mola"], [name="Search"], [name="Home"], [name="Live"], [name="Redeem Voucher"], [name="Online"]');
  
  });


  /*
  const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://mola.tv/');
  await page.locator('li:nth-child(2) > div > .css-1bw456k > .css-rh1xgi > .css-tqv6h2 > .imageBorder').first().click();
  await page.getByTestId('side-menu-home').click();
  await page.getByTestId('top-bar-sport-menu').click();
  await page.getByTestId('carousel-videos-vd00209091').locator('div').nth(2).click();
  await page.getByText('SearchHomeLiveSubscription PlanRedeem Voucher').click();

  // ---------------------
  await context.close();
  await browser.close();
})();



const {test, expect} = require('@playwright/test');
test ('Test Login MolaTV', async ({page}) =>{
  await page.goto ('https://mola.tv/accounts/profile');

  //input email feield on login page
  const emailInput=await page.locator('#identity')
  await emailInput.fill('zaky9650@gmail.com');
  await expect(emailInput).toHaveValue('zaky9650@gmail.com')

  //input password field on login page
  const passwordInput=await page.locator('#password')
  await passwordInput.fill('Muzaky95');
  await expect(passwordInput).toHaveValue('Muzaky95')


})
*/

