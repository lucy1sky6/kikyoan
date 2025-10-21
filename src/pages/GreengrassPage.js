import React from 'react';
import './GreengrassPage.css'; // このページのスタイル

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

function GreengrassPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center mb-5">
          <h2>greengrass</h2>
          <div className="speech-bubble">greengrassとは？？</div>
          <p className="lead">
                                    １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。<br />網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
          </p>
        </div>
      </div>

      <div className="row">
        {galleryImages.map(image => (
          <div key={image.id} className="col-lg-3 col-md-4 col-6 mb-4">
            <div className="square-box">
              <img src={`https://via.placeholder.com/400?text=Photo+${image.id}`} className="img-fluid" alt={`greengrassの写真 ${image.id}`} />
            </div>
            <p className="text-center mt-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GreengrassPage;
