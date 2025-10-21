import React from 'react';
import './KikyoanPage.css'; // このページのスタイル

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

function KikyoanPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center mb-5">
          <h2>桔梗庵</h2>
                              <p className="lead">
            海にほど近い静かな場所で、心安らぐひとときをお過ごしください
          </p>
        </div>
      </div>

      <div className="row">
        {galleryImages.map(image => (
          <div key={image.id} className="col-lg-3 col-md-4 col-6 mb-4">
            <div className="square-box">
              <img src={`https://via.placeholder.com/400?text=Photo+${image.id}`} className="img-fluid" alt={`桔梗庵の写真 ${image.id}`} />
            </div>
            <p className="text-center mt-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KikyoanPage;
