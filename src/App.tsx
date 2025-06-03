import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Purpose from './components/Purpose';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Branches from './components/Branches';
import Footer from './components/Footer';
import ProgramsPage from './pages/ProgramsPage';
import GalleryPage from './pages/GalleryPage';
import Achievements from './components/Achievements';
import AchievementsPage from './pages/AchievementsPage';

function App() {
  useEffect(() => {
    document.title = 'GodsGarden - Nurturing Young Minds';
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#gallery') {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Programs />
                <Achievements />
                <Purpose />
                <Gallery />
                <Advantages />
                <Testimonials />
                <Branches />
              </main>
              <Footer />
            </>
          } />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:programId" element={<ProgramsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App