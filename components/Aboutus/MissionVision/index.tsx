import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import OurVisionImage from '@/images/ourvisionImage.png'
import ExcellenceLogo from '@/images/Rectangle 63.png'
import starIcon from '@/images/solar_star-fall-bold-duotone.png'

const MissionandVision = () => {
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
                    <div className='about-our-school-banner'>
                        <h2 className="text-3xl font-bold">Our Mission and Vision</h2>
                    </div>
                </div>
            </section>
            <section>
    <div className="our-vision-mission-main-section">
        <div className="our-vision-mission-main-sub-section container">
            <div className="our-mission-text-container">
                <h2 className="our-mission-heading">Our Mission and Vision</h2>
                <p className="our-mission-description">
                    At RGIS KL, we believe in a holistic education that goes beyond just academic success. Our vision is to develop confident, compassionate, and capable global citizens who are equipped to thrive in an ever-evolving world. Our mission is to provide an education that fosters intellectual curiosity, resilience, and a strong sense of ethical responsibility, ensuring that our students are well-prepared for the challenges of the future.
                </p>
            </div>
            <div className="our-mission-image-container">
                <Image src={OurVisionImage} alt="our-vision" className="our-vision-image" />
            </div>
        </div>
    </div>
</section>
            <section>
                <div className='ourmission-section-2 my-10'>
                    <p className='ourmission-section-2-para'>Our Values Guided by the legacy of Reigate Grammar School UK, we hold fast to the following core values:</p>
                </div>
                <div className='section-2-card-container'>
                    <div className='container cards-main-container-section-2'>
                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                    We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default MissionandVision
