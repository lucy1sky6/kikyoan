import { motion } from 'framer-motion';

interface GalleryImageCardProps {
  imageId: number;
  description: string;
  index: number;
  gradientFrom: string;
  gradientTo: string;
  altPrefix: string;
}

const GalleryImageCard = ({
  imageId,
  description,
  index,
  gradientFrom,
  gradientTo,
  altPrefix,
}: GalleryImageCardProps) => {
  return (
    <motion.div
      key={imageId}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      className="group"
    >
      <div
        className={`aspect-square bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow`}
      >
        <img
          src={`https://via.placeholder.com/400?text=Photo+${imageId}`}
          className="w-full h-full object-cover"
          alt={`${altPrefix}の写真 ${imageId}`}
        />
      </div>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export default GalleryImageCard;
