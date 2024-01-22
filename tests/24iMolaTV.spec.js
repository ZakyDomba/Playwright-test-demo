//1. Homepage MolaTV 24i croll from upper to buttom
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://mol.staging.24imedia.com/home')

  //2. Arrow Slider function any section on MolaTV 24i homepage
  await page.goto('https://mol.staging.24imedia.com/home')
  await page.getByTestId('single_row_2_2_prev_slide_button').click()
  await page.getByTestId('single_row_3_3_prev_slide_button').click()
  await page.getByTestId('single_row_3_3_next_slide_button').click()
  await page.getByTestId('single_row_2_2_next_slide_button').click()
  await page.getByTestId('single_row_2_2_next_slide_button').click()
  await page.getByTestId('single_row_1_1_next_slide_button').click()
  await page.getByTestId('single_row_1_1_next_slide_button').click()
  await page.getByTestId('single_row_4_4_next_slide_button').click()
  await page.getByTestId('single_row_5_5_next_slide_button').click()
  await page.getByTestId('single_row_5_5_next_slide_button').click()
  await page.getByTestId('single_row_5_5_next_slide_button').click()
  await page.getByTestId('single_row_6_6_next_slide_button').click()
  await page.getByTestId('single_row_6_6_next_slide_button').click()
  await page.getByTestId('single_row_6_6_prev_slide_button').dblclick();
  await page.getByTestId('single_row_5_5_prev_slide_button').dblclick();
  await page.getByTestId('single_row_6_6_next_slide_button').click({
    clickCount: 3
  });
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_prev_slide_button').click();
  await page.getByTestId('single_row_8_8_prev_slide_button').click();
  await page.getByTestId('single_row_8_8_prev_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_asset_15').locator('img').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_prev_slide_button').click();
  await page.getByTestId('single_row_9_9_prev_slide_button').click();
  await page.getByTestId('single_row_9_9_prev_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_prev_slide_button').click();
  await page.getByTestId('single_row_10_10_prev_slide_button').click();
  await page.getByTestId('single_row_10_10_prev_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_prev_slide_button').click();
  await page.getByTestId('single_row_11_11_prev_slide_button').click();
  await page.getByTestId('single_row_11_11_prev_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_prev_slide_button').click();
  await page.getByTestId('single_row_12_12_prev_slide_button').click();
  await page.getByTestId('single_row_12_12_prev_slide_button').click();
  await page.getByTestId('single_row_13_13_next_slide_button').click();
  await page.getByTestId('single_row_13_13_prev_slide_button').click();


  //3. Click 'Play' and 'Info' button homepage main banner
  await page.getByTestId('hero_banner_1_play_button').click();
  await page.getByText('Go back').click();
  await page.getByText('Info').click();



  //4. Click thumbnails banner on homepage any section: baris 78
  await page.getByTestId('single_row_1_asset_1').locator('img').click();
  await page.getByTestId('single_row_1_asset_2').locator('img').click();
  await page.getByTestId('single_row_1_asset_3').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_1_asset_4').locator('img').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_asset_5').locator('img').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_asset_15').locator('img').click();
  await page.getByTestId('single_row_2_asset_1').locator('img').click();
  await page.getByTestId('single_row_2_asset_4').locator('img').click();
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_3_asset_1').locator('img').click();
  await page.getByTestId('single_row_3_asset_6').locator('img').click();
  await page.getByTestId('single_row_3_3_next_slide_button').click();
  await page.getByTestId('single_row_3_asset_12').locator('img').click();
  await page.getByTestId('single_row_4_asset_1').locator('img').click();
  await page.getByTestId('single_row_4_asset_4').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_asset_14').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_5_asset_1').locator('img').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_6_asset_1').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_7_asset_1').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_asset_15').locator('img').click();
  await page.getByTestId('single_row_8_asset_1').locator('img').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_9_asset_1').locator('img').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_10_asset_1').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_asset_15').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_11_asset_1').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_asset_15').locator('div').filter({ hasText: '' }).nth(1).click();
  await page.getByText('Go back').click();
  await page.getByTestId('single_row_12_asset_1').locator('img').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_asset_15').locator('img').click();
  await page.getByTestId('single_row_13_asset_1').locator('img').click();
  await page.getByTestId('single_row_13_13_next_slide_button').click();
  await page.getByTestId('single_row_13_asset_6').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/page/tggmTIoBy1J6Nf--uY0J');
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.getByTestId('single_row_1_1_next_slide_button').click();
  await page.locator('.swiper-slide > div > div > div > div > div > div:nth-child(2)').first().click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_2_next_slide_button').click();
  await page.getByTestId('single_row_2_2_container').getByRole('img').click();
  await page.getByTestId('single_row_3_asset_6').locator('img').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_container').getByRole('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_5_5_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_4_4_next_slide_button').click();
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_6_next_slide_button').click();
  await page.getByTestId('single_row_6_6_container').getByText('Show all').nth(1).click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_next_slide_button').click();
  await page.getByTestId('single_row_7_7_container').getByText('Show all').nth(1).click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.getByTestId('single_row_8_8_next_slide_button').click();
  await page.locator('.jsx-762766630 > .swiper-container > .swiper-wrapper > div:nth-child(16) > div > div > div > div > div > div:nth-child(2)').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_next_slide_button').click();
  await page.getByTestId('single_row_9_9_container').getByText('Show all').nth(1).click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_next_slide_button').click();
  await page.getByTestId('single_row_10_10_container').getByText('Show all').nth(1).click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_next_slide_button').click();
  await page.getByTestId('single_row_11_11_container').getByRole('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.getByTestId('single_row_12_12_next_slide_button').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_13_13_next_slide_button').click();
  await page.getByTestId('single_row_12_12_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_11_11_container').getByText('Show all').first().click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_10_10_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_9_9_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_8_8_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_7_7_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_6_6_container').getByText('Show all').first().click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_5_5_container').getByText('Show all').first().click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('single_row_2_2_container').getByText('Show all').first().click();
  await page.getByTestId('single_row_1_1_container').getByText('Show all').first().click();


  //5. Function button Home, ViaPlay, Sports, Setting, Search Function
  await page.getByText('Viaplay').click();
  await page.getByText('Home').click();
  await page.getByTestId('topmenu-item-Sports').getByText('Sports').click();
  await page.getByText('Settings').click();
  await page.getByTestId('topmenu-item-').locator('img').click();
  await page.getByTestId('web-modal-test-id').locator('img').click();
  await page.getByTestId('topmenu-item-').locator('img').click();
  await page.getByTestId('search_input').fill('king');
  await page.getByTestId('search_input').press('Enter');
  await page.locator('.ReactModal__Content > div:nth-child(2) > div > div > div > .css-1dbjc4n > div > span > img').click();


  //6. Click Social Media button on buttom homepage
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '' }).click();
  const page4 = await page4Promise;
  await page.getByText('FAQ').click();
  await page.getByTestId('faq_button').click();
  await page.getByText('Terms and Conditions').click();
  await page.getByText('About Mola').click();
  await page.getByText('Privacy Policy').click();
 

  //7. Any function on Detail page (Movies) mulai dari baris 32
  await page.getByTestId('single_row_1_asset_3').locator('img').click();
  await page.getByText('More like this').click();
  await page.getByText('Details').click();
  await page.getByText('More like this').click();
  await page.getByText('Trailers & extras').click();
  await page.getByTestId('packshot_0_action_button_0').getByText('').click();
  await page.getByText('Go back').click();
  await page.getByTestId('play_button').locator('div').nth(2).click();
  await page.getByText('Go back').click();
  await page.getByText('More like this').click();
  await page.getByTestId('undefined_asset_2').locator('img').click();
  await page.getByText('Details').click();
  await page.getByTestId('single_row_asset_2_title').click();
  await page.getByText('Details').click();


  //8. Any function on Detail page (Series) mulai dari baris 47
  await page.getByTestId('single_row_2_asset_1').locator('img').click();
  await page.getByTestId('play_button').click();
  await page.getByText('Go back').click();
  await page.getByTestId('episode_1_tile').locator('div').filter({ hasText: '' }).nth(1).click();
  await page.getByText('Go back').click();
  await page.getByText('').click();
  await page.getByTestId('season_picker').click();
  await page.getByText('Trailers & extras').click();
  await page.getByTestId('undefined_asset_1').locator('div').filter({ hasText: '' }).nth(1).click();
  await page.getByTestId('primary-button').click();
  await page.getByText('More like this').click();
  await page.getByTestId('undefined_asset_1').locator('img').click();
  await page.getByText('Details').click();
  await page.getByTestId('single_row_asset_2_title').click();
  await page.getByTestId('episode_2_tile').locator('div').filter({ hasText: '' }).nth(1).click();
  await page.getByText('Go back').click();
  await page.getByTestId('episode_8_tile').getByText('').click();
  await page.getByText('Go back').click();


  //9. Function of setting feature
  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByText('Settings').click();
  await page.getByTestId('technical_info_button').locator('img').click();
  await page.getByTestId('topmenu-item-Settings').getByText('Settings').click();
  await page.getByTestId('language_button').locator('img').click();
  await page.getByText('').click();
  await page.getByText('Indonesian').click();
  await page.getByText('Kembali ke Settings').click();
  await page.getByText('FAQ').click();
  await page.getByText('Syarat dan Ketentuan').click();
  await page.getByText('Tentang Mola').click();
  await page.getByText('Kebijakan Privasi').click();
  await page.getByTestId('24i_logo').locator('img').click();
  await page.getByTestId('single_row_13_asset_5').locator('img').click();
  await page.goto('https://mol.staging.24imedia.com/home');
  await page.getByTestId('hero_banner_1_info_button').locator('div').nth(2).click();
  await page.getByText('').click();
  await page.getByText('Season 2').click();
  await page.getByText('').click();
  await page.getByTestId('episode_picker_seasons_dropdown_button_2').click();
  await page.getByText('Trailer & ekstra').click();
  await page.getByText('Lebih seperti ini').click();
  await page.getByText('Detail').click();
});


  //10. Arrow function on section Sports Movies and Show


  //11. Arrow function on section European Hidden Gem


  //12. Arrow function on section Music and Lifestyle


  //13. Arrow function on section Mola Originals


  //14. Arrow function on section Genres

});