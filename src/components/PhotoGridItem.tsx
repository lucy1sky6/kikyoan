import { motion } from 'framer-motion';

interface PhotoGridItemProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

const PhotoGridItem = ({ src, alt, index, onClick }: PhotoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="aspect-square bg-gray-200 overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default PhotoGridItem;
