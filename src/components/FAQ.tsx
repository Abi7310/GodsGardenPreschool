import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-yellow-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'What are your operating hours?',
      answer: 'We are open Monday through Friday from 7:00 AM to 6:00 PM. We offer flexible drop-off and pick-up times to accommodate working parents\' schedules.'
    },
    {
      question: 'What is your teacher-to-child ratio?',
      answer: 'Our teacher-to-child ratios exceed state requirements. For toddlers, we maintain a 6:1 ratio, for preschool 8:1, and for pre-K 10:1. This ensures each child receives the attention they need.'
    },
    {
      question: 'Do you provide meals and snacks?',
      answer: 'We provide healthy morning and afternoon snacks. Parents are required to pack a nutritious lunch. We are a nut-free facility and can accommodate special dietary requirements.'
    },
    {
      question: 'What is your sick child policy?',
      answer: 'Children must be fever-free for 24 hours without medication before returning to school. We have strict health protocols to protect all children and staff.'
    },
    {
      question: 'How do you handle nap time?',
      answer: 'We have designated quiet time after lunch. Each child has their own rest mat, and while sleep isn\'t mandatory, we encourage peaceful relaxation.'
    },
    {
      question: 'What is your discipline policy?',
      answer: 'We use positive reinforcement and redirection techniques. We focus on teaching children problem-solving skills and emotional regulation in age-appropriate ways.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our preschool.
            </p>
          </div>
          
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600"
            >
              Contact our staff
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;