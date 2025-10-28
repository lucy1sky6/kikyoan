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

const GreengrassPage = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 mt-12">
        {/* 紹介文 */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">greengrass</h2>

          {/* 吹き出し */}
          <div className="inline-block bg-lime-200 rounded-full px-6 py-3 mb-6">
            <p className="text-lg font-semibold">greengrassとは？？</p>
          </div>

          <p className="text-lg text-gray-700">
            １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。
            <br />
            網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
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
                  alt={`greengrassの写真 ${image.id}`}
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
            className="text-lime-600 hover:text-lime-800 hover:underline text-lg"
          >
            ← トップに戻る
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GreengrassPage;
