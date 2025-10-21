import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
        <header className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="logo-placeholder">ロゴ予定地</div>
        </Link>
        <span className="navbar-text header-title mx-auto">
          能登半島小木港で田舎のひととき
        </span>
        <button className="navbar-toggler" type="button" onClick={openOverlay} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`overlay-menu ${isOverlayOpen ? 'open' : ''}`}>
          <a href="#" className="overlay-close-btn" onClick={closeOverlay}>&times;</a>
          <div className="overlay-content">
            <Link to="/" onClick={closeOverlay}>トップ</Link>
            <Link to="/kikyoan" onClick={closeOverlay}>桔梗庵</Link>
            <Link to="/greengrass" onClick={closeOverlay}>greengrass</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
