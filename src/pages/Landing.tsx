import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Access from '../components/Access';
import Contact from '../components/Contact';

type Selection = null | 'kikyoan' | 'greengrass';

// ギャラリー用のダミーデータ
const kikyoanImages = [
  { id: 1, description: '説明文1' },
  { id: 2, description: '説明文2' },
  { id: 3, description: '説明文3' },
  { id: 4, description: '説明文4' },
  { id: 5, description: '説明文5' },
  { id: 6, description: '説明文6' },
  { id: 7, description: '説明文7' },
  { id: 8, description: '説明文8' },
];

const greengrassImages = [
  { id: 1, description: '説明文1' },
  { id: 2, description: '説明文2' },
  { id: 3, description: '説明文3' },
  { id: 4, description: '説明文4' },
  { id: 5, description: '説明文5' },
  { id: 6, description: '説明文6' },
  { id: 7, description: '説明文7' },
  { id: 8, description: '説明文8' },
];

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

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* メインコンテンツエリア */}
      <main className="relative">
        {/* 初期表示：2分割セクション */}
        <AnimatePresence mode="wait">
          {!selected && (
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
                  <p className="text-lg text-purple-800 mb-3">
                    クリックして詳細を見る
                  </p>
                  <p className="text-sm text-purple-700 max-w-md">
                    レンタルスペースとしてご利用いただけます
                    <br />
                    ただいま民泊に向けて準備中！
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
                  <p className="text-lg text-lime-800 mb-3">
                    クリックして詳細を見る
                  </p>
                  <p className="text-sm text-lime-700 max-w-md">
                    作業所/ALL手作り木の椅子/ピーリングウッド販売
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 桔梗庵の詳細 */}
          {selected === 'kikyoan' && (
            <motion.div
              key="kikyoan-detail"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4"
            >
              <div className="max-w-6xl mx-auto">
                {/* 戻るボタン */}
                <button
                  onClick={handleBack}
                  className="mb-8 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg"
                >
                  ← 戻る
                </button>

                {/* タイトル */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-5xl md:text-6xl font-serif text-purple-900 mb-6">
                    桔梗庵
                  </h1>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    海にほど近い静かな場所で、心安らぐひとときをお過ごしください
                  </p>
                </motion.div>

                {/* ギャラリー */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                  {kikyoanImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group"
                    >
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow">
                        <img
                          src={`https://via.placeholder.com/400?text=Photo+${image.id}`}
                          className="w-full h-full object-cover"
                          alt={`桔梗庵の写真 ${image.id}`}
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        {image.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
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
              className="min-h-screen bg-gradient-to-b from-lime-50 to-white py-16 px-4"
            >
              <div className="max-w-6xl mx-auto">
                {/* 戻るボタン */}
                <button
                  onClick={handleBack}
                  className="mb-8 px-6 py-3 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-colors shadow-lg"
                >
                  ← 戻る
                </button>

                {/* タイトル */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-5xl md:text-6xl font-serif text-lime-900 mb-6">
                    greengrass
                  </h1>

                  {/* 吹き出し */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="inline-block bg-lime-200 rounded-full px-8 py-4 mb-8 shadow-md"
                  >
                    <p className="text-xl font-semibold text-lime-900">
                      greengrassとは？？
                    </p>
                  </motion.div>

                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。
                    <br />
                    網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
                  </p>
                </motion.div>

                {/* ギャラリー */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                  {greengrassImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group"
                    >
                      <div className="aspect-square bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow">
                        <img
                          src={`https://via.placeholder.com/400?text=Photo+${image.id}`}
                          className="w-full h-full object-cover"
                          alt={`greengrassの写真 ${image.id}`}
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        {image.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* アクセスとコンタクト（常に表示） */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <Access />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Landing;
