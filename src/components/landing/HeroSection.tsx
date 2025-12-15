import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  /** クリック時の処理 */
  onClick: () => void;
  /** タイトル */
  title: string;
  /** キャッチコピー */
  catchphrase: string;
  /** 背景画像の配列 */
  images: string[];
  /** 現在の画像インデックス */
  imageIndex: number;
  /** オーバーレイの色（Tailwindクラス） */
  overlayColor: string;
  /** スライドの方向（上から or 下から） */
  slideDirection?: 'up' | 'down';
  /** タイトルの上に表示するラベル */
  topLabel?: string;
}

const HeroSection = ({
  onClick,
  title,
  catchphrase,
  images,
  imageIndex,
  overlayColor,
  slideDirection = 'up',
  topLabel,
}: HeroSectionProps) => {
  const initialY = slideDirection === 'up' ? '-12%' : '12%';
  const exitY = slideDirection === 'up' ? '12%' : '-12%';

  return (
    <motion.div
      onClick={onClick}
      className="flex-1 cursor-pointer flex items-center justify-center relative overflow-hidden group bg-black"
    >
      {/* 背景画像スライドショー */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, y: initialY }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: exitY }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
            width: '110%',
            height: '110%',
            top: '-5%',
            left: '-5%',
          }}
        />
      </AnimatePresence>
      {/* オーバーレイ */}
      <div className={`absolute inset-0 ${overlayColor}`} />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="text-center z-10 p-8">
        {topLabel && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg md:text-xl text-white drop-shadow-md mb-2"
          >
            {topLabel}
          </motion.p>
        )}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-7xl font-serif mb-6 text-white drop-shadow-lg"
        >
          {title}
        </motion.h2>
        <p className="text-sm text-white max-w-md mb-6 drop-shadow-md">{catchphrase}</p>
        <p className="text-lg text-white bg-white/30 px-6 py-2 rounded-full inline-block font-sans backdrop-blur-sm">
          詳しく見る
        </p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
