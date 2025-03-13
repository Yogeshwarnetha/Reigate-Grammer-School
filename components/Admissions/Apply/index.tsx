"use client"
import React, { useState } from 'react'
import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronDown, ChevronRight, ChevronUp, GraduationCap } from 'lucide-react'
import './index.css'


interface FAQItem {
  question: string;
  answer: string;
}

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

const faqData: FAQItem[] = [
  {
    question: "Admissions Process",
    answer: "Our admissions process involves submitting an application, attending a trial class, and/or assessment. We encourage all parents to contact our admissions team for personalised guidance on the application process."
  },
  {
    question: "Application Period",
    answer: "We accept applications year-round. However, as spaces can fill quickly, early applications are recommended to secure your child’s place for the desired intake."
  },
  {
    question: "Entry Requirements",
    answer: "Admission requirements vary by grade level and may include assessments or interviews. Please contact us for specific details regarding your child’s application. For more information, please refer to our How to Apply page."
  },
  {
    question: "Scholarships and Financial Aid",
    answer: "We offer merit-based scholarships in academics, sports, and the arts. For more details on eligibility and the application process, please contact us. Information about our scholarships and bursaries can be found on our Scholarships and Bursaries page."
  },
  {
    question: "Support for Students with Special Needs",
    answer: "We offer support for students with learning difficulties or special needs, including tailored learning programmes and access to specialist staff. Please contact our admissions team for more information. "
  },
  {
    question: "School Tours",
    answer: "To book a tour of our school, please fill out the contact form on our Open Day Visits page or contact our admissions team at +6016-223 8008 or email admissions@reigategrammar.edu.my."
  },
  {
    question: "Required Documents",
    answer: "You will need to submit your child’s birth certificate, child and parents' passports (for international students), previous school reports, and other relevant documents. For a full list of required documents, please contact our admissions staff. Further information is available on our Admissions page."
  },
 
];

const entryRequirements = [
  {
    title: 'Early Years',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Early+Years.png',
    description: 'For students in EYFS to Year 1, we arrange a visit where prospective students spend one to two hours in their respective class. This time allows students to meet their future peers, begin forming friendships, and familiarise themselves with classroom routines. It also provides an opportunity for our teachers to assess the students readiness and abilities.'
  },
  {
    title: 'Primary School',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/PrimarySchoolImage.png',
    description: 'For primary school students, we conduct assessments in English and Mathematics to ensure they meet the required standards. Parents are invited for an interview to discuss the student\'s academic and social development.'
  },
  {
    title: 'Secondary School',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Secondary+School.png',
    description: 'Students are required to complete a CAT4 Test, an English Language assessment, and an interview with the Principal or Head of Secondary before a placement offer is made. For students studying outside the region, arrangements can be made for the CAT4 Test and English Language assessment to be conducted in collaboration with their current school.'
  },
  {
    title: 'Sixth Form',
    image: 'https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/SixthForm.png',
    description: 
    (
      <>
      <p>Students are required to complete a CAT4 Test and attend an interview with the Principal or Head of Secondary before a placement offer is made. This is considered alongside previous school records and results from any recognised external examinations or assessments that meet RGS Kuala Lumpur’s internal entrance expectations.
      </p>
      <p className='mt-2'>For external students selecting A-Level subjects, a consistent record of academic commitment is expected, including achieving a grade C or above in IGCSEs. In addition, all A-Level candidates should demonstrate a commitment to the school’s values and active participation in the school community, as reflected in their interview with the Principal or Head of Secondary and in their school references.</p>
      </>
    )
   
  }
];





