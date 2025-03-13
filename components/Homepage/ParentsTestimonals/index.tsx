import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Gordon Solomon',
    role: 'Parent of Ian Solomon, Year 1',
    content:
      'Choosing Reigate Grammar School Kuala Lumpur for our son, Ian, has been one of the best decisions we have made. Now in Year 1, he is thriving in an environment that nurtures both academic excellence and personal growth, with exceptional pastoral care at its heart. RGS KL provides a truly holistic education, shaping confident, well-rounded individuals. We are also excited about RGS KL, which promises to uphold the school’s outstanding legacy. With its strong values and commitment to excellence, Reigate is the perfect place for Ian to grow into the fine young man we know he will become.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 2,
    author: 'Daniel',
    role: 'Grandparent of Alexander, Year 5',
    content:
      'With its rich 350-year history, RGS KL has long been a beacon of academic excellence and character development. As a grandparent, I could not be more pleased with our decision to enroll Alexander in Year 5 at RGS KL. The school’s holistic approach nurtures well-rounded individuals and shaping future leaders. We firmly believe in RGS’s strong values and exceptional education system, which will equip Alexander with the skills and character to contribute meaningfully to society. The new campus promises an exciting future, and we are thrilled to be part of this journey.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center md:p-8">
      {/* Yellow Background Covering Half */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#8A8D8F80]"></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-6xl p-6 md:p-8 z-10">
        {/* Header & Navigation Buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#1B365C] text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-center w-full">
            Parent Testimonials
          </h1>

          <div className="flex gap-2 pr-6">
            <button
              onClick={prevSlide}
              className="bg-black rounded-full p-0.5 md:p-1 hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black rounded-full p-0.5 md:p-1 hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];

            return (
              <div
                key={testimonial.id}
                className={`flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-lg ${
                  offset === 1 ? 'hidden md:block' : ''
                }`}
              >
                <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                  <div>
            
                    <h3 className="text-[#1B365C] font-bold text-sm md:text-base">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#1B365C]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
