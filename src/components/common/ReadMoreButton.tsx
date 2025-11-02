import { FaBookOpen } from 'react-icons/fa';

interface ReadMoreButtonProps {
  onClick: () => void;
  bgColor: string;
  hoverColor: string;
}

const ReadMoreButton = ({ onClick, bgColor, hoverColor }: ReadMoreButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`inline-flex items-center gap-2 px-6 py-2 ${bgColor} text-white rounded-full ${hoverColor} transition-colors shadow-md font-sans`}
    >
      <FaBookOpen className="text-white" />
      続きを読む
    </button>
  );
};

export default ReadMoreButton;
