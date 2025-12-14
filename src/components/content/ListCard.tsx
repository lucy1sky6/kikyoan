interface CategoryItem {
  category: string;
  items: string[];
}

interface ListCardProps {
  /** カードのタイトル */
  title: string;
  /** リスト項目（単純なリストまたはカテゴリ付きリスト） */
  items?: string[];
  /** カテゴリ付きリスト項目 */
  categories?: CategoryItem[];
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: {
    bg: 'from-white to-purple-50',
    title: 'text-purple-800',
    category: 'text-purple-700',
  },
  lime: {
    bg: 'from-white to-lime-50',
    title: 'text-lime-800',
    category: 'text-lime-700',
  },
  blue: {
    bg: 'from-white to-blue-50',
    title: 'text-blue-800',
    category: 'text-blue-700',
  },
};

const ListCard = ({ title, items, categories, color }: ListCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      <h3 className={`text-2xl font-bold ${colors.title} mb-4`}>{title}</h3>

      {/* 単純なリスト */}
      {items && (
        <ul className="space-y-2 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">・</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* カテゴリ付きリスト */}
      {categories && (
        <div className="space-y-4">
          {categories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h4 className={`font-bold mb-2 ${colors.category}`}>{cat.category}</h4>
              <ul className="space-y-1 text-gray-700 ml-4">
                {cat.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCard;
