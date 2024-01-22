const {test, expect}=require ('@playwright/test')

test('frames', async ({page}) =>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Untuk melihat total frames yang ada
    const allframes=await page.frames()
    console.log("Number of frames", allframes.lenghth)

    /*
    //Approach 1: using name or url
    //const var=await page.frame('name'); // mengambil frame dengan nama frame
    //const var=await page.frame({url:'isi url'}); // jika nama tidak ada, maka akan mengambil url pada frame
    const frame1=await page.frame ({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']",'Hallo');
    */

    //Approach 2: using frame locator
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputbox.fill("Hallo");

    

    await page.waitForTimeout(5000)

})