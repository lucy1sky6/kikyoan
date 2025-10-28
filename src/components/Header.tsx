import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-800 hover:text-gray-600">
          <div className="border-2 border-gray-400 px-4 py-2 text-sm">
            ロゴ予定地
          </div>
        </Link>

        <span className="text-lg font-medium text-gray-700 hidden md:block">
          能登半島小木港で田舎のひととき
        </span>

        <button
          onClick={openOverlay}
          className="p-2 hover:bg-gray-100 rounded"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
            <button
              onClick={closeOverlay}
              className="absolute top-8 right-8 text-white text-5xl hover:text-gray-300"
              aria-label="Close menu"
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-8 text-white text-2xl">
              <Link
                to="/"
                onClick={closeOverlay}
                className="hover:text-gray-300 transition"
              >
                トップ
              </Link>
              <Link
                to="/kikyoan"
                onClick={closeOverlay}
                className="hover:text-gray-300 transition"
              >
                桔梗庵
              </Link>
              <Link
                to="/greengrass"
                onClick={closeOverlay}
                className="hover:text-gray-300 transition"
              >
                greengrass
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
