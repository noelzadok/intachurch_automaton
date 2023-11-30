import { test, expect } from '@playwright/test';

test('q&a', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Q & A' }).click();
  await page.getByPlaceholder('Search questions').click();
  await page.getByRole('button', { name: 'Create Question' }).click();
  await page.getByPlaceholder('Type your question here...').click();
  await page.getByRole('button', { name: 'Publish Question' }).click();
  await page.getByLabel('Questions').getByRole('img').first().click();
  await page.getByRole('tab', { name: 'Polls' }).click();
  await page.getByPlaceholder('Search polls').click();
  await page.getByRole('button', { name: 'Create Poll' }).click();
  await page.getByPlaceholder('Type your question here...').click();
  await page.getByRole('button', { name: 'Add Option' }).click();
  await page.getByRole('button', { name: 'Publish Poll' }).click();
  await page.getByLabel('Polls').getByRole('img').first().click();
});