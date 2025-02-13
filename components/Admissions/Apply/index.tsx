"use client"
import React, { useState } from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'


const steps = [
  {
    title: 'Application',
    content: (
      <>
        <p className="text-[#002147]">Complete the application form, ensuring all necessary documents are included.</p>
        <p className="text-[#002147]">Submit the application fee payment of RM1,500.</p>
        <p className="mt-4 text-[#002147]">
        Applications will be accepted and reviewed only once payment and all required documentation have been received.
        </p>
      </>
    )
  },
  {
    title: 'Trial Classes and Entrance Assessments',
    content: (
      <>
        <p className="text-[#002147]">All prospective students are invited to attend a trial class.
        </p>
        <p className="text-[#002147]">This will be followed by an age-appropriate assessment and/or an admission interview. Our admissions staff will contact parents to arrange the assessment.
        </p>
        
      </>
    )
  },
  {
    title: 'Admission',
    content: (
      <>
        <p className="text-[#002147]">Upon successful completion of the previous steps, a letter of offer will be extended to the applicant.

        </p>
        <p className="text-[#002147]">To accept the offer, the registration fee and security deposit payment must be made within two weeks.

        </p>
        <p className="mt-4 text-[#002147]">
        We understand that each family's application journey is unique. We encourage you to connect with our friendly admissions team to discuss how we can best support you through the process. They are available to answer your questions and provide the information you need.

        </p>
      </>
    )

  }
];


const AdmissionApply = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    dateOfBirth: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return (
    <div>
       <section className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
          <div className="absolute inset-0 px-10 banner-background-text-navigation">
            <div className="banner-text-content text-white flex-1 items-center mt-20 ">
              <div className='text-5xl leading-relaxed'>
              Apply
              </div>
              <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                <a href="#" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4 " />
                <span>School Fee</span>
              </div>

            </div>

          </div>
          <div className='main-school-banner-bottom'>
            <h2 className="text-3xl font-bold">How to Apply ?</h2>
          </div>
        </div>
      </section>
      <section>
      <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium text-[#002147] mb-8">
          The following steps lead you through application process:
        </h1>

        {/* Main Container with Purple Border */}
        <div className="rounded-lg p-6">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="absolute w-full h-[2px] bg-gray-200">
              <div 
                className="h-full bg-[#002147] transition-all duration-300 ease-in-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between relative">
              {steps.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`w-6 h-6 rounded-full border-4 transition-all duration-300 relative z-10
                      ${index <= currentStep 
                        ? 'border-[#002147] bg-[#002147]' 
                        : 'border-gray-200 bg-white'
                      }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                  {index === currentStep && (
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#002147] mt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-[#f8f9ff] rounded-lg shadow-lg">
            {/* Header */}
            <div className="bg-[#032D5A] text-white p-4 rounded-t-lg">
              <h2 className="text-xl">Step - {String(currentStep + 1).padStart(2, '0')}</h2>
            </div>

            <div className="p-8">
              <h3 className="text-4xl font-semibold text-[#000000] mb-6">
                {steps[currentStep].title}
              </h3>
              <div className="text-xl space-y-4">
                {steps[currentStep].content}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 rounded transition-colors ${
                    currentStep === steps.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#002147] text-white hover:bg-[#003167]'
                  }`}
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section className='py-24'>
        <div className='apply-section3-main'>
        <h2 className='apply-ssection3-heading'>For more detailed information, please refer to our <span>Admissions page :</span></h2>
        </div>
        

      </section>
      <div className="bg-[#032D5A] flex flex-col items-center justify-center p-4 py-10">
      <h1 className="text-4xl font-bold text-white mb-8">Join US</h1>
      
      <div className="w-full max-w-md bg-[#B9C9E9] backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#1E1E1E] px-2 py-3 text-[#8A8D8F] placeholder-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E] transition-colors"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#1E1E1E] px-2 py-3 text-[#8A8D8F] placeholder-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E] transition-colors"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#1E1E1E] px-2 py-3 text-[#8A8D8F] placeholder-[#1E1E1E] focus:outline-none focus:border-white transition-colors"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#1E1E1E] px-2 py-3 text-[#8A8D8F] placeholder-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E] transition-colors"
                placeholder="Child's Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#1E1E1E] px-2 py-3 text-[#8A8D8F] placeholder-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E] transition-colors"
                required
              />
              <label className="absolute -top-2 left-2 text-sm text-[#1E1E1E]">Date of Birth</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#002147] font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AdmissionApply
