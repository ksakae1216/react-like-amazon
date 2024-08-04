import { expect, test } from '@playwright/test';

test('has Amazon logo', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.logo')).toHaveText('Amazon');
});

test('has search bar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.searchBar')).toBeVisible();
});

test('has product grid', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.productGrid')).toBeVisible();
});
