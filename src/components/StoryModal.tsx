import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}

const StoryModal = ({ isOpen, onClose, title, content }: StoryModalProps) => {
  // Escapeキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition z-50 font-sans"
          onClick={onClose}
          aria-label="閉じる"
        >
          <FaTimes />
        </button>

        {/* コンテンツエリア */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-amber-50 max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 紙のような背景テクスチャ */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center border-b-2 border-gray-300 pb-4">
              {title}
            </h2>
            <div className="text-gray-800 leading-relaxed space-y-6">
              {content}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryModal;
