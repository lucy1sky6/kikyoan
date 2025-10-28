const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="text-gray-800 hover:text-gray-600 cursor-pointer"
        >
          <div className="border-2 border-gray-400 px-4 py-2 text-sm">
            ロゴ予定地
          </div>
        </button>

        <span className="text-lg font-medium text-gray-700 hidden md:block">
          能登半島小木港で田舎のひととき
        </span>

        <div className="w-10" /> {/* Spacer for layout balance */}
      </div>
    </header>
  );
};

export default Header;
