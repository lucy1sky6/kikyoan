import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import { ScrollToTopButton } from './components/common';

const KikyoanPage = lazy(() => import('./pages/KikyoanPage'));
const GreengrassPage = lazy(() => import('./pages/GreengrassPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/kikyoan" element={<KikyoanPage />} />
          <Route path="/greengrass" element={<GreengrassPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Suspense>
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
