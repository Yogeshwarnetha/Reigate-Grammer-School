import React from 'react'
import Image from 'next/image'
import OurApproachEarlyYearsImage from '@/public/images/OurApproachKid1.png'
import OurApproachsecondaryImage from '@/public/images/OurAproachImage2.png'
import OurApproachSixthFormImage from '@/public/images/OurApproachSixthForm.png'
import './index.css'
import BannerImage from '@/public/images/Banner image.png'


const OurApproach = () => {
  return (
    <>
    <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Our Approach                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Wholesome education that prepares students for life.                </h2>
              </div>
            </section>
    <div className='bg-[#EEF2FA]'>
    <section className='bg-[#032D5A]'>
      <div className='container mx-auto py-16'>
        <div className='flex justify-center'>
      <p className='our-approach-cards-main-description'>Our Go Beyond philosophy embodies our commitment to nurturing well-rounded individuals prepared to excel in all facets of life. This guiding principle is founded upon three core pillars: Holistic Education, Co-Curricular Activities, and Pastoral Care.</p>
      </div>
        <div className='our-approach-cards-list mt-10'>
        <div className='our-approach-card-1'>
          <div className='our-approach-card-heading'>
            <h4>Co-Curricular Activities</h4>
          </div>
          <div className='our-approach-card-description'>
            <p className='our-approach-card-1-para'>Recognising the importance of experiences beyond the classroom, RGS KL provides an extensive range of co-curricular programmes. With a vast array activities encompassing performing arts, competitive sports, community service, and technological innovation, students have ample opportunities to explore their interests, develop new skills, and foster leadership qualities.</p>
          </div>
        </div>
        <div className='our-approach-card-2'>
          <div className='our-approach-card-heading'>
            <h4>Holistic Education</h4>
          </div>
          <div className='our-approach-card-description'>
            <p className='our-approach-card-1-para'>We offer a comprehensive curriculum that integrates rigorous academics with character development, aiming to cultivate critical thinking, creativity, and a lifelong passion for learning. Our educational approach is designed to prepare students not only for academic success, but also to navigate the complexities of the modern world with confidence and integrity.</p>
          </div>
        </div>
        <div className='our-approach-card-1'>
          <div className='our-approach-card-heading'>
            <h4>Pastoral Care</h4>
          </div>
          <div className='our-approach-card-description'>
            <p className='our-approach-card-1-para'>Central to our ethos is a robust pastoral care system that ensures each student's well-being is prioritised. Our dedicated pastoral team offers personalised support, creating a nurturing environment where students feel valued and empowered. This strong support network is essential for their personal growth and academic achievement.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className='bg-[#EEF2FA]'>
      <div className='container mx-auto flex justify-center'>
      <h2 className='ourapproach-section3-heading'>A Complete, Holistic Education</h2>
      </div>
    </section>
    <section>
    <div>
      <div className='ourapproach-section2-main'>
        <div className='container mx-auto ourapproach-section2-container'>
          <div className='ourapproach-section2-text'>
            <p className='ourapproach-description'>Holistic education is an approach that nurtures the intellectual, emotional, social, physical, and spiritual dimensions of students, fostering comprehensive development. This educational philosophy emphasises the interconnectedness of learning and personal growth, aiming to cultivate well-rounded individuals equipped to navigate the complexities of life.</p>
          </div>
          <div className='ourapproach-section2-image-1'>
            <Image src={OurApproachEarlyYearsImage} alt='OurApproachEarlyYearsImage' className='our-approach-secondary-image'/>
          </div>
          </div>
      </div>

      <div className='ourapproach-section2-main'>
      <div className='container mx-auto ourapproach-section2-container'>
      <div className='ourapproach-section2-image-2'>
            <Image src={OurApproachsecondaryImage} alt='OurApproachEarlyYearsImage' className='our-approach-secondary-image'/>
          </div>
          <div className='ourapproach-section2-text'>
            <p className='ourapproach-description'>In today's rapidly evolving world, focusing solely on academic achievement is insufficient. Holistic education addresses this by nurturing not only intellectual capabilities but also emotional intelligence, social skills, and ethical values. This approach prepares students to adapt to diverse challenges, fostering resilience and a lifelong passion for learning.</p>
          </div>
          
          </div>
      </div>

      <div className='ourapproach-section2-main'>
      <div className='container mx-auto ourapproach-section2-container'>
          <div className='ourapproach-section2-text'>
            <p className='ourapproach-description'>By embracing holistic education, we prepare students not only for academic success but also for fulfilling lives as compassionate, competent, and conscientious members of society.</p>
          </div>
          <div className='ourapproach-section2-image-3'>
            <Image src={OurApproachSixthFormImage} alt='OurApproachEarlyYearsImage' className='our-approach-secondary-image'/>
          </div>
          </div>
      </div>
      
    </div>
      </section>
      </div>
      </>
  )
}

export default OurApproach;
