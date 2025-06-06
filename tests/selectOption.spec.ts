import { test, expect } from '@playwright/test';
import path from 'path';
import { listenerCount } from 'process';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.waitForURL(/.*test.*/);
  await expect(page).toHaveURL(/.*testing.*/);

  const listValue = page.locator('//*[@id="filters"]/form[1]/div/select')
  
  for (let i = 0; i < 5; i++) {
  await listValue.selectOption({index: i});
  //takes screen shots for each list item select for visible validation
  //await page.screenshot({path: 'li' + i + '.png'});
  
  //await listValue.selectOption({index: 2});
  //await page.screenshot({path: 'li2.png'});
  }
  //const value = await page.$eval('//*[@id="filters"]/form[1]/div/select',el => el.nodeValue);
  //console.log(value);*/
});