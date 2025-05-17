import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Parent email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-400 to-blue-400 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Community
              </h2>
              <p className="text-lg opacity-90">
                Subscribe to our newsletter for parenting tips, event updates, and classroom news.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Welcome to Our Family!</h3>
                <p>You've successfully subscribed to our parent newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-yellow-500 hover:bg-yellow-50 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <Star className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
            
            <p className="text-sm opacity-80 mt-4 text-center">
              Join our community of parents. Updates sent monthly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;