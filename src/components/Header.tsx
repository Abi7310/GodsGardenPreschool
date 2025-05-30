import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center no-underline hover:no-underline focus:no-underline">
                <img 
                  src="/images/logo.png" 
                  alt="God's Garden Preschool Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-primary font-bold text-2xl font-display hover:text-primary-light transition-colors">
                  Gods<span className="text-white hover:text-primary-light">Garden</span>
                </span>
              </a>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary hover:text-primary-light font-medium transition-colors font-display">Home</a>
            <a href="#programs" className="text-primary hover:text-primary-light font-medium transition-colors font-display">Programs</a>
            <a href="#gallery" className="text-primary hover:text-primary-light font-medium transition-colors font-display">Gallery</a>
            <a href="#inquiry" className="text-primary hover:text-primary-light font-medium transition-colors font-display">Inquiry</a>
            <button className="bg-primary hover:bg-primary-dark text-secondary px-6 py-2 rounded-full font-medium transition-colors flex items-center group font-display">
              Contact Us
              <Star className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
            </button>
          </nav>
          
          <button 
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-secondary/90 backdrop-blur-sm shadow-xl absolute top-full left-0 right-0 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-primary hover:text-primary-light font-medium py-2 transition-colors font-display"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#programs" 
            className="text-primary hover:text-primary-light font-medium py-2 transition-colors font-display"
            onClick={() => setIsOpen(false)}
          >
            Programs
          </a>
          <a 
            href="#gallery" 
            className="text-primary hover:text-primary-light font-medium py-2 transition-colors font-display"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a 
            href="#inquiry" 
            className="text-primary hover:text-primary-light font-medium py-2 transition-colors font-display"
            onClick={() => setIsOpen(false)}
          >
            Inquiry
          </a>
          <button className="bg-primary hover:bg-primary-dark text-secondary px-6 py-3 rounded-full font-medium transition-colors w-full flex items-center justify-center font-display">
            Contact Us
            <Star className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;