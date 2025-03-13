import React from 'react'
import FortBackgroundImage from '@/public/images/fort bg 6.png'
import Image from 'next/image'
import PrinicipalImage from '@/public/images/senior leadership philip 2.png'
import HeadofEarlyEarsImage from '@/public/images/mark ee.png'
import HeeadofSecondarySchool from '@/public/images/philipppp.png'
import HeadofSixthForm from '@/public/images/luisa b.png'
import DeputyHeadPastrolImage from '@/public/images/edg.png'
import BannerImage from '@/public/images/Banner image.png'


import './index.css'

const SeniorLeaderShip = () => {
  return (

     <>
     <section className="w-full">
      <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
        <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
          <div className="banner-text-content text-white max-w-full text-center">
            <div className="whitespace-nowrap text-[min(48px,5vw)]">
            Senior Leadership Team
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-banner">
        <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
        People driven by passion and commitment.
        </h2>
      </div>
    </section>
    <div className="min-h-screen ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#DCE4F4]">

          {/* Unified Responsive Profile Card */}
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">

              {/* Left Side with Image and Background */}
              <div className="w-full md:w-2/5 relative flex justify-center items-end">

                {/* Background Image Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-auto">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/fort+bg+6.png"
                    alt="School background"
                    className="w-full h-[300px] object-fill" />
                </div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/philip+2.png"
                    alt="Phillip Bailey"
                    className="w-3/4 md:w-full object-cover" />
                </div>

              </div>

              {/* Right Side with Content - No Background */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                <div className='senior-leadership-content'>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Phillip Bailey</h2>
                  <h3 className="text-lg sm:text-lg md:text-xl text-black mb-4">
                    Principal of Reigate Grammar School Kuala Lumpur
                  </h3>
                  <p className="text-black mb-4 text-justify">
                    Mr. Bailey serves as the Principal of Reigate Grammar School Kuala Lumpur (RGS KL), bringing over two decades of distinguished experience in education. His career encompasses pivotal leadership roles, including Director of Performing Arts, Head of Teaching and Learning, and Principal of Beaconhouse Newlands International School. Mr. Bailey's academic credentials are equally impressive, holding a Master's degree in Education and the National Professional Qualification for Headship (NPQH). These accomplishments have profoundly shaped his vision of what constitutes an outstanding educational institution.              </p>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#E1E2E3]">

          {/* Unified Responsive Profile Card */}
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">



              {/* Right Side with Content - No Background */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                <div className='senior-leadership-content'>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Mark Evans</h2>
                  <h3 className="text-lg sm:text-lg md:text-xl text-black mb-4">
                    Head of Early Years and Primary School
                  </h3>
                  <p className="text-black mb-4 text-justify">
                    Mr. Evans brings a wealth of experience to his role as Head of Early Years and Primary at RGS KL. His diverse background includes service in the British Royal Navy, leadership in sports management, and international engagement with British Scouting. These experiences have shaped his leadership, decision-making, and organisational skills, which he now applies to fostering a dynamic and inspiring learning environment. Passionate about STEM education and student leadership, he is committed to nurturing creativity and personal growth in every child.
                  </p>
                  <p className="text-black mb-4 text-justify">
                    Beyond the classroom, Mr. Evans is an avid outdoor enthusiast and has written, directed, and produced children's theatre across the UK, Portugal, and Malaysia. His dedication to holistic education aligns perfectly with RGS KL’s values, and he is excited to work alongside staff, students, and parents to build on the school’s legacy of excellence.
                  </p>
                  <a href="/academics/early-years/"><button className='know-more-button-1'>Know More</button></a>
                </div>
              </div>


              {/* Left Side with Image and Background */}
              <div className="w-full md:w-2/5 relative flex justify-center items-end">

                {/* Background Image Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-auto">
                <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/fort+bg+6.png"
                    alt="School background"
                    className="w-full h-[300px] object-fill" />
                </div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/mark+ee.png"
                    alt="Mark Evans"
                    className="w-3/4 md:w-full object-cover" />
                </div>

              </div>
            </div>
          </div>

        </div>


        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#032D5A]">

          {/* Unified Responsive Profile Card */}
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">

              {/* Left Side with Image and Background */}
              <div className="w-full md:w-2/5 relative flex justify-center items-end">

                {/* Background Image Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-auto">
                <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/fort+bg+6.png"
                    alt="School background"
                    className="w-full h-[300px] object-fill" />
                </div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/philipppp.png"
                    alt="Phillip Bailey"
                    className="w-3/4 md:w-full object-cover" />
                </div>

              </div>

              {/* Right Side with Content - No Background */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                <div className='senior-leadership-content-1'>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Philip Thomas</h2>
                  <h3 className="text-lg sm:text-lg md:text-xl mb-4">
                    Head of Secondary School
                  </h3>
                  <p className=" mb-4 text-justify">
                    Mr. Thomas is a dedicated senior education professional with over 20 years of experience in the UK and internationally. He has a proven track record in leading schools, developing innovative curricula, and consistently delivering high-performance results. He is deeply committed to inspiring and empowering both teachers and students to achieve their fullest potential.
                  </p>

                  <p className=" mb-4 text-justify">
                    As Head of Secondary, Mr. Thomas's mission is to lead the school with passion, dedication, and a commitment to excellence. By leveraging his extensive international experience, he aims to create an environment where every teacher is empowered to teach at their true potential and every student is inspired to learn and flourish. Together, they will build a school community that is not only academically successful but also inclusive, innovative, and forward-thinking.                 </p>

                  <a href="/academics/secondary-school/"><button className='know-more-button-2'>Know More</button></a>
                </div>

              </div>
            </div>
          </div>

        </div>


        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#DCE4F4]">

          {/* Unified Responsive Profile Card */}
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">



              {/* Right Side with Content - No Background */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                <div className='senior-leadership-content'>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Louisa Bailey</h2>
                  <h3 className="text-lg sm:text-lg md:text-xl text-black font-bold mb-4">
                    Head of Sixth Form
                  </h3>
                  <p className="text-black mb-4 text-justify">
                    With over 15 years of experience in education, Ms. Bailey is dedicated to guiding students towards academic and personal success. She holds a BMus (Hons) in Music, a PGCE (with QTS), an MA in Education, and is completing the National Professional Qualification for Headship (NPQH). A passionate advocate for personalised learning, she has led students to top A-Level results in Drama and Music in Malaysia, while also spearheading university fairs, mentorship programmes, and leadership initiatives.                  </p>

                  <p className="text-black mb-4 text-justify">
                    As an educator in the Performing Arts, Ms. Bailey brings creativity and innovation to her leadership, ensuring students are supported in their unique strengths. A dedicated vocal coach, she has helped many prepare for examinations and auditions. Beyond her work, she is an avid reader and singer, reflecting her love for creativity and self-expression. She looks forward to contributing to the vibrant community at RGS KL.                   </p>
                  <a href="/academics/sixth-form/"><button className='know-more-button-1'>know More</button></a>

                </div>
              </div>


              {/* Left Side with Image and Background */}
              <div className="w-full md:w-2/5 relative flex justify-center items-end">

                {/* Background Image Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-auto">
                <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/fort+bg+6.png"
                    alt="School background"
                    className="w-full h-[300px] object-fill" />
                </div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/luisa+b.png"
                    alt="Phillip Bailey"
                    className="w-3/4 md:w-full object-cover" />
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#E1E2E3]">

          {/* Unified Responsive Profile Card */}
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-8">

              {/* Left Side with Image and Background */}
              <div className="w-full md:w-2/5 relative flex justify-center items-end">

                {/* Background Image Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-auto">
                <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/fort+bg+6.png"
                    alt="School background"
                    className="w-full h-[300px] object-fill" />
                </div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <img
                    src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/edg.png"
                    alt="Phillip Bailey"
                    className="w-3/4 md:w-full object-cover" />
                </div>

              </div>

              {/* Right Side with Content - No Background */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-end self-end">
                <div className='senior-leadership-content'>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2">Craig Northedge</h2>
                  <h3 className="text-lg sm:text-lg md:text-xl text-black font-bold mb-4">
                    Deputy Head Pastoral & Designated Safeguarding Lead                </h3>
                  <p className="text-black mb-4 text-justify">
                    With 23 years of experience in education across the UK and internationally, including at a leading school in China, Mr. Northedge brings a wealth of expertise in leadership and pastoral care. Holding a BA (Hons) in Physical Education with QTS and an NPQLT, he is committed to fostering kindness and respect, shaping compassionate individuals prepared for future challenges. A dedicated sportsman, he is a certified boxing coach and has played, coached, and taught football, cricket, and judo.
                  </p>
                  <p className="text-black mb-4 text-justify">
                    Mr. Northedge believes a thriving school community is built on holistic student development. By prioritising well-being, he ensures students grow academically, emotionally, and socially. He champions a collaborative approach to pastoral care, where staff, parents, and students work together to create a supportive and empowering environment at RGS KL.
                  </p>
                  <button className='know-more-button-1'>know More</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div></>

  )
}

export default SeniorLeaderShip;
