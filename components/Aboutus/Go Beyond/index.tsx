import React from 'react'
import { Brain, Percent, Lightbulb, Users, Send } from 'lucide-react';
import { TbEaseInOutControlPoints } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";

import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

import InnovationIcon from '@/public/images/hugeicons_ai-innovation-01.png'
import LeadershipIcons from '@/public/images/fluent_people-team-28-filled.png'

import './index.css'



const GoBeyond = () => {
  return (
    <div>
      
        <section>
      <header className="pt-16 pb-8 text-center px-4">
      </header>
        </section>
      <div className="min-h-screen bg-[#002147] text-white">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16 pt-10">
      <h2 className="text-4xl md:text-4xl font-lighter mb-2 text-[#fff]">Go Beyond Philosophy</h2>

        <p className="text-gray-300">
        We believe in empowering students to surpass their own expectations. Our 'Go Beyond' philosophy is woven into every facet of school life, ensuring that each child receives the encouragement and challenges necessary to excel.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-[1px] h-full w-[2px] border-l-2 border-dashed border-gray-400"></div>

        {/* Timeline Items */}
        <div className="space-y-32 md:space-y-32">
               {/* Prep School Card */}
          <div className="flex items-center flex-col md:flex-row justify-end relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-full md:w-[380px] bg-[#FFCE00] text-[#032D5A] rounded-lg shadow-lg md:ml-8 relative mb-4 md:mb-0">
              <div className="hidden md:block absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#FFF3C1]"></div>
              <div className="flex flex-col items-center p-6">
                <TbEaseInOutControlPoints className="w-16 h-16 mb-2" />
                <p className="text-center text-xl font-medium">Inspiring Teaching and 
                Comprehensive Curriculum</p>
              </div>
              <div className='go-beyond-timeline-description'><p className='go-beyond-timeline-text'>
              Our dedicated educators are committed to delivering inspiring lessons that ignite curiosity and foster a passion for learning. The broad and balanced curriculum at RGIS KL is designed to cater to diverse interests, providing students with the knowledge and skills essential for success in an ever-evolving world.
                 </p></div>

            </div>
          </div>

          {/* Critical Thinking Card */}
          <div className="flex items-center flex-col md:flex-row relative">
            <div className="w-full md:w-[380px] bg-[#FFCE00] text-[#002147] rounded-lg shadow-lg md:mr-8 relative md:mb-0">
              <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-[#FFF3C1]"></div>
              <div className="flex flex-col items-center p-6">
              <LuBrain className="w-16 h-16 mb-2" />
              
                <p className="text-center text-xl font-medium">Enrichment Activities</p>
              </div>
              <div className='go-beyond-timeline-description'><p className='go-beyond-timeline-text'>Beyond the classroom, our exceptional co-curricular programme offers a wealth of opportunities for students to explore their passions and develop new talents. From sports and arts to community service and leadership initiatives, we encourage students to engage in activities that broaden their perspectives and cultivate a lifelong love of learning.
              </p></div>

            </div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
          </div>

       

          {/* Innovation Card */}
          <div className="flex items-center flex-col md:flex-row justify-end relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-full md:w-[380px] bg-[#FFCE00] text-[#002147] rounded-lg shadow-lg md:ml-8 relative md:mb-0">
              <div className="hidden md:block absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#FFF3C1]"></div>
              <div className="flex flex-col items-center p-6">
              <Image src={InnovationIcon} alt="icon" className="w-16 h-16 mb-2" />

                <p className="text-center text-xl font-medium">Borderless Connections through 
                the RGS Global Village</p>
              </div>
              <div className='go-beyond-timeline-description'><p className='go-beyond-timeline-text'>As part of the esteemed Reigate Grammar School family, RGIS KL benefits from the RGS Global Village network. This affiliation fosters international collaboration, providing our students with a global outlook and enriching their educational experience through cultural exchanges and shared learning opportunities.</p></div>
            </div>
          </div>




        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-16 py-10">
        <p className="text-gray-300 leading-relaxed">
        At RGIS KL, we are dedicated to nurturing confident, compassionate, and capable individuals who are prepared to embrace opportunities and navigate challenges with resilience and integrity.
        </p>
      </div>

    </div>
    </div>
  )
}

export default GoBeyond
