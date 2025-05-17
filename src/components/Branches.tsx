import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ name, address, phone, hours, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
            <p className="text-gray-600">{address}</p>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-yellow-500 mr-3" />
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-yellow-500 mr-3" />
            <p className="text-gray-600">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Branches: React.FC = () => {
  const branches = [
    {
      name: "LittleStars Downtown",
      address: "123 Rainbow Lane, Downtown, CA 94103",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 7:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/8612977/pexels-photo-8612977.jpeg"
    },
    {
      name: "LittleStars Westside",
      address: "456 Sunshine Ave, Westside, CA 94105",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 7:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg"
    },
    {
      name: "LittleStars Eastside",
      address: "789 Starlight Blvd, Eastside, CA 94107",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 7:00 AM - 6:00 PM",
      image: "https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg"
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600">
            Find a LittleStars Preschool near you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <BranchCard key={index} {...branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;