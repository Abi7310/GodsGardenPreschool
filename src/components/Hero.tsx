import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg",
    "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
    "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Preschool environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            Where Little Stars <span className="text-primary">Shine</span> Their Brightest
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-display">
            Nurturing young minds with love, creativity, and playful learning experiences in a safe and stimulating environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-secondary px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center group font-display">
              Schedule a Tour
              <Star className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full font-medium text-lg transition-colors font-display">
              Explore Programs
            </button>
          </div>

          <div className="absolute bottom-8 left-4 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;