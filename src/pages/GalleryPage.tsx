import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/common/BackButton';
import TagFilter from '../components/gallery/TagFilter';
import PhotoGridItem from '../components/gallery/PhotoGridItem';
import Lightbox from '../components/gallery/Lightbox';
import { GALLERY_PHOTOS, GALLERY_TAGS } from '../constants/photos';

const photos = GALLERY_PHOTOS;
const tags = GALLERY_TAGS;

interface GalleryPageProps {
  onBack: () => void;
  initialTag?: string;
}

const GalleryPage = ({ onBack, initialTag = 'すべて' }: GalleryPageProps) => {
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // initialTagが変わったときにselectedTagを更新
  useEffect(() => {
    setSelectedTag(initialTag);
  }, [initialTag]);

  // タグでフィルタリング
  const filteredPhotos = selectedTag === 'すべて'
    ? photos
    : photos.filter(photo => photo.tags.includes(selectedTag));

  // ライトボックスを開く
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  // ライトボックスを閉じる
  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // 前の写真
  const showPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  // 次の写真
  const showNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredPhotos.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevious();
      if (e.key === 'ArrowRight') showNext();
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 relative"
    >
      {/* 戻るボタン */}
      <BackButton
        onClick={onBack}
        bgColor="bg-blue-600"
        hoverColor="hover:bg-blue-700"
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20 mt-16 md:mt-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-blue-900 mb-6">のとフォト</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            写真で巡る、能登の風景
          </p>
        </motion.div>

        {/* タグフィルター */}
        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />

        {/* 格子状写真ギャラリー */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredPhotos.map((photo, index) => (
            <PhotoGridItem
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </motion.div>

        {/* ライトボックス */}
        <Lightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      </div>
    </motion.div>
  );
};

export default GalleryPage;
