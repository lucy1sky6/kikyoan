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
      className={`${bgColor} ${textColor} px-6 py-3 rounded-lg font-bold shadow-lg text-lg ${className}`}
    >
      {name}
    </div>
  );
};

export default RouteNode;
