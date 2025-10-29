interface RouteNodeProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const RouteNode = ({
  name,
  bgColor = 'bg-gray-200',
  textColor = 'text-gray-900',
  className = '',
}: RouteNodeProps) => {
  return (
    <div
      className={`${bgColor} ${textColor} px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 rounded-lg font-bold shadow-lg text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap ${className}`}
    >
      {name}
    </div>
  );
};

export default RouteNode;
