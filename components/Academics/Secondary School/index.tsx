import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import SecondarySchoolBannerImage1 from '@/images/SecondarySchhol_Banner1.png'
import secondaryoverlayImage from '@/images/PrimarySchool.png'
import SecondarySchoolBannerImage2 from '@/images/SecondarySchool_Banner2.png'
import SecondarySchool2 from '@/images/SecondarySchool_2.png'
import './index.css'

const SecondarySchool = () => {
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
          src={SecondarySchoolBannerImage1}
          alt="Primary school students"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Overlapping content container */}
        <div className="absolute inset-0 flex">
          {/* Left Half - Image */}
          <div className="w-1/2 h-full flex items-center justify-center">
            <Image
              src={secondaryoverlayImage}
              alt="overlapimage"
              className="primary-school-image"
            />
          </div>

          {/* Right Half - Content */}
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold mb-6">Lower Secondary School</h2>
              <p className="text-lg leading-relaxed">
                At RGIS KL, our Lower Secondary curriculum is designed to provide a broad and balanced education that fosters academic excellence and holistic development. Students engage in a structured six-period school day, covering core subjects while encouraging creativity, critical thinking, and personal growth. All Malaysian students study Bahasa and Mandarin, enhancing language proficiency and cultural awareness. Our small class sizes ensure personalised attention, promoting deeper understanding and engagement. This approach prepares students for future success by offering high-quality teaching, tailored support, and an enriching curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative h-[900px] overflow-hidden">
        <Image
          src={SecondarySchoolBannerImage2}
          alt="Primary school students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex">
        


            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="max-w-lg text-white">
                <h2 className="text-4xl font-bold mb-6">Upper Secondary School</h2>
                <p className="text-lg leading-relaxed">
                  Our Upper Secondary curriculum follows the Cambridge IGCSE programme, providing students with a robust academic foundation. Students engage in a structured six-period day, studying core subjects such as English, Mathematics, and a Science discipline. Malaysian students also study Bahasa Malaysia, enhancing their language proficiency. Additionally, all students participate in Personal, Social, Health and Economic (PSHE) education and Physical Education, supporting their personal development and well-being. Beyond the core curriculum, students can choose from a broad range of IGCSE options, allowing them to tailor their studies to their interests and future aspirations. This comprehensive approach ensures that our students receive a well-rounded education, equipping them with the knowledge, skills, and qualifications necessary for further education and career success.
                </p>
              </div>
            </div>

            <div className="w-1/2 h-full flex items-center justify-center">
              <Image
                src={SecondarySchool2}
                alt="overlapimage"
                className="primary-school-image"
              />
            </div>

        </div>
      </section>
    </div>
  )
}

export default SecondarySchool
