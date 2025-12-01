import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Access from '../components/access/Access';
import Contact from '../components/layout/Contact';
import GalleryHeroBanner from '../components/gallery/GalleryHeroBanner';
import { useSlideshow } from '../hooks';
import { getImagePath } from '../utils/getImagePath';

const Landing = () => {
  const navigate = useNavigate();

  // 画像配列
  const kikyoanImages = [
    getImagePath('/images/landing/kikyoan-hero-01.webp'),
    getImagePath('/images/landing/kikyoan-hero-02.webp'),
    getImagePath('/images/landing/kikyoan-hero-03.webp'),
  ];
  const greengrassImages = [
    getImagePath('/images/landing/greengrass-hero-01.webp'),
    getImagePath('/images/landing/greengrass-hero-02.webp'),
    getImagePath('/images/landing/greengrass-hero-03.webp'),
  ];
  const galleryImages = [
    getImagePath('/images/landing/gallery-hero-01.webp'),
    getImagePath('/images/landing/gallery-hero-02.webp'),
    getImagePath('/images/landing/gallery-hero-03.webp'),
  ];

  // スライドショー
  const { index: kikyoanImageIndex } = useSlideshow({ length: kikyoanImages.length });
  const { index: greengrassImageIndex } = useSlideshow({ length: greengrassImages.length });
  const { index: galleryImageIndex } = useSlideshow({ length: galleryImages.length });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* メインコンテンツエリア */}
      <main className="relative">
        {/* 2分割セクション */}
        <div className="flex flex-col md:flex-row min-h-[80vh] relative">
          {/* 桔梗の花 - 横並び用（PC） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:block absolute top-1/2 z-[5] pointer-events-none"
            style={{
              left: '50%',
              marginLeft: '-5vw',
              marginTop: '-5vw',
            }}
          >
            <img
              src={getImagePath('/images/kikyoan-flower.webp')}
              alt="桔梗の花"
              className="drop-shadow-2xl"
              style={{
                width: '10vw',
                height: '10vw',
              }}
            />
          </motion.div>

          {/* 桔梗の花 - 縦並び用（スマホ） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:hidden absolute top-1/2 z-[5] pointer-events-none"
            style={{
              left: '50%',
              marginLeft: '-10vw',
              marginTop: '-10vw',
            }}
          >
            <img
              src={getImagePath('/images/kikyoan-flower.webp')}
              alt="桔梗の花"
              className="drop-shadow-2xl"
              style={{
                width: '20vw',
                height: '20vw',
              }}
            />
          </motion.div>

          {/* 桔梗庵セクション */}
          <motion.div
            onClick={() => navigate('/kikyoan')}
            className="flex-1 cursor-pointer flex items-center justify-center relative overflow-hidden group bg-black"
          >
            {/* 背景画像スライドショー */}
            <AnimatePresence mode="wait">
              <motion.div
                key={kikyoanImageIndex}
                initial={{ opacity: 0, y: '-12%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '12%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className="absolute bg-cover bg-center"
                style={{
                  backgroundImage: `url(${kikyoanImages[kikyoanImageIndex]})`,
                  width: '110%',
                  height: '110%',
                  top: '-5%',
                  left: '-5%',
                }}
              />
            </AnimatePresence>
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-purple-900/40" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="text-center z-10 p-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-7xl font-serif mb-6 text-white drop-shadow-lg"
              >
                桔梗庵
              </motion.h2>
              <p className="text-sm text-white max-w-md mb-6 drop-shadow-md">
                築130年、海辺から能登を支える
              </p>
              <p className="text-lg text-white bg-white/30 px-6 py-2 rounded-full inline-block font-sans backdrop-blur-sm">
                詳しく見る
              </p>
            </div>
          </motion.div>

          {/* greengrassセクション */}
          <motion.div
            onClick={() => navigate('/greengrass')}
            className="flex-1 cursor-pointer flex items-center justify-center relative overflow-hidden group bg-black"
          >
            {/* 背景画像スライドショー */}
            <AnimatePresence mode="wait">
              <motion.div
                key={greengrassImageIndex}
                initial={{ opacity: 0, y: '12%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-12%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className="absolute bg-cover bg-center"
                style={{
                  backgroundImage: `url(${greengrassImages[greengrassImageIndex]})`,
                  width: '110%',
                  height: '110%',
                  top: '-5%',
                  left: '-5%',
                }}
              />
            </AnimatePresence>
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-lime-900/40" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="text-center z-10 p-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-7xl font-serif mb-6 text-white drop-shadow-lg"
              >
                greengrass
              </motion.h2>
              <p className="text-sm text-white max-w-md mb-6 drop-shadow-md">
                手作りの椅子と、出会える場所
              </p>
              <p className="text-lg text-white bg-white/30 px-6 py-2 rounded-full inline-block font-sans backdrop-blur-sm">
                詳しく見る
              </p>
            </div>
          </motion.div>
        </div>

        {/* フォト入口 */}
        <GalleryHeroBanner
          onClick={() => navigate('/gallery')}
          imageIndex={galleryImageIndex}
          images={galleryImages}
        />
      </main>

      {/* アクセスとコンタクト */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <Access />
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
