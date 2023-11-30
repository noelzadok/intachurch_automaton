import { test, expect } from '@playwright/test';

test('admin', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByPlaceholder('Search admin\'s name here...').click();
  await page.getByRole('row', { name: '3 Princenoel Zadok Princenoel' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Add new Subadmin' }).click();
  await page.getByPlaceholder('Search member').click();
  await page.getByPlaceholder('Search member').fill('pri');
  await page.getByRole('gridcell', { name: 'Add Subadmin' }).click();
  await page.locator('#chakra-modal--body-28').getByRole('button').first().click();
  await page.locator('#chakra-modal--body-28').getByRole('button').nth(1).click();
  await page.locator('#chakra-modal--body-28').getByRole('button').nth(2).click();
  await page.locator('#chakra-modal--body-28').getByRole('button').nth(3).click();
  await page.locator('#chakra-modal--body-28').getByRole('button').nth(4).click();
  await page.getByLabel('Close').click();
  await page.goto('https://mms-frontend.herokuapp.com/dashboard');
});