
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { Neighborhoods } from './components/Neighborhoods';
import { Footer } from './components/Footer';
import { FAB } from './components/FAB';

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
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 blur-[150px]" />
      </div>

      <Header />

      <main>
        <Hero />
        <Clients />
        <Testimonials />
        <Neighborhoods />
        <Services />
        <Products />
        <InstagramFeed />
      </main>

      <Footer />
      <FAB />
    </div>
  );
};

export default App;
