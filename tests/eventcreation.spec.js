import { test, expect } from '@playwright/test';

test('event', async ({ page }) => {
  await page.goto('https://mms-frontend.herokuapp.com/signIn');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('info@esoftresponse.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause()
  await page.getByRole('link', { name: 'Events' }).click();
  await page.getByRole('tab', { name: 'Attendance Overview' }).click();
  await page.getByRole('button', { name: 'View attendees' }).click();
  await page.getByRole('main').locator('img').click();
  await page.getByRole('tab', { name: 'Past Events' }).click();
  await page.getByRole('tab', { name: 'Upcoming Events' }).click();
  await page.getByRole('button', { name: 'Create new event' }).click();
  await page.getByPlaceholder('Event title').click();
  await page.getByPlaceholder('Event address').click();
  await page.locator('#starts-by').click();
  await page.locator('#ends-by').click();
  await page.locator('label').filter({ hasText: 'All day' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Event repeats' }).locator('span').first().click();
  await page.getByPlaceholder('Type your description here...').click();
  await page.locator('.ant-select-selector').click();
  await page.getByRole('button', { name: 'Create Event' }).click();
  await page.locator('div').filter({ hasText: /^Create New Event$/ }).getByRole('img').click();
  await page.getByRole('tab', { name: 'Past Events' }).click();
  
});