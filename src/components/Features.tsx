import React from 'react';
import { Book, Users, Target, Palette, CheckSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary font-display">{title}</h3>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Book className="h-12 w-12 text-secondary" />,
      title: 'Curriculum & Pedagogy'
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: 'Teacher Training & Development'
    },
    {
      icon: <Target className="h-12 w-12 text-secondary" />,
      title: 'Tools & Equipment'
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: 'Immersive Learning'
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-secondary" />,
      title: 'Outcome & Assessments'
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Advanced <span className="text-primary">Curriculum & Pedagogy</span>
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl font-display">
            Evidence from research suggests that children enrolled in a high quality early childhood education 
            program achieve more success at school. As adults they have better career opportunities, improved 
            health, and lower levels of dependence than those who do not attend an early education program.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-full font-medium text-lg transition-colors inline-flex items-center font-display">
              Know More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;