"use client"
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for our data
interface CardData {
  id: string;
  title: string;
  mainImage: string;
  relatedImages: string[];
}

// Sample data for the cards
const cardsData: CardData[] = [
  {
    id: 'football',
    title: 'Football Fields',
    mainImage: 'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939360/Football_ts15hq.png',
    relatedImages: [
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939360/Football_ts15hq.png',
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939360/Football_ts15hq.png',
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939360/Football_ts15hq.png',
    ],
  },
  {
    id: 'basketball',
    title: 'Basketball Courts',
    mainImage: 'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Basketball_sgpvk9.png',
    relatedImages: [
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Basketball_sgpvk9.png',
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Basketball_sgpvk9.png',
      'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Basketball_sgpvk9.png',
    ],
  },
  {
    id: 'swimming',
    title: 'Swimming Pool',
    mainImage: 'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Swimming_Pool_e5sevl.png',
    relatedImages: [
      'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'tennis',
    title: 'Tennis Courts',
    mainImage: 'https://res.cloudinary.com/dfhisjy9w/image/upload/v1740939361/Tennis_Court_ksbbvr.png',
    relatedImages: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622279457486-28f24ae071c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
];

// Card component
const Card: React.FC<{ card: CardData; onClick: () => void }> = ({ card, onClick }) => {
  return (
    <div 
      className="relative overflow-hidden shadow-lg cursor-pointer h-[350px]"
      onClick={onClick}
    >
      <img 
        src={card.mainImage} 
        alt={card.title} 
        className="w-full h-[350px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black bg-opacity-50">
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
    </div>
  );
};

// Carousel component for the popup
const ImageCarousel: React.FC<{ 
  images: string[]; 
  title: string;
  onClose: () => void;
}> = ({ images, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="relative flex-grow">
          <div className="h-[60vh] relative">
            <img 
              src={images[currentIndex]} 
              alt={`${title} ${currentIndex + 1}`} 
              className="w-full h-full object-contain"
            />
            
            <button 
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="p-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
const SportsCardCarousel: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const openPopup = (card: CardData) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8 text-start text-[#032D5A]">Sports Facilities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card) => (
          <Card 
            key={card.id} 
            card={card} 
            onClick={() => openPopup(card)} 
          />
        ))}
      </div>
      
      {selectedCard && (
        <ImageCarousel 
          images={selectedCard.relatedImages}
          title={selectedCard.title}
          onClose={closePopup}
        />
      )}

      <div>
        <p className='text-justify mt-10 text-xl text-[#032D5A]'>We offer a comprehensive array of sports facilities designed to promote physical fitness and skill development among students.The main campus features an indoor swimming pool, providing opportunities for both competitive and recreational swimming. Additionally, there are netball and tennis courts, a dance studio to accommodate various athletic pursuits. For field sports, the vast sports ground includes rugby, hockey, cricket, and football pitches. These extensive facilities underscore RGS KL's commitment to fostering a lifelong involvement in sport and physical activity among its students. </p>
      </div>
    </div>
  );
};

export default SportsCardCarousel;