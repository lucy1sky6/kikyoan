import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import KikyoanPage from './pages/KikyoanPage';
import GreengrassPage from './pages/GreengrassPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kikyoan" element={<KikyoanPage />} />
        <Route path="/greengrass" element={<GreengrassPage />} />
      </Routes>
    </Router>
  );
}

export default App;
