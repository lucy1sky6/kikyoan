import type { ReactNode } from 'react';

interface PriceItem {
  label: string;
  price: string;
}

interface PriceCardProps {
  /** カードのタイトル */
  title: string;
  /** 価格リスト */
  items: PriceItem[];
  /** 注釈 */
  note?: ReactNode;
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

const PriceCard = ({ title, items, note, color }: PriceCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      <h3 className={`text-2xl font-bold ${colors.title} mb-4`}>{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.label}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
      {note && <p className="text-base text-gray-600 mt-4 ml-4">{note}</p>}
    </div>
  );
};

export default PriceCard;
