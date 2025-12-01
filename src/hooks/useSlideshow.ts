import { useState, useEffect } from 'react';

interface UseSlideshowOptions {
  /** スライドの総数 */
  length: number;
  /** 切り替え間隔（ミリ秒） */
  interval?: number;
  /** スライドショーを有効にするか */
  enabled?: boolean;
}

/**
 * スライドショーのインデックスを管理するフック
 */
export const useSlideshow = ({
  length,
  interval = 6000,
  enabled = true,
}: UseSlideshowOptions) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [enabled, length, interval]);

  return { index, setIndex };
};
