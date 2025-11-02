interface RouteStopNodeProps {
  name: string;
  bgColor: string;
  textColor?: string;
  photoAreaColor: string;
  borderColor?: string;
  className?: string;
  photoSrc?: string;
}

const RouteStopNode = ({
  name,
  bgColor,
  textColor = 'text-gray-900',
  photoAreaColor,
  borderColor = 'border-gray-400',
  className = '',
  photoSrc,
}: RouteStopNodeProps) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-lg font-bold inline-flex items-stretch text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden ${className}`}
      style={className.includes('shadow-none') ? {} : { boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}
    >
      <span className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 whitespace-nowrap">{name}</span>
      <div
        className={`w-10 sm:w-12 md:w-14 lg:w-16 ${photoAreaColor} flex items-center justify-center text-xs relative`}
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

export default RouteStopNode;