const placements = [
  { age: '3 to 4', dob: '01/09/2020 - 31/08/2021', rgsYear: 'Nursery', curriculum: 'Pre -School/Play-School' },
  { age: '4 to 5', dob: '01/09/2019 - 31/08/2020', rgsYear: 'Reception', curriculum: 'Kindergarten' },
  { age: '5 to 6', dob: '01/09/2018 - 31/08/2019', rgsYear: 'Year 1', curriculum: 'Kindergarten' },
  { age: '6 to 7', dob: '01/09/2017 - 31/08/2018', rgsYear: 'Year 2', curriculum: 'Standard 1' },
  { age: '7 to 8', dob: '01/09/2016 - 31/08/2017', rgsYear: 'Year 3', curriculum: 'Standard 2' },
  { age: '8 to 9', dob: '01/09/2015 - 31/08/2016', rgsYear: 'Year 4', curriculum: 'Standard 3' },
  { age: '9 to 10', dob: '01/09/2014 - 31/08/2015', rgsYear: 'Year 5', curriculum: 'Standard 4' },
  { age: '10 to 11', dob: '01/09/2013 - 31/08/2014', rgsYear: 'Year 6', curriculum: 'Standard 5' },
  { age: '11 to 12', dob: '01/09/2012 - 31/08/2013', rgsYear: 'Year 7', curriculum: 'Standard 6' },
  { age: '12 to 13', dob: '01/09/2011 - 31/08/2012', rgsYear: 'Year 8', curriculum: 'Form 1' },
  { age: '13 to 14', dob: '01/09/2010 - 31/08/2011', rgsYear: 'Year 9', curriculum: 'Form 2' },
  { age: '14 to 15', dob: '01/09/2009 - 31/08/2010', rgsYear: 'Year 10', curriculum: 'Form 3' },
  { age: '15 to 16', dob: '01/09/2008 - 31/08/2009', rgsYear: 'Year 11', curriculum: 'Form 4' },
  { age: '16 to 17', dob: '01/09/2007 - 31/08/2008', rgsYear: 'Year 12', curriculum: 'Form 5' },
  { age: '17 to 18', dob: '01/09/2006 - 31/08/2007', rgsYear: 'Year 13', curriculum: 'Form 6' },
];

const AdmissionApply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeRequirement, setActiveRequirement] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRequirementClick = (index: number) => {
    setActiveRequirement(index);
  };

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
            <div className="banner-text-content text-white max-w-full text-center">
              <div className="whitespace-nowrap text-[min(48px,5vw)]">
              Admissions Guide
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-banner">
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light">
            Your pathway to an outstanding education.
          </p>
        </div>
      </section>

<section className='bg-[#DCE4F4]'>
  <div className='container mx-auto admission-guide-container-1'>
    <div className='admission-guide-container-1-text'>
      <h2 className="text-4xl font-light">Introduction</h2>
      <p className="text-lg w-[550px] mt-5 font-light">
      Choosing the right school for your child is a significant decision, and we understand that it can feel overwhelming. At RGS Kuala Lumpur, we are committed to providing you with all the information you need to make the best choice for your child’s future.      </p>
      <p className="text-lg w-[550px] mt-5 font-light">
      We warmly invite you to book a campus tour and meet our Principal to gain first-hand insight into our learning environment.      </p>
    </div>
    <div className='admission-guide-container-1-image'>
      <img src='https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/AdmissionGuide+Image1.png' alt='admission-image'/>
    </div>
  </div>
</section>

<section className='bg-[#032D5A]'>
  <div className='container mx-auto admission-guide-container-1'>
  <div className='admission-guide-container-1-image'>
      <img src='https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/AdmissionGuide+Image2.png' alt='admission-image'/>
    </div>
    <div className='admission-guide-container-1-text text-[#F8F8F8]'>
      <h2 className="text-4xl font-light">Admissions</h2>
      <p className="text-lg w-[550px] mt-5 font-light">
      RGS Kuala Lumpur welcomes students of all nationalities, ethnicities, and religions, from ages 3 to 18. Applicants must hold valid visas that permit them to live and study in Malaysia.
 </p>
      <p className="text-lg w-[550px] mt-5 font-light">
      Admissions are open throughout the year, subject to the suitability of our educational programme and the availability of places.      </p>
    </div>
    
  </div>
