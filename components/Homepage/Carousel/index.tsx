import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dfhisjy9w/image/upload/v1741298415/Rectangle_3271_hdazxm.png",
    topRightImage: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/SixthForm.png" // Add your image URL here
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dfhisjy9w/image/upload/v1741298415/Rectangle_3271_hdazxm.png",
    topRightImage: "https://example.com/path/to/your/image2.jpg" // Add your image URL here
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dfhisjy9w/image/upload/v1741298415/Rectangle_3271_hdazxm.png",
    topRightImage: "https://example.com/path/to/your/image3.jpg" // Add your image URL here
  },
];

const RGSUKCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlay = true;
  const interval = 5000;

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative">
      {/* Top-right image positioned half outside the carousel */}
      <div className='absolute -top-[50px] right-[-50px] w-[250px] h-[150px] rounded-lg shadow-lg z-30 bg-[#032D5A] border-2 border-white'>
      <img
        src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/350+2.png"
        alt="Top Right"
        className=" object-contain  "
      />
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-xl">
        <div className="relative h-[500px] w-full overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={item.image}
                alt="350 Years"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RGSUKCarousel;