import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ダミーデータ
const galleryImages = [
  { id: 1, description: '説明文1' },
  { id: 2, description: '説明文2' },
  { id: 3, description: '説明文3' },
  { id: 4, description: '説明文4' },
  { id: 5, description: '説明文5' },
  { id: 6, description: '説明文6' },
  { id: 7, description: '説明文7' },
  { id: 8, description: '説明文8' },
];

const KikyoanPage = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 mt-12">
        {/* 紹介文 */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">桔梗庵</h2>
          <p className="text-lg text-gray-700">
            海にほど近い静かな場所で、心安らぐひとときをお過ごしください
          </p>
        </div>

        {/* ギャラリー */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {galleryImages.map((image) => (
            <div key={image.id} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2">
                <img
                  src={`https://via.placeholder.com/400?text=Photo+${image.id}`}
                  className="w-full h-full object-cover"
                  alt={`桔梗庵の写真 ${image.id}`}
                />
              </div>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          ))}
        </div>

        {/* トップに戻るリンク */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 hover:underline text-lg"
          >
            ← トップに戻る
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KikyoanPage;
