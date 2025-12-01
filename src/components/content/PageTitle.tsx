import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/getImagePath';

interface PageTitleProps {
  /** タイトル画像のパス */
  imageSrc: string;
  /** 画像のalt */
  imageAlt: string;
  /** 読み仮名（例: ［ききょうあん］） */
  reading: string;
  /** キャッチコピー */
  catchphrase: string;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
  /** CSSフィルター（画像の色調整用） */
  imageFilter?: string;
}

const colorClasses = {
  purple: 'text-purple-700',
  lime: 'text-lime-700',
  blue: 'text-blue-700',
};

const PageTitle = ({
  imageSrc,
  imageAlt,
  reading,
  catchphrase,
  color,
  imageFilter,
}: PageTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-20 mt-16 md:mt-20"
    >
      <h1 className="mb-2 flex justify-center">
        <img
          src={getImagePath(imageSrc)}
          alt={imageAlt}
          className="h-24 md:h-32 w-auto"
          style={imageFilter ? { filter: imageFilter } : undefined}
        />
      </h1>
      <p className={`text-sm font-sans italic tracking-wider ${colorClasses[color]} opacity-70 mb-6`}>
        {reading}
      </p>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        {catchphrase}
      </p>
    </motion.div>
  );
};

export default PageTitle;
