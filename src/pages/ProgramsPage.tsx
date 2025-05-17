import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, Target, BookOpen, Palette } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const programs = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    ageRange: '2-3 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '2 Hr 45 Mins',
    description: 'Our Playgroup program focuses on early socialization and developmental activities.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    features: [
      'Basic motor skills development',
      'Introduction to colors and shapes',
      'Social interaction activities',
      'Music and movement',
      'Sensory play'
    ]
  },
  {
    id: 'preschool-year-2',
    title: 'Preschool Year 2',
    ageRange: '3-4 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '2 Hr 45 Mins',
    description: 'A structured program focusing on foundational learning and skill development.',
    image: 'https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg',
    features: [
      'Alphabet and number recognition',
      'Basic writing skills',
      'Creative arts and crafts',
      'Story time and language development',
      'Physical activities'
    ]
  },
  {
    id: 'junior-kg',
    title: 'Junior KG',
    ageRange: '4-5 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '3 Hours',
    description: 'Preparing children for formal education through comprehensive learning experiences.',
    image: 'https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg',
    features: [
      'Reading and writing preparation',
      'Basic mathematics',
      'Environmental awareness',
      'Computer fundamentals',
      'Physical education'
    ]
  },
  {
    id: 'senior-kg',
    title: 'Senior KG',
    ageRange: '5-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '3 Hours',
    description: 'Advanced preparation for primary school with focus on academic and social skills.',
    image: 'https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg',
    features: [
      'Advanced reading and writing',
      'Mathematical concepts',
      'Science exploration',
      'Social studies',
      'Art and music'
    ]
  }
];

const ProgramsPage: React.FC = () => {
  const { programId } = useParams();
  const selectedProgram = programId ? programs.find(p => p.id === programId) : null;

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-primary-light transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>

          {selectedProgram ? (
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="h-96 relative">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
                  <div className="p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                      {selectedProgram.title}
                    </h1>
                    <p className="text-xl text-white/90">{selectedProgram.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <p className="text-gray-600">Age Range</p>
                      <p className="text-xl font-semibold">{selectedProgram.ageRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <p className="text-gray-600">Days per Week</p>
                      <p className="text-xl font-semibold">{selectedProgram.daysPerWeek}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <p className="text-gray-600">Hours per Day</p>
                      <p className="text-xl font-semibold">{selectedProgram.hoursPerDay}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Program Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Target className="h-6 w-6 text-primary mr-3 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                Our Programmes
              </h1>
              <div className="w-20 h-2 bg-primary mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program) => (
                  <Link 
                    key={program.id}
                    to={`/programs/${program.id}`}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all"
                  >
                    <div className="relative h-64">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent p-6 flex items-end">
                        <h2 className="text-2xl font-bold text-white">{program.title}</h2>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-900">{program.ageRange}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-900">{program.daysPerWeek}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-900">{program.hoursPerDay}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;