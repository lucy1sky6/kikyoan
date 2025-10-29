const QRCodePlaceholder = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/qr/qr-code.webp"
          alt="QRコード"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default QRCodePlaceholder;
