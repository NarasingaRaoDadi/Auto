import { test, expect } from '@playwright/test';
import path from 'path';

test('site has title', async ({ page }) => {
    
   await page.goto('https://playwright.dev/');
   
   await expect(page).toHaveTitle(/Playwright/);

   const cmenu = page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a');
   await cmenu.click({button:'right'});

   await  expect(cmenu).toBeVisible();
   //await page.screenshot({ path: 'screenshot.png' }); //running from git actions so commented
   

});


