import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TagFilter from '../components/TagFilter';
import PhotoGridItem from '../components/PhotoGridItem';
import Lightbox from '../components/Lightbox';

interface Photo {
  id: number;
  src: string;
  alt: string;
  description?: string;
  tags: string[];
}

// ダミー写真データ（後で実際の写真に置き換え）
const photos: Photo[] = [
  { id: 1, src: 'https://via.placeholder.com/400?text=Photo+1', alt: '桔梗庵の外観', description: '海に近い静かな場所に佇む古民家をリノベーションした施設です。', tags: ['桔梗庵'] },
  { id: 2, src: 'https://via.placeholder.com/400?text=Photo+2', alt: 'greengrass工房', description: '手作りの木の椅子を制作する工房の様子。', tags: ['greengrass'] },
  { id: 3, src: 'https://via.placeholder.com/400?text=Photo+3', alt: '能登の海', description: '透き通った青い海と美しい海岸線が広がります。', tags: ['海'] },
  { id: 4, src: 'https://via.placeholder.com/400?text=Photo+4', alt: '祭の様子', description: '地域の伝統的な祭りで賑わう小木の町。', tags: ['祭'] },
  { id: 5, src: 'https://via.placeholder.com/400?text=Photo+5', alt: '桔梗庵の内観', description: '木のぬくもりを感じる温かみのある室内空間。', tags: ['桔梗庵'] },
  { id: 6, src: 'https://via.placeholder.com/400?text=Photo+6', alt: '木の椅子', description: '職人が一つ一つ丁寧に仕上げた手作りの椅子。', tags: ['greengrass'] },
  { id: 7, src: 'https://via.placeholder.com/400?text=Photo+7', alt: '小木港', description: '日本三大イカ釣り漁港の一つとして知られています。', tags: ['海'] },
  { id: 8, src: 'https://via.placeholder.com/400?text=Photo+8', alt: 'イカ祭り', description: '新鮮なイカを味わえる地域の人気イベント。', tags: ['祭', '海'] },
  { id: 9, src: 'https://via.placeholder.com/400?text=Photo+9', alt: '桔梗庵の庭', description: '四季折々の草花が楽しめる落ち着いた庭園。', tags: ['桔梗庵'] },
  { id: 10, src: 'https://via.placeholder.com/400?text=Photo+10', alt: 'ピーリングウッド', description: '自然の木材を活かした独特の風合いの製品。', tags: ['greengrass'] },
  { id: 11, src: 'https://via.placeholder.com/400?text=Photo+11', alt: '日本海', description: '雄大な日本海の景色を一望できる絶景スポット。', tags: ['海'] },
  { id: 12, src: 'https://via.placeholder.com/400?text=Photo+12', alt: '伝統工芸', description: '能登に伝わる伝統的な工芸品の数々。', tags: ['その他'] },
];

const tags = ['すべて', '桔梗庵', 'greengrass', '祭', '海', 'その他'];

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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-blue-900">📷 フォト</h1>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
