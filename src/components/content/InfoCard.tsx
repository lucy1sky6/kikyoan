import type { ReactNode } from 'react';

interface InfoCardProps {
  /** カードのタイトル */
  title: string;
  /** カードの内容 */
  children: ReactNode;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: {
    bg: 'from-white to-purple-50',
    title: 'text-purple-800',
  },
  lime: {
    bg: 'from-white to-lime-50',
    title: 'text-lime-800',
  },
  blue: {
    bg: 'from-white to-blue-50',
    title: 'text-blue-800',
  },
};

const InfoCard = ({ title, children, color }: InfoCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      {title && <h3 className={`text-2xl font-bold ${colors.title} mb-4`}>{title}</h3>}
      {children}
    </div>
  );
};

export default InfoCard;
