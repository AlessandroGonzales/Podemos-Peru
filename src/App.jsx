import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LadingPage'; 
import CandidatoDetail from './CandidatoDetatils';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Cuando el usuario entra a la raíz / */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Cuando el usuario hace clic en un candidato */}
        <Route path="/candidato/:id" element={<CandidatoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;