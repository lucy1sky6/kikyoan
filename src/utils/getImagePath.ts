/**
 * ベースURLを考慮した画像パスを取得
 */
export const getImagePath = (path: string): string => {
  // 先頭のスラッシュを削除
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
