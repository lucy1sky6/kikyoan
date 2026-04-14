import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/getImagePath';

/**
 * 縦並び時の桔梗の花。
 * 2セクションの「間」にflex子要素として置くことで、
 * 常に境界の正確な位置に表示する。
 */
const FlowerBoundary = () => {
  return (
    <div className="md:hidden relative h-0 z-[5] pointer-events-none">
      <div
        className="absolute left-1/2"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          src={getImagePath('/images/kikyoan-flower.webp')}
          alt="桔梗の花"
          className="drop-shadow-2xl"
          style={{
            width: '20vw',
            height: '20vw',
          }}
        />
      </div>
    </div>
  );
};

export default FlowerBoundary;
