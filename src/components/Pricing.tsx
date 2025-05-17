import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ageRange: string;
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  description, 
  features,
  ageRange,
  isPopular = false 
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
      isPopular ? 'border-2 border-yellow-400 relative' : 'border border-gray-100'
    }`}>
      {isPopular && (
        <div className="bg-yellow-400 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm font-medium text-blue-600 mb-6">Age Range: {ageRange}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 bg-yellow-100 p-1 rounded-full text-yellow-600 mt-0.5">
                <Check size={16} />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center group ${
            isPopular 
              ? 'bg-yellow-400 hover:bg-yellow-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          Enroll Now
          <Star className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const programs = [
    {
      title: 'Toddler Program',
      price: '599',
      description: 'Early development and discovery',
      ageRange: '18 months - 2.5 years',
      features: [
        'Small group sizes (6:1 ratio)',
        'Basic motor skills development',
        'Introduction to routines',
        'Sensory play activities'
      ]
    },
    {
      title: 'Preschool Program',
      price: '699',
      description: 'Comprehensive early education',
      ageRange: '2.5 - 4 years',
      features: [
        'Structured learning activities',
        'Language development',
        'Social skills building',
        'Arts and music programs',
        'Outdoor playtime',
        'Healthy snacks included'
      ],
      isPopular: true
    },
    {
      title: 'Pre-K Program',
      price: '799',
      description: 'Kindergarten preparation',
      ageRange: '4 - 5 years',
      features: [
        'Advanced learning curriculum',
        'Reading preparation',
        'Math foundations',
        'Science exploration',
        'Field trips',
        'Progress reports',
        'Kindergarten readiness'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect program for your child's age and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <PricingTier
              key={index}
              title={program.title}
              price={program.price}
              description={program.description}
              ageRange={program.ageRange}
              features={program.features}
              isPopular={program.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom schedule? We're happy to accommodate your family's needs.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;