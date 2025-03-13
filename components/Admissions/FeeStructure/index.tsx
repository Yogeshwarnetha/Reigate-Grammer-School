import React from 'react'
import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight, Shield } from 'lucide-react'
import './index.css'
import StudentStudingImage from '@/public/images/Fee Structure Image.png'

const AdmissionFeeStructure = () => {
  return (
    <div>

<section className="w-full">
              <div className="relative w-full h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
                <Image src={BannerImage} alt="Banner-Image" className="banner-img w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start px-5 sm:px-3 md:px-6 lg:px-10">
                  <div className="banner-text-content text-white max-w-full text-center">
                    <div className="whitespace-nowrap text-[min(48px,5vw)]">
                    Fees & Financial Aid                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-banner">
                <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Flexible options to invest in your child’s future.                </h2>
              </div>
            </section>
      <section className='feestructure-section2-main pb-24'>
        <div className='container feestructure-section2-main-container mx-auto'>
        <div className="flex justify-start font-bold text-2xl text-[#032D5A] py-10">Fee Structure</div>

          <div className='feestructure-main-description'>
            <p>The following fees are applicable at the time of application and enrolment:</p>
          </div>
          <div className='feestructure-list-cards-main'>          
            <div className='feestructure-list-card'>
            <div className="feestructure-card-main">
              <p className="feestructure-card-count">01</p>
              <div className="feestructure-card-description-container">
                <h3 className="feestructure-card-heading">Application Fee</h3>
                <p className="feestructure-card-description">
                  This fee is payable upon submission of the application and is non-refundable.
                </p>
              </div>
            </div>

            <div className='feestructure-card-main'>
              <p className='feestructure-card-count'>02</p>
              <div className='feestructure-card-description-container'>
                <h3 className="feestructure-card-heading">Registration Fee</h3>
                <p className="feestructure-card-description">
                Payable upon receipt of the Letter of Offer to confirm acceptance of the admission. This fee is non-refundable.</p>
              </div>
            </div>
          </div>
          <div className='feestructure-card-main'>
              <p className='feestructure-card-count'>03</p>
              <div className='feestructure-card-description-container'>
                <h3 className="feestructure-card-heading">Security Deposit</h3>
                <p className="feestructure-card-description-1">
                Payable upon receipt of the Letter of Offer. The deposit is refundable, provided one term’s written notice of withdrawal is given in advance while the student is enrolled. (Please refer to the terms and conditions on the Application Form for full details.)
                </p>
              </div>
            </div>
            </div>

        </div>
          <div>
          

          
        </div>
      </section>
      <section>
      <div className=" bg-[#032D5A] p-8 text-white shadow-lg">

      <div className="max-w-5xl mx-auto space-y-8 mt-10">
        {/* School Fee Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4">School Fee for Academic Year 2025</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Application Fee</td>
                <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 1,500</td>
              </tr>
              <tr>
                <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Enrolment/Registration Fee</td>
                <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 8,000</td>
              </tr>
              <tr>
                <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Security Deposit</td>
                <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">One (1) Term Tuition Fee (Refundable)</td>
              </tr>
              <tr>
                <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">EAL</td>
                <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 4,500 (Per Term)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tuition Fee Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tuition Fee Per Annum</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* First Column */}
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">EYSF</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 42,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Reception</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 44,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 1</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 2</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 3</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 64,500</td>
                </tr>
              </tbody>
            </table>

            {/* Second Column */}
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 4</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 42,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 5</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 44,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 6</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 7</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 8</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 64,500</td>
                </tr>
              </tbody>
            </table>

            {/* Third Column */}
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 9</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 42,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 10</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 44,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 11</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 12</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 46,500</td>
                </tr>
                <tr>
                  <td className="bg-[#b8cce4] text-black p-3 border border-gray-300">Year 13</td>
                  <td className="bg-[#e6edf4] text-black p-3 border border-gray-300">RM 64,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section>
      <div className="container mx-auto my-10 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full ">
        <div className="relative flex flex-col md:flex-row ">
          {/* Image section with student */}
          <div className="relative w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
            < img
              src="https://nextgennew.s3.ap-south-1.amazonaws.com/RGS/Fee+and+Financial+Aid.png" 
              alt="Student studying" 
              className="w-full h-64 md:h-full object-cover"
            />
            
            {/* <div className="absolute top-6 left-[-10px] bg-blue-900 text-white p-4 rounded-md shadow-md">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Lorem Ipsum</div>
            </div>
            
            <div className="absolute -bottom-6 right-10 bg-blue-800 rounded-full p-4 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div> */}
          </div>
          
          {/* Text content section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Scholarships and Bursaries</h2>
            <p className="text-gray-700">
              At RGIS KL, we are committed to nurturing excellence across 
              academics, sports, and the arts. To support and encourage 
              outstanding talent, we offer a range of merit-based scholarships. If 
              you are interested in applying, please contact us for detailed 
              information on the criteria and application process.
            </p>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  )
}

export default AdmissionFeeStructure
