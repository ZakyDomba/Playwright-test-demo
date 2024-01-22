import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mola.tv/');
  await page.getByTestId('carousel-playlists-vd99785910').locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('li').filter({ hasText: 'SAFELuke Wright (Jason Statham), a former elite NYC detective, is thrust into a ' }).locator('div').nth(4).click();
  await page.locator('li').filter({ hasText: 'ABDUCTIONTaylor Lautner explodes on-screen as a young man whose secret past is s' }).locator('div').nth(4).click();
  await page.getByRole('button').nth(1).click();
  await page.locator('li').filter({ hasText: '22 JUMP STREETAfter making their way through high school (twice), big changes ar' }).locator('div').nth(4).click();
  await page.locator('li').filter({ hasText: 'SAFELuke Wright (Jason Statham), a former elite NYC detective, is thrust into a ' }).locator('div').nth(4).click();
});