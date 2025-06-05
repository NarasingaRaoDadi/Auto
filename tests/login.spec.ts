import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('username').fill('student');
  await page.getByLabel('password').fill('password');
  //*[@id="username"]
  //*[@id="password"]
  //*[@id="submit"]
  //*[@id="loop-container"]/div/article/div[1]/h1 
  await page.getByRole('button', {name:'Submit'}).click();
  
  await page.waitForURL(/.*log.*/);
  await expect(page).toHaveURL(/.*practice-test-login.*/);
  await expect(page.getByText('Log out')).toBeVisible();
  
});