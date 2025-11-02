import { FaImages } from 'react-icons/fa';

interface ViewPhotosButtonProps {
  onClick: (e: React.MouseEvent) => void;
  bgColor: string;
  hoverColor: string;
}

const ViewPhotosButton = ({ onClick, bgColor, hoverColor }: ViewPhotosButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-2 ${bgColor} text-white rounded-full ${hoverColor} transition-colors shadow-md font-sans border-2 border-yellow-300`}
    >
      <FaImages className="text-yellow-300" />
      フォトを見る
    </button>
  );
};

export default ViewPhotosButton;