</section>

      <section className='container mx-auto'>
      <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl shadow-xl overflow-hidden">
          <div className='mx-auto text-center w-[70%] my-5'>
            <h2 className="text-3xl font-light my-5">Year Group Placement</h2>
            <p className='text-lg '>Class placements at RGS Kuala Lumpur are strictly based on age-related criteria. The school follows a 1st September to 31st August cut-off date to determine the appropriate Year Group for each student.</p>
          </div>
          <div className="bg-[#334776] text-white p-4 flex items-center justify-center space-x-3">
           
            <p className="text-[18px] font-light text-center">
              2024/2025 Age Class Placement Chart
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#032D5A]">
                  <th className="px-4 py-3 text-left text-[16px] font-semibold text-[#B9C9E9] border-r border-[#032D5A]">Age</th>
                  <th className="px-4 py-3 text-left text-[16px] font-semibold text-[#B9C9E9] border-r border-[#032D5A]">Date of Birth</th>
                  <th className="px-4 py-3 text-left text-[16px] font-semibold text-[#B9C9E9] border-r border-[#032D5A]">RGS Year Group</th>
                  <th className="px-4 py-3 text-left text-[16px] font-semibold text-[#B9C9E9] border-r border-[#032D5A]">Malaysian National Curriculum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#032D5A] divide-x">
                {placements.map((row, index) => (
                  <tr 
                    key={index}
                    className={`
                      ${index % 2 === 0 ? 'bg-[#B9C9E9]' : 'bg-[#B9C9E9]'}
                      hover:bg-indigo-50 transition-colors duration-150
                    `}
                  >
                    <td className="px-4 py-3 text-[16px] text-gray-900 whitespace-nowrap border-r border-[#032D5A]">{row.age}</td>
                    <td className="px-4 py-3 text-[16px] text-gray-900 border-r border-[#032D5A]">{row.dob}</td>
                    <td className="px-4 py-3 text-[16px] text-gray-900 border-r border-[#032D5A]">{row.rgsYear}</td>
                    <td className="px-4 py-3 text-[16px] text-gray-900 border-r border-[#032D5A]">{row.curriculum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-4 space-y-4">
          {placements.map((row, index) => (
            <div 
              key={index}
              className="bg-white shadow-md p-4 space-y-2"
            >
              <div className="flex justify-between items-center bg-indigo-100 p-2 rounded">
                <span className="font-semibold text-indigo-900">Age:</span>
                <span>{row.age}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="text-gray-900">{row.dob}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">RGS Year:</span>
                  <span className="text-gray-900">{row.rgsYear}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Curriculum:</span>
                  <span className="text-gray-900">{row.curriculum}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>

      <section>
        <div className="p-8">
          <div className="container mx-auto">
            <p className="text-2xl font-medium text-[#002147] mb-8">
              The following steps lead you through application process:
            </p>

            <div className="rounded-lg p-6">
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

              <div className="bg-[#f8f9ff] rounded-lg shadow-lg">
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
                      className={`px-6 py-2 rounded transition-colors ${currentStep === steps.length - 1
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

      <section className='container mx-auto py-16'>
        <div className='apply-section3-main'>
          <h2 className='apply-ssection3-heading'>To apply now, <span>Click Here</span></h2>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="relative w-full">
            <div className="w-full bg-[#032D5A] min-h-[500px] flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 ml-10">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                  Entry Requirements
                </h2>
                <div className='apply-button-list'>
                  {entryRequirements.map((requirement, index) => (
                    <button
                      key={index}
                      className={`apply-button ${activeRequirement === index ? 'bg-yellow-500' : 'bg-[#002147]'}`}                      onClick={() => handleRequirementClick(index)}
                    >
                      {requirement.title}
                    </button>
                  ))}
                </div>
                <p className="text-white mb-8 max-w-4xl text-justify">
                  {entryRequirements[activeRequirement].description}
                </p>
              </div>

              <div className="w-full md:w-1/2 h-[300px] md:h-auto">
                <img
                  src={entryRequirements[activeRequirement].image}
                  alt={entryRequirements[activeRequirement].title}
                  className="w-full h-full object-cover block"
                />
                <div className="gradient-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-full md:max-w-2xl mx-auto my-10">
          <h1 className=" font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-[#032D5A]"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-[#F8F8F8]">{faq.question}</span>
                  <span className="text-[#F8F8F8]">
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionApply