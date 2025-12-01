import { FaBookOpen } from 'react-icons/fa';
import ActionButton from './ActionButton';

interface ReadMoreButtonProps {
  onClick: () => void;
  color?: 'purple' | 'lime' | 'blue';
}

const ReadMoreButton = ({ onClick, color = 'purple' }: ReadMoreButtonProps) => {
  return (
    <ActionButton
      onClick={onClick}
      icon={<FaBookOpen className="text-white" />}
      color={color}
      stopPropagation
    >
      続きを読む
    </ActionButton>
  );
};

export default ReadMoreButton;
