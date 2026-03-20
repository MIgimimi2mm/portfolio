import { test, expect } from '@playwright/test';

const pages = [
  { url: 'http://localhost:3000/projects/high-tech-garden2', name: 'garden2' },
  { url: 'http://localhost:3000/projects/high-tech-garden3', name: 'garden3' },
  { url: 'http://localhost:3000/projects/high-tech-garden4', name: 'garden4' },
];

for (const { url, name } of pages) {
  test(`${name}: 左右カラムの結論テキストの高さが揃っているか確認`, async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState('networkidle');

    // 左カラムの結論テキスト（農業従事者の負担が増加している）のY座標
    const leftConclusion = page.locator('text=農業従事者の負担が増加している').first();
    const rightConclusion = page.locator('text=函館市は雑草を問題視している').first();

    const leftBox = await leftConclusion.boundingBox();
    const rightBox = await rightConclusion.boundingBox();

    console.log(`${name} - 左カラム結論 top: ${leftBox?.y}`);
    console.log(`${name} - 右カラム結論 top: ${rightBox?.y}`);
    console.log(`${name} - 高さの差: ${Math.abs((leftBox?.y ?? 0) - (rightBox?.y ?? 0))}px`);

    // 20px以内の誤差を許容
    expect(Math.abs((leftBox?.y ?? 0) - (rightBox?.y ?? 0))).toBeLessThan(20);
  });
}
