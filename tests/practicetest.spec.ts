import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  /*
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill('username');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();*/
  const url = 'https://practicesoftwaretesting.com/';

  //navigate to url
  await page.goto(url);  
});

test('testing sort list box', async ({ page }) => {

//const url = 'https://practicesoftwaretesting.com/';
  const listboxSort = page.locator('[data-test=sort]');

  //navigate to url
//  await page.goto(url);  

  //check list box first item empty as default behaviour also checks visiblity
  await expect(listboxSort).not.toBeEmpty();
  await expect(listboxSort).toBeVisible();

  await expect(listboxSort).toContainText('Name (A - Z)Name (Z - A)Price (High - Low)Price (Low - High)');
  
  await listboxSort.selectOption('price,desc');
  await expect(listboxSort).toHaveValue('price,desc');
 
  await listboxSort.selectOption('name,asc');
  await expect(listboxSort).toHaveValue('name,asc');
 
  await listboxSort.selectOption('price,asc');
  await expect(listboxSort).toHaveValue('price,asc');
 
  await listboxSort.selectOption('name,desc');
  await expect(listboxSort).toHaveValue('name,desc');
 
  await listboxSort.selectOption('');
  await expect(listboxSort).toHaveValue('');
  
});

test('testing tabs', async ({ page }) => {

//  const url = 'https://practicesoftwaretesting.com/';
  const navhome = page.locator('[data-test="nav-home"]');
  const navcontact = page.locator('[data-test="nav-contact"]');
  const navcategories = page.locator('[data-test="nav-categories"]');
  const navpowertools = page.locator('[data-test="nav-power-tools"]');
  
  //navigate to url
  //await page.goto(url);
  
  //click all tabs check 
  await navcontact.click();
  await expect(navcontact).toContainText('Contact');
  
  await navcategories.click();
  await expect(navcategories).toContainText('Categories');
 
  await navpowertools.click();
  await expect(navpowertools).toContainText('Power Tools');

  await navhome.click();
  await expect(navhome).toContainText('Home');

});

test('testing contacts page', async ({ page }) => {

  //const url = 'https://practicesoftwaretesting.com/';
  const navcontact = page.locator('[data-test="nav-contact"]');
  const contactPageFillFirstName = page.locator('[data-test=first-name]');
  const contactPageFillLastName = page.locator('[data-test=last-name]');
  const contactPagemessage = page.locator('[data-test=message]');
  
  //navigate to url
  //await page.goto(url);
 
  //click on Contact tab and check text contains as Contacts
  await navcontact.click();
  await expect(navcontact).toContainText('Contact');
  await contactPageFillFirstName.click();
  await expect(contactPageFillFirstName).toBeVisible();
  await contactPageFillFirstName.fill('narsinga');
  await expect(contactPageFillFirstName).toHaveValue('narsinga');
  
  await contactPageFillLastName.click();
  await expect(contactPageFillLastName).toBeVisible();
  await contactPageFillLastName.fill('dadi');
  await expect(contactPageFillLastName).toHaveValue('dadi');
    
  await contactPagemessage.click();
  await expect(contactPagemessage).toBeVisible();
  await contactPagemessage.fill('msg');
  await expect(contactPagemessage).toHaveValue('msg');

   //click on last name field with right click 
  await contactPageFillLastName.click();
  await expect(contactPageFillLastName).toBeVisible();
  
  await contactPageFillLastName.click({button: 'right'});
  // Verify that the context menu is visible
  //await page.screenshot({path: 'screen_rightclk.png'}); //since running from git actions commented
});

test('testing language select EN or FR', async ({ page }) => {

  //const url = 'https://practicesoftwaretesting.com/';
  const lstLanguageSelect = page.locator('[data-test=language-select]');
  const lstLanguageItemSelectFR = page.locator('[data-test=lang-fr]');
  const lstLanguageItemSelectEN = page.locator('[data-test=lang-en]');
  
  //navigate to url
  //await page.goto(url);
 
  //click on language select list box and select French and verify
  await lstLanguageSelect.click();
  await lstLanguageItemSelectFR.click();
  await expect(lstLanguageSelect).toContainText('FR');
  
  //click on english in list box language and verify EN
  await lstLanguageSelect.click();
  await lstLanguageItemSelectEN.click();
  await expect(lstLanguageSelect).toContainText('EN');
});
