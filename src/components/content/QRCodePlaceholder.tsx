import { getImagePath } from '../../utils/getImagePath';

const QRCodePlaceholder = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-48 h-48">
        <img
          src={getImagePath('/images/qr/qr-code.webp')}
          alt="QRコード"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default QRCodePlaceholder;
