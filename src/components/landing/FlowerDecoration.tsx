import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/getImagePath';

/**
 * PC横並び時の桔梗の花。
 * 横並びではtop:50%が正確に境界になるため、従来通りの配置。
 */
const FlowerDecoration = () => {
  return (
    <div
      className="hidden md:block absolute top-1/2 left-1/2 z-[5] pointer-events-none"
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        src={getImagePath('/images/kikyoan-flower.webp')}
        alt="桔梗の花"
        className="drop-shadow-2xl"
        style={{
          width: '10vw',
          height: '10vw',
        }}
      />
    </div>
  );
};

export default FlowerDecoration;
