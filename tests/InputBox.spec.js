/*const { test, expect } = require('@playwright/test');

test('handle input box', async ({ page }) => {

  await page.goto('https://www.orami.co.id/magazine');

  // element css //input@id=['placeholder']
  await expect(await page.locator('//input[@id="search-field"]')).toBeVisible();
  await expect(await page.locator('//input[@id="search-field"]')).toBeEmpty();
  await expect(await page.locator('//input[@id="search-field"]')).toBeEditable();
  await expect(await page.locator('//input[@id="search-field"]')).toBeEnabled();

  await page.locator('//input[@id="search-field"]').fill('sayang');

  await page.waitForTimeout(30000);

});


const { test, expect } = require('@playwright/test');

test('handle input box', async ({ page }) => {
  const searchField = await page.locator('//input[@id="search-field"]');

  await page.goto('https://www.orami.co.id/shopping/category/kebutuhan-ibu?event=earn_traffic&source=tools-shoppingcategory&action=Click&position=parentingtools-babynamefinder-homepage');

  await expect(searchField).toBeVisible();
  await expect(searchField).toBeEmpty();
  await expect(searchField).toBeEditable();
  await expect(searchField).toBeEnabled();
  await page.click('//input[@id="search-field"]');

  await searchField.fill('susu bayi');

  await page.waitForTimeout(10000);
});


const { test, expect } = require('@playwright/test');

test('handle input box', async ({ page }) => {
  const searchField = await page.locator('//input[@id="search-field"]');
  const searchResults = await page.locator('//class="jsx-1723631023 row  position-inherit px-8"'); // Gantilah dengan selektor yang sesuai

  await page.goto('https://www.orami.co.id/shopping');

  await expect(searchField).toBeVisible();
  await expect(searchField).toBeEmpty();
  await expect(searchField).toBeEditable();
  await expect(searchField).toBeEnabled();

  // Klik input sebelum mengisi nilainya
  await searchField.click();
  await searchField.fill('susu');

  // Tunggu sebentar untuk memastikan hasil pencarian muncul
  await page.waitForTimeout(3000);

  // Klik elemen hasil pencarian pertama (gantilah dengan indeks atau selektor yang sesuai)
  await searchResults.click();

  // Tunggu beberapa saat untuk memberikan waktu pada halaman hasil pencarian untuk dimuat
  await page.waitForTimeout(10000);
});
*/

// Code untuk mencari Result "susu" di web Orami masih belum berhasil


const { test, expect } = require('@playwright/test');

test('handle inputbox', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page.locator("//input[@id='LastName']")).toBeVisible();
  await expect(page.locator("//input[@id='LastName']")).toBeEmpty();
  await expect(page.locator("//input[@id='LastName']")).toBeEditable();
  await expect(page.locator("//input[@id='LastName']")).toBeEnabled();

  await page.locator("//input[@id='LastName']").fill("johny")

  await page.waitForTimeout(5000)

})