import { test, expect } from '@playwright/test';

test.describe('モバイル表示', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('ランディングページがモバイルで表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toContainText('桔梗庵');
    await expect(page.locator('body')).toContainText('greengrass');
  });

  test('桔梗庵ページがモバイルで正しく表示される', async ({ page }) => {
    await page.goto('/kikyoan');
    await expect(page.locator('body')).toContainText('0768-74-0072');
  });

  test('ギャラリーがモバイルで表示・操作できる', async ({ page }) => {
    await page.goto('/gallery');
    await expect(page.locator('body')).toContainText('のとフォト');

    // タグフィルターが使える
    await page.getByRole('button', { name: 'すべて' }).click();

    // 写真が表示される
    const photos = page.locator('img[alt]');
    await expect(photos.first()).toBeVisible();
  });

  test('ライトボックスがモバイルで動作する', async ({ page }) => {
    await page.goto('/gallery');
    const firstPhoto = page.locator('img[alt]').first();
    await firstPhoto.click();
    await page.waitForTimeout(300);

    // ライトボックスが開いている
    await expect(page.locator('[role="dialog"], .fixed.inset-0').first()).toBeVisible();

    // Escapeで閉じる
    await page.keyboard.press('Escape');
  });
});

test.describe('タブレット表示', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('ランディングページがタブレットで表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toContainText('桔梗庵');
  });

  test('ギャラリーのグリッドがタブレットで表示される', async ({ page }) => {
    await page.goto('/gallery');
    const photos = page.locator('img[alt]');
    await expect(photos.first()).toBeVisible();
  });
});
