import React from 'react'
import Image from 'next/image'
import PastrolCareBackgroundImage from '@/images/PastrolCareBackground.png'
import './index.css'
import PastrolImage from '@/images/antony 1.png'
import PastrolcareQuotation from '@/images/Quotation_PastrolCare.png'
import PastrolCaresection2 from '@/images/Pastrolcare-section2-background.png'
import { Brain } from 'lucide-react';


const cards = [
    {
      id: '01',
      title: 'Mental Health',
      description: 'Supporting students\' emotional wellbeing through comprehensive mental health services and counseling.',
      icon: Brain
    },
    {
      id: '02',
      title: 'Building a Sense of Belonging',
      description: 'Creating an inclusive environment where every student feels valued, connected, and part of our community.',
      icon: Brain
    },
    {
      id: '03',
      title: 'Physical Wellbeing',
      description: 'Promoting healthy lifestyle choices through sports, nutrition, and wellness programs.',
      icon: Brain
    }
  ];

const PastrolCare = () => {
    return (
        <div>
            <section className="">
                <div className="w-full flex flex-1">
                    <div className="w-full container pastrol-care-section1-text">
                        <p className="pastrol-care-description">Pastoral care is a vital part of a student's experience at school, supporting their emotional, social, and moral development. At RGIS KL, we believe that pastoral care is essential for shaping well-rounded individuals. As a British international school with the proud legacy of Reigate Grammar School (RGS) UK, named the UK’s best school in 2025, we place a strong emphasis on wellbeing, values, behaviour, and character development.</p>
                        <p className="pastrol-care-description mt-10">By fostering a safe, inclusive environment where students feel respected, valued, and empowered, we support both their academic and personal growth. Our goal is to help students develop the skills, ethics, and resilience they need for success in life. Pastoral care is at the heart of creating kind, respectful individuals who lead with integrity, empathy, and resilience, in line with the British education system’s focus on the “whole child.”</p>
                    </div>
                    <div className="relative w-full bg-white mt-24">
                        <div className="max-w-6xl mx-auto px-4 flex justify-end items-center">
                            {/* Background Circle */}
                            <div className="absolute right-0 bottom-0">
                                <Image src={PastrolCareBackgroundImage} alt="Rocket Background" className="" />

                            </div>

                            {/* Quote */}
                            <div className="relative z-10 max-w-md mr-2">
                                <Image src={PastrolcareQuotation} alt='Quotation' className='pastrol-care-quotation' />
                            </div>

                            {/* Principal Image */}
                            <div className="relative z-10">
                                <Image src={PastrolImage} alt='PastrolCareImage' />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='pastrol-care-section2 py-10'>
                <div className='container pastrol-care-section2-main'>
                    <div className='pastrol-care-section2-img'>
                        <Image src={PastrolCaresection2} alt='PastrolCareBackgroundImage' />
                    </div>
                    <div className='pastrol-care-section2-content'>
                        <div className='pastrol-care-section2-sub-content'>
                        <h2 className='pastrol-care-section2-heading'>Wellbeing at the Heart of Pastoral Care</h2>
                        <p className='pastrol-care-section2-description'>Wellbeing is a cornerstone of our pastoral care approach. At RGIS KL, we create a supportive environment where students feel safe, valued, and empowered to succeed. Our wellbeing initiatives include:</p>
                    </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div key={card.id} className="relative group">
            {/* Card Container */}
            <div className="bg-[#E5E7EB] rounded-lg overflow-hidden relative h-[400px] transition-all duration-300 ease-in-out">
              {/* Number Badge */}
              <div className="absolute top-0 right-0 bg-[#032D5A] text-white flex items-center justify-center rounded-full text-2xl font-bold card-numeric-letter">
                {card.id}
              </div>

              {/* Content */}
              <div className="h-full flex flex-col items-center justify-center p-8 transition-transform duration-300">
                <card.icon className="w-16 h-16 text-[#002147] mb-6" />
                <h3 className="text-[#002147] text-2xl font-bold text-center">
                  {card.title}
                </h3>
              </div>

                <div className='absolute bg-[#032D5A] bottom-0 letf-0 right-0 w-full card-bottom-arrow'>
                    
                    </div>               

              {/* Down Arrow */}
              <div className="absolute bottom-6 left-1/2 text-white">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </div>

              {/* Hover Reveal Content */}
              <div className="absolute inset-0 bg-[#002147] p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg text-center">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
            </section>
        </div>
    )
}

export default PastrolCare
