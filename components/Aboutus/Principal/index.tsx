import { ChevronRight } from "lucide-react"
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import './index.css'
import PrincipalBackgroundImage from '@/images/Ellipse 7.png'
import PrincipalImage from '@/images/Principal Image.png'
import RocketBackground from '@/images/Ellipse 8.png'



const WelcomePrincipal = () => {
    return (
        <div>
            <section className="w-full">
                <div className="relative w-full h-[400px]">
                    <Image src={BannerImage} alt="Banner-Image" className="banner-about-img w-full object-cover" />
                    <div className="absolute inset-0 px-10 ">
                        <div className="banner-text-content text-white flex-1 items-center mt-20 ">
                            <div className='text-5xl leading-relaxed'>
                                Welcome from Principal
                            </div>
                            <div className="flex items-center space-x-2 text-sm mb-4 px-2">
                                <a href="#" className="hover:underline">Home</a>
                                <ChevronRight className="w-4 h-4 " />
                                <span>Welcome from Principal</span>
                            </div>

                        </div>

                    </div>
                    <div className='about-our-school-banner'>
                        <h2 className="text-3xl font-bold">Honouring Tradition, Inspiring Excellence</h2>
                    </div>
                </div>
            </section>
            <section className="mt-16">
                <div className="image-description-container">
                <div className="image-container">
                    <Image src={PrincipalBackgroundImage} alt="princialbackground" className="prinicpal-background flex justify-end" />
                    <Image src={PrincipalImage} alt="prinicapalImage" className="prinicpal-img" />
                </div>
                <div className="principal-description-container">
                    <div className="principal-description-sub-container">
                    <h2 className="principal-fullname text-3xl font-bold">Full Name</h2>
                    <p className="principal-designation text-lg">Principal</p>
                    <p className="principal-description">As the founding Principal of Reigate Grammar International School Kuala Lumpur (RGIS KL), I am delighted to share my vision for this exciting new chapter. With over two decades of experience in education, I have been fortunate to serve in roles such as Director of Performing Arts, Head of Teaching and Learning, and Principal of Beaconhouse Newlands International School. Alongside these experiences, I earned a Master’s in Education and achieved the National Professional Qualification for Headship (NPQH), which has shaped my understanding of what makes an excellent school.</p>
                    <p className="principal-description">At RGIS KL, I am proud to bring together the rich heritage of Reigate Grammar School UK (RGS) with a dynamic, forward-thinking approach to education. Guided by the values and traditions of RGS, we aim to inspire every student to excel academically, grow as individuals, and embrace their full potential.</p>
                </div>
                </div>
                </div>
            </section>
            <section className="about-principal-section-2">
                <div className="about-principal-section-2-image">
                    <Image src={RocketBackground} alt="rocketbackground"/>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}

export default WelcomePrincipal
