import { useEffect } from 'react';

interface KeyHandler {
  key: string;
  handler: () => void;
}

/**
 * キーボードイベントを管理するフック
 */
export const useKeyboardNavigation = (
  handlers: KeyHandler[],
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const matched = handlers.find((h) => h.key === e.key);
      if (matched) {
        matched.handler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers, enabled]);
};
