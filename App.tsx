
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { CityPage } from './pages/CityPage';
import { NeighborhoodPage } from './pages/NeighborhoodPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<CityPage />} />
          <Route path="/bairro/:slug" element={<NeighborhoodPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
