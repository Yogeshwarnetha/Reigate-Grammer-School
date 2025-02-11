"use client"
import React from 'react'
import Image from 'next/image'
import BannerImage from '@/images/Banner image.png'
import SchoolImage from '@/images/SchoolImg.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './index.css'

import { useState, useEffect } from 'react';

interface CarouselImage {
  url: string;
  alt: string;
}


const images: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
      alt: 'Basketball court'
    },
    {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800',
      alt: 'Auditorium'
    },
    {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
      alt: 'Modern hallway'
    },
  ];

const OurSchool = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);
  
    useEffect(() => {
      const timer = setInterval(() => {
        goToNext();
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= totalPages ? 0 : nextIndex;
      });
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        return nextIndex < 0 ? totalPages - 1 : nextIndex;
      });
    };
  
    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };
  
    const getVisibleImages = () => {
      const start = currentIndex * itemsPerPage;
      const visibleImages = [...images.slice(start), ...images.slice(0, start)].slice(0, itemsPerPage);
      return visibleImages;
    };
    return (
        <div>
            <section className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-between px-10 ">
                        <div className="banner-text-content text-white max-w-lg">
                            <div className='our-school-heading'>
                                Our School
                            </div>
                            <div className="flex items-center space-x-2 text-sm mb-4">
                                <a href="#" className="hover:underline">Home</a>
                                <ChevronRight className="w-4 h-4" />
                                <span>Our School</span>
                            </div>

                        </div>
                        <div className="w-1/3">
                            <Image src={SchoolImage} alt="School Image" className="about-banner-img w-full h-auto rounded-lg" width={450} height={450} />
                        </div>
                    </div>
                    <div className='about-our-school-banner'>
                        <h2 className="text-3xl font-bold">Reigate Grammar International School</h2>
                        <h2 className="text-3xl font-bold">Kuala Lumpur</h2>
                    </div>
                </div>
            </section>
            <section className="aboutus-ourschool-content-main">
                <p className="aboutus-ourschool-content">In 2025, RGIS KL will open its doors to a premier boarding facility, situated right next to our campus. Designed with comfort, security, and convenience in mind, the facility will feature</p>
            </section>
            <section>
                <div className="min-h-screen mt-10">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* First Row */}
                            <div className="relative h-[500px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="School Entrance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-[#002147] p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-white">
                                        Dedicated access to the school
                                    </h2>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="bg-[#002147] p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-white">
                                        A variety of room options to suit every need
                                    </h2>
                                </div>
                            </div>
                            <div className="relative h-[500px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Students in Classroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Third Row */}
                            <div className="relative h-[500px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Students Learning"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-[#002147] p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-white">
                                        Advanced security systems for peace of mind
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main-about-ourschool-description'>
                <div className='container about-ourschool-content-description'>
                    <p className='about-ourschool-description'>This carefully-crafted environment will provide students with the independence to grow and the support to excel, fostering a sense of community and belonging. Join Our Vision for Excellence</p>

                    <p className='about-ourschool-description'>At RGIS KL, we are proud to offer an educational experience that is as aspirational as it is nurturing. Discover how your child can thrive in a school that blends the best of tradition and innovation. Schedule a visit, explore our curriculum, or join us at an open house to see why RGIS KL is the right choice for your family.</p>
                </div>
            </section>

            <section className='about-image-gallery'>
            <div className="relative w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Image Gallery</h2>
      
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex gap-4 min-w-full">
            {getVisibleImages().map((image, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 relative group"
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    <div className='about-photos-main-button'>
      <button className='about-photos-button'>View all Photos</button>
      </div>
            </section>
        </div>
    )
}

export default OurSchool
