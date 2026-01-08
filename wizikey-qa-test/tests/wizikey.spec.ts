import { test, expect } from '@playwright/test';

test.describe('Wizikey Media Search Page Tests', () => {

  // Scenario 1: SMOKE TEST - Verify Page Load & Elements
  test('Should load the search page and display search bar', async ({ page }) => {
    
    await page.goto('https://wizikey.com/media/search');

    // 2. Verify Search Input is visible
    const searchInput = page.getByPlaceholder('Type any keyword to search for reporters');
    await expect(searchInput).toBeVisible();
  });

  // Scenario 2: FUNCTIONAL TEST - Perform a Search
  test('Should allow user to search for a keyword', async ({ page }) => {
    await page.goto('https://wizikey.com/media/search');
    
    const searchInput = page.getByPlaceholder('Type any keyword to search for reporters');
    await searchInput.fill('Technology');

    await searchInput.press('Enter');

    const firstResult = page.locator('[data-cy="data-0-table-row"]');

    await expect(firstResult).toBeVisible({ timeout: 15000 });

  });

  // Scenario 3: UI/UX TEST - Mobile Responsiveness
  test('Should render correctly on mobile viewport', async ({ page }) => {

    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('https://wizikey.com/media/search');
  
    const searchInput = page.getByPlaceholder('Type any keyword to search for reporters');
    await expect(searchInput).toBeVisible();
  });

});