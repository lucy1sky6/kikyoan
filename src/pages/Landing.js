import React from 'react';
import { Link } from 'react-router-dom';
import KikyoanSection from '../components/KikyoanSection';
import GreengrassSection from '../components/GreengrassSection';
import Access from '../components/Access';
import Contact from '../components/Contact';
import './Landing.css'; // スタイルを別ファイルで管理

function Landing() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center kikyoan-bg">
            <Link to="/kikyoan" className="text-decoration-none">
              <KikyoanSection />
            </Link>
          </div>
          <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center greengrass-bg">
            <Link to="/greengrass" className="text-decoration-none">
              <GreengrassSection />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Access />
        <Contact />
      </div>
    </main>
  );
}

export default Landing;
