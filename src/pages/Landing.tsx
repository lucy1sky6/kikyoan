import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Access from '../components/access/Access';
import Contact from '../components/layout/Contact';
import GalleryHeroBanner from '../components/gallery/GalleryHeroBanner';
import HeroSection from '../components/landing/HeroSection';
import FlowerDecoration from '../components/landing/FlowerDecoration';
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
          {/* 桔梗の花デコレーション */}
          <FlowerDecoration />

          {/* 桔梗庵セクション */}
          <HeroSection
            onClick={() => navigate('/kikyoan')}
            title="桔梗庵"
            catchphrase="築130年、海辺から能登を支える"
            images={kikyoanImages}
            imageIndex={kikyoanImageIndex}
            overlayColor="bg-purple-900/40"
            slideDirection="up"
          />

          {/* greengrassセクション */}
          <HeroSection
            onClick={() => navigate('/greengrass')}
            title="greengrass"
            catchphrase="手作りの椅子と、出会える場所"
            images={greengrassImages}
            imageIndex={greengrassImageIndex}
            overlayColor="bg-lime-900/40"
            slideDirection="down"
          />
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
