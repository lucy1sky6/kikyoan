import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/getImagePath';

interface DecorativeImageProps {
  /** 画像のパス */
  src: string;
  /** アニメーション遅延 */
  delay?: number;
  /** 画像サイズ（クラス名） */
  className?: string;
}

const DecorativeImage = ({ src, delay = 0.8, className = 'w-64 h-64' }: DecorativeImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="flex justify-center mt-12 mb-8"
    >
      <img
        src={getImagePath(src)}
        alt=""
        className={`${className} rounded-2xl`}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default DecorativeImage;
