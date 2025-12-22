
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { LocationPage } from './pages/LocationPage';
import { ServicePage } from './pages/ServicePage';

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
        <div className="min-h-screen bg-slate-950 text-white">
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px]" />
            <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 blur-[150px]" />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/localidade/:slug" element={<LocationPage />} />
            <Route path="/servico/:slug" element={<ServicePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
