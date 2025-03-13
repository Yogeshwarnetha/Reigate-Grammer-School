import React from 'react'
import Image from 'next/image'
import BannerImage from '@/public/images/Banner image.png'
import '../Our School/index.css'
import './index.css'
import LocationBackroundImage from '@/public/images/Location Background Image.png'
import LocationMap from '@/public/images/LocationMap.png'
import LocationTrack from '@/public/images/LocationTrack.png'
import { MailIcon, MapPin, Phone } from 'lucide-react'
const Locations = () => {
  return (
    <div >
       <section className="w-full">
                     <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                       <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                       <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                         <div className="banner-text-content text-white max-w-full text-center">
                           <div className="whitespace-nowrap text-[min(48px,5vw)]">
                           Location
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="navbar-banner">
                       <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                       Away from the hustle yet near to all amenities.
                       </h2>
                     </div>
                   </section>
      
              <section>
                <div className='section1-location-container'>
                <Image src={LocationBackroundImage} alt='LocationBackroundImage' className='LocationBackroundImage'/>
                <div className='section1-text-container'>
                  <div className='section1-text-1-container'>
                    <h2 className='section1-heading'>Kuala Lumpur</h2>
                    <p className='section1-text'>
                    Kuala Lumpur is the ideal home for RGS KL, offering a dynamic mix of cultural diversity, economic vitality, and educational excellence. As Malaysia’s capital, it fosters inclusivity, global awareness, and a strong learning culture, aligning with our commitment to holistic education.
                    </p>
                    <p className='section1-text'>
                    With world-class infrastructure and a strategic location in Southeast Asia, the city connects students to global opportunities while providing a rich cultural and academic environment that supports their growth. RGS KL students benefit from unparalleled access to cultural enrichment, professional pathways, and a thriving educational community.
                    </p>
                  </div>
                  <div className='section1-text-2-container'>
                    <h2 className='section1-heading'>Kajang</h2>
                    <p className='section1-text'>
                    Located in the dynamic community of Kajang 2, Selangor, our state-of-the-art campus is designed to inspire and foster learning. The architecture and world-class facilities provide an environment where students can flourish. Inspired by the new campus, we remain steadfast in our commitment to excellence, ensuring a space where young minds are empowered to reach their full potential. 
                    </p>
                  </div>

                </div>
                </div>
              </section>
              <section className='location-section2-container'>
                <div className='container location-section2-sub-container'>
                  <h2 className='location-section2-heading'>Connectivity and Distance</h2>
                  <p className='location-section2-description'>Strategically located in Kajang 2, RGS KL is well connected and easily accessible from key areas across the Klang Valley. With direct access to major highways and public transport links, the school is just 33 minutes from Kuala Lumpur and under 45 minutes from Mont Kiara, TTDI, and Damansara Heights. The Kajang 2 KTM station provides additional convenience, ensuring seamless connectivity for families commuting from different parts of the city.</p>
                    <Image src={LocationMap} alt='LocationMap' className='LocationMap'/>
                </div>
              </section>
              <section className='location-section3-container mt-10'>
                <Image src={LocationTrack} alt='LocationTrack' className='LocationTrack'/>
              </section>

              <section>
              <div className="my-24 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl p-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center text-center mb-6 md:mb-0">
          <div className="bg-blue-50 p-3 rounded-lg mb-3">
            <MapPin className="h-10 w-10 text-blue-900" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Address</h2>
          <p className="text-gray-700">Jalan Kajang 2 Utama,</p>
          <p className="text-gray-700">Seksyen 2, Kajang 2, 43000</p>
          <p className="text-gray-700">Kajang, Selangor, Malaysia</p>
        </div>

        <div className="h-px w-full md:h-auto md:w-px bg-gray-200 my-4 md:my-0 md:mx-4"></div>

        <div className="flex flex-col items-center text-center mb-6 md:mb-0">
          <div className="bg-blue-50 p-3 rounded-lg mb-3">
            <Phone className="h-10 w-10 text-blue-900" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Phone</h2>
          <p className="text-gray-700">+689 4534215</p>
          <p className="text-gray-700">+689 4534215</p>
        </div>

        <div className="h-px w-full md:h-auto md:w-px bg-gray-200 my-4 md:my-0 md:mx-4"></div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-50 p-3 rounded-lg mb-3">
            <MailIcon className="h-10 w-10 text-blue-900" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Mail</h2>
          <p className="text-gray-700">info@rgiskl.com</p>
          <p className="text-gray-700">help@rgiskl.com</p>
        </div>
      </div>
    </div>
              </section>
      
    </div>
  )
}

export default Locations
