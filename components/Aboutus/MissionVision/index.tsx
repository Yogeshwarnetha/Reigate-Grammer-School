import React from 'react'
import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import OurVisionImage from '@/public/images/ourvisionImage.png'
import ExcellenceLogo from '@/public/images/Rectangle 63.png'
import starIcon from '@/public/images/solar_star-fall-bold-duotone.png'
import Integrityicon from '@/public/images/fluent_person-ribbon-24-filled.png'
import CompassionIcon from '@/public/images/Frame 63.png'
import InnovationIcon from '@/public/images/humbleicons_bulb.png'
import CollaborationIcon from '@/public/images/fa-solid_handshake.png'
import inclusionIcon from '@/public/images/mdi_people-group.png'


const MissionandVision = () => {
    return (
        <div>
           
            <section>
                <div className='ourmission-section-2 my-10'>
                <h3 className="our-mission-heading">Our Mission and Vision</h3>
                    <p className='ourmission-section-2-para'>Our Values Guided by the legacy of Reigate Grammar School UK, we hold fast to the following core values:</p>
                </div>
                <div className='section-2-card-container mb-10'>
                    <div className='container cards-main-container-section-2'>
                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={starIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Excellence</h2>

                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                We pursue the highest standards in everything we do, from academic achievement to extracurricular activities.                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={Integrityicon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Integrity</h2>
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                 We place great emphasis on honesty, respect, and fairness in all interactions.                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={CompassionIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Compassion</h2>
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                 We nurture a caring and supportive community where every individual is valued.                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={InnovationIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Innovation</h2>
                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                We embrace change and encourage creativity, critical thinking, and problem-solving.                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={CollaborationIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Collaboration</h2>

                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                 We believe in the power of teamwork, both within the school and with our families, to achieve our collective goals.                                </p>
                            </div>
                        </div>

                        <div className="relative mt-10 flex flex-col items-center text-center excellence-container">
                            {/* Background Image */}
                            <Image src={ExcellenceLogo} alt="Excellence" className="excellence-background" />

                            {/* Overlay Content */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                                <Image src={inclusionIcon} alt="star-icon" className="w-120 h-120 mb-2" />
                                <h2 className='card-custom-text-section-2-heading'>Inclusion</h2>

                                <p className="card-custom-text-section-2 text-white font-semibold text-lg max-w-xs">
                                We create a safe, inclusive learning environment that fosters individual growth, respecting each student's uniqueness.                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default MissionandVision
