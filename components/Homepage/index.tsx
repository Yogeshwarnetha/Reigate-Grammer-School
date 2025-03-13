"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './index.css'
import BannerImage from '@/public/images/RGS_KL_Logo_RW_Beaconhouse_Stacked 2.png'
import { Button } from '../ui/button'
import Image350Yrs from '@/public/images/350 1.png'
import SchoolImage from '@/public/images/image.png'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Testimonals from './ParentsTestimonals'
import { BookOpen, GraduationCap, School, Users } from 'lucide-react';
import LagacyBackgroundText from '@/public/images/LEGACY.png'
import RGSUKCarousel from './Carousel'
import VideoPlayer from './VideoPlayer'

import Pastoral from '@/public/images/Pastrolcare-home.png'
import Extensive from '@/public/images/Extensive Co curricular activities.png'

import Holistic from '@/public/images/Holistic Education.png'


const images = [
  {
    id: 1,
    image_url: 'https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    image_url: 'https://plus.unsplash.com/photo-1643347870799-d8986f3985b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D'
  }
]


const tabs = [
  {
    id: 'early-years',
    label: 'EARLY YEARS',
    title: 'Early Years',
    subtitle: 'Ages 2 to 5',
    content: 'A child’s first steps into education should be filled with wonder. Our Early Years programme nurtures inquisitive minds through immersive, play-based learning, building confidence, creativity, and a lifelong love of discovery.',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Early+Years.png'
  },
  {
    id: 'primary-school',
    label: 'PRIMARY SCHOOL',
    title: 'Primary School',
    subtitle: 'Ages 5 to 11',
    content: 'Our primary school program focuses on building strong foundations in literacy, numeracy, and critical thinking. We provide a supportive environment where children develop confidence, curiosity, and a love for learning through engaging activities and personalized attention.',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/PrimarySchoolImage.png'
  },
  {
    id: 'secondary-school',
    label: 'SECONDARY SCHOOL',
    title: 'Secondary School',
    subtitle: 'Ages 11 to 16',
    content: 'Our secondary school curriculum prepares students for academic excellence while developing essential life skills. With specialized subject teachers and modern facilities, we offer a comprehensive education that balances academic rigor with creative and physical development.',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Secondary+School.png'
  },
  {
    id: 'sixth-form',
    label: 'SIXTH FORM',
    title: 'Sixth Form',
    subtitle: 'Ages 16 to 18',
    content: 'Our sixth form offers a bridge to university and career success. Students benefit from specialized teaching, mentorship, and guidance on university applications. We foster independence and critical thinking while providing a supportive community for academic and personal growth.',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/SixthForm.png'
  }
];

const Homepage = () => {

  const [activeTab, setActiveTab] = useState('early-years');

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);


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

      <section className="w-full">
        {/* School Introduction */}

        <div className="relative w-full h-[800px]">
  {/* Background Image */}
  <img 
    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/04+streetview+from+main+entrance+1.png" 
    alt="Background" 
    className="w-full h-[800px] object-cover"
  />

  {/* Overlay Image and Text */}
  <div className="absolute inset-0">
    <img 
      src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/OverlayBackground.png" 
      alt="Overlay" 
      className="w-full h-full object-cover"
    />
    <div className="container mx-auto absolute bottom-0 left-0 right-0 text-center text-white pb-24">
      <h1 className="text-3xl font-bold text-[#032D5A]">Where Tradition Inspires Tomorrow</h1>
      <p className="text-lg mt-8 mx-16 text-[#032D5A]">Reigate Grammar School Kuala Lumpur (RGS Kuala Lumpur) nurtures young minds to lead with confidence, innovate with purpose, and excel with distinction. In collaboration with Reigate Grammar School UK and the Beaconhouse School System, we bring 350 years of academic excellence to the heart of Kuala Lumpur. From Preparatory School through to Sixth Form, our students thrive in a world-class environment where excellence, integrity, and ambition are the cornerstones of their future success. We empower students to go beyond—beyond expectations, beyond boundaries, and beyond what they ever thought possible—preparing them to shape the future with confidence, character, and purpose.</p>
    <button className='bg-[#032D5A] p-2 border-8 mt-10'>Go Beyond</button>
    </div>
  </div>
