interface LocationNodeProps {
  name: string;
  bgColor: string;
  textColor?: string;
  photoAreaColor: string;
  borderColor?: string;
  className?: string;
  photoSrc?: string;
}

const LocationNode = ({
  name,
  bgColor,
  textColor = 'text-gray-900',
  photoAreaColor,
  borderColor = 'border-gray-400',
  className = '',
  photoSrc,
}: LocationNodeProps) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-lg font-bold shadow-md inline-flex items-stretch text-lg overflow-hidden ${className}`}
    >
      <span className="px-4 py-3">{name}</span>
      <div
        className={`w-16 ${photoAreaColor} border-l-2 ${borderColor} flex items-center justify-center text-xs relative`}
      >
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          '写真'
        )}
      </div>
    </div>
  );
};

export default LocationNode;
