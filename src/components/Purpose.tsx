import React from 'react';
import { ArrowRight } from 'lucide-react';

const Purpose: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8E7]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden lg:block">
            <img
              src="https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg"
              alt="Kangaroo reading"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          
          <div>
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">
                Our <span className="text-purple-700">Purpose</span>
              </h2>
              <div className="w-20 h-2 bg-yellow-400"></div>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              To create a learning environment that accommodates all individual learners 
              providing them with opportunities to maximise their inherent potential. 
              Our ultimate and cherished dream is to capture the latest and most innovative 
              learning and teaching techniques and to introduce them successfully in India 
              and across the world.
            </p>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold inline-flex items-center group transition-all duration-300">
              Know More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;