interface ListCardProps {
  /** カードのタイトル */
  title: string;
  /** リスト項目 */
  items: string[];
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

const ListCard = ({ title, items, color }: ListCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      <h3 className={`text-2xl font-bold ${colors.title} mb-4`}>{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">・</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
