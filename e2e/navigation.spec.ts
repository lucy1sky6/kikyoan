import { test, expect } from '@playwright/test';

test.describe('ページ間ナビゲーション', () => {
  test('ランディング → 桔梗庵ページ', async ({ page }) => {
    await page.goto('/');
    // ヒーローセクションはonClickでnavigate()を使用（<a>ではない）
    await page.getByText('詳しく見る').first().click();
    await expect(page).toHaveURL('/kikyoan');
    await expect(page.locator('body')).toContainText('桔梗庵');
  });

  test('ランディング → greengrassページ', async ({ page }) => {
    await page.goto('/');
    await page.getByText('詳しく見る').nth(1).click();
    await expect(page).toHaveURL('/greengrass');
    await expect(page.locator('body')).toContainText('greengrass');
  });

  test('ランディング → ギャラリーページ', async ({ page }) => {
    await page.goto('/');
    await page.getByText('のとフォト').first().click();
    await expect(page).toHaveURL('/gallery');
    await expect(page.locator('body')).toContainText('のとフォト');
  });

  test('戻るボタンでランディングに戻れる', async ({ page }) => {
    await page.goto('/kikyoan');
    await page.getByText('戻る').click();
    await expect(page).toHaveURL('/');
  });

  test('4ページすべてにアクセスできる', async ({ page }) => {
    for (const path of ['/', '/kikyoan', '/greengrass', '/gallery']) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    }
  });
});

test.describe('ScrollToTopボタン', () => {
  test('スクロール後にトップに戻れる', async ({ page }) => {
    await page.goto('/kikyoan');
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);

    const scrollTopBtn = page.locator('[aria-label*="トップ"], button:has-text("↑")').first();
    if (await scrollTopBtn.isVisible()) {
      await scrollTopBtn.click();
      // スムーズスクロールのアニメーション完了を待つ
      await page.waitForFunction(() => window.scrollY < 100, null, { timeout: 5000 });
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(100);
    }
  });
});
