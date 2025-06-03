import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header';

const AchievementsPage: React.FC = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 1,
      title: 'Excellence in Early Education',
      description: 'Awarded for outstanding curriculum implementation and child development programs.',
      details: 'Recognized by the National Association for the Education of Young Children (NAEYC) for our comprehensive early childhood education program that exceeds national standards.',
      icon: (
        <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
      ),
      date: '2024',
      bgColor: 'bg-yellow-100',
    },
    {
      id: 2,
      title: 'Innovation in Teaching',
      description: 'Recognized for implementing cutting-edge teaching methodologies.',
      details: 'Awarded by the State Education Board for our innovative use of technology and experiential learning techniques in early childhood education.',
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 11.5L4.5 9 12 4.5 19.5 9 12 14.5z" />
          <path d="M9.5 15.81l7-3.81v6.38l-7 3.81V15.81z" />
        </svg>
      ),
      date: '2023',
      bgColor: 'bg-blue-100',
    },
    {
      id: 3,
      title: 'Community Impact',
      description: 'Recognized for outstanding contribution to the local community.',
      details: 'Awarded by the City Council for our community outreach programs and initiatives that have positively impacted local families and children.',
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
      date: '2023',
      bgColor: 'bg-green-100',
    },
    {
      id: 4,
      title: 'Parent\'s Choice',
      description: 'Voted #1 Preschool by local parents for three consecutive years.',
      details: 'Consistently recognized by parents for our nurturing environment, dedicated staff, and exceptional early learning programs that prepare children for future academic success.',
      icon: (
        <svg className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      date: '2024',
      bgColor: 'bg-pink-100',
    },
    {
      id: 5,
      title: 'Green School Certification',
      description: 'Recognized for our commitment to environmental sustainability.',
      details: 'Awarded by the Green Schools Alliance for our eco-friendly campus, sustainable practices, and environmental education programs that teach children to be responsible global citizens.',
      icon: (
        <svg className="w-16 h-16 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 12l8 10 8-10z" />
          <path d="M12 6l-5 6h10l-5-6z" />
          <path d="M15 12H9v4h6v-4z" />
        </svg>
      ),
      date: '2023',
      bgColor: 'bg-emerald-100',
    },
    {
      id: 6,
      title: 'Teacher Excellence',
      description: 'Our educators recognized for outstanding teaching practices.',
      details: 'Multiple faculty members received the Distinguished Educator Award for their innovative teaching methods and dedication to early childhood development.',
      icon: (
        <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      date: '2024',
      bgColor: 'bg-purple-100',
    },
    {
      id: 7,
      title: 'Creative Curriculum',
      description: 'Awarded for innovative and effective curriculum design.',
      details: 'Recognized by the Department of Education for our creative curriculum that balances academic learning with play-based activities and social-emotional development.',
      icon: (
        <svg className="w-16 h-16 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      date: '2023',
      bgColor: 'bg-indigo-100',
    },
    {
      id: 8,
      title: 'Health & Safety Excellence',
      description: 'Awarded for maintaining the highest health and safety standards.',
      details: 'Recognized by the Health Department for our exceptional health and safety protocols, clean facilities, and commitment to creating a safe learning environment for all children.',
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 12l8 10 8-10z" />
          <path d="M12 6l-5 6h10l-5-6z" />
          <path d="M15 12H9v4h6v-4z" />
        </svg>
      ),
      date: '2024',
      bgColor: 'bg-red-100',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-primary mb-8 hover:opacity-80 transition-opacity"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        
        <div className="w-full text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-primary">Achievements</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white hover:border-primary transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              {/* Card Header */}
              <div className={`${achievement.bgColor} p-6 flex items-center justify-center`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h2>
                
                <p className="text-gray-600 mb-4 flex-1">
                  {achievement.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center group-hover:underline"
                    onClick={() => {}}
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
