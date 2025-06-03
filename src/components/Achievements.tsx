import { useNavigate } from 'react-router-dom';

const Achievements: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/achievements');
  };

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/achievements');
  };

  const cards = [
    {
      title: 'Innovation Award',
      description: 'Recognized for innovative teaching methods',
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
      ),
      bgColor: 'bg-red-100'
    },
    {
      title: 'Excellence in Education',
      description: 'Top-rated preschool in the region',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L8 13h8l-4-11z" />
          <path d="M4.27 15h15.46l-1.64 4.5L12 18.5l-6.09 1L4.27 15z" />
        </svg>
      ),
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Community Impact',
      description: 'Making a difference in early education',
      icon: (
        <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 9v12h16V9l-8-7zm6 18H6v-9l6-4.5 6 4.5v9z" />
          <path d="M12 10.5l-6 4.5v-9l6-4.5 6 4.5v9l-6 4.5z" />
        </svg>
      ),
      bgColor: 'bg-yellow-100'
    },
    {
      title: "Parent's Choice",
      description: 'Trusted by 1000+ families',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-2 md:mb-4">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1">
              <span className="text-primary">Our</span> <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Celebrating Our Success Stories</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 md:pt-4">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 
                  border-2 border-primary cursor-pointer"
                onClick={handleCardClick}
              >
                <div className={`w-20 h-20 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.description}</p>
              </div>
            ))}
          </div>
          {/* Desktop View Button */}
          <div className="hidden md:flex lg:col-start-4 justify-end mt-6">
            <button 
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/100 transition-colors duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
              onClick={handleViewAll}
            >
              View All Achievements
            </button>
          </div>
          
          {/* Mobile View Button */}
          <div className="md:hidden mt-8 flex justify-center col-span-full">
            <button 
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/100 transition-colors duration-300 text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
              onClick={handleViewAll}
            >
              View All Achievements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
