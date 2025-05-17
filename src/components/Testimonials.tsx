import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Thompson',
    role: 'Parent of Alex, Age 4',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'LittleStars has been amazing for our son. The teachers are caring and attentive, and we\'ve seen tremendous growth in his social skills and learning.',
    rating: 5
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Parent of Lily, Age 3',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The structured yet playful approach to learning has helped our daughter thrive. She loves going to school every day!',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Parent of Twins',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'As a parent of twins, I appreciate how the staff gives individual attention to each child while fostering a sense of community.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parent Testimonials
          </h2>
          <p className="text-xl opacity-90">
            See what our families have to say about their GodsGarden experience.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12">
            <div 
              className={`transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-white mb-4"
                />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                      className="text-primary-light"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="opacity-80">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;