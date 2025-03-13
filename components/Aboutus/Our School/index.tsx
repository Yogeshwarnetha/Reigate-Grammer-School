"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import BannerImage from '@/public/images/Banner image.png'
import './index.css'
import PrincipalImage from '@/public/images/philip 2.png'
import AboutSchoolImg from '@/public/images/Group 29.png'

interface ValueCard {
  id: number;
  title: string;
  description: string;
  image: string;
}


const valueCards: ValueCard[] = [
  {
    id: 1,
    title: "Compassion",
    description: "We support a caring and nurturing environment where empathy and kindness are at the core of our community interactions.",
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values1.png"
  },
  {
    id: 2,
    title: "Excellence",
    description: "We are committed to achieving the highest standards in all our endeavours, fostering a culture of continuous improvement and academic distinction.",
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values2.png"
  },
  {
    id: 3,
    title: "Integrity",
    description: "We uphold honesty, transparency, and ethical behavior in all aspects of school life, building trust and respect within our community.",

    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values3.png"
  },
  {
    id: 4,
    title: "Curiosity",
    description: "We encourage intellectual curiosity and a love for learning, inspiring students to explore, question, and discover throughout their educational journey.",
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values4.png"
  },
  {
    id: 5,
    title: "Community",
    description: "We foster a strong sense of belonging and collaboration, where every individual is valued and contributes to our collective growth and success.",
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Values5.png"
  }
];


const OurSchool = () => {

  const [activeCardId, setActiveCardId] = useState<number>(2); // Start with Excellence card active

  const handleCardClick = (id: number) => {
    setActiveCardId(id);
  };
  
  return (
    <div>
      <section className="w-full">
  <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
    <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
      <div className="banner-text-content text-white max-w-full text-center">
        <div className="whitespace-nowrap text-[min(48px,5vw)]">
          Our School
        </div>
      </div>
    </div>
  </div>
  <div className="navbar-banner">
    <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
      Where excellence meets innovation.
    </h2>
  </div>
</section>

<div className='mt-16'></div>
      <section className='our-school-section-1-main'>
        <div className='container our-school-section-1-main-sub'>
          <div className='our-school-section-1-main-sub-image-container'>
            <Image src={PrincipalImage} alt="Prinicipal-Image" className='prinicipal-image-our-school'/>
          </div>
          <div className='our-school-section-1-main-sub-content-container'>
          <h2 className='our-school-section-1-main-heading'>Welcome note from Principal</h2>

            <h2 className='prinicipal-name'>Phillip Bailey</h2>
            <h4 className='prinicipal-designation'>Principal</h4>
            {/* <h3 className='prinicipal-heading'>Honouring Tradition, Inspiring Excellence</h3> */}
            <p className='prinicipal-description'>As the founding Principal of Reigate Grammar International School Kuala Lumpur (RGIS KL), I am privileged to share my vision for this exciting new chapter as we unite the distinguished heritage of Reigate Grammar School UK with a forward-thinking approach to education. Rooted in RGS values and traditions, we seek to inspire every student to achieve academic excellence, grow as individuals, and embrace their full potential.</p>
              {/* <h3 className='prinicipal-heading'> A Legacy of Academic Distinction</h3> */}
              
              <p className='prinicipal-description'>Founded in 1675, Reigate Grammar School UK stands among the world’s most respected grammar schools. For 350 years, it has upheld a tradition of academic distinction, character development, and a commitment to preparing students for the complexities of an ever-evolving world. Named The Sunday Times School of the Year 2025, RGS UK is renowned for its pursuit of excellence, innovation, and leadership. This remarkable legacy forms the foundation of RGIS KL, where we uphold the same ethos—shaping confident, compassionate, and capable young people. </p>
              <p className='prinicipal-description'>RGS Kuala Lumpur is more than a school; it is a thriving community. By combining the Cambridge International Curriculum with RGS values, we provide an education that nurtures both academic success and personal growth. Our students develop critical thinking, resilience, and leadership, ensuring they are well-prepared to contribute meaningfully to the world.</p>
          <p className='prinicipal-description'>I warmly invite you to join us on this journey as we shape a brighter future together.</p>
          </div>
        </div>
      </section>

      <section>
      <div className="min-h-screen bg-[#002147] text-white flex flex-col items-center justify-center py-32 px-4">
        <div className='container mx-auto vision-mission-cards'>
          <div className='vision-card'>
            <img src='https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/visionIcon.png'/>
            <h2 className='vision-card-heading'>VISION</h2>
            <p className='text-center'>At RGS Kuala Lumpur, we believe in a holistic education that goes beyond just academic success. Our vision is to develop confident, compassionate, and capable global citizens who are equipped to thrive and succeed in an ever-evolving world. </p>
          </div>

          <div className='vision-card'>
            <img src='https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/missionicon.png'/>
            <h2 className='vision-card-heading'>MISSION</h2>
            <p className='text-center'>Our mission is to provide an education that fosters intellectual curiosity, resilience, and a strong sense of ethical responsibility, ensuring that our students are well-prepared for the challenges of the future.</p>
          </div>
        </div>
        
      <h1 className="text-5xl font-light mt-32">Our Values</h1>
      <p className="text-center max-w-3xl mb-16 mt-8">
        Our values are deeply rooted in the esteemed heritage of Reigate Grammar School UK.
        These principles guide our community and shape the character of our students:
      </p>

      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {valueCards.map((card) => {
          const isActive = card.id === activeCardId;
          
          // Calculate position based on card id and active card
          let position = card.id - activeCardId;
          
          // Adjust position for circular effect
          if (position > 2) position -= 5;
          if (position < -2) position += 5;
          
          // Calculate z-index, opacity, scale, and transform
          const zIndex = isActive ? 10 : 5 - Math.abs(position);
          const opacity = isActive ? 1 : 0.7;
          const scale = isActive ? 1 : 0.85;
          
          // Calculate horizontal position
          let translateX = 0;
          if (position === -2) translateX = -450;
          if (position === -1) translateX = -280;
          if (position === 1) translateX = 280;
          if (position === 2) translateX = 450;
          
          return (
            <div
              key={card.id}
              className={`absolute w-[400px] h-[550px] rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer border-8 border-white-600 
                ${isActive ? 'shadow-2xl' : 'shadow-md filter blur-[0px]'}`}
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                filter: isActive ? 'blur(0)' : 'blur(1px)'
              }}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#032D5A00] to-[#001730]"></div>
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-center ">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center max-w-3xl mt-16">
        At RGS KL, we are dedicated to preparing students not only for academic success but for meaningful
        and fulfilling lives, guided by these enduring values.
      </p>
    </div>
      </section>


<section className='our-school-section-3-main'>
  <div className='container our-school-section-1-main-sub'>
    
    <div className='our-school-section-1-main-sub-content-container'>
      <h3 className='our-school-rgis-heading'>
      Go Beyond Philosophy    
      </h3>
      <p className='our-school-rgis-description'>
      At RGS Kuala Lumpur, we are dedicated to nurturing each student's unique blend of talents and abilities. Our Go Beyond philosophy is founded on three core pillars: holistic education, co-curricular activities, and pastoral care. This approach ensures that every child is inspired, supported, and challenged to excel, preparing them for a happy and successful adult life.      </p>
    </div>
    <div className='our-school-section-1-main-sub-image-container -mt-14'>
      <img src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Beyond+Philosophy.png" alt='schoolImage' className='object-contain beyond-philosophy-image'/>
    </div>
  </div>
</section>


    


    </div>
  )
}

export default OurSchool
