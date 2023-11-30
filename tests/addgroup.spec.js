import { test, expect } from '@playwright/test';

test('group', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Groups' }).click();
  await page.getByPlaceholder('Search groups').click();
  await page.locator('#menu-button-33').click();
  await page.getByRole('menuitem', { name: 'Change Status' }).click();
  await page.getByRole('button', { name: 'Activate', exact: true }).click();
  await page.locator('#menu-button-33').click();
  await page.getByRole('menuitem', { name: 'Change Status' }).click();
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.getByRole('button', { name: 'Add group' }).click();
  await page.getByPlaceholder('Group Name').click();
  await page.getByPlaceholder('Description').click();
  await page.getByRole('button', { name: 'Add group' }).click();
  await page.getByLabel('Close').click();
});