import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagazineSectionProps {
  title: string;
  description: ReactNode;
  imagePosition: 'left' | 'right';
  aspectRatio: 'landscape' | 'square' | 'auto';
  gradientFrom: string;
  gradientTo: string;
  titleColor: string;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}

const MagazineSection = ({
  title,
  description,
  imagePosition,
  aspectRatio,
  gradientFrom,
  gradientTo,
  titleColor,
  imageSrc,
  imageAlt,
  delay = 0.3,
}: MagazineSectionProps) => {
  const isPhotoRight = imagePosition === 'right';
  const aspectClass =
    aspectRatio === 'landscape'
      ? 'aspect-[4/3]'
      : aspectRatio === 'square'
        ? 'aspect-square'
        : '';
  const marginClass = isPhotoRight ? 'md:-mr-8' : 'md:-ml-8';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="mb-24"
    >
      <div className={`flex flex-col ${isPhotoRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
        {/* テキストエリア */}
        <div className="md:w-1/2 space-y-4">
          <h2 className={`text-3xl font-bold ${titleColor} mb-4`}>{title}</h2>
          <div className="text-gray-700 leading-relaxed">{description}</div>
        </div>

        {/* 写真エリア */}
        <div className={`md:w-1/2 ${marginClass}`}>
          <div className={`${aspectClass} bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden shadow-xl`}>
            <img
              src={imageSrc}
              className={aspectRatio === 'auto' ? 'w-full' : 'w-full h-full object-cover'}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MagazineSection;
