import React from 'react'
import TransportBackroundImage from '@/public/images/Transportation Background Image.png'
import Image from 'next/image'
import './index.css'
import TransporationRectangularBox from '@/public/images/Transporation Rectangular Box.png'
import transporationIcon1 from '@/public/images/transporationIcon1.png'
import transporationIcon2 from '@/public/images/transporationIcon2.png'
import transporationIcon3 from '@/public/images/transporationIcon3.png'
import { Globe, Mail, Phone } from 'lucide-react'
import TransportCarousel from './carousel'
import BannerImage from '@/public/images/Banner image.png'


const Transporation = () => {
  return (
    <div>
      <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Transportation                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Safe, efficient, and convenient travel for students.
                </h2>
              </div>
            </section>
      <section>
                <div className='section1-transport-container'>
                <Image src={TransportBackroundImage} alt='TransportBackroundImage' className='TransportBackroundImage'/>
                <div className='section1-text-container'>
                  <div className='section1-text-1-container'>
                    <h2 className='section1-heading'>Seamless Accessibility</h2>
                    <p className='section1-text'>
                    Located about 30 kilometres from the heart of Kuala Lumpur, the campus enjoys excellent accessibility through key highways, including the SILK Highway, LEKAS Highway, and the North-South Expressway, allowing for smooth travel from different areas. Additionally, the Kajang 2 KTM station, situated within walking distance of the school, offers a direct link to the public transport system, facilitating easy connections to the MRT and other train services.                    </p>
                    
                  </div>
                  <div className='section1-text-2-container'>
                    <h2 className='section1-heading'>Pick Up Places</h2>
                    <p className='section1-text'>
                    RGS KL is committed to providing convenient transportation options for its students. The school plans to offer transportation services covering all major locations within the Klang Valley, ensuring accessibility for families across the region. The school's strategic location in Kajang 2 offers excellent connectivity to key areas such as KLCC, Bangsar, Ampang, Mont Kiara, and Putrajaya via major highways.                    </p>
                  </div>

                </div>
                </div>
              </section>
              <section className='bg-[#032D5A]'>
                <div className='container mx-auto py-20 '>
                    <div className='text-center text-[#fff] text-xl trasporation-card-below-main'>
                        <p className='trasporation-card-below-description'>While specific booking details are being finalised, the school plans to offer a comprehensive transportation service covering major locations within the Klang Valley.</p>
                    </div>
                    <div className='transporation-main-cards-list'>
                        <div className='transportation-card-container'>
                            <Image src={TransporationRectangularBox} alt='TransporationRectangularBox' className='TransporationRectangularBox'/>
                            <div className='transporationicon-text-container'>
                                <Image src={transporationIcon1} alt='transporationIcon1' className='transporationIcon'/>
                                <h3 className='transporation-card-heading'>Transportation Services</h3>
                                <p className='transporation-card-description'>School-organised Transport: RGS KL intends to operate a fleet of buses to facilitate student commutes. These buses are expected to serve various routes, ensuring timely arrivals before the start of the school day and departures after school hours. Detailed routes and schedules will be designed based on student demographics and demand.</p>
                            </div>
                        </div>
                        <div className='transportation-card-container'>
                            <Image src={TransporationRectangularBox} alt='TransporationRectangularBox' className='TransporationRectangularBox'/>
                            <div className='transporationicon-text-container'>
                                <Image src={transporationIcon2} alt='transporationIcon1' className='transporationIcon'/>
                                <h3 className='transporation-card-heading'>Booking Process</h3>
                                <p className='transporation-card-description'>While the exact booking procedures for the school-organised transport have yet to be announced, it is anticipated that RGS KL will implement a system allowing parents to register their children for bus services. This may involve online registration forms or direct communication with the school's administration.</p>
                            </div>
                        </div>
                        <div className='transportation-card-container'>
                            <Image src={TransporationRectangularBox} alt='TransporationRectangularBox' className='TransporationRectangularBox'/>
                            <div className='transporationicon-text-container'>
                                <Image src={transporationIcon3} alt='transporationIcon1' className='transporationIcon'/>
                                <h3 className='transporation-card-heading'>Contact Information</h3>
                                <p className='transporation-card-description'>For the most accurate and up-to-date information regarding transportation services and booking details, please contact RGS KL directly:</p>
                                <div>
                                    <p className='flex gap-5 mt-4'><span><Globe/></span><span>https://www.rgsklopenday.com/</span></p>
                                    <p className='flex gap-5 mt-4'><span><Mail/></span><span>info@rgskl.edu.my</span></p>
                                    <p className='flex gap-5 mt-4'><span><Phone/></span><span>+603-8734 1475</span></p>

                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className='trasporation-card-below-main'>
                        <p className='trasporation-card-below-description'>
                        The school is committed to ensuring a safe and convenient commute for all students and will provide detailed transportation guidelines and booking instructions as they become available.
                        </p>
                    </div>
                </div>
              </section>
              <section>
                <div className='transporation-carousel-container'>
                    <h2 className='transporation-carousel-heading'>Public Transportation - MRT / Buses</h2>
                    <p className='transporation-carousel-description'>There are various public transportation options for students and visitors.</p>
                </div>
                <TransportCarousel/>

                <div className='trasporation-card-below-main pb-24'>
                    <p className='trasporation-card-last-description'>Please note that public transportation routes and schedules are subject to change. It's recommended to verify the latest information before planning your journey.</p>
                </div>
              </section>
    </div>
  )
}

export default Transporation
