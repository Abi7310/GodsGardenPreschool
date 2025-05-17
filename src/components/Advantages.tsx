import React from 'react';
import { Shield, Heart, Brain, Clock, Apple, Users } from 'lucide-react';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/20 hover:shadow-md transition-shadow">
      <div className="p-3 bg-primary/10 text-primary rounded-xl inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-secondary/80">{description}</p>
    </div>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Environment",
      description: "State-of-the-art security systems and strict safety protocols to protect your child."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Caring Teachers",
      description: "Experienced, certified educators who are passionate about early childhood development."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Learning Through Play",
      description: "Innovative curriculum that makes learning fun and engaging for young minds."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Hours",
      description: "Extended hours to accommodate working parents' schedules with early drop-off and late pick-up."
    },
    {
      icon: <Apple className="h-6 w-6" />,
      title: "Healthy Meals",
      description: "Nutritious meals and snacks prepared fresh daily in our kitchen."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Small Class Sizes",
      description: "Low student-to-teacher ratios ensuring individual attention for each child."
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Why Choose GodsGarden?
          </h2>
          <p className="text-xl text-secondary/80">
            Discover what makes our preschool special and how we ensure the best care for your child
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;