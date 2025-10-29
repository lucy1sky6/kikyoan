const QRCodePlaceholder = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-48 h-48 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-sm text-gray-600 font-semibold">QRコード予定地</span>
      </div>
    </div>
  );
};

export default QRCodePlaceholder;
