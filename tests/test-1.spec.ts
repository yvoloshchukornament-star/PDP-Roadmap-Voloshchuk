import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crocsukr.com.ua/');
  await page.getByRole('textbox', { name: 'Пошук товарів' }).click();
  await page.getByRole('textbox', { name: 'Пошук товарів' }).fill('Аксесуари');
  await page.getByRole('img').first().click();
  await page.getByRole('link', { name: 'Аксесуари для Крокс Jibbitz №10 75  грн' }).click();
  await expect(page).toHaveURL('https://crocsukr.com.ua/sale/tproduct/310671123-456752721651-aksesuari-dlya-kroks-jibbitz-10');
  const productName = page.locator('.t-store__prod-popup__name.js-store-prod-name');
  await expect(productName).toContainText('Jibbitz №10');
  await page.locator('span').nth(5).click();
  await page.locator('span').nth(5).click();
  await page.locator('span').nth(4).click();
  await page.getByRole('link', { name: 'В КОРЗИНУ' }).click();
  await page.locator('.t706__product-plus > img').click();
  await page.locator('.t706__product-plus > img').click();
  await page.locator('.t706__product-minus > img').click();
  await page.locator('.t706__product-minus > img').click();
  await page.locator('.t706__product-minus > img').click();
  await page.getByText('Ваше замовлення Аксесуари для Крокс Jibbitz №10150грн. Проміжна сума: 150').click();
  await page.locator('.t706__product-del > img').click();
});