import { getImagePath } from '../../utils/getImagePath';

const QRCodePlaceholder = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-48 h-48 bg-white p-4 rounded-lg">
        <img
          src={getImagePath('/images/qr/qr-code.webp')}
          alt="QRコード"
          className="w-full h-full object-cover"
          style={{
            filter: 'invert(20%) sepia(50%) saturate(800%) hue-rotate(230deg) brightness(95%)'
          }}
        />
      </div>
    </div>
  );
};

export default QRCodePlaceholder;
