import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import KikyoanPage from './pages/KikyoanPage';
import GreengrassPage from './pages/GreengrassPage';
import GalleryPage from './pages/GalleryPage';
import { ScrollToTopButton } from './components/common';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/kikyoan" element={<KikyoanPage />} />
        <Route path="/greengrass" element={<GreengrassPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50">
        <AnimatedRoutes />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
