import React from 'react';
import { Calendar, Clock, Users, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  image: string;
  details?: {
    ageRange?: string;
    daysPerWeek?: string;
    hoursPerDay?: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, image, details }) => {
  return (
    <Link to="/programs" className="block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="relative h-64">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/80 to-transparent p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <div className="bg-primary hover:bg-primary-dark p-2 rounded-full transition-colors flex items-center justify-center">
                <Plus className="h-4 w-4 text-secondary hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>
        
        {details && (
          <div className="p-6 space-y-4">
            {details.ageRange && (
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-secondary font-medium">{details.ageRange}</p>
                  <p className="text-sm text-secondary/60">Kids</p>
                </div>
              </div>
            )}
            
            {details.daysPerWeek && (
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-secondary font-medium">{details.daysPerWeek}</p>
                  <p className="text-sm text-secondary/60">a week</p>
                </div>
              </div>
            )}
            
            {details.hoursPerDay && (
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-secondary font-medium">{details.hoursPerDay}</p>
                  <p className="text-sm text-secondary/60">per day</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Playgroup",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      details: {
        ageRange: "2-3 years",
        daysPerWeek: "5 Days",
        hoursPerDay: "2 Hr 45 Mins"
      }
    },
    {
      title: "Preschool Year 2",
      image: "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg",
      details: {
        ageRange: "3-4 years",
        daysPerWeek: "5 Days",
        hoursPerDay: "2 Hr 45 Mins"
      }
    },
    {
      title: "Junior KG",
      image: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
      details: {
        ageRange: "4-5 years",
        daysPerWeek: "5 Days",
        hoursPerDay: "3 Hours"
      }
    },
    {
      title: "Senior KG",
      image: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg",
      details: {
        ageRange: "5-6 years",
        daysPerWeek: "5 Days",
        hoursPerDay: "3 Hours"
      }
    }
  ];

  return (
    <section id="programs" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
              Our Programmes
            </h2>
            <div className="w-20 h-2 bg-primary mt-4"></div>
          </div>
          <Link 
            to="/programs"
            className="bg-primary hover:bg-primary-dark text-secondary px-6 py-3 rounded-full font-medium transition-colors flex items-center group"
          >
            View All
            <Plus className="ml-2 h-5 w-5 text-secondary group-hover:rotate-90 transition-all duration-300" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;