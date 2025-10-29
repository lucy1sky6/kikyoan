import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Access from '../components/Access';
import Contact from '../components/Contact';
import BackButton from '../components/BackButton';
import ContactSection from '../components/ContactSection';
import MagazineSection from '../components/MagazineSection';
import GalleryPage from './GalleryPage';

type Selection = null | 'kikyoan' | 'greengrass' | 'gallery';

const Landing = () => {
  const [selected, setSelected] = useState<Selection>(null);

  const handleSelect = (selection: 'kikyoan' | 'greengrass') => {
    setSelected(selection);
    // スムーズにスクロールして詳細を表示
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleBack = () => {
    setSelected(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                className="flex flex-col md:flex-row min-h-[80vh]"
              >
                {/* 桔梗庵セクション */}
                <motion.div
                  onClick={() => handleSelect('kikyoan')}
                  className="flex-1 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 cursor-pointer flex items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="text-center z-10 p-8">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-6xl md:text-7xl font-serif mb-6 text-purple-900"
                    >
                      桔梗庵
                    </motion.h2>
                    <p className="text-sm text-purple-700 max-w-md mb-3">
                      レンタルスペース、民泊としてご利用いただけます
                    </p>
                    <p className="text-lg text-purple-800 bg-white/50 px-6 py-2 rounded-full inline-block">
                      詳しく見る
                    </p>
                  </div>
                </motion.div>

                {/* greengrassセクション */}
                <motion.div
                  onClick={() => handleSelect('greengrass')}
                  className="flex-1 bg-gradient-to-br from-lime-200 via-lime-300 to-lime-200 cursor-pointer flex items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="text-center z-10 p-8">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-6xl md:text-7xl font-serif mb-6 text-lime-900"
                    >
                      greengrass
                    </motion.h2>
                    <p className="text-sm text-lime-700 max-w-md mb-3">
                      手作りの木の椅子、ピーリングウッドの販売
                    </p>
                    <p className="text-lg text-lime-800 bg-white/50 px-6 py-2 rounded-full inline-block">
                      詳しく見る
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* フォト入口 */}
              <motion.div
                key="gallery-entrance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => handleSelect('gallery')}
                className="h-40 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 cursor-pointer flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="text-center z-10 p-8">
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-serif mb-3 text-white"
                  >
                    📷 フォト
                  </motion.h2>
                  <p className="text-lg text-white bg-white/30 px-6 py-2 rounded-full inline-block">
                    詳しく見る
                  </p>
                </div>
              </motion.div>
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
                  className="text-center mb-20"
                >
                  <h1 className="text-5xl md:text-6xl font-serif text-purple-900 mb-6">
                    桔梗庵
                  </h1>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    海にほど近い静かな場所で、心安らぐひとときをお過ごしください
                  </p>
                </motion.div>

                {/* セクション1: 桔梗庵って？ */}
                <MagazineSection
                  title="桔梗庵って？"
                  description={
                    <p>
                      ここに桔梗庵の紹介文が入ります。施設の概要や雰囲気について説明するテキストが入ります。
                      能登の海に近い静かな環境で、ゆったりとした時間をお過ごしいただけます。
                    </p>
                  }
                  imagePosition="right"
                  aspectRatio="landscape"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc="https://via.placeholder.com/600x450?text=Photo+1"
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
                  imageSrc="https://via.placeholder.com/500?text=Photo+2"
                  imageAlt="桔梗庵の内観"
                  delay={0.4}
                />

                {/* セクション3: 施設の魅力 */}
                <MagazineSection
                  title="施設の魅力"
                  description={
                    <p>
                      古民家をリノベーションした温かみのある空間です。
                      木のぬくもりを感じながら、能登の自然に囲まれた贅沢な時間をお楽しみください。
                    </p>
                  }
                  imagePosition="right"
                  aspectRatio="square"
                  gradientFrom="from-purple-100"
                  gradientTo="to-purple-200"
                  titleColor="text-purple-900"
                  imageSrc="https://via.placeholder.com/500?text=Photo+3"
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
                  imageSrc="https://via.placeholder.com/600x450?text=Photo+4"
                  imageAlt="桔梗庵での過ごし方"
                  delay={0.6}
                />

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
                  className="text-center mb-20"
                >
                  <h1 className="text-5xl md:text-6xl font-serif text-lime-900 mb-6">
                    greengrass
                  </h1>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    手作りの木の椅子と、ピーリングウッドの販売
                  </p>
                </motion.div>

                {/* セクション1: greengrassって？ */}
                <MagazineSection
                  title="greengrassって？"
                  description={
                    <p>
                      １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。
                      網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
                    </p>
                  }
                  imagePosition="right"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc="https://via.placeholder.com/600x450?text=Photo+1"
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
                  imageSrc="https://via.placeholder.com/500?text=Photo+2"
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
                  imageSrc="https://via.placeholder.com/500?text=Photo+3"
                  imageAlt="ピーリングウッド"
                  delay={0.5}
                />

                {/* セクション4: 工房を訪れて */}
                <MagazineSection
                  title="工房を訪れて"
                  description={
                    <p>
                      実際に工房を訪れて、木の椅子やピーリングウッドをご覧いただけます。
                      木のぬくもりを感じながら、お気に入りの一品を見つけてください。
                    </p>
                  }
                  imagePosition="left"
                  aspectRatio="landscape"
                  gradientFrom="from-lime-100"
                  gradientTo="to-lime-200"
                  titleColor="text-lime-900"
                  imageSrc="https://via.placeholder.com/600x450?text=Photo+4"
                  imageAlt="工房の様子"
                  delay={0.6}
                />

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
              </div>
            </motion.div>
          )}

          {/* 写真ギャラリーページ */}
          {selected === 'gallery' && (
            <GalleryPage onBack={handleBack} />
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
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-50 hover:scale-110"
        aria-label="トップに戻る"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default Landing;
