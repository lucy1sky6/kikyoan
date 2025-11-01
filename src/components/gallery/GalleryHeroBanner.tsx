import { motion, AnimatePresence } from 'framer-motion';

interface GalleryHeroBannerProps {
  onClick: () => void;
  imageIndex: number;
  images: string[];
}

const GalleryHeroBanner = ({ onClick, imageIndex, images }: GalleryHeroBannerProps) => {
  return (
    <div
      onClick={onClick}
      className="h-40 cursor-pointer flex items-center justify-center relative overflow-hidden group"
    >
      {/* 背景画像スライドショー */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, x: '12%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-12%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
          }}
        />
      </AnimatePresence>
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-blue-900/60" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="flex items-center justify-between w-full px-4 md:px-12 z-10">
        <div className="text-center">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif mb-2 text-white"
          >
            のとフォト
          </motion.h2>
          <p className="text-sm text-white">
            写真で巡る、能登の風景
          </p>
        </div>
        <p className="text-sm md:text-lg text-white bg-white/30 px-3 py-2 md:px-6 rounded-full font-sans whitespace-nowrap">
          詳しく見る
        </p>
      </div>
    </div>
  );
};

export default GalleryHeroBanner;
