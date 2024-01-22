const {test, expect} =require('@playwright/test')

test("SoftAssertions", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    //hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await expect(page.locator('.navbar-brand')).toBeVisible();
    

    /*//soft assertions
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
*/

})

/* YANG DIMAKSUD SOFT ASSERTIONS YAITU SOFT ASSERTIONS BERFUNGSI UNTUK MENUNJUKKAN BARIS YANG SALAH,
    JIKA ADA 3 BARIS DENGAN 1 BARIS YANG SALAH, MAKA BARIS LAIN YANG SUKSES AKAN TAMPIL.
   YANG DIMAKSUD HARD ASSERTIONS AITU HARD ASSERTIONS BERFUNGSI UNTUK MENUNJUKKAN BARIS YANG SALAH,
    JIKA ADA 3 BARIS DENGAN 1 BARIS YANG SALAH, MAKA BARIS LAIN TIDAK AKAN TAMPIL.
*/

