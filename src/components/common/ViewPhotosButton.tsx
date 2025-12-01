import { FaImages } from 'react-icons/fa';

interface ViewPhotosButtonProps {
  onClick: (e: React.MouseEvent) => void;
  color?: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: 'bg-purple-600 hover:bg-purple-700',
  lime: 'bg-lime-600 hover:bg-lime-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
};

const ViewPhotosButton = ({ onClick, color = 'purple' }: ViewPhotosButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-2 ${colorClasses[color]} text-white rounded-full transition-colors shadow-md font-sans border-2 border-yellow-300`}
    >
      <FaImages className="text-yellow-300" />
      フォトを見る
    </button>
  );
};

export default ViewPhotosButton;
