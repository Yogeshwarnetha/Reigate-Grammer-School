import React from 'react'
import { Brain, Percent, Lightbulb, Users, Send } from 'lucide-react';
import { TbEaseInOutControlPoints } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import Image from 'next/image'

import InnovationIcon from '@/images/hugeicons_ai-innovation-01.png'
import LeadershipIcons from '@/images/fluent_people-team-28-filled.png'



const GoBeyond = () => {
  return (
    <div>
        <section>
      <header className="pt-16 pb-8 text-center px-4">
        <h1 className="text-4xl md:text-4xl font-bold mb-2 text-[#032D5A]">GO BEYOND with RGIS KL</h1>
        <p className="text-lg text-[#1E1E1E]">where education transcends the ordinary</p>
      </header>
        </section>
      <div className="min-h-screen bg-[#002147] text-white">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16 pt-10">
        <p className="text-gray-300">
          Rooted in the esteemed traditions of Reigate Grammar School,
          <br className="hidden md:block" />our holistic approach guides students
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
            <div className="w-full md:w-[380px] bg-[#FFE169] text-[#032D5A] p-6 rounded-lg shadow-lg md:ml-8 relative mb-4 md:mb-0">
              <div className="hidden md:block absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#FFE169]"></div>
              <div className="flex flex-col items-center">
                <TbEaseInOutControlPoints className="w-16 h-16 mb-2" />
                <p className="text-center text-xl font-medium">Preparatory School to Sixth Form</p>
              </div>
            </div>
          </div>

          {/* Critical Thinking Card */}
          <div className="flex items-center flex-col md:flex-row relative">
            <div className="w-full md:w-[380px] bg-[#FFE169] text-[#002147] p-6 rounded-lg shadow-lg md:mr-8 relative md:mb-0">
              <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-[#FFE169]"></div>
              <div className="flex flex-col items-center">
              <LuBrain className="w-16 h-16 mb-2" />
              
                <p className="text-center text-xl font-medium">Cultivating critical thinking</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
          </div>

       

          {/* Innovation Card */}
          <div className="flex items-center flex-col md:flex-row justify-end relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="w-full md:w-[380px] bg-[#FFE169] text-[#002147] p-6 rounded-lg shadow-lg md:ml-8 relative md:mb-0">
              <div className="hidden md:block absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#FFE169]"></div>
              <div className="flex flex-col items-center">
              <Image src={InnovationIcon} alt="icon" className="w-16 h-16 mb-2" />

                <p className="text-center text-xl font-medium">Innovation</p>
              </div>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="flex items-center flex-col md:flex-row relative">
            <div className="w-full md:w-[380px] bg-[#FFE169] text-[#002147] p-6 rounded-lg shadow-lg md:mr-8 relative mb-4 md:mb-0">
              <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-[#FFE169]"></div>
              <div className="flex flex-col items-center">
              <Image src={LeadershipIcons} alt="icon" className="w-16 h-16 mb-2" />
                <p className="text-center text-xl font-medium">Leadership</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
          </div>


        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-16 py-10">
        <p className="text-gray-300 leading-relaxed">
          Choosing RGIS KL means embracing a transformative journey that prepares students not only for academic 
          success but also for life's most significant challenges and opportunities. Here, time-honoured values are seamlessly 
          interwoven with forward-thinking perspectives, inspiring students to push boundaries, unlock their full potential, 
          and truly go beyond.
        </p>
      </div>

    </div>
    </div>
  )
}

export default GoBeyond
