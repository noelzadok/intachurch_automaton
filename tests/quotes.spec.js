import { test, expect } from '@playwright/test';

test('quotes', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Quotes' }).click();
  await page.getByRole('button', { name: 'Add new quote' }).click();
  await page.getByPlaceholder('Type your quote here...').click();
  await page.getByPlaceholder('Type your quote here...').fill('nzt');
  await page.getByRole('button', { name: 'Add quote' }).click();
  await page.locator('#menu-button-233').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.locator('#field-235').click();
  await page.locator('#field-235').fill('testing');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.locator('#menu-button-233').click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});