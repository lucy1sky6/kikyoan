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
      className={`inline-block px-6 py-2 ${bgColor} text-white rounded-full ${hoverColor} transition-colors shadow-md font-sans`}
    >
      📖 続きを読む
    </button>
  );
};

export default ReadMoreButton;
