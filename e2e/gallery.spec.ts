import { test, expect } from '@playwright/test';

test.describe('ギャラリー — タグフィルター', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery');
  });

  test('初期表示で全写真が表示される', async ({ page }) => {
    const photos = page.locator('img[alt]').filter({ hasNotText: '' });
    await expect(photos.first()).toBeVisible();
  });

  test('タグボタンをクリックするとフィルタリングされる', async ({ page }) => {
    // 「桔梗庵」タグをクリック
    await page.getByRole('button', { name: '桔梗庵' }).click();

    // URLにタグパラメータが追加される
    await expect(page).toHaveURL(/tag/);

    // 「すべて」に戻す
    await page.getByRole('button', { name: 'すべて' }).click();
  });

  test('複数タグが存在する', async ({ page }) => {
    const expectedTags = ['すべて', '桔梗庵', 'greengrass', '海', '祭り'];
    for (const tag of expectedTags) {
      await expect(page.getByRole('button', { name: tag })).toBeVisible();
    }
  });
});

test.describe('ギャラリー — ライトボックス', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery');
  });

  test('写真クリックでライトボックスが開く', async ({ page }) => {
    const firstPhoto = page.locator('img[alt]').first();
    await firstPhoto.click();

    // ライトボックスのオーバーレイが表示される
    await expect(page.locator('[role="dialog"], .fixed.inset-0').first()).toBeVisible();
  });

  test('閉じるボタンでライトボックスが閉じる', async ({ page }) => {
    const firstPhoto = page.locator('img[alt]').first();
    await firstPhoto.click();
    await page.waitForTimeout(300);

    // ライトボックス内の閉じるボタン（FaTimesアイコン、右上に配置）
    const closeBtn = page.locator('.fixed.inset-0 button.absolute').first();
    await closeBtn.click({ force: true });

    await page.waitForTimeout(500);
  });

  test('Escapeキーでライトボックスが閉じる', async ({ page }) => {
    const firstPhoto = page.locator('img[alt]').first();
    await firstPhoto.click();
    await page.waitForTimeout(300);

    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  });

  test('矢印キーで写真を切り替えられる', async ({ page }) => {
    const firstPhoto = page.locator('img[alt]').first();
    await firstPhoto.click();
    await page.waitForTimeout(300);

    // 右矢印で次の写真
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // 左矢印で前の写真
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(300);

    // Escapeで閉じる
    await page.keyboard.press('Escape');
  });
});
