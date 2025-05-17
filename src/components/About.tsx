import React from 'react';
import { Heart, Book, Users, Calendar, Globe, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      value: "30+",
      label: "Years in preschool education"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: "130+",
      label: "Preschools Globally"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "2,00,000+",
      label: "Students Nurtured"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      value: "6",
      label: "Countries"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-display">
                Pioneers In Preschool Education
              </h2>
              <div className="w-20 h-2 bg-primary mb-6"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                India's most desired preschool brand
              </h3>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                In 1993, GodsGarden International Preschool pioneered a whole new concept in learning 
                as we knew that the conventional rote system of learning would not equip children 
                with skills and abilities for the dawn of a new age of information.
              </p>
              <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
                We believe that children learn best when they are given a choice and voice within 
                an emotionally safe environment. They blossom when they are nurtured by those who 
                have their best interests at heart and use evidence-based teaching-learning strategies 
                that are supported by years of research and up-to-date methods.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary">
                  <div className="mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;