import React from 'react'
import Image from 'next/image'
import OverlayImageSports from '@/public/images/SportImage.png'
import AdventureSportsbannerImage from '@/public/images/kid painting 1.png'
import './index.css'
import AdventureSportsBottomImage from '@/public/images/kid paintinggg 1.png'

import SportImage1 from '@/public/Arts and Expression/Group 152.png'
import SportImage2 from '@/public/Arts and Expression/Group 153.png'

import SportImage3 from '@/public/Arts and Expression/Group 154.png'

import SportImage4 from '@/public/Arts and Expression/Group 155.png'

import SportImage5 from '@/public/Arts and Expression/Group 156.png'

import SportImage6 from '@/public/Arts and Expression/Group 157.png'

import SportImage7 from '@/public/Arts and Expression/Group 158.png'
import SportImage8 from '@/public/Arts and Expression/Group 159.png'
import BannerImage from '@/public/images/Banner image.png'

const ArtsandExpression = () => {
  return (
    <>
    <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Performing Arts and Expressions                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Creativity and confidence take centre stage.                </h2>
              </div>
            </section>
    <div className='bg-[#DCE4F4]'>
    <section className='activity-section-1-background-container'>
      <div className='container mx-auto activity-section-1-main-container'>
        <div className='activity-section-1-text-container'>
          <h1 className='activity-section-1-heading'>Introduction</h1>
          <p className='activity-section-1-description'>We offer a diverse range of co-curricular activities designed to foster creativity and self-expression. These activities provide students with opportunities to explore their interests, develop new skills, and engage with the school community beyond the classroom.</p>
        </div>
        <div className='activity-section-1-image-container'>
          <Image src={AdventureSportsbannerImage} alt='AdventureSportsbannerImage' className='activity-section-1-image'/>
        </div>
      </div>
    </section>
    <section className='relative bg-[#DCE4F4] py-10 -mt-12 z-10 rounded-t-[60px]'>
    <h2 className='container mx-auto text-center sports-card-heading'>Our Activities </h2>
    <div className="container mx-auto p-4 flex justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 w-[75%]">
        <Image src={SportImage1} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage2} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage3} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage4} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage5} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage6} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage7} alt="SportImage" className="w-[250px] h-auto mx-auto" />
        <Image src={SportImage8} alt="SportImage" className="w-[250px] h-auto mx-auto" />
      </div>
    </div>
    </section>
    <section className='activity-section-3-background-container'>
    <div className='container mx-auto activity-section-1-main-container pt-10'>
    <div className='activity-section-1-image-container'>
          <Image src={AdventureSportsBottomImage} alt='AdventureSportsbannerImage' className='activity-section-1-image'/>
        </div>
        <div className='activity-section-1-text-container'>
          <h2 className='activity-section-2-heading'>Awards and Recognitions</h2>
          <p className='activity-section-1-description'>We honour students’ achievements in performing arts, celebrating their creativity, talent, and dedication to artistic expression on stage and beyond.</p>
        </div>
        
      </div>
    </section>
    </div>
    </>
  )
}

export default ArtsandExpression
