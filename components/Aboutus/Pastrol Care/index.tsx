import React from 'react'
import Image from 'next/image'
import './index.css'
import section1BackGroundImage from '@/public/images/Pastrolcaresection1 background.jpg'
import { BookOpen, Heart, Award, BookCopy } from 'lucide-react';
import PastrolcareSection3Image from '@/public/images/Section3Pastrolcare.png'
import psheEducation from '@/public/images/PSHE Education Icon.png'
import BannerImage from '@/public/images/Banner image.png'



const PastrolCare = () => {
  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
            <div className="banner-text-content text-white max-w-full text-center">
              <div className="whitespace-nowrap text-[min(48px,5vw)]">
                Pastoral Care
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-banner">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Student wellbeing is the core of the Reigate way.
          </h2>
        </div>
      </section>
      <section>
        <div className='section-1-container'>
          <div className='section-1-pastrolcare-text-container'>
            <p className='pastrolcare-section1-description'>Pastoral care is the cornerstone of our educational philosophy, dedicated to nurturing each student's social, emotional, and academic well-being. This holistic approach is entirely secular, focusing solely on the welfare of our students.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pastrolcare-section1-cards">
              {/* Card 1 */}
              <div className="pastrol-care-card">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="pastrolcare-card-title pr-2">Understanding and Supporting Every Student</h2>
                  <BookOpen className="pastrolcare-card-icon flex-shrink-0" size={24} />
                </div>
                <p className="pastrolcare-card-content">
                  Through well-being surveys and academic assessments, we gain a holistic view of each
                  student's needs. This allows our pastoral and academic teams to provide timely, tailored
                  support, whether for personal challenges or exceptional talents.
                </p>
              </div>

              {/* Card 2 */}
              <div className="pastrol-care-card">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="pastrolcare-card-title pr-2">Personalised Guidance and Mentorship</h2>
                  <Heart className="pastrolcare-card-icon flex-shrink-0" size={24} />
                </div>
                <p className="pastrolcare-card-content">
                  Students benefit from Individual Education Plans (IEPs) for special learning needs and a mentorship
                  network that includes academic mentors, pastoral mentors, and senior student peer mentors—
                  ensuring both academic and emotional support.
                </p>
              </div>

              {/* Card 3 */}
              <div className="pastrol-care-card">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="pastrolcare-card-title pr-2">Well-being and Digital Responsibility</h2>
                  <Award className="pastrolcare-card-icon flex-shrink-0" size={24} />
                </div>
                <p className="pastrolcare-card-content">
                  Workshops, assemblies, and counselling sessions equip students with skills to manage stress,
                  maintain a healthy balance, and navigate the digital world safely and responsibly.
                </p>
              </div>

              {/* Card 4 */}
              <div className="pastrol-care-card">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="pastrolcare-card-title pr-2">Strong School-Home Partnerships</h2>
                  <BookCopy className="pastrolcare-card-icon flex-shrink-0" size={24} />
                </div>
                <p className="pastrolcare-card-content">
                  We actively engage parents through workshops and discussions, fostering collaboration to
                  support each child's development both at school and at home.
                </p>
              </div>
            </div>
          </div>
          <div className='section-1-img-container'>
            <img src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Pastrol+careImage.png" alt='pastrolcard-background' className='pastrol-care-img' />
          </div>

        </div>

      </section>

      <section className='pastrolcare-section-1-background-container'>
        <div className='container mx-auto'>
          <div className='pastrol-care-section-container'>
            <div className='pastrol-care-section-container-1'>
              <h2 className='pastrol-care-section-container-1-heading'>Pastoral Care Programmes</h2>
              <p className='pastrol-care-section-container-1-description'>At RGS Kuala Lumpur, pastoral care is integral to student well-being, fostering a supportive and inclusive environment where every child feels valued and empowered. </p>
              <p className='pastrol-care-section-container-1-description'>Through engaging lessons, mentorship, and community-building activities, we nurture a culture of respect, personal growth, and global awareness, preparing students for success within and beyond school.</p>
            </div>
            <div className='pastrol-care-section-container-2'>
              <h3 className='pastrolcare-sub-heading'>Our Programmes Encompass</h3>
              <div className='pastrolcare-section3-buttons'>
                <button className='pastrolcare-section3-button'><Image src={psheEducation} alt='psheEducation' /><p>PSHE Education</p> </button>
                <button className='pastrolcare-section3-button'><Image src={psheEducation} alt='psheEducation' /><p>Strong House System</p> </button>
                <button className='pastrolcare-section3-button'><Image src={psheEducation} alt='psheEducation' /><p>Diversity Celebrations</p> </button>
                <button className='pastrolcare-section3-button'><Image src={psheEducation} alt='psheEducation' /><p>Transition Support</p> </button>
                <button className='pastrolcare-section3-button'><Image src={psheEducation} alt='psheEducation' /><p>Staff Training</p> </button>


              </div>
            </div>
          </div>
          <div className='pastrol-care-section-img-container-2'>
            <img src='https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/kidsss+1.png' alt='pastrol-care-img' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PastrolCare
