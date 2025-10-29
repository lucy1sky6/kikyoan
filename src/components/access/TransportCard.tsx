import { type ReactNode } from 'react';

interface TransportCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

const TransportCard = ({ icon, title, children }: TransportCardProps) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
      <p className="font-bold text-lg mb-3 text-gray-900">
        {icon} {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default TransportCard;
