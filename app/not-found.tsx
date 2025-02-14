import React from 'react'
import Image from 'next/image'
import Page404ErrorImage from '@/images/construction-concept-illustratio.png'


const Page404Error = () => {
  return (
    <div className='main-404-error-page'>
      <Image src={Page404ErrorImage} alt='404-page' className='page-404-error'/>
    </div>
  )
}

export default Page404Error
