import { FaArrowUp } from 'react-icons/fa';
import { useScrollToTop } from '../../hooks';

const ScrollToTopButton = () => {
  const scrollToTop = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-50 hover:scale-110 font-sans"
      aria-label="トップに戻る"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;
