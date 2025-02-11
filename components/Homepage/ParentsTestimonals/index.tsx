import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Bleu Reardon',
    role: 'PARENT',
    content:
      'Wow, what a great experience from the start! The thoughtful Ms. Taryn greeted me (my kids have actually mentioned how nice she is) to the most wonderful, open-minded teacher! I am so happy with the significant progress my kids have made, thanks to the support of the school and their teachers. This is the first time as a mother of identical twins that I feel a school has taken the time and effort to understand them as individuals. Reigate is honestly the perfect school environment for learning and emotional growth.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 2,
    author: 'Sarah Mitchell',
    role: 'PARENT',
    content:
      'The dedication of the teachers and staff has been remarkable. Our child has flourished in ways we never expected. The individualized attention and nurturing environment have made all the difference in their academic journey.',
    rating: 5,
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
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FFE599]"></div>

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
                    <div className="flex items-center gap-1 md:gap-2 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm md:text-base">
                          ★
                        </span>
                      ))}
                    </div>
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