</div>




      </section>

      <section>
        <div className=''>
          {/* Tabs Navigation */}
          <div className="mx-auto w-full bg-[#DCE4F4] overflow-x-auto">
            <div className="flex min-w-max ml-24">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-4 text-sm font-bold transition-colors duration-200 flex items-center justify-center whitespace-nowrap
                ${activeTab === tab.id
                      ? 'bg-[#032D5A] text-white'
                      : 'bg-[#e6eaf0] text-[#0a3160] hover:bg-[#d1d8e6]'
                    }
                ${index === 0 ? 'rounded-tl-3xl' : ''}
                ${index === tabs.length - 1 ? 'rounded-tr-3xl' : ''}
              `}
                >
                  {tab.label}

                  {/* Add a small connector between tabs */}
                  {index < tabs.length - 1 && activeTab !== tab.id && activeTab !== tabs[index + 1].id && (
                    <span className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full bg-[#032D5A]">
  <div className="w-full min-h-[700px] flex flex-col md:flex-row justify-end">
    {/* Text Content */}
    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 ml-10">
      <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
        {activeTabData.title}
      </h2>
      <h3 className="text-xl md:text-2xl font-light text-white mb-6">
        {activeTabData.subtitle}
      </h3>
      <p className="text-white mb-8 max-w-xl text-justify">
        {activeTabData.content}
      </p>
      <div>
        <button className="bg-white text-[#032D5A] px-6 py-3 font-semibold rounded hover:bg-gray-100 transition-colors">
          Know More
        </button>
      </div>
    </div>

    {/* Image Section with Overlay */}
    <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
      <img
        src={activeTabData.image}
        alt={activeTabData.title}
        className="w-full h-full object-cover block"
      />
      <div className="gradient-overlay"></div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* The Reigate Advantage Section */}
      <section className="py-16 px-4 ">
        <div className="container advantage-section-main-container mx-auto">
          <h2 className="lg:text-4xl font-bold text-[#002B5B] mb-12 sm:text-xl">The Reigate Advantage</h2>

          <div className="flex flex-wrap justify-between">
            {/* Card 1 */}
            <div className="advantage-card">
              <div className="advantage-number">01</div>
              <Image
                src={Holistic}
                alt="Students studying"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-[#032D5A] mb-3">Holistic Education</h3>
              <p className="text-gray-600 flex justify-center">
                Empowering students with a balanced education that nurtures academic excellence and personal growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="advantage-card">
              <div className="advantage-number">02</div>
              <Image
                src={Extensive}
                alt="Co-curricular activities"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-[#032D5A] mb-3">Extensive Co-curriculars</h3>
              <p className="text-gray-600">
                Unleashing potential through diverse co-curricular activities that foster creativity, teamwork, and leadership skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="advantage-card">
              <div className="advantage-number">03</div>
              <Image
                src={Pastoral}
                alt="Pastoral care"
                className="advantage-image"
              />
              <h3 className="text-xl font-bold text-[#032D5A] mb-3">Pastoral Care</h3>
              <p className="text-gray-600">
                Providing unwavering pastoral care to ensure every student feels supported, valued, and ready to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonals />
      </section>


      {/* RGS UK Section */}
      <div className="bg-[#032D5A] pt-10 text-white about-uk-school-main">
        <div className="container about-uk-school-main-container">
          {/* <div className="">
            <h2 className='about-uk-school-main-heading'>Reigate Grammar School, United Kingdom</h2>
            <div className='about-uk-school-image-text'>
              <Image src={LagacyBackgroundText} alt='lagacy-image' className='lagacy-image-container' />
              <p className='about-uk-overlay-text'>RGS UK stands as a beacon of academic excellence, shaping future leaders with a global perspective and a commitment to innovation.</p>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center gap-56 mt-10 py-24">
              
                <div className="w-full lg:w-1/2">
                <RGSUKCarousel />
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-4xl leading-relaxed mb-6">Reigate Grammar School<br/>
                United Kingdom</h2>
                <p className="text-lg leading-relaxed mb-6 text-justify">
                Offering more than an education, Reigate Grammar School presents a legacy of excellence that has flourished for 350 years and counting. Established in 1675 through the visionary philanthropy of Henry Smith, an Alderman of the City of London, RGS has steadfastly upheld its founding principle: providing exceptional educational opportunities to children from all walks of life.                </p>

                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    className="bg-[#FFFFFF] border-white text-[#1A3363] hover:bg-white hover:text-[#032D5A]"
                  >
                    Know More
                  </Button>
                </div>
              </div>

            
            </div>



        </div>
      </div>

      <section>
        <VideoPlayer />
      </section>


    </div>
  )
}

export default Homepage
