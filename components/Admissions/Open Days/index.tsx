"use client"
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import './index.css'
import SchoolLogo from '@/public/images/RGS_KL_Logo_CMYK_IconRGS_Branch 1.png'
import BannerImage from '@/public/images/Banner image.png'


const newcarouselItems = [
    {
      id: 1,
      image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Open+Day+Visits+Image.png",
      
    },
    {
      id: 2,
      image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values3.png",
      
    },
    {
      id: 3,
      image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values1.png",
      
    }
  ];

const carouselItems = [
  {
    id: 1,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Open+Day+Visits+Image.png",
    
  },
  {
    id: 2,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values3.png",
    
  },
  {
    id: 3,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values1.png",
    
  }
  ];

const OpenDays = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


        const [currentSlideOpen, setCurrentSlideOpen] = useState(0);
    

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
    };


    
    const nextSlideOpen = () => {
        setCurrentSlideOpen((prev) => (prev + 1) % newcarouselItems.length);
      };
    
      const prevSlideOpen = () => {
        setCurrentSlideOpen((prev) => (prev - 1 + newcarouselItems.length) % newcarouselItems.length);
      };

  return (
    <div>
      <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Open Day Visits                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Experience RGS KL in action.
                </h2>
              </div>
            </section>
      <section className='bg-[#032D5A]'>
        <div className='min-h-screen container mx-auto'>
        <div className="flex items-center justify-center p-4">
      <div className="w-full relative">
        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-xl">
          {/* Slides */}
          <div 
            className="carousel-slide absolute w-full h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex h-full" style={{ width: `${carouselItems.length * 100}%` }}>
              {carouselItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative w-full h-full"
                  style={{ width: `${100 / carouselItems.length}%` }}
                >
                  <img 
                    src={item.image} 
                    alt="open day school"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="carousel-nav-button absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="carousel-nav-button absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot h-2 rounded-full ${
                  index === currentIndex ? 'active' : 'w-2 bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
    <div className='openDays-section1-main-card'>
    <div className='openDays-section1-card'>
            <h2 className='openDays-section1-card-heading'>
            Discover RGS KL
            </h2>
            <h4 className='openDays-section1-card-sub-heading'>An Inspiring Open Day Experience</h4>
            <p className='openDays-section1-card-description'>We are delighted to invite prospective families to our upcoming Open Days at Reigate Grammar School Kuala Lumpur (RGS KL). These events provide an excellent opportunity to explore our state-of-the-art facilities, engage with our dedicated educators, and experience firsthand the vibrant community that defines RGS KL.</p>
    </div>
    </div>

   
        </div>
      </section>
      <section>
  <div className="min-h-screen p-4 md:p-8 lg:p-12">
    <div className="max-w-7xl mx-auto">
      {/* First Row - 2 Cards + 1 Large Card */}
      <div className="openDays-row">
        <div className="openDays-section2-card bg-[#002851] rounded-lg p-8 text-white">
          <div className="text-5xl font-bold mb-4">01</div>
          <h2 className="text-2xl font-bold mb-3">Welcome Address</h2>
          <p className="text-gray-200">
            Begin your visit with an insightful presentation from our Head of School, outlining our educational philosophy and commitment to student development.
          </p>
        </div>

        <div className="openDays-section2-card bg-[#002851] rounded-lg p-8 text-white">
          <div className="text-5xl font-bold mb-4">02</div>
          <h2 className="text-2xl font-bold mb-3">Guided Campus Tours</h2>
          <p className="text-gray-200">
            Led by current students, these tours offer a comprehensive look at our classrooms, laboratories, arts studios, and sports facilities, showcasing the dynamic learning environment we provide.
          </p>
        </div>

        <div className="openDays-section2-card-2 bg-[#e8eaf6] rounded-lg p-8">
          <p className="text-[#002851] text-lg">
            To register your interest, please complete the form on our website. Our Admissions team will contact you to provide further details and assist with any inquiries.
          </p>
        </div>
      </div>

      {/* Second Row - Large Card + 2 Smaller Cards */}
      <div className="openDays-row">
        <div className="openDays-section2-card-2 bg-[#e8eaf6] rounded-lg p-8 text-center">
          <p className="text-[#002851] text-lg">
            We look forward to welcoming you to RGS KL and sharing how our holistic approach to education can benefit your child's future.
          </p>
        </div>

        <div className="openDays-section2-card bg-[#002851] rounded-lg p-8 text-white">
          <div className="text-5xl font-bold mb-4">03</div>
          <h2 className="text-2xl font-bold mb-3">Interactive Workshops</h2>
          <p className="text-gray-200">
            Participate in sessions that highlight our diverse co-curricular programmes, from performing arts and sports to science and technology initiatives.
          </p>
        </div>

        <div className="openDays-section2-card bg-[#002851] rounded-lg p-8 text-white">
          <div className="text-5xl font-bold mb-4">04</div>
          <h2 className="text-2xl font-bold mb-3">Meet and Greet</h2>
          <p className="text-gray-200">
            Engage with faculty members, administrative staff, and current students to gain deeper insights into daily life at RGS KL.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className='bg-[#032D5A]'>
    <div className="">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h4 className="text-xl font-bold text-center text-navy-900 mb-12 text-white">Past Open Day Gallery</h4>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-6">
                <p className='opendays-section3-content'>Reflecting on our previous Open Days, we are grateful for the enthusiastic participation from prospective families. Our inaugural event in November 2024 attracted many parents eager to learn about our educational offerings. Held at Colony @ The MET, Mont Kiara, the day featured insightful sessions with our leadership team, interactive workshops, and guided tours, providing attendees with a comprehensive understanding of our school's ethos and facilities. The positive feedback received has been instrumental in shaping subsequent events, ensuring we continue to meet the needs and expectations of our community.</p>
              </div>
    
              <div className="relative rounded-lg overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <img
                    src={carouselItems[currentSlideOpen].image}
                    alt="openday Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                    
                    <div className="flex justify-between items-center">
                     
                      <div className="flex gap-2">
                        <button
                          onClick={prevSlideOpen}
                          className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextSlideOpen}
                          className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {newcarouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlideOpen(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlideOpen === index ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
</section>
<section className='opendaybanner-main-container'>
<div className='container mx-auto opendays-section4-logo-container'>
<div className='opendays-section4-logo'>
        <Image src={SchoolLogo} alt="school Image" className='opendays-logo'/>
    </div>
    <div className='opendays-section4-content'>
        <p className='opendays-section4-content-text'>Through our global network, students gain international exchange opportunities, shaping them into confident, forward-thinking leaders.</p>
        <button className='opendays-section4-content-button'>
            REGISTER NOW
        </button>
    </div>
    
</div>

</section>

                  
    </div>
  )
}

export default OpenDays
