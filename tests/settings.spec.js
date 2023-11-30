import { test, expect } from '@playwright/test';

test('settings', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByPlaceholder('Paste your youtube channel').click();
  await page.locator('#instagram-link').click();
  await page.locator('#facebook-link').click();
  await page.locator('#linkedin-link').click();
  await page.getByPlaceholder('Search Location').click();
  await page.getByLabel('Church Membership Link').click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByLabel('Email for prayer requests').click();
  await page.getByLabel('Email for pastor\'s report').click();
  await page.getByRole('button', { name: 'Save Settings' }).click();
  await page.getByRole('tab', { name: 'Resources' }).click();
  await page.getByText('Documents').click();
  await page.getByLabel('Resources').getByText('Others').click();
  await page.getByText('Images').click();
  await page.getByRole('tab', { name: 'Subscription' }).click();
  await page.getByRole('tab', { name: 'QR Codes' }).click();
  await page.getByRole('tab', { name: 'Import Church' }).click();
  await page.getByRole('tab', { name: 'Church Account' }).click();
  await page.getByPlaceholder('Account Name...').click();
  await page.getByLabel('Bank Name').click();
  await page.getByLabel('Account Number').click();
  await page.getByLabel('Sort Code').click();
  await page.getByPlaceholder('Paste your donation link here').click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByRole('button', { name: 'Update Church Account Details' }).click();
  await page.getByRole('tab', { name: 'Children Age Groups' }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByPlaceholder('Child Group Name').click();
  await page.getByPlaceholder('Min Age').click();
  await page.getByPlaceholder('Max Age').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByLabel('Close').click();
  await page.getByRole('tab', { name: 'Weekly Events' }).click();
  await page.getByRole('button', { name: 'Create new Template' }).click();
  await page.getByPlaceholder('Event title').click();
  await page.getByPlaceholder('Event address').click();
  await page.getByPlaceholder('Event Location').click();
  await page.getByPlaceholder('Type your description here...').click();
  await page.getByRole('button', { name: 'Save' }).click();
});