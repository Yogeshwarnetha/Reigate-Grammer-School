import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import FacilitiesBannerImg from '@/images/FacilitiesBanner.png'

const facilitiesList = [
    {
        id: 1,
        heading : "Science Laboratories",
        description: "State-of-the-art labs designed to inspire scientific curiosity and drive innovation."
    },
    {
        id: 2,
        heading : "Orchestra Room and Recording Studio",
        description: "Dedicated spaces for music students to refine their talents and cultivate their creativity."
    },
    {
        id: 3,
        heading : "Sports Facilities",
        description: "Extensive sports amenities, including a swimming pool, football field, tennis courts, and more, encouraging students to stay active and build teamwork skills."
    },
    {
        id: 4,
        heading : "Art Studios and Performance Spaces",
        description: "Vibrant spaces where students can explore their creativity through visual arts, drama, and dance."
    },
    {
        id: 5,
        heading : "Library and Learning Spaces",
        description: "A well-resourced library that promotes a love for reading and self-guided learning, complemented by inviting spaces for both group collaboration and individual study. Extracurricular Activities"
    },
    {
        id: 6,
        heading : "Extracurricular Activities  Sports Teams:",
        description: "Participate in competitive football, basketball, volleyball, tennis, and other team sports."
    },{
        id: 7,
        heading : "Music:",
        description: "Engage in individual lessons or join group ensembles, including orchestra, choir, and jazz band, to explore a wide range of musical styles."
    },
    ,{
        id: 8,
        heading : "Drama and Performing Arts:",
        description: "Take part in drama productions, musical theatre, and dance, offering students a creative outlet for self-expression."
    },
    ,{
        id: 9,
        heading : "Community Service:",
        description: "Get involved in local and international service initiatives that nurture empathy, leadership skills, and social responsibility."
    },
    ,{
        id: 10,
        heading : "Leadership Development:",
        description: "Benefit from a variety of leadership roles through school committees, peer mentoring, and extracurricular opportunities."
    },
    

]
const Facilities = () => {
  return (
    <div>
      <section className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
                    <div className="absolute inset-0 px-10 banner-background-text-navigation">
                        <div className="banner-text-content text-white flex-1 items-center mt-20 ">
                            <div className='text-5xl leading-relaxed'>
                            Facilities
                            </div>
                            <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                                <a href="#" className="hover:underline">Home</a>
                                <ChevronRight className="w-4 h-4 " />
                                <span>Facilities</span>
                            </div>

                        </div>

                    </div>
                    <div className='main-school-banner-bottom'>
                        <h2 className="text-3xl font-bold">Facilities</h2>
                    </div>
                </div>
            </section>
            <section className='facilities-section2-main'>
                <div className='container facilities-section2-main-container mx-auto'>
                    <div className='facilities-section2-heading-image-container'>
                    <div className='facilities-section2-text-container'>
                        <h2 className='facilities-section2-main-heading'>Our Facilities <br/>
                        and Opportunities</h2>
                        <p>The RGIS KL campus is thoughtfully designed to cater to every student’s needs. Our exceptional facilities include:</p>
                    </div>
                    <div className='facilites-section2-img-container'>
                        <Image src={FacilitiesBannerImg} alt='facilites-img'/>
                    </div>
                    </div>
                </div>
            </section>
            <section className='facilities-section2-main'>
                <div className='container facilities-section2-main-container mx-auto'>
                    <div className='facilities-list-container container mx-auto'>
                        {facilitiesList.map((facility:any, index:any) => (
                            <div key={facility.id} className='facilities-item'>
                                <p className='facilities-item-count'>{facility.id}</p>
                                <h3 className='facilities-item-heading'>{facility.heading}</h3>
                                <p className='facilities-item-description'>{facility.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Facilities
