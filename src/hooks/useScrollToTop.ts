import { useCallback } from 'react';

/**
 * ページトップへスクロールするフック
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return scrollToTop;
};
