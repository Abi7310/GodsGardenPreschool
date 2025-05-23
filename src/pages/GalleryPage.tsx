import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

interface GalleryEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  images: GalleryImage[];
}

const galleryEvents: GalleryEvent[] = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "May 15, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "School Playground",
    category: "Sports",
    description: "A fun-filled day of sports and activities where our little champions showed their athletic skills and team spirit. The event included races, relay games, and fun challenges for all age groups.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
        caption: "Opening ceremony with our young athletes"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg",
        caption: "Exciting races on the track"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
        caption: "Team relay competition"
      }
    ]
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "April 20, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    category: "Art & Creativity",
    description: "Our annual art exhibition showcased the incredible creativity of our students. The event featured paintings, sculptures, and craftwork created throughout the year by our talented young artists.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg",
        caption: "Young artists at work"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8612947/pexels-photo-8612947.jpeg",
        caption: "Colorful artwork display"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg",
        caption: "Parents admiring the creations"
      }
    ]
  },
  {
    id: 3,
    title: "Science Fair",
    date: "March 10, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "School Hall",
    category: "Learning",
    description: "Our young scientists showcased their innovative projects and experiments at the annual science fair. Students demonstrated their understanding of scientific concepts through interactive displays and presentations.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
        caption: "Science experiments in action"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
        caption: "Students explaining their projects"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg",
        caption: "Judges evaluating the projects"
      }
    ]
  },
  {
    id: 4,
    title: "Annual Day Celebration",
    date: "February 25, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "School Auditorium",
    category: "Cultural",
    description: "Our annual day celebration was a grand event featuring cultural performances, dance shows, and musical presentations by our talented students. The evening was filled with entertainment and showcased the diverse talents of our children.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg",
        caption: "Dance performance by junior group"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8612947/pexels-photo-8612947.jpeg",
        caption: "Musical presentation"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg",
        caption: "Award ceremony"
      }
    ]
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting",
    date: "January 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Classrooms",
    category: "Educational",
    description: "Our quarterly parent-teacher meeting provided an opportunity for parents to discuss their child's progress and development. Teachers shared insights about academic performance and suggested ways to support learning at home.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg",
        caption: "Teachers discussing with parents"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
        caption: "Reviewing student portfolios"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
        caption: "Group discussion session"
      }
    ]
  },
  {
    id: 6,
    title: "Christmas Celebration",
    date: "December 20, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "School Grounds",
    category: "Festival",
    description: "Our Christmas celebration was filled with joy and festive spirit. Children performed carols, exchanged gifts, and participated in various holiday-themed activities. Santa's visit was the highlight of the day!",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg",
        caption: "Christmas tree decoration"
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg",
        caption: "Children singing carols"
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/8612947/pexels-photo-8612947.jpeg",
        caption: "Santa distributing gifts"
      }
    ]
  }
];

const GalleryPage: React.FC = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});

  const nextImage = (eventId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const event = galleryEvents.find(event => event.id === eventId);
    if (!event) return;
    
    const currentIndex = currentImageIndices[eventId] || 0;
    const nextIndex = (currentIndex + 1) % event.images.length;
    
    setCurrentImageIndices({
      ...currentImageIndices,
      [eventId]: nextIndex
    });
  };

  const prevImage = (eventId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const event = galleryEvents.find(event => event.id === eventId);
    if (!event) return;
    
    const currentIndex = currentImageIndices[eventId] || 0;
    const prevIndex = (currentIndex - 1 + event.images.length) % event.images.length;
    
    setCurrentImageIndices({
      ...currentImageIndices,
      [eventId]: prevIndex
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90">
      <Header />
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-white/80">
              Capturing precious moments of learning and joy at GodsGarden
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryEvents.map((event) => {
              const currentImageIndex = currentImageIndices[event.id] || 0;
              const currentImage = event.images[currentImageIndex];
              
              return (
                <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:-translate-y-1">
                  {/* Image carousel with navigation arrows */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={currentImage.url}
                      alt={currentImage.caption}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    
                    {/* Navigation arrows */}
                    <button 
                      onClick={(e) => prevImage(event.id, e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </button>
                    
                    <button 
                      onClick={(e) => nextImage(event.id, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {currentImageIndex + 1}/{event.images.length}
                    </div>
                    
                    {/* Image caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm">{currentImage.caption}</p>
                    </div>
                  </div>
                  
                  {/* Event details */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary/80 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{event.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="flex items-center text-white/80 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
