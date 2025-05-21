import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, Target, BookOpen, Palette, X, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ProgramCard.module.css';

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
  },
  {
    id: 'montessori',
    title: 'Montessori Program',
    ageRange: '2.5-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '4 Hours',
    description: 'Child-centered educational approach based on scientific observations of children.',
    image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg',
    features: [
      'Self-directed learning',
      'Mixed age classrooms',
      'Specialized Montessori materials',
      'Practical life exercises',
      'Sensorial development'
    ]
  },
  {
    id: 'special-needs',
    title: 'Special Needs Program',
    ageRange: '2-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '3 Hours',
    description: 'Specialized education program designed to support children with diverse learning needs.',
    image: 'https://images.pexels.com/photos/6257077/pexels-photo-6257077.jpeg',
    features: [
      'Individualized learning plans',
      'Speech and language therapy',
      'Occupational therapy',
      'Social skills development',
      'Sensory integration activities'
    ]
  },
  {
    id: 'bilingual',
    title: 'Bilingual Program',
    ageRange: '3-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '4 Hours',
    description: 'Immersive bilingual education fostering language development in both English and local language.',
    image: 'https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg',
    features: [
      'Dual language instruction',
      'Cultural awareness activities',
      'Interactive language learning',
      'Native-speaking teachers',
      'Multicultural curriculum'
    ]
  },
  {
    id: 'summer-camp',
    title: 'Summer Camp',
    ageRange: '3-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '6 Hours',
    description: 'Engaging summer program combining fun activities with educational experiences.',
    image: 'https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg',
    features: [
      'Outdoor adventures',
      'Arts and crafts',
      'Sports activities',
      'Nature exploration',
      'Team building games'
    ]
  },
  {
    id: 'after-school',
    title: 'After School Care',
    ageRange: '4-6 years',
    daysPerWeek: '5 Days',
    hoursPerDay: '3 Hours',
    description: 'Extended day program providing enrichment activities and homework support.',
    image: 'https://images.pexels.com/photos/8613054/pexels-photo-8613054.jpeg',
    features: [
      'Homework assistance',
      'Recreational activities',
      'Supervised play',
      'Snack time',
      'Special interest clubs'
    ]
  }
];

const ProgramsPage: React.FC = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const selectedProgram = programId ? programs.find(p => p.id === programId) : null;
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  const handleCardFlip = (programId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setFlippedCards(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  const handleViewDetails = (e: React.MouseEvent, programId: string) => {
    e.preventDefault();
    navigate(`/programs/${programId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90">
      <Header />
      <main className="pt-24 pb-20 relative">
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-110 ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } z-50`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>

        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-primary-light transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg">Back to Home</span>
            </Link>
          </div>

          {selectedProgram ? (
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl transform transition-all">
              <div className="h-[500px] relative">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                  <div className="p-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                      {selectedProgram.title}
                    </h1>
                    <p className="text-2xl text-white/90 max-w-3xl">{selectedProgram.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                  <div className="flex items-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm shadow-lg">
                    <Users className="h-12 w-12 text-primary mr-6" />
                    <div>
                      <p className="text-gray-600 text-lg">Age Range</p>
                      <p className="text-2xl font-semibold text-gray-900">{selectedProgram.ageRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm shadow-lg">
                    <Calendar className="h-12 w-12 text-primary mr-6" />
                    <div>
                      <p className="text-gray-600 text-lg">Days per Week</p>
                      <p className="text-2xl font-semibold text-gray-900">{selectedProgram.daysPerWeek}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm shadow-lg">
                    <Clock className="h-12 w-12 text-primary mr-6" />
                    <div>
                      <p className="text-gray-600 text-lg">Hours per Day</p>
                      <p className="text-2xl font-semibold text-gray-900">{selectedProgram.hoursPerDay}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-gray-900">Program Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-6 bg-white/50 rounded-2xl backdrop-blur-sm shadow-lg group hover:bg-white/80 transition-all">
                      <Target className="h-8 w-8 text-primary mr-4 mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-xl text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                  Our Programs
                </h1>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                  <div 
                    key={program.id}
                    className={`${styles.card} ${flippedCards[program.id] ? styles.cardFlipped : ''}`}
                  >
                    <div className={styles.cardInner}>
                      <div className={`${styles.cardFront}`}>
                        <div className="relative h-40">
                          <img 
                            src={program.image} 
                            alt={program.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent p-3.5 flex items-end">
                            <h2 className="text-xl font-bold text-white">{program.title}</h2>
                          </div>
                        </div>
                        <div className={styles.cardContent}>
                          <div className="p-4 space-y-3">
                            <div className="flex items-center">
                              <Users className="h-5 w-5 text-[#FFC107] mr-2.5" />
                              <span className="text-base text-gray-900">{program.ageRange}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 text-[#FFC107] mr-2.5" />
                              <span className="text-base text-gray-900">{program.daysPerWeek}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 text-[#FFC107] mr-2.5" />
                              <span className="text-base text-gray-900">{program.hoursPerDay}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button
                            onClick={(e) => handleCardFlip(program.id, e)}
                            className="w-full px-5 py-2.5 bg-[#FFC107] text-white rounded-full hover:bg-[#FFB300] transition-colors text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                      <div className={`${styles.cardBack}`}>
                        <div className={styles.cardContent}>
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                              <h2 className="text-lg font-bold text-gray-900">{program.title}</h2>
                              <button
                                onClick={(e) => handleCardFlip(program.id, e)}
                                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors group"
                              >
                                <X className="h-5 w-5 text-gray-600 group-hover:rotate-90 transition-transform" />
                              </button>
                            </div>
                            <p className="text-base text-gray-700 mb-3 line-clamp-2">{program.description}</p>
                            <div>
                              <h3 className="text-base font-semibold mb-2.5 text-gray-900">Program Features</h3>
                              <ul className="space-y-2">
                                {program.features.map((feature, index) => (
                                  <li key={index} className="flex items-start group">
                                    <Target className="h-4 w-4 text-[#FFC107] mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm text-gray-700 line-clamp-1">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button 
                            onClick={(e) => handleViewDetails(e, program.id)}
                            className="w-full px-5 py-2.5 bg-[#FFC107] text-white text-base font-semibold rounded-full hover:bg-[#FFB300] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            View Full Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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