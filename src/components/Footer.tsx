import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-primary-light font-bold text-2xl">Gods<span className="text-primary">Garden</span></span>
            </div>
            <p className="text-gray-300 mb-6">
              Nurturing young minds and creating bright futures through play-based learning and discovery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary-light transition-colors">Toddler Program</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary-light transition-colors">Preschool</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary-light transition-colors">Pre-K</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">Summer Camp</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Parents</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">Parent Handbook</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">Health & Safety</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">Calendar</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">Forms</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-primary-light flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Rainbow Lane, Sunshine City, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary-light" size={18} />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-primary-light transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary-light" size={18} />
                <a href="mailto:info@godsgarden.com" className="text-gray-300 hover:text-primary-light transition-colors">
                  info@godsgarden.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GodsGarden Preschool. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Star className="text-primary-light mr-2" size={16} />
            <span className="text-gray-300">Licensed by the Department of Early Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;