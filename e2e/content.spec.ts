import { test, expect } from '@playwright/test';

test.describe('桔梗庵ページ — コンテンツ存在確認', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/kikyoan');
    // lazy-loaded コンテンツの描画を待つ
    await expect(page.locator('body')).toContainText('0768-74-0072');
  });

  test('「農家民宿」のテキストが存在する', async ({ page }) => {
    // モーダル内に含まれている可能性があるため、ページ全体のHTMLで確認
    const html = await page.content();
    expect(html).toContain('農家民宿');
  });

  test('電話番号 0768-74-0072 が表示されている', async ({ page }) => {
    await expect(page.locator('body')).toContainText('0768-74-0072');
  });

  test('「1組」「貸切」のキーワードが存在する（フィルタリング設計）', async ({ page }) => {
    const html = await page.content();
    expect(html).toContain('1組');
    expect(html).toContain('貸切');
  });

  test('料金情報が表示されている', async ({ page }) => {
    await expect(page.locator('body')).toContainText('¥18,000');
  });

  test('約款が表示されている', async ({ page }) => {
    const html = await page.content();
    expect(html).toContain('約款');
  });

  test('素泊まりであることが明示されている', async ({ page }) => {
    const html = await page.content();
    expect(html).toContain('素泊まり');
  });

  test('支払方法に現金・銀行振込が含まれる', async ({ page }) => {
    const html = await page.content();
    expect(html).toContain('現金');
    expect(html).toContain('銀行振込');
  });
});

test.describe('意図的な不在の確認', () => {
  test('予約フォームがレンダリングされていない', async ({ page }) => {
    await page.goto('/kikyoan');
    // lazy-loaded コンテンツの描画を待ってから不在を確認
    await expect(page.locator('body')).toContainText('0768-74-0072');
    // フォーム要素（input[type="date"], 予約ボタン等）が存在しないことを確認
    await expect(page.locator('form')).toHaveCount(0);
    await expect(page.getByRole('button', { name: /予約/ })).toHaveCount(0);
  });

  test('クレジットカード関連の表示がない', async ({ page }) => {
    await page.goto('/kikyoan');
    // lazy-loaded コンテンツの描画を待つ
    await expect(page.locator('body')).toContainText('0768-74-0072');
    const visibleText = await page.locator('body').innerText();
    expect(visibleText).not.toContain('クレジットカード');
    expect(visibleText.toLowerCase()).not.toContain('visa');
    expect(visibleText.toLowerCase()).not.toContain('mastercard');
    // 支払い方法の案内として「現金・銀行振込」のみ表示されている
    expect(visibleText).toContain('現金・銀行振込');
  });
});

test.describe('greengrassページ — コンテンツ存在確認', () => {
  test('電話番号が表示されている', async ({ page }) => {
    await page.goto('/greengrass');
    await expect(page.locator('body')).toContainText('0768-74-0072');
  });

  test('greengrass の説明が存在する', async ({ page }) => {
    await page.goto('/greengrass');
    await expect(page.locator('body')).toContainText(/greengrass/i);
  });
});

test.describe('ランディングページ — コンテンツ存在確認', () => {
  test('桔梗庵とgreengrassの両方が表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toContainText('桔梗庵');
    await expect(page.locator('body')).toContainText('greengrass');
  });
});
