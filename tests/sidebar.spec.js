import { test, expect } from '@playwright/test';

test('sidebar', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Dashboard' }).first().click();
  await page.getByRole('link', { name: 'Members' }).click();
  await page.getByRole('link', { name: 'Events' }).click();
  await page.getByRole('link', { name: 'Groups' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Notifications' }).click();
  await page.getByRole('link', { name: 'Quotes' }).click();
  await page.getByRole('link', { name: 'Donation' }).click();
  await page.getByRole('link', { name: 'Request' }).click();
  await page.getByRole('link', { name: 'Children church' }).click();
  await page.getByRole('link', { name: 'Reports' }).click();
  await page.getByRole('link', { name: 'Q & A' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  
});