import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Photo {
  id: number;
  src: string;
  alt: string;
  description?: string;
  tags: string[];
}

interface LightboxProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Lightbox = ({ photos, currentIndex, onClose, onPrevious, onNext }: LightboxProps) => {
  if (currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center"
        onClick={onClose}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition z-50"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* 前へボタン */}
        {hasPrevious && (
          <button
            className="absolute left-4 text-white text-5xl hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
          >
            <FaChevronLeft />
          </button>
        )}

        {/* 次へボタン */}
        {hasNext && (
          <button
            className="absolute right-4 text-white text-5xl hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <FaChevronRight />
          </button>
        )}

        {/* 写真 */}
        <motion.img
          key={currentPhoto.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="max-w-[90vw] max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {/* 写真の説明 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center max-w-2xl px-4">
          <p className="text-xl font-semibold mb-2">{currentPhoto.alt}</p>
          {currentPhoto.description && (
            <p className="text-sm text-gray-200 mb-2">{currentPhoto.description}</p>
          )}
          <p className="text-xs text-gray-400">
            {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
