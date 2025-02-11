"use client"
import React from 'react'
import Image from 'next/image'
import './index.css'
import BannerImage from '@/images/RGS_KL_Logo_RW_Beaconhouse_Stacked 2.png'
import { Button } from '../ui/button'
import Image350Yrs from '@/images/350 1.png'
import SchoolImage from '@/images/image.png'
import { ArrowRight } from 'lucide-react'
import Testimonals from './ParentsTestimonals'

const Homepage = () => {
  return (
    <div>
      <section>
      <div className="banner-container">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="banner-video"
      >
        <source src="/videos/RGISKLVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="school-logo-white">
            <Image 
              src={BannerImage} 
              alt="Reigate Grammar School" 
              className="logo-image"
            />
          </div>
          <h1 className="banner-title">GO BEYOND</h1>
        </div>
      </div>
    </div>
      </section>
      <section className="w-full py-16">
      {/* School Introduction */}

      <div className="container mx-auto px-4 home-about-content-background">
  <div className="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden relative">
    {/* Image Section */}
    <div className="w-full lg:w-1/3 h-[400px] relative flex justify-center items-center">
      <Image
        src={SchoolImage}
        alt="Reigate Grammar School Entrance"
        className="home-about-img object-cover rounded-lg"
      />
    </div>
    
    {/* Content Section */}
    <div className="w-full h-auto p-4 sm:p-6 md:p-10 lg:p-12 relative content-about-main-home">
  <div className="content-main-about">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-center md:text-left">
      Reigate Grammar International School <br />
      <span>Kuala Lumpur</span>
    </h2>
    <h3 className="text-lg sm:text-xl text-[#032D5A] font-semibold mb-4 sm:mb-5 lg:mb-6 text-center md:text-left">
      Where Tradition Inspires Tomorrow
    </h3>
    <p className="text-gray-700 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-center md:text-left text-sm sm:text-base">
    At RGIS KL, we inspire young minds to lead, innovate, and thrive. In partnership with Reigate Grammar School UK and Beaconhouse Schools System, we bring RGS’s 350-year legacy of academic excellence to Kuala Lumpur. From Preparatory School to Sixth Form, our students flourish in a world-class environment—where excellence, integrity, and ambition shape their future.
    </p>
    <div className="flex justify-center md:justify-start">
      <a href='/about/ourschool'>
      <Button className="bg-[#032D5A] hover:bg-[#334776] text-white px-6 py-2 sm:px-8 sm:py-3">
        Know More
      </Button>
      </a>
    </div>
  </div>
</div>

  </div>
</div>



      {/* RGS UK Section */}
      <div className="bg-[#032D5A] text-white mt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">RGS UK</h2>
              <p className="about-uk-description text-lg leading-relaxed mb-8">
                At Reigate Grammar School (RGS), we offer more than an education - we offer a legacy of excellence that has flourished for 350 years and counting. Established in 1675 through the visionary philanthropy of Henry Smith, an Alderman of the City of London, RGS has steadfastly upheld its founding principle: providing exceptional educational opportunities to children from all walks of life.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#032D5A]"
              >
                Know More
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={Image350Yrs}
                alt="350 Years Anniversary"
                width={580}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="min-h-screen bg-white">
      {/* The Reigate Advantage Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-12 sm:text-xl">The Reigate Advantage</h2>
          
          <div className="flex flex-wrap justify-between gap-12">
            {/* Card 1 */}
            <div className="advantage-card">
              <div className="advantage-number">01</div>
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students studying"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-purple-800 mb-3">Holistic Education</h3>
              <p className="text-gray-600 flex justify-center">
                Empowering students with a balanced education that nurtures academic excellence and personal growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="advantage-card">
              <div className="advantage-number">02</div>
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Co-curricular activities"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-purple-800 mb-3">Extensive Co-curriculars</h3>
              <p className="text-gray-600">
                Unleashing potential through diverse co-curricular activities that foster creativity, teamwork, and leadership skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="advantage-card">
              <div className="advantage-number">03</div>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Pastoral care"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-purple-800 mb-3">Pastoral Care</h3>
              <p className="text-gray-600">
                Providing unwavering pastoral care to ensure every student feels supported, valued, and ready to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-12">News and Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Academic achievements"
                className="news-image"
              />
              <div className="news-content">
                <span className="news-tag bg-blue-600 text-white text-xs px-2 py-1 rounded">Education</span>
                <h3 className="news-title">Leading in Academic achievements</h3>
                <p className="news-description">
                  Shaping Bright Futures: Outstanding Academic Excellence Propelling Students to Global Success in Education and Beyond.
                </p>
                <a href="#" className="read-more">
                  <ArrowRight className="readmore-icon" />
                </a>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="New campus"
                className="news-image"
              />
              <div className="news-content">
                <p className="news-date">January 20, 2024</p>
                <h3 className="news-title">Update on our new campus</h3>
                <p className="news-description">
                  Unveiling the Future: Discover Best-in-Class Facilities and Innovation at Our New Campus Today.
                </p>
                <a href="#" className="read-more">
                  <ArrowRight className="readmore-icon" />
                </a>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Drama CCA"
                className="news-image"
              />
              <div className="news-content">
                <p className="news-date">January 20, 2024</p>
                <h3 className="news-title">Introducing our new Drama CCA</h3>
                <p className="news-description">
                  Lights, Camera, Action: Discover Creativity and Confidence with Our Exciting New Drama CCA Programme.
                </p>
                <a href="#" className="read-more">
                  <ArrowRight className="readmore-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
    <section>
      <Testimonals/>
    </section>
    </div>
  )
}

export default Homepage
