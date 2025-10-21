import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import KikyoanPage from './pages/KikyoanPage';
import GreengrassPage from './pages/GreengrassPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kikyoan" element={<KikyoanPage />} />
        <Route path="/greengrass" element={<GreengrassPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;