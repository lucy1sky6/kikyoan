import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  onClick: () => void;
  bgColor: string;
  hoverColor: string;
}

const BackButton = ({ onClick, bgColor, hoverColor }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-4 left-4 px-6 py-3 ${bgColor} text-white rounded-full ${hoverColor} transition-colors shadow-lg z-10 font-sans flex items-center gap-2`}
    >
      <FaArrowLeft />
      戻る
    </button>
  );
};

export default BackButton;
