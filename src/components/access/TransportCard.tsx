import { type ReactNode } from 'react';

interface TransportCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const TransportCard = ({ icon, title, children }: TransportCardProps) => {
  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-50" style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}>
      <div className="flex items-center gap-2 font-bold text-lg mb-3 text-gray-900">
        <span className="text-2xl flex items-center">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default TransportCard;
