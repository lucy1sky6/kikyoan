import { motion } from 'framer-motion';

import { getImagePath } from '../utils/getImagePath';

interface PhotoGalleryBannerProps {
  onClick: () => void;
}

const PhotoGalleryBanner = ({ onClick }: PhotoGalleryBannerProps) => {
  return (
    <div
      onClick={onClick}
      className="h-40 cursor-pointer flex items-center justify-center relative overflow-hidden group"
    >
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${getImagePath('/images/landing/gallery-hero.webp')})` }}
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-blue-900/60" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="flex items-center justify-between w-full px-12 z-10">
        <div>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif mb-2 text-white"
          >
            のとフォト
          </motion.h2>
          <p className="text-sm text-white ml-4">
            写真で巡る、能登の風景
          </p>
        </div>
        <p className="text-lg text-white bg-white/30 px-6 py-2 rounded-full font-sans">
          詳しく見る
        </p>
      </div>
    </div>
  );
};

export default PhotoGalleryBanner;
