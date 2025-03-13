"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

const carouselData: CarouselItem[] = [
  {
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
    title: "KTM Komuter",
    description: "The Kajang 2 Railway Station is the nearest KTM Komuter station to RGS KL. It serves the Seremban Line, providing connections to various parts of the Klang Valley. The station is equipped with facilities such as parking, pedestrian overpasses, and accessibility features."
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "MRT Service",
    description: "The MRT Kajang Line provides convenient access to major destinations across Kuala Lumpur. With modern trains and stations, it offers a comfortable and efficient travel experience for commuters and visitors alike."
  },
  {
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    title: "Bus Transportation",
    description: "Several bus routes operate in the vicinity, connecting to major hubs and residential areas. The bus services are frequent and provide an affordable option for daily commuters and travelers exploring the city."
  }
];

const TransportCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
        {/* Image section */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        {/* Content section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gray-50">
          <div>
            <h2 className="text-3xl font-bold mb-4">{currentItem.title}</h2>
            <p className="text-gray-700">{currentItem.description}</p>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-end mt-6 space-x-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportCarousel;