import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crocsukr.com.ua/?tfc_query%5B305224017%5D=%D0%A1%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D1%96&tfc_div=:::&utm_source=google&utm_medium=cpc&utm_campaign=19009618301&utm_term=&utm_content=&utm_position=&utm_matchtype=&utm_placement=&utm_network=x&gad_source=1&gad_campaignid=19002629259&gbraid=0AAAAABTc-sW2SXi2o6Kofm4ctmq6jMdSB&gclid=Cj0KCQjwmYzIBhC6ARIsAHA3IkT1GBZnv11oPZfIOJyYx5lmGaoaRJtK2ayOqCohMgDhFXhRAJbb36AaAs35EALw_wcB');
 
  await page.getByRole('textbox', { name: 'Пошук товарів' }).click();
  await page.getByRole('textbox', { name: 'Пошук товарів' }).fill('Жіночі');
  await page.getByRole('img').first().click();
  await page.getByRole('link', { name: 'Classic Crush Sulphur' }).click();
  await page.locator('span').nth(5).click();
  await page.locator('span').nth(5).click();
  await page.getByRole('link', { name: 'В КОРЗИНУ' }).click();
  await page.locator('.t706__product-minus > img').click();
  await page.locator('.t706__product-minus > img').click();
  await page.locator('.t706__product-plus > img').click();
  await page.locator('.t706__product-del > img').click();
  await page.getByRole('button', { name: 'Close cart' }).click();
});

 (page.locator('.js-store-prod-name.js-product-name')).toHaveText('Stomp Clog White Жіночі Сабо Крокс арт.209347')await expect;