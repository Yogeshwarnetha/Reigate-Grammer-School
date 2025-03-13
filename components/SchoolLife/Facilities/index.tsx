"use client"
import React, { useState } from 'react'
import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import FacilitiesBackgroundImage from '@/public/images/FacilitiesBackgroundImage.png'
import SportsCardCarousel from './sportsFacilities'

interface FacilityContent {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}



const facilities: FacilityContent[] = [
  {
    id:1,
    title: "Classroom Structures",
    description: "RGS KL is committed to providing an optimal learning environment through small class sizes and well-equipped facilities. In the Lower School, classes typically have fewer than 20 students, ensuring personalised attention. At Key Stage 3, class sizes rarely exceed 24 students; at GCSE level, they are usually under 20; and at A Level, classes often comprise 12 or fewer students.",
    imageUrl: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Rectangle+217.png"
  },
  {
    id:2,
    title: "Library",
    description: "Our library stands as a vibrant hub of learning and community engagement. It offers a serene environment complemented by a high-vaulted ceiling and individual study pods, providing students with an ideal space to study, read, and explore. This dynamic space not only supports academic excellence but also cultivates a sense of community and intellectual curiosity within the school. ",
    imageUrl: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Library.png"
  },
  {
    id:3,
    title: "Auditorium",
    description: "At RGS Kuala Lumpur, the Auditorium serves as a versatile performance space integral to our vibrant arts programme. The Auditorium is central to our commitment to fostering artistic expression and community engagement within the school.",
    imageUrl: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Auditorium.png"
  },
  {
    id:4,
    title: "Cafe",
    description: "Nestled within the state-of-the-art campus, the Café offers an inviting space for students to collaborate, socialise, and unwind. This informal setting is designed to foster a sense of community among the students through daily interactions and academic collaboration.",
    imageUrl: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Cafe.png"
  },
  {
    id:5,
    title: "Labs",
    description: "Our commitment to scientific excellence is exemplified by the state-of-the-art science laboratories, each equipped to support academic exploration across Biology, Chemistry, and Physics. Designed to foster both theoretical understanding and practical application, these laboratories provide an inspiring environment where students engage in hands-on experiments, cultivating a profound appreciation for the sciences. ",
    imageUrl: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Labs.png"
  }
];

type SportsCategory = keyof typeof sportsFacilities;


const sportsFacilities = {
  'Football Fields': [
    'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/FootBall.png',
    'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&q=80&w=600',
  ],
  'Basketball Courts': [
    'https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600',
  ],
  'Swimming Pool': [
    'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600',
  ],
  'Tennis Courts': [
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=600',
  ],
};
const Facilities = () => {
  const [currentFacility, setCurrentFacility] = useState<FacilityContent>(facilities[0]);

  const handleButtonClick = (id: number) => {
    const selectedFacility = facilities.find(facility => facility.id === id);
    if (selectedFacility) {
      setCurrentFacility(selectedFacility);
    }
  };

  
  const [selectedCategory, setSelectedCategory] = useState<SportsCategory>('Football Fields');
  const [selectedImage, setSelectedImage] = useState(sportsFacilities['Football Fields'][0]);
  
  const categories = Object.keys(sportsFacilities) as SportsCategory[];

    return (
        <div>
           <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Facilities                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Inspiring spaces designed for exceptional learning.                </h2>
              </div>
            </section>



            
            <section className="facilities-section">
                <img src={currentFacility.imageUrl} alt="Facilities Background Image" className="FacilitiesBackgroundImage" />
                <div className="facilities-section-1-container">
                    <div className="facilities-button-list">
                    {facilities.map((facility) => (
              <button
                key={facility.id}
                onClick={() => handleButtonClick(facility.id)}
                className={`facilities-button
                  ${currentFacility.id === facility.id ? 'bg-yellow-400 text-black font-bold' : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'}`}
              >
                {facility.title}
              </button>
            ))}
                    </div>
                    <div className="facilities-content-list">
                        <h2 className='facilities-heading'>{currentFacility.title}</h2>
                        <p className='facilities-description'>
                        {currentFacility.description}
                        </p>
                    </div>
                </div>
            </section>

            <section>
        <div className="min-h-screen flex flex-col">
          {/* Background Image Section */}
          <div className="relative">
            <div
              className="h-[100vh] bg-cover bg-center bg-no-repeat transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedImage})`,
              }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="container mx-auto">
                <div className="flex flex-wrap gap-4 justify-center">
                  {sportsFacilities[selectedCategory].map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`
                        w-24 h-24 rounded-lg overflow-hidden cursor-pointer
                        transition-all duration-300 transform hover:scale-105
                        ${
                          selectedImage === image
                            ? "ring-4 ring-blue-500"
                            : ""
                        }
                      `}
                    >
                      <img
                        src={image}
                        alt={`Sports Facility ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 bg-[#DCE4F4]">
            <div className="container mx-auto px-4 py-8">
              {/* Sports Facilities Heading */}
              <h1 className="text-4xl font-light text-center text-gray-800 mb-8">
                Sports Facilities
              </h1>

              {/* Category Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedImage(sportsFacilities[category][0]);
                    }}
                    className={`
                      px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md
                      ${
                        selectedCategory === category
                          ? "bg-[#032D5A] text-white"
                          : "bg-[#B9C9E9e] text-[#032D5A] border-2 border-[#032D5A]"
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className='container mx-auto text-center mt-10 w-[80%]'>
                <p className='text-lg font-light text-[#032D5A]'>We offer a comprehensive array of sports facilities designed to promote physical fitness and skill development among students.The main campus features an indoor swimming pool, providing opportunities for both competitive and recreational swimming. Additionally, there are netball and tennis courts, a dance studio to accommodate various athletic pursuits. For field sports, the vast sports ground includes rugby, hockey, cricket, and football pitches. These extensive facilities underscore RGS Kuala Lumpur's commitment to fostering a lifelong involvement in sport and physical activity among its students. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
    )
}

export default Facilities
