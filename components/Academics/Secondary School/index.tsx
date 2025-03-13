import React from 'react'
import Image from 'next/image'
import FortBackgroundImage from '@/public/images/fort bg 6.png'
import HeadofEarlyEarsImage from '@/public/images/philipppp.png'
import EarlyYearsSection1Image from '@/public/images/EarlyYearsPageSection1Image.png'
import SecondarySection1Image from '@/public/images/secondarySchoolImage.png'
import './index.css'
import BannerImage from '@/public/images/Banner image.png'


const SecondarySchool = () => {
  return (
    <>
    <section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Secondary School                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Challenging minds, shaping futures.
                </h2>
              </div>
            </section>
      <section>
         <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#DCE4F4]">
   
           {/* Unified Responsive Profile Card */}
           <div className="overflow-hidden">
             <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">
   
   
               {/* Left Side with Image and Background */}
               <div className="w-full md:w-2/5 relative flex justify-center items-end">
   
                 {/* Background Image Positioned at the Bottom */}
                 <div className="absolute bottom-0 left-0 w-full h-auto">
                   <Image
                     src={FortBackgroundImage}
                     alt="School background"
                     className="w-full h-[300px] object-fill" />
                 </div>
   
                 {/* Profile Image Container */}
                 <div className="relative z-10">
                   <Image
                     src={HeadofEarlyEarsImage}
                     alt="Mark Evans"
                     className="w-3/4 md:w-full object-cover" />
                 </div>
   
               </div>
               {/* Right Side with Content - No Background */}
               <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                 <div className='senior-leadership-content'>
                   <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Philip Thomas</h2>
                   <h3 className="text-lg sm:text-lg md:text-xl text-[#1E1E1E] font-bold mb-4">
                   Head of Secondary School
                   </h3>
                   <p className="text-gray-700 mb-4 text-justify">
                   Our Lower and Upper Secondary programmes provide an enriching and dynamic learning environment that nurtures academic excellence, personal growth, and global awareness. We go beyond traditional education, inspiring students to think critically, solve problems creatively, and take ownership of their learning. By fostering resilience, independence, and leadership, we empower students to embrace challenges with confidence and prepare them for success in an ever-evolving world.
                     </p>
                 </div>
               </div>
   
   
   
             </div>
           </div>
   
         </div>
   
       </section>
        <section>
           <div className=" bg-white">
   
             {/* Content Section */}
             <div className="relative w-full">
               <div
                 className="w-full bg-[#032D5A] min-h-[400px] flex flex-col md:flex-row"
               >
                 {/* Text Content */}
                 <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 ml-10">
                   <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                   Why at RGS KL                </h2>
                   
                   <p className="text-white my-8 max-w-4xl text-justify">
                   Here, we believe that education is about more than just academic achievement—it is about preparing students to lead, innovate, and make a difference. Our experienced educators provide exceptional teaching, mentorship, and support, ensuring that students are challenged and inspired every step of the way. Small class sizes create a collaborative and engaging learning environment where students are encouraged to ask questions, think independently, and develop their full potential. With a strong focus on leadership development, co-curricular opportunities, and global perspectives, RGS KL offers a transformative education that equips students with the skills, confidence, and mindset to excel in higher education and beyond.                    </p>
                   <div>
                   </div>
                 </div>
   
                 {/* Image Section with Overlay */}
                 <div className="w-full md:w-1/2 h-[300px] md:h-auto ">
   
                   <Image
                     src={EarlyYearsSection1Image}
                     alt="ApplyPageImage"
                     className="w-full h-full object-cover block"
                   />
                   <div className="gradient-overlay"></div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <section className='early-years-main-container'>
         <div className="flex flex-col md:flex-row w-full">
         {/* Left Image Div (40%) */}
         <div className="w-full md:w-2/5 h-60 md:h-full">
           <Image
             src={SecondarySection1Image}
             alt="Placeholder"
             className="w-full h-[1000px] object-contain"
           />
         </div>
   
         {/* Right Content Div (60%) */}
         <div className="w-full md:w-3/5 h-60 md:h-full section3-early-years-container">
           <h2 className="text-xl md:text-3xl font-bold text-[#032D5A]">Curriculum Details</h2>
           <p className='secondary-school-text-container mt-10'>The Secondary School curriculum is carefully designed to offer students a well-balanced and future-focused education. In Lower Secondary, students engage in a broad and stimulating curriculum that encourages curiosity, critical thinking, and problem-solving. As they progress to Upper Secondary, they follow the globally respected Cambridge IGCSE curriculum, selecting subjects that align with their passions and career ambitions. This rigorous yet flexible approach ensures that students develop not only strong academic skills but also the adaptability, resilience, and global awareness needed to thrive in an increasingly interconnected world.</p>
   
           <div className='early-years-card-list'>
             <div className='early-years-card'>
               <h4 className='early-years-card-heading'>Lower Secondary School</h4>
               <p className='early-years-card-description'>
               Our Lower Secondary curriculum is designed to provide a strong academic foundation while cultivating essential life skills and a passion for learning. Students engage in a structured six-period school day that balances core subjects with opportunities for creative expression, critical thinking, and personal development. Small class sizes allow for individualised attention, ensuring that each student receives the support they need to thrive. Malaysian students develop their language proficiency in both Bahasa Malaysia and Mandarin, enhancing their communication skills and cultural appreciation. Through high-quality teaching, engaging learning experiences, and a well-rounded curriculum, we equip students with the knowledge and confidence to excel in Upper Secondary and beyond.
               </p>
             </div>
             <div className='early-years-card'>
             <h4 className='early-years-card-heading'>Primary School Programme:</h4>
             <p className='early-years-card-description'>
             The Upper Secondary programme at RGS KL is centred around the prestigious Cambridge IGCSE curriculum, providing students with a globally recognised qualification that opens doors to top universities and future career opportunities. With a strong focus on academic excellence, students study core subjects such as English, Mathematics, and a Science discipline, while also benefiting from a holistic education that includes Personal, Social, Health and Economic (PSHE) education and Physical Education. Malaysian students continue to strengthen their Bahasa Malaysia skills, ensuring bilingual proficiency. Beyond the core curriculum, students can customise their learning experience by selecting from a wide range of IGCSE subjects tailored to their individual strengths and aspirations. This personalised approach enables students to build a solid academic foundation while developing essential skills for lifelong success.
             </p>
             </div>
           </div>
         </div>
       </div>
   
         </section>
         </>
  )
}

export default SecondarySchool
