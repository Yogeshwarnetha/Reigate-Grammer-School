import React from 'react'
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'

const AdmissionFeeStructure = () => {
  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
          <div className="absolute inset-0 px-10 banner-background-text-navigation">
            <div className="banner-text-content text-white flex-1 items-center mt-20 ">
              <div className='text-5xl leading-relaxed'>
                School Fee
              </div>
              <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                <a href="#" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4 " />
                <span>School Fee</span>
              </div>

            </div>

          </div>
          <div className='main-school-banner-bottom'>
            <h2 className="text-3xl font-bold">Fee Details </h2>
          </div>
        </div>
      </section>
      <section className='feestructure-section2-main py-24'>
        <div className='container feestructure-section2-main-container mx-auto'>
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
      <h2 className="text-2xl font-bold mt-16 text-center">Fee Structure</h2>

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
    </div>
  )
}

export default AdmissionFeeStructure
