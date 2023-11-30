import { test, expect } from '@playwright/test';

test('childrenchurch', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Children church' }).click();
  await page.getByRole('button', { name: 'Checked In Children:' }).click();
  await page.getByRole('button', { name: 'Checked In Children:' }).click();
  await page.getByRole('button', { name: 'Customize View' }).click();
  await page.locator('.css-1r69mki').first().click();
  await page.locator('.css-1r69mki').first().click();
  await page.locator('.css-1r69mki').first().click();
  await page.locator('.css-1r69mki').first().click();
  await page.locator('.css-1r69mki').first().click();
  await page.getByLabel('Children').locator('svg').nth(2).click();
  await page.locator('div:nth-child(8) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(9) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(8) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(7) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(6) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(5) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(4) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('div:nth-child(3) > .chakra-checkbox > .chakra-checkbox__control').click();
  await page.locator('.css-7reotp > .chakra-checkbox > .chakra-checkbox__control').first().click();
  await page.getByRole('button', { name: 'Customize View' }).click();
  await page.getByRole('tab', { name: 'Attendance Overview' }).click();
  await page.getByRole('button', { name: 'View attendees' }).click();
  await page.getByRole('main').locator('img').click();
  await page.getByPlaceholder('Search child').click();
});