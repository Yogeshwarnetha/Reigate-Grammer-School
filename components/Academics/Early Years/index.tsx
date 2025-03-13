import React from 'react'
import Image from 'next/image'
import FortBackgroundImage from '@/public/images/fort bg 6.png'
import HeadofEarlyEarsImage from '@/public/images/mark e 2.png'
import EarlyYearsSection1Image from '@/public/images/EarlyYearsPageSection1Image.png'
import earlyYearsSection3Image from '@/public/images/EarlyYearsImage.png'
import BannerImage from '@/public/images/Banner image.png'


import './index.css'


const EarlyEars = () => {
  return (
   <>
   <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Early Years and Primary School                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                A strong foundation for future success.
                </h2>
              </div>
            </section>
   <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#DCE4F4]">

        {/* Unified Responsive Profile Card */}
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">


            {/* Left Side with Image and Background */}
            <div className="w-full md:w-2/5 relative flex justify-center items-end">

              {/* Background Image Positioned at the Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image
                  src={FortBackgroundImage}
                  alt="School background"
                  className="w-full h-[300px] object-fill" />
              </div>

              {/* Profile Image Container */}
              <div className="relative z-10">
                <Image
                  src={HeadofEarlyEarsImage}
                  alt="Mark Evans"
                  className="w-3/4 md:w-full object-cover" />
              </div>

            </div>
            {/* Right Side with Content - No Background */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
              <div className='senior-leadership-content'>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Mark Evans</h2>
                <h3 className="text-lg sm:text-lg md:text-xl text-[#1E1E1E] font-bold mb-4">
                  Head of Early Years and Primary School
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  At Reigate Grammar School Kuala Lumpur (RGS KL), the Early Years and Primary School programmes provide a stimulating and nurturing environment where children are encouraged to develop a lifelong love of learning. Recognising that each child is unique, we foster meaningful connections to understand their individual interests, strengths, and aspirations. Our approach emphasises creativity, critical thinking, and communication, enabling students to grow in confidence and independence.        </p>
                <p className="text-gray-700 mb-4 text-justify">
                  Through engaging and collaborative learning experiences, we cultivate compassionate and resilient individuals who take pride in their school, contribute positively to their community, and develop a strong sense of global responsibility. Here, we inspire every child to dream ambitiously, explore with curiosity, and acquire the knowledge and skills needed to succeed in an ever-changing world.        </p>
              </div>
            </div>



          </div>
        </div>

      </div>

    </section>
     <section>
        <div className=" bg-white">

          {/* Content Section */}
          <div className="relative w-full">
            <div
              className="w-full bg-[#032D5A] min-h-[400px] flex flex-col md:flex-row"
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 ml-10">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                Why at RGS KL                </h2>
                
                <p className="text-white my-8 max-w-4xl text-justify">
                Choosing RGS KL means your child will benefit from a rich and well-rounded education rooted in academic excellence, strong pastoral care, and a global perspective. With small class sizes, dedicated teachers, and a dynamic curriculum, we create a supportive setting where every child is inspired to achieve their best.                </p>
                <div>
                </div>
              </div>

              {/* Image Section with Overlay */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto ">

                <Image
                  src={EarlyYearsSection1Image}
                  alt="ApplyPageImage"
                  className="w-full h-full object-cover block"
                />
                <div className="gradient-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='early-years-main-container'>
      <div className="flex flex-col md:flex-row w-full">
      {/* Left Image Div (40%) */}
      <div className="w-full md:w-2/5 h-60 md:h-full">
        <Image
          src={earlyYearsSection3Image}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Div (60%) */}
      <div className="w-full md:w-3/5 h-60 md:h-full section3-early-years-container">
        <h2 className="text-xl md:text-3xl font-bold text-[#032D5A]">Curriculum Details</h2>

        <div className='early-years-card-list'>
          <div className='early-years-card'>
            <h4 className='early-years-card-heading'>Early Years Programme:</h4>
            <p className='early-years-card-description'>Our Early Years curriculum focuses on nurturing young learners' natural curiosity and enthusiasm. We provide a safe and caring learning environment where children can gain skills, acquire knowledge, and develop as happy and confident individuals.</p>
          </div>
          <div className='early-years-card'>
          <h4 className='early-years-card-heading'>Primary School Programme:</h4>
          <p className='early-years-card-description'>Our Primary School offers a structured and engaging timetable, featuring six 55-minute periods each day. The weekly schedule includes a balanced mix of subjects such as English, Mathematics, Modern Foreign Languages, Science, Humanities, Art, Music, Physical Education, and Personal, Social, Health and Economic (PSHE) Education.</p>
          </div>
        </div>
      </div>
    </div>

      </section>
      </>
  )
}

export default EarlyEars
