import { test, expect } from '@playwright/test';

test('dashboard', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Dashboard' }).first().click();
  await page.locator('div').filter({ hasText: /^77\/8$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^10\/55$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^25\/2$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^71\/6$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^2\/0$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^0\/1$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div:nth-child(4) > div > div:nth-child(2)').first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div:nth-child(4) > div:nth-child(2) > div:nth-child(2)').click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^4\/2$/ }).first().click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
});