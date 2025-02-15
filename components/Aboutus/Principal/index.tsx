import { ChevronRight } from "lucide-react"
import BannerImage from '@/images/Banner image.png'
import Image from 'next/image'
import './index.css'
import PrincipalBackgroundImage from '@/images/Ellipse 7.png'
import PrincipalImage from '@/images/Principal Image.png'
import RocketBackground from '@/images/Ellipse 8.png'
import Section3BackgroundImage from '@/images/PrinicpalPageSection3.png'
import Section3Image from '@/images/PrinicpalSection3Kid.png'



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
            <div className="image-description-container flex flex-col md:flex-row items-center">
                <div className="image-container w-full md:w-1/2 flex justify-center relative">
                    <Image src={PrincipalBackgroundImage} alt="Principal Background" className="prinicpal-background" />
                    <Image src={PrincipalImage} alt="Principal Image" className="prinicpal-img" />
                </div>
                <div className="principal-description-container w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-0">
                    <h2 className="principal-fullname text-3xl font-bold">Full Name</h2>
                    <p className="principal-designation text-lg">Principal</p>
                    <p className="principal-description">With over two decades of experience in education, I have been fortunate to serve in various leadership roles...</p>
                    <p className="principal-description">At RGIS KL, we aim to inspire every student to excel academically and grow as individuals...</p>
                </div>
            </div>

            <section className="about-principal-section-2 py-24 px-6 md:px-16">
                <div className="about-principal-section2-main flex flex-col md:flex-row items-center">
                    <div className="about-principal-section-content md:w-3/5 text-white">
                        <h3 className="about-principal-section-2-heading">The Legacy of Reigate Grammar School</h3>
                        <p className="about-principal-section-2-description">Founded in 1675, Reigate Grammar School UK has a strong legacy of academic excellence...</p>
                        <h3 className="about-principal-section-2-heading">Go Beyond: Our Philosophy</h3>
                        <p className="about-principal-section-2-description">‘Go Beyond’ is the philosophy at the heart of RGIS KL...</p>
                    </div>
                    <div className="about-principal-section-2-image w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
                        <Image src={RocketBackground} alt="Rocket Background" className="rocket-background-size" />
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <div className="image-description-container flex flex-col md:flex-row items-center">
                    <div className="image-container w-full md:w-1/2 flex justify-center relative">
                        <Image src={Section3BackgroundImage} alt="Section 3 Background" className="prinicpal-section3-background" />
                        <Image src={Section3Image} alt="Section 3 Image" className="prinicpal-section3-img" />
                    </div>
                    <div className="principal-description-container w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-0">
                        <h3 className="principal-fullname text-3xl font-bold">World-Class Facilities and Holistic Development</h3>
                        <p className="principal-description">Our campus is designed to inspire and enable students to thrive. With cutting-edge facilities—including advanced science laboratories, art studios, sports facilities, and a multi-purpose hall—RGIS KL provides the perfect environment for a modern education.</p>
                        <p className="principal-description">But it’s not just about the facilities. Our programmes encourage critical thinking, creativity, and leadership. Whether through hands-on STEAM projects, performing arts opportunities, or outdoor learning, every student is supported to grow intellectually and personally.</p>
                        <h3 className="principal-fullname text-3xl font-bold">Empowering Students to Go Beyond</h3>
                        <p className="principal-description">At RGIS KL, our goal is to deliver academic excellence while nurturing capable, compassionate, and ambitious individuals. Drawing on the values of Reigate Grammar School UK, we are committed to creating an environment where every student is inspired to ‘Go Beyond.’</p>
                        <p className="principal-description">I warmly invite you to join us as we embark on this exciting journey, shaping a brighter future for our children together.</p>
                    </div>
                </div>
            </section>
        </section>
        </div>
    )
}

export default WelcomePrincipal
