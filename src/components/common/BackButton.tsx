import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  /** カスタムのonClick。指定しない場合はrouter履歴を戻る */
  onClick?: () => void;
  /** 戻り先のパス。onClickが未指定の場合に使用 */
  to?: string;
  color?: 'purple' | 'lime' | 'blue' | 'gray';
}

const colorClasses = {
  purple: 'bg-purple-600 hover:bg-purple-700',
  lime: 'bg-lime-600 hover:bg-lime-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
  gray: 'bg-gray-800 hover:bg-gray-700',
};

const BackButton = ({ onClick, to = '/', color = 'purple' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed top-4 left-4 px-6 py-3 ${colorClasses[color]} text-white rounded-full transition-colors shadow-lg z-10 font-sans flex items-center gap-2`}
    >
      <FaArrowLeft />
      戻る
    </button>
  );
};

export default BackButton;
