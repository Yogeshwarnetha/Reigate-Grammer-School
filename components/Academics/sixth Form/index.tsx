import React from 'react'
import Image from 'next/image'
import FortBackgroundImage from '@/public/images/fort bg 6.png'
import SixthFormHeadImage from '@/public/images/louisa 1.png'

import SixthFormBAckgroundImage from '@/public/images/SixthForm Background.png'
import SixthFormSection1Image from '@/public/images/sixth form girl 1.png'
import './index.css'
import BannerImage from '@/public/images/Banner image.png'


const SixthForm = () => {
  return (
    <>
    <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Sixth Form                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Preparing tomorrow’s leaders for university and beyond.                </h2>
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
                        src={SixthFormHeadImage}
                        alt="Mark Evans"
                        className="w-3/4 md:w-full object-cover" />
                    </div>
      
                  </div>
                  {/* Right Side with Content - No Background */}
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                    <div className='senior-leadership-content'>
                      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Louisa Bailey</h2>
                      <h3 className="text-lg sm:text-lg md:text-xl text-[#1E1E1E] font-bold mb-4">
                      Head of Sixth Form
                      </h3>
                      <p className="text-gray-700 mb-4 text-justify">
                      Our Sixth Form is designed to be a transformative experience that equips students with the knowledge, skills, and confidence to excel in higher education and beyond. With a diverse range of A-Level subjects, we provide students with the flexibility to pursue their academic interests while securing internationally recognised qualifications that open doors to top universities worldwide. Beyond academics, we nurture independent thinkers, effective communicators, and future leaders, ensuring that every student leaves RGS KL with the resilience, ambition, and character to thrive in an ever-changing world.                        </p>
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
                      Choosing RGS KL for Sixth Form means investing in a world-class education that goes beyond the classroom. Our small class sizes and dedicated teachers provide tailored academic guidance, ensuring that every student is supported in achieving their full potential. Beyond academic success, we focus on personal development, leadership, and global awareness, preparing students for the complexities of the modern world. As part of the Reigatian community, students gain access to a prestigious alumni network, university connections, and career opportunities, giving them a competitive edge as they step into the next stage of their journey.                      </p>
                      <div>
                      </div>
                    </div>
      
                    {/* Image Section with Overlay */}
                    <div className="w-full md:w-1/2 h-[300px] md:h-auto ">
      
                      <Image
                        src={SixthFormBAckgroundImage}
                        alt="SixthFormBAckgroundImage"
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
                src={SixthFormSection1Image}
                alt="Placeholder"
                className="w-full h-[1000px] object-contain"
              />
            </div>
      
            {/* Right Content Div (60%) */}
            <div className="w-full md:w-3/5 h-60 md:h-full section3-early-years-container">
              <h2 className="text-xl md:text-3xl font-bold text-[#032D5A]">Curriculum Details</h2>
              <p className='secondary-school-text-container mt-10'>
              Our Sixth Form curriculum follows the rigorous and internationally respected A-Level programme, offering students a strong academic foundation while allowing them to specialise in subjects aligned with their aspirations. Complementing this, students engage in Personal, Social, Health and Economic (PSHE) education, physical education, and life skills workshops that cover essential areas such as CV writing, interview techniques, and personal branding. With a focus on intellectual curiosity, critical thinking, and problem-solving, we ensure that students develop the expertise and adaptability needed for success at university and in their future careers.
                </p>
      
              <div className='early-years-card-list'>
                <div className='early-years-card'>
                  <h4 className='early-years-card-heading'>Key Offerings and Benefits</h4>
                  <p className='early-years-card-description'>
                  We believe that education should be about more than just grades—it should shape individuals who are confident, compassionate, and ready to make an impact. Our RGS Diploma recognises students' academic achievements alongside their co-curricular involvement, leadership contributions, and personal growth. We provide extensive university and career preparation, including expert guidance on applications, one-on-one mentoring, and networking opportunities. Students benefit from a wide range of enrichment activities, leadership roles, and service projects that develop their confidence, independence, and ability to navigate the challenges of the future.                  </p>
                </div>
                <div className='early-years-card'>
                <h4 className='early-years-card-heading'>Programme with RGS UK</h4>
                <p className='early-years-card-description'>
                As part of the Reigate Grammar School (RGS) family, RGS KL offers a Sixth Form experience enriched by the expertise and traditions of one of the UK’s top independent schools. Our partnership with RGS UK provides students with exclusive opportunities, including international collaborations, joint academic initiatives, and access to a vast alumni network that spans industries and continents. This global connection ensures that RGS KL students receive a world-class education with a forward-thinking perspective, equipping them with the skills, knowledge, and confidence to excel on the international stage.                </p>
                </div>
              </div>
            </div>
          </div>
      
            </section>
            </>
  )
}

export default SixthForm;
