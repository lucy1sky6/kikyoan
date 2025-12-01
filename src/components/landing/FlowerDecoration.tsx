import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/getImagePath';

const FlowerDecoration = () => {
  return (
    <>
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
    </>
  );
};

export default FlowerDecoration;
