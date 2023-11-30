import { test, expect } from '@playwright/test';

test('notification', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Notifications' }).click();
  await page.getByPlaceholder('Search notification').click();
  await page.locator('.css-1kgmtyv').first().click();
  await page.locator('div').filter({ hasText: /^Compose$/ }).nth(2).click();
  await page.locator('.css-1wy0on6').click();
  await page.locator('.css-1wy0on6').click();
  await page.getByRole('button', { name: 'Channel' }).click();
  await page.getByRole('menuitem', { name: 'Select one All Push Sms Email' }).click();
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Type your message here here...').click();
  await page.getByRole('button', { name: 'Notify' }).click();
  await page.getByLabel('Close').click();
  await page.locator('div').filter({ hasText: /^NotificationsHR$/ }).locator('div').nth(2).click();
  
});