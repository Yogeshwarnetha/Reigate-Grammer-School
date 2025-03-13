"use client"
import React, { useState } from 'react'
import BannerImage from '@/public/images/Banner image.png'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import './index.css'
import calenderImage from '@/public/images/calender-image.png'

interface CalendarEvent {
  date: string;
  description: string;
}

interface Term {
  id: string;
  title: string;
  events: CalendarEvent[];
}

const TermDatasandCalender = () => {
  const [activeTerm, setActiveTerm] = useState<string>('TERM01');

  const terms: Term[] = [
    {
      id: 'TERM01',
      title: 'TERM 01',
      events: [
        { date: '24 Jan 2025', description: 'Term Commences' },
        { date: '30 Jan 2025', description: 'Holiday' },
        { date: '12 Feb 2025', description: 'Holiday' },
      ],
    },
    {
      id: 'TERM02',
      title: 'TERM 02',
      events: [
        { date: '25 Feb 2025', description: 'Holiday' },
        { date: '12 Mar 2025', description: 'Term Ends' },
      ],
    },
    {
      id: 'TERM03',
      title: 'TERM 03',
      events: [
        { date: '15 Mar 2025', description: 'Term Commences' },
        { date: '01 Apr 2025', description: 'Holiday' },
      ],
    },
    {
      id: 'TERM04',
      title: 'TERM 04',
      events: [
        { date: '15 Apr 2025', description: 'Term Commences' },
        { date: '30 Apr 2025', description: 'Term Ends' },
      ],
    },
  ];

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[400px]">
          <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
          <div className="absolute inset-0 px-10 banner-background-text-navigation">
            <div className="banner-text-content text-white flex-1 items-center mt-20 ">
              <div className='text-5xl leading-relaxed'>
                Term Dates & Calendar
              </div>
              <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                <a href="#" className="hover:underline">Home</a>
                <ChevronRight className="w-4 h-4 " />
                <span>Term Dates & Calender</span>
              </div>

            </div>

          </div>
          <div className='main-school-banner-bottom'>
            <h2 className="text-3xl font-bold">2024-25 calendar in of our school <br />
              (PDF format)</h2>
          </div>
        </div>
      </section>
      <section className='tdc-section2-main'>
        <div className='container tdc-section2-main-container mx-auto'>
          <p className='lg:my-16 my-0 px-6 lg:text-lg sm:text-sm'>Celebrating 350 Years of Excellence At Reigate Grammar School (RGS), we offer more than an education - we offer a legacy of excellence that has flourished for 350 years and counting. Established in 1675 through the visionary philanthropy of Henry Smith, an Alderman of the City of London, RGS has steadfastly upheld its founding principle: providing exceptional educational opportunities to children from all walks of life. Reigate Grammar International School Kuala Lumpur (RGIS KL) is our latest chapter in this remarkable journey. Seamlessly combining the academic excellence of RGS UK with Malaysia’s rich cultural heritage, RGIS KL is more than a school - it is a gateway to a world of possibilities.</p>
        </div>
      </section>
      <section className='tdc-section2-main-download-calender py-16 px-4'>
        <div className='container calenderImage-download-main'>
          <div className='calenderImage-download-sub-main'>
            <div>
              <Image src={calenderImage} alt='calender-Image' className='calender-image' />
            </div>
            <div className='lg:ml-20'>
              <h2 className='download-text-main'>Download the 2024-25 calendar <br />
                in PDF format</h2>
              <button className='download-pdf-button'>Download Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className='tdc-section3-main-download-calender py-16 px-4'>
        <div className='container calenderImage-download-main'>
          <h2 className='tdc-section3-heading lg:text-4xl md:text-2xl sm:text-1xl'>Term Dates and Calendars</h2>
          <p className='tdc-section3-description lg:text-lg md:text-sm sm:text-sm'>Celebrating 350 Years of Excellence At Reigate Grammar School (RGS), we offer more than an education - we offer a legacy of excellence that has flourished for 350 years and counting.</p>
        </div>

        <div className='container calenderImage-download-mainbg-black'>
          <div className="main-term-calender-container-tabs">

            <div className="main-terms-container">
              {/* Calendar Cards - Left Side */}
              <div className="main-leftside-term-container">
                {terms.map((term) =>
                  activeTerm === term.id ? (
                    <div
                      key={term.id}
                      className="absolute transition-all duration-500 opacity-100 translate-y-0 rotate-0"
                    >
                      <div className="calender-left-side-card text-white p-6 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">Calendar - {term.title}</h2>
                        <div className="space-y-4">
                          {term.events.map((event, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center border-b border-blue-400 pb-2"
                            >
                              <span className="font-medium">{event.date}</span>
                              <span>{event.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {/* Term Selection - Right Side */}
              <div className="main-rightside-term-container">
                {terms.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => setActiveTerm(term.id)}
                    className={`card-term-right-side ${activeTerm === term.id ? 'active-term' : ''
                      }`}
                  >
                    <div className="text-2xl mb-1">{term.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default TermDatasandCalender
