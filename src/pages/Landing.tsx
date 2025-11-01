import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Access from '../components/access/Access';
import Contact from '../components/layout/Contact';
import BackButton from '../components/common/BackButton';
import ContactSection from '../components/layout/ContactSection';
import MagazineSection from '../components/content/MagazineSection';
import StoryModal from '../components/content/StoryModal';
import ReadMoreButton from '../components/common/ReadMoreButton';
import GalleryHeroBanner from '../components/gallery/GalleryHeroBanner';
import GalleryPage from './GalleryPage';
import { getImagePath } from '../utils/getImagePath';

type Selection = null | 'kikyoan' | 'greengrass' | 'gallery';

const Landing = () => {
  const [selected, setSelected] = useState<Selection>(null);
  const [galleryInitialTag, setGalleryInitialTag] = useState<string>('すべて');
  const [isKikyoanStoryOpen, setIsKikyoanStoryOpen] = useState(false);
  const [isGreengrassStoryOpen, setIsGreengrassStoryOpen] = useState(false);
  const [kikyoanImageIndex, setKikyoanImageIndex] = useState(0);
  const [greengrassImageIndex, setGreengrassImageIndex] = useState(0);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

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

  const handleSelect = (selection: 'kikyoan' | 'greengrass') => {
    setSelected(selection);
    // スムーズにスクロールして詳細を表示
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleGallerySelect = (initialTag: string = 'すべて') => {
    setGalleryInitialTag(initialTag);
    setSelected('gallery');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleBack = () => {
    setSelected(null);
    setGalleryInitialTag('すべて');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Escapeキーで詳細ページから戻る
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selected !== null) {
        handleBack();
      }
    };

    if (selected !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  // 桔梗庵の画像スライドショー
  useEffect(() => {
    if (selected === null) {
      const interval = setInterval(() => {
        setKikyoanImageIndex((prev) => (prev + 1) % kikyoanImages.length);
      }, 6000); // 6秒ごとに切り替え

      return () => clearInterval(interval);
    }
  }, [selected, kikyoanImages.length]);

  // greengrassの画像スライドショー
  useEffect(() => {
    if (selected === null) {
      const interval = setInterval(() => {
        setGreengrassImageIndex((prev) => (prev + 1) % greengrassImages.length);
      }, 6000); // 6秒ごとに切り替え

      return () => clearInterval(interval);
    }
  }, [selected, greengrassImages.length]);

  // のとフォトの画像スライドショー
  useEffect(() => {
    if (selected === null) {
      const interval = setInterval(() => {
        setGalleryImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 6000); // 6秒ごとに切り替え

      return () => clearInterval(interval);
    }
  }, [selected, galleryImages.length]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* メインコンテンツエリア */}
      <main className="relative">
        {/* 初期表示：2分割セクション */}
        <AnimatePresence mode="wait">
          {!selected && (
            <>
              <motion.div
                key="split-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row min-h-[80vh] relative"
              >
                {/* 桔梗の花 - 2分割の境界線上に配置 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hidden md:block absolute top-1/2 z-30 pointer-events-none"
                  style={{
                    left: '50%',
                    marginLeft: '-5vw',  // 画像幅10vwの半分
                    marginTop: '-5vw'    // 画像高10vwの半分
                  }}
                >
                  <img
                    src={getImagePath('/images/kikyoan-flower.webp')}
                    alt="桔梗の花"
                    className="drop-shadow-2xl"
                    style={{
                      width: '10vw',
                      height: '10vw'
                    }}
                  />
                </motion.div>

                {/* 桔梗庵セクション */}
                <motion.div
                  onClick={() => handleSelect('kikyoan')}
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
                  onClick={() => handleSelect('greengrass')}
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
              </motion.div>

              {/* フォト入口 */}
              <GalleryHeroBanner
                key="gallery-entrance"
                onClick={() => handleGallerySelect('すべて')}
                imageIndex={galleryImageIndex}
                images={galleryImages}
              />
            </>
          )}

          {/* 桔梗庵の詳細 */}
          {selected === 'kikyoan' && (
            <motion.div
              key="kikyoan-detail"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4 relative"
            >
              {/* 戻るボタン */}
              <BackButton
                onClick={handleBack}
                bgColor="bg-purple-600"
                hoverColor="hover:bg-purple-700"
              />

              <div className="max-w-5xl mx-auto px-4">

                {/* タイトル */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-20 mt-16 md:mt-20"
                >
                  <h1 className="mb-2 flex justify-center">
                    <img
                      src={getImagePath('/images/kikyoan-title.webp')}
                      alt="桔梗庵"
                      className="h-24 md:h-32 w-auto"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(14%) sepia(64%) saturate(4571%) hue-rotate(263deg) brightness(91%) contrast(103%)'
                      }}
                    />
                  </h1>
                  <p className="text-sm font-sans italic tracking-wider text-purple-700 opacity-70 mb-6">
                    ［ききょうあん］
                  </p>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    築130年、海辺から能登を支える
                  </p>
                </motion.div>

                {/* セクション1: 桔梗庵って？ */}
                <MagazineSection
                  title="桔梗庵って？"
                  description={
                    <>
                      <p className="mb-4">
                        ここに桔梗庵の紹介文が入ります。施設の概要や雰囲気について説明するテキストが入ります。
                        能登の海に近い静かな環境で、ゆったりとした時間をお過ごしいただけます。
                      </p>
                      <ReadMoreButton
                        onClick={() => setIsKikyoanStoryOpen(true)}
                        bgColor="bg-purple-600"
                        hoverColor="hover:bg-purple-700"
                      />
                    </>
                  }
                  imagePosition="right"
                  aspectRatio="landscape"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc={getImagePath('/images/kikyoan/about.webp')}
                  imageAlt="桔梗庵の外観"
                  delay={0.3}
                />

                {/* セクション2: ここでできること */}
                <MagazineSection
                  title="ここでできること"
                  description={
                    <p>
                      レンタルスペースとして、また民泊としてご利用いただけます。
                      イベントや会議、ワーケーションなど、様々な用途でお使いいただけます。
                    </p>
                  }
                  imagePosition="left"
                  aspectRatio="square"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc={getImagePath('/images/kikyoan/activities.webp')}
                  imageAlt="桔梗庵の内観"
                  delay={0.4}
                />

                {/* セクション3: 施設の魅力 */}
                <MagazineSection
                  title="施設の魅力"
                  description={
                    <>
                      <p className="mb-4">
                        古民家をリノベーションした温かみのある空間です。
                        木のぬくもりを感じながら、能登の自然に囲まれた贅沢な時間をお楽しみください。
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGallerySelect('桔梗庵');
                        }}
                        className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-md font-sans"
                      >
                        🖼️ フォトを見る
                      </button>
                    </>
                  }
                  imagePosition="right"
                  aspectRatio="auto"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc={getImagePath('/images/kikyoan/features.webp')}
                  imageAlt="桔梗庵の雰囲気"
                  delay={0.5}
                />

                {/* セクション4: こんな方におすすめ */}
                <MagazineSection
                  title="こんな方におすすめ"
                  description={
                    <p>
                      ・静かな環境でリフレッシュしたい方<br />
                      ・能登の自然を満喫したい方<br />
                      ・グループでの研修やワークショップをお考えの方<br />
                      ・長期滞在でのワーケーションをご希望の方
                    </p>
                  }
                  imagePosition="left"
                  aspectRatio="landscape"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc={getImagePath('/images/kikyoan/photo-intro.webp')}
                  imageAlt="桔梗庵での過ごし方"
                  delay={0.6}
                />

                {/* 料金・予約について */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-16"
                >
                  <h2 className="text-4xl font-serif font-bold text-purple-900 mb-8 text-center">料金・予約について</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 料金の目安 */}
                    <div className="bg-white p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-purple-800 mb-4">料金の目安</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>1泊（民泊）</span>
                          <span className="font-semibold">¥XX,XXX~</span>
                        </li>
                        <li className="flex justify-between">
                          <span>半日レンタル</span>
                          <span className="font-semibold">¥X,XXX~</span>
                        </li>
                        <li className="flex justify-between">
                          <span>1日レンタル</span>
                          <span className="font-semibold">¥XX,XXX~</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 mt-4 ml-4">※料金は利用内容により変動します</p>
                    </div>

                    {/* 予約について */}
                    <div className="bg-white p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-purple-800 mb-4">予約について</h3>
                      <p className="text-gray-700 mb-4">
                        最新の空き状況や予約については、SNSにてお知らせしております。
                      </p>
                      <div className="flex gap-4 mb-4">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 transition text-2xl"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 transition text-2xl"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                      <p className="text-gray-700">
                        お気軽にお問い合わせください。
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* お問い合わせ */}
                <ContactSection
                  titleColor="text-purple-900"
                  phone="012-345-6789"
                  phoneLink="tel:0123456789"
                  website="https://example.com"
                  websiteLink="https://example.com"
                  linkColor="text-purple-700"
                  linkHoverColor="hover:text-purple-900"
                />

                {/* 桔梗庵ストーリーモーダル */}
                <StoryModal
                  isOpen={isKikyoanStoryOpen}
                  onClose={() => setIsKikyoanStoryOpen(false)}
                  title="桔梗庵について"
                  content={
                    <div>
                      <p className="mb-6">
                        2024年1月1日、能登半島地震が発生しました。
                        震度7を記録したこの地震により、能登半島の多くの地域が甚大な被害を受けました。
                      </p>

                      <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">地震被害の写真</span>
                      </div>

                      <p className="mb-6">
                        桔梗庵は、能登半島の復興を応援し、この美しい地域を再び活気づけるために生まれました。
                        地域の方々とともに歩み、訪れる皆様に能登の魅力を感じていただきながら、
                        復興への一助となることを目指しています。
                      </p>

                      <p className="mb-6">
                        古民家をリノベーションしたこの施設は、能登の伝統と新しい息吹が調和する空間です。
                        海に近い静かな環境で、心安らぐひとときをお過ごしください。
                      </p>

                      <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">復興の様子の写真</span>
                      </div>

                      <p className="mb-6">
                        桔梗庵でのご滞在が、能登半島の復興を応援する一歩となります。
                        皆様のお越しを心よりお待ちしております。
                      </p>
                    </div>
                  }
                />
              </div>
            </motion.div>
          )}

          {/* greengrassの詳細 */}
          {selected === 'greengrass' && (
            <motion.div
              key="greengrass-detail"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen bg-gradient-to-b from-lime-50 to-white py-16 px-4 relative"
            >
              {/* 戻るボタン */}
              <BackButton
                onClick={handleBack}
                bgColor="bg-lime-600"
                hoverColor="hover:bg-lime-700"
              />

              <div className="max-w-5xl mx-auto px-4">

                {/* タイトル */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-20 mt-16 md:mt-20"
                >
                  <h1 className="mb-2 flex justify-center">
                    <img
                      src={getImagePath('/images/greengrass-title.webp')}
                      alt="greengrass"
                      className="h-24 md:h-32 w-auto"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(24%) sepia(37%) saturate(1598%) hue-rotate(57deg) brightness(96%) contrast(92%)'
                      }}
                    />
                  </h1>
                  <p className="text-sm font-sans italic tracking-wider text-lime-700 opacity-70 mb-6">
                    ［グリーングラス］
                  </p>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    手作りの椅子と、出会える場所
                  </p>
                </motion.div>

                {/* セクション1: greengrassって？ */}
                <MagazineSection
                  title="greengrassって？"
                  description={
                    <>
                      <p className="mb-4">
                        １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。
                        網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
                      </p>
                      <ReadMoreButton
                        onClick={() => setIsGreengrassStoryOpen(true)}
                        bgColor="bg-lime-600"
                        hoverColor="hover:bg-lime-700"
                      />
                    </>
                  }
                  imagePosition="right"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/about.webp')}
                  imageAlt="greengrassの外観"
                  delay={0.3}
                />

                {/* セクション2: 木の椅子へのこだわり */}
                <MagazineSection
                  title="木の椅子へのこだわり"
                  description={
                    <p>
                      すべて手作りで丁寧に仕上げた木の椅子をご提供しています。
                      木の温もりと座り心地の良さを追求した、世界に一つだけの椅子です。
                    </p>
                  }
                  imagePosition="left"
                  aspectRatio="square"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/chairs.webp')}
                  imageAlt="手作りの木の椅子"
                  delay={0.4}
                />

                {/* セクション3: ピーリングウッドとは */}
                <MagazineSection
                  title="ピーリングウッドとは"
                  description={
                    <p>
                      ピーリングウッドの説明が入ります。自然の木材を活かした独特の風合いや、
                      その特徴についての説明テキストがここに入ります。
                    </p>
                  }
                  imagePosition="right"
                  aspectRatio="square"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/peeling.webp')}
                  imageAlt="ピーリングウッド"
                  delay={0.5}
                />

                {/* セクション4: 工房を訪れて */}
                <MagazineSection
                  title="工房を訪れて"
                  description={
                    <>
                      <p className="mb-4">
                        実際に工房を訪れて、木の椅子やピーリングウッドをご覧いただけます。
                        木のぬくもりを感じながら、お気に入りの一品を見つけてください。
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGallerySelect('greengrass');
                        }}
                        className="inline-block px-6 py-2 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors shadow-md font-sans"
                      >
                        🖼️ フォトを見る
                      </button>
                    </>
                  }
                  imagePosition="left"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/workshop.webp')}
                  imageAlt="工房の様子"
                  delay={0.6}
                />

                {/* セクション5: 個展の開催 */}
                <MagazineSection
                  title="個展の開催"
                  description={
                    <div>
                      <p className="mb-4">
                        個展を開催し、多くの方に木の椅子の魅力をご覧いただきました。
                      </p>
                      <p>
                        一つ一つ丁寧に作られた椅子を実際に見て、触れて、座っていただける貴重な機会となりました。
                      </p>
                    </div>
                  }
                  imagePosition="right"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/exhibition.webp')}
                  imageAlt="個展の様子"
                  delay={0.7}
                />

                {/* セクション6: メディア・導入事例 */}
                <MagazineSection
                  title="メディア・導入事例"
                  description={
                    <div>
                      <p className="mb-4">
                        NHKで能登の里山が特集され、工房の裏山も含めて紹介されました。山も含めてgreengrassなのです。
                      </p>
                      <p>
                        県内外のカフェやレストランで椅子をご利用いただいています。
                        実際に座り心地を体験していただけます。
                      </p>
                    </div>
                  }
                  imagePosition="left"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc={getImagePath('/images/greengrass/media.webp')}
                  imageAlt="メディア出演・導入事例"
                  delay={0.8}
                />

                {/* 価格・在庫について */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mb-16"
                >
                  <h2 className="text-4xl font-serif font-bold text-lime-900 mb-8 text-center">価格・在庫について</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 価格の目安 */}
                    <div className="bg-white p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-lime-800 mb-4">価格の目安</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>木の椅子</span>
                          <span className="font-semibold">¥XX,XXX~</span>
                        </li>
                        <li className="flex justify-between">
                          <span>ピーリングウッド（小）</span>
                          <span className="font-semibold">¥X,XXX~</span>
                        </li>
                        <li className="flex justify-between">
                          <span>ピーリングウッド（大）</span>
                          <span className="font-semibold">¥XX,XXX~</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 mt-4 ml-4">※サイズや仕様により価格は変動します</p>
                    </div>

                    {/* 在庫について */}
                    <div className="bg-white p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-lime-800 mb-4">在庫について</h3>
                      <p className="text-gray-700 mb-4">
                        最新の在庫状況については、SNSにてお知らせしております。
                      </p>
                      <div className="flex gap-4 mb-4">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime-600 hover:text-lime-800 transition text-2xl"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime-600 hover:text-lime-800 transition text-2xl"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                      <p className="text-gray-700">
                        お気軽にお問い合わせください。
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* お問い合わせ */}
                <ContactSection
                  titleColor="text-lime-900"
                  phone="098-765-4321"
                  phoneLink="tel:0987654321"
                  website="https://greengrass-example.com"
                  websiteLink="https://greengrass-example.com"
                  linkColor="text-lime-700"
                  linkHoverColor="hover:text-lime-900"
                />

                {/* greengrassストーリーモーダル */}
                <StoryModal
                  isOpen={isGreengrassStoryOpen}
                  onClose={() => setIsGreengrassStoryOpen(false)}
                  title="greengrassについて"
                  content={
                    <div>
                      <p className="mb-6">
                        greengrassの始まりは、台風がきっかけでした。
                        能登半島を襲った台風により、たくさんの木の枝が折れて地面に転がっていました。
                      </p>

                      <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">台風後の枝の写真</span>
                      </div>

                      <p className="mb-6">
                        この折れた枝を何かに活用できないか。そう考えたのがgreengrassの始まりです。
                        自然の恵みを無駄にせず、新しい価値を生み出したい。
                        その想いから、木材を活かした製品づくりが始まりました。
                      </p>

                      <p className="mb-6">
                        網元の番屋を改造した建物で、一つ一つ手作りで木の椅子を制作しています。
                        また、ピーリングウッドという独特の風合いを持つ木材製品も販売しています。
                      </p>

                      <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">工房での作業風景</span>
                      </div>

                      <p className="mb-6">
                        自然の力で生まれた素材を、職人の手で丁寧に形にする。
                        greengrassは、能登の自然と共に歩む工房です。
                      </p>
                    </div>
                  }
                />
              </div>
            </motion.div>
          )}

          {/* 写真ギャラリーページ */}
          {selected === 'gallery' && (
            <GalleryPage onBack={handleBack} initialTag={galleryInitialTag} />
          )}
        </AnimatePresence>
      </main>

      {/* アクセスとコンタクト（トップページのみ表示） */}
      {!selected && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <Access />
            <Contact />
          </div>
        </div>
      )}

      {/* トップに戻るボタン */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-50 hover:scale-110 font-sans"
        aria-label="トップに戻る"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default Landing;
