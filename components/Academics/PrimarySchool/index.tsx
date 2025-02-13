import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import PrimarySchoolBannerImage from '@/images/PrimarySchool_Banner.png'
import primaryoverlayImage from '@/images/PrimarySchoolImg.png'

const PrimarySchool = () => {
  return (
    <div>
        <section className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
          <div className="absolute inset-0 px-10 banner-background-text-navigation">
            <div className="banner-text-content text-white flex-1 items-center mt-20 ">
              <div className='text-5xl leading-relaxed'>
              Primary School
              </div>
              <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                <a href="#" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4 " />
                <span>Primary School</span>
              </div>

            </div>

          </div>
          <div className='main-school-banner-bottom'>
            <h2 className="text-3xl font-bold">Primary School</h2>
          </div>
        </div>
      </section>
      <section className="relative h-[900px] overflow-hidden">
  {/* Main background image */}
  <Image 
    src={PrimarySchoolBannerImage}
    alt="Primary school students"
    className="w-full h-full object-cover brightness-75"
  />

  {/* Overlapping content container */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex">
    {/* Left Half - Image */}
    <div className="w-1/2 h-full flex items-center justify-center">
      <Image 
        src={primaryoverlayImage} 
        alt="overlapimage" 
        className="primary-school-image"
      />
    </div>

    {/* Right Half - Content */}
    <div className="w-1/2 flex items-center px-10 text-white primary-school-banner-content">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-6">Primary School</h2>
        <p className="text-lg leading-relaxed">
          Our Primary School offers a structured and engaging timetable, 
          featuring six 55-minute periods each day. The weekly schedule 
          includes a balanced mix of subjects such as English, Mathematics, 
          Modern Foreign Languages, Science, Humanities, Art, Music, 
          Physical Education, and Personal, Social, Health and Economic 
          (PSHE) Education.
        </p>
      </div>
    </div>
  </div>
</section>
<section className='py-24'>
  <div className='container mx-auto'>
  <p className='primary-school-bottom-description'>Assessment is designed to foster a love of discovery and growth. Instead of formal examinations, we employ formative and summative assessments throughout the year, tailored by teachers to support each student's learning journey. Diagnostic testing at the start and end of the academic year ensures that progress is carefully tracked, allowing for personalised support.</p>
<p className='primary-school-bottom-description mt-20'>This holistic approach empowers RGIS KL students to reach their full potential, preparing them to face the future with confidence, creativity, and a lifelong love of learning.</p>
</div>
</section>

    </div>
  )
}

export default PrimarySchool
