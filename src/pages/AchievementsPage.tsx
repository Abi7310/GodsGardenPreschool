import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrophy, FaAward, FaGraduationCap, FaHeart, FaHandsHelping, FaChild, FaBookOpen } from 'react-icons/fa';
import Header from '../components/Header';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  images: string[];
  details?: string;
  date?: string;
}

const AchievementsPage: React.FC = () => {
  const navigate = useNavigate();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = (e: React.MouseEvent, achievementId: number) => {
    e.stopPropagation();
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement?.images?.length) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === achievement.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent, achievementId: number) => {
    e.stopPropagation();
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement?.images?.length) return;
    
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? achievement.images.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
    setCurrentImageIndex(0); // Reset to first image when flipping
  };

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Excellence in Early Education',
      description: 'Awarded for outstanding curriculum implementation and child development programs.',
      details: 'Recognized by the National Association for the Education of Young Children (NAEYC) for our comprehensive early childhood education program that exceeds national standards.',
      images: [
        'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      icon: <FaTrophy className="w-16 h-16 text-yellow-500" />,
      date: '2024',
      bgColor: 'bg-yellow-100',
    },
    {
      id: 2,
      title: 'Innovation in Teaching',
      description: 'Recognized for implementing cutting-edge teaching methodologies.',
      details: 'Awarded by the State Education Board for our innovative use of technology and experiential learning techniques in early childhood education.',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600195077909-46cc35910397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Example second image
      ],
      icon: <FaGraduationCap className="w-16 h-16 text-blue-500" />,
      date: '2023',
      bgColor: 'bg-blue-100',
    },
    {
      id: 3,
      title: 'Community Impact',
      description: 'Recognized for outstanding contribution to the local community.',
      details: 'Awarded by the City Council for our community outreach programs and initiatives that have positively impacted local families and children.',
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Example second image
      ],
      icon: <FaAward className="w-16 h-16 text-green-500" />,
      date: '2023',
      bgColor: 'bg-green-100',
    },
    {
      id: 4,
      title: "Parent's Choice",
      description: 'Voted #1 Preschool by local parents for three consecutive years.',
      details: 'Consistently recognized by parents for our nurturing environment, dedicated staff, and exceptional early learning programs that prepare children for future academic success.',
      images: [
        'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Example second image
      ],
      icon: <FaHeart className="w-16 h-16 text-pink-500" />,
      date: '2022-2024',
      bgColor: 'bg-pink-100',
    },
    {
      id: 5,
      title: 'Green School Certification',
      description: 'Recognized for our commitment to environmental sustainability.',
      details: 'Awarded by the Green Schools Alliance for our eco-friendly campus, sustainable practices, and environmental education programs that teach children to be responsible global citizens.',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Example second image
      ],
      icon: <FaChild className="w-16 h-16 text-emerald-500" />,
      date: '2023',
      bgColor: 'bg-emerald-100',
    },
    {
      id: 6,
      title: 'Health & Safety Excellence',
      description: 'Awarded for maintaining the highest standards of health and safety.',
      details: 'Certified by the National Health and Safety Association for our rigorous safety protocols, clean facilities, and commitment to providing a secure learning environment.',
      images: [
        'https://images.unsplash.com/photo-1600195077909-46cc35910397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Example second image
      ],
      icon: <FaHandsHelping className="w-16 h-16 text-red-500" />,
      date: '2024',
      bgColor: 'bg-red-100',
    },
    {
      id: 7,
      title: 'Creative Curriculum',
      description: 'Awarded for innovative and effective curriculum design.',
      details: 'Recognized by the Department of Education for our creative curriculum that balances academic learning with play-based activities and social-emotional development.',
      icon: <FaBookOpen className="w-16 h-16 text-indigo-500" />,
      date: '2023',
      bgColor: 'bg-indigo-100',
      images: [
        'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
    },
    {
      id: 8,
      title: 'Health & Safety Excellence',
      description: 'Awarded for maintaining the highest health and safety standards.',
      details: 'Recognized by the Health Department for our exceptional health and safety protocols, clean facilities, and commitment to creating a safe learning environment for all children.',
      icon: <FaHandsHelping className="w-16 h-16 text-red-500" />,
      date: '2024',
      bgColor: 'bg-red-100',
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600195077909-46cc35910397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header bgColor="bg-green-900/90" textColor="text-white" />
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-primary hover:text-primary-dark transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Our <span className="text-primary">Achievements</span>
          </h1>
          <div className="w-24"></div> {/* Spacer to balance the flex layout */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="relative w-full h-[320px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div 
                className={`relative w-full h-full text-center transition-transform duration-700 ${flippedCard === achievement.id ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === achievement.id ? 'rotateY(180deg)' : 'rotateY(0)'
                }}
              >
                {/* Front of the card */}
                <div 
                  className="absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <div className={`w-20 h-20 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        {achievement.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{achievement.title}</h3>
                      <p className="text-gray-600 mb-6 text-center">{achievement.description}</p>
                    </div>
                    <button 
                      className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors mt-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(achievement.id);
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
                
                {/* Back of the card */}
                <div 
                  className="absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow -mt-6 -mx-6 overflow-hidden relative group">
                      {achievement.images && achievement.images.length > 0 && (
                        <div className="relative w-full h-full">
                          <img 
                            src={achievement.images[currentImageIndex]} 
                            alt={`${achievement.title} ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {achievement.images.length > 1 && (
                            <>
                              <button 
                                onClick={(e) => prevImage(e, achievement.id)}
                                className="absolute left-10 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white shadow-sm hover:shadow transition-all z-20"
                                aria-label="Previous image"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <button 
                                onClick={(e) => nextImage(e, achievement.id)}
                                className="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white shadow-sm hover:shadow transition-all z-20"
                                aria-label="Next image"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                                {achievement.images.map((_: string, index: number) => (
                                  <button 
                                    key={index}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                                    aria-label={`Go to image ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-900 text-center">
                        {achievement.title} 
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          ({currentImageIndex + 1}/{achievement.images.length})
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button 
                    className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-900 hover:text-gray-700 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(achievement.id);
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
