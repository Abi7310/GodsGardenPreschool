import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      caption: "Art & Creativity"
    },
    {
      url: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg",
      caption: "Learning Activities"
    },
    {
      url: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg",
      caption: "Outdoor Play"
    },
    {
      url: "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg",
      caption: "Music & Movement"
    },
    {
      url: "https://images.pexels.com/photos/8612947/pexels-photo-8612947.jpeg",
      caption: "Story Time"
    },
    {
      url: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg",
      caption: "Social Development"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Life at GodsGarden
          </h2>
          <p className="text-xl text-secondary/80">
            Glimpses of joy, learning, and growth in our preschool
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-primary text-xl font-semibold">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;