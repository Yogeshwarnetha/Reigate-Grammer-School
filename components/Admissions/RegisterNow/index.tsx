"use client"
import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import Image from 'next/image';
import SchoolImage from '@/public/images/registrationFormImage.png'
import './index.css'
import RegisterNowBg from '@/public/images/WelcometoRGSKLImage.png'
import BannerImage from '@/public/images/Banner image.png'



const carouselItems = [
  {
    id: 1,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Rectangle+3271.png",
    title: "Academic Excellence",
    description: "Experience world-class education with our renowned faculty and innovative curriculum.",
    link: "/academics"
  },
  {
    id: 2,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Rectangle+3271.png",
    title: "Campus Life",
    description: "Discover vibrant student life and diverse opportunities for personal growth.",
    link: "/campus-life"
  },
  {
    id: 3,
    image: "https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Rectangle+3271.png",
    title: "Research Opportunities",
    description: "Engage in cutting-edge research projects with global impact.",
    link: "/research"
  }
];


const RegisterNow = () => {

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);


  const referralOptions = [
    'Friend or Family',
    'Social Media',
    'School Website',
    'Education Fair',
    'Online Search',
    'Newspaper',
    'Current Student/Parent'
  ];

  const toggleDatePicker = () => {
    setDatePickerOpen(!datePickerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    setDatePickerOpen(false);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Generate years for the date picker (2010-2023)
  const years = Array.from({ length: 14 }, (_, i) => 2023 - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
            <div className="banner-text-content text-white max-w-full text-center">
              <div className="whitespace-nowrap text-[min(48px,5vw)]">
                Register Now                    </div>
            </div>
          </div>
        </div>
        <div className="navbar-banner">
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light">
            Secure a place at RGS Kuala Lumpur today.  </p>
        </div>
      </section>
      <section className='registernow-main-container'>
        <div className='container mx-auto'>
          <h1 className='registernow-heading'>Register Now</h1>
          <p className='mx-auto registernow-description'>We look forward to connecting with you. Submit your details, and our Admissions team will be in touch to guide you through the next steps. For any enquiries about this form, please email admissions@xxxxx.</p>
          <div className="form-image-container py-10">
            {/* Left side - School Image */}
            <div className="w-1/2 bg-center hidden md:block registration-form-contianer" >
              <Image src={SchoolImage} alt='schoolImage' className='registerpage-school-image' />
            </div>

            {/* Right side - Form */}
            <div className="w-1/2 md:w-1/2 p-8">
              <div className="max-w-md mx-auto">

                {/* Student Info Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-[#032D5A] mb-4">Student Info :</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-bold text-[#032D5A] mb-1">
                        Child Name*
                      </label>
                      <input
                        type="text"
                        id="childName"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Child Name"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="childDob" className="block text-sm font-medium text-blue-900 mb-1">
                        Child Date of Birth*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="childDob"
                          className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                          placeholder="Select Date of Birth"
                          value={selectedDate}
                          readOnly
                          onClick={toggleDatePicker}
                        />
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={toggleDatePicker}
                        >
                          <Calendar size={18} />
                        </button>
                      </div>

                      {/* Date Picker Dropdown */}
                      {datePickerOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                          <div className="p-2 grid grid-cols-3 gap-2">
                            <div>
                              <p className="text-xs font-medium mb-1 text-gray-500">Day</p>
                              <div className="h-48 overflow-y-auto">
                                {days.map(day => (
                                  <div
                                    key={day}
                                    className="p-1 hover:bg-blue-100 cursor-pointer text-sm rounded"
                                    onClick={() => handleDateSelect(`${day}/${selectedDate.split('/')[1] || ''}/${selectedDate.split('/')[2] || ''}`)}
                                  >
                                    {day}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-medium mb-1 text-gray-500">Month</p>
                              <div className="h-48 overflow-y-auto">
                                {months.map((month, index) => (
                                  <div
                                    key={month}
                                    className="p-1 hover:bg-blue-100 cursor-pointer text-sm rounded"
                                    onClick={() => {
                                      const parts = selectedDate.split('/');
                                      handleDateSelect(`${parts[0] || ''}/${index + 1}/${parts[2] || ''}`);
                                    }}
                                  >
                                    {month}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-medium mb-1 text-gray-500">Year</p>
                              <div className="h-48 overflow-y-auto">
                                {years.map(year => (
                                  <div
                                    key={year}
                                    className="p-1 hover:bg-blue-100 cursor-pointer text-sm rounded"
                                    onClick={() => {
                                      const parts = selectedDate.split('/');
                                      handleDateSelect(`${parts[0] || ''}/${parts[1] || ''}/${year}`);
                                    }}
                                  >
                                    {year}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="block text-sm font-medium text-blue-900 mb-2">
                      Select the School Year interested in*
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="schoolYear" className="form-radio text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">Early Years</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="schoolYear" className="form-radio text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">Primary School</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="schoolYear" className="form-radio text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">Secondary School</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Parent Info Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-blue-900 mb-4">Parent Info :</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-blue-900 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your First Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-blue-900 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Last Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-1">
                        Phone*
                      </label>
                      <div className="flex">
                        <div className="flex items-center justify-center bg-[#DCE4F4] border border-gray-300 border-r-0 rounded-l-md px-2">
                          <Flag size={16} className="text-gray-500 mr-1" />
                          <span className="text-sm text-gray-700">+61</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="11144455878"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="referral" className="block text-sm font-medium text-blue-900 mb-1">
                      How did you hear about us?*
                    </label>
                    <div className="relative">
                      <div
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md flex justify-between items-center cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
                          {selectedOption || 'Select an option'}
                        </span>
                        <ChevronDown size={18} className="text-gray-500" />
                      </div>

                      {/* Dropdown Options */}
                      {dropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                          {referralOptions.map((option) => (
                            <div
                              key={option}
                              className="p-2 hover:bg-blue-100 cursor-pointer"
                              onClick={() => handleOptionSelect(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative section-2-registration-main-container">
        {/* Background Image */}
        <Image
          src={RegisterNowBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full z-0"
        />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 md:h-auto">
            <img
              src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/RegistrationPage+Image.png"
              alt="ApplyPageImage"
              className="w-full ml-10 object-contain block section-2-registration-image"
            />
          </div>

          {/* Text Content */}
          <div className="w-full mb-10 md:w-1/2 p-8 md:p-16 flex flex-col justify-end ml-10">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2 leading-10">
              Welcome to RGS<br /> Kuala Lumpur
            </h2>
            <div className='w-[550px]'>
              <p className="text-white mt-4 text-justify registerpage-section-2-text">
                Enrolling your child at RGS Kuala Lumpur is an investment in their future, combining centuries of British academic excellence with modern innovation. As part of the esteemed Reigate Grammar School family, we uphold a tradition of holistic education, fostering intellectual curiosity, resilience, and character.
              </p>
              <p className="text-white my-4 text-justify registerpage-section-2-text">
                At RGS Kuala Lumpur, we do more than educate—we empower students to thrive in an ever-evolving world.
              </p>
            </div>
            <button className='known-more-button-section-2'>Know More</button>
          </div>
        </div>
      </section>
      <section className='registernow-main-container py-24'>
        <div className='container mx-auto'>
          <h2 className='registernow-heading'>VISIT RGS KL</h2>
          <p className='mx-auto registernow-description'>Discover the RGS KL experience in person. Schedule a visit, and our Admissions team will be delighted to welcome you and guide you through our campus.</p>
          <div className="">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Form Section */}
                <div className=" p-6">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input
                        type="text"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your First Name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input
                        type="text"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Last Name"

                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email"

                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-2 border bg-[#DCE4F4] border-[#032D5A] text-gray-500 rounded-l-md">
                          <img src="https://flagcdn.com/w20/my.png" alt="MY" className="h-4 w-6" />
                        </span>
                        <input
                          type="tel"
                          className="w-full p-2 border bg-[#DCE4F4] text-[#8A8D8F] border-[#032D5A] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+61 111444555878"

                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-[150px] bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {/* Carousel Section */}
                <div className="relative rounded-lg overflow-hidden">
                  <h4 className="text-xl font-bold text-left text-navy-900 mb-12 text-[#032D5A]">RGS KL Open Day</h4>
                  <div className="relative h-[500px] w-full">
                    <img
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">

                      <div className="flex justify-between items-center">

                        <div className="flex gap-2">
                          <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </div>
                        <button
                          onClick={() => window.location.href = carouselItems[currentSlide].link}
                          className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-blue-50 transition duration-300"
                        >
                          Know more
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carouselItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterNow
