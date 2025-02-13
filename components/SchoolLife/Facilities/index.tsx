import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'


const Facilities = () => {
  return (
    <div>
      <section className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
                    <div className="absolute inset-0 px-10 ">
                        <div className="banner-text-content text-white flex-1 items-center mt-20 ">
                            <div className='text-5xl leading-relaxed'>
                                Mission and Vision
                            </div>
                            <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                                <a href="#" className="hover:underline">Home</a>
                                <ChevronRight className="w-4 h-4 " />
                                <span>Mission and Vision</span>
                            </div>

                        </div>

                    </div>
                    <div className='main-school-banner-bottom'>
                        <h2 className="text-3xl font-bold">Our Mission and Vision</h2>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Facilities
