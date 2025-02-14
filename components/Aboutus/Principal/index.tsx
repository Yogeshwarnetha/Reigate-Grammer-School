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
            <section className="min-h-full about-principal-section-2 py-24">
                <div className="container-fluid about-principal-section2-main mx-auto">
                    <div className="about-principal-section-content">
                        <h3 className="about-principal-section-2-heading">The Legacy of Reigate Grammar School</h3>
                        <p className="about-principal-section-2-description">Reigate Grammar School UK, founded in 1675, has earned its reputation as one of the world’s leading grammar schools. For nearly 350 years, it has been defined by its commitment to academic excellence, strong values, and preparing students to navigate the challenges of an ever-changing world.</p>
                        <p className="about-principal-section-2-description">In 2025, RGS UK was named School of the Year, a testament to its dedication to innovation, character development, and leadership. This legacy provides the foundation for RGIS KL, where we are proud to carry forward the same ethos of excellence.</p>
                        <h3 className="about-principal-section-2-heading">Establishing RGIS KL in Malaysia</h3>
                        <p className="about-principal-section-2-description">The launch of RGIS KL is a significant milestone in Malaysian education. By combining the globally respected Cambridge International Curriculum with the values of RGS, we offer a unique learning experience that develops both academic success and character. RGIS KL is more than just a school; it is a community where students are encouraged to grow intellectually, socially, and emotionally. My vision is to create a culture of collaboration and innovation, inspiring every child to achieve their full potential.</p>

                        <h3 className="about-principal-section-2-heading">Go Beyond: Our Philosophy</h3>
                        <p className="about-principal-section-2-description">‘Go Beyond’ is the philosophy at the heart of RGIS KL. It reflects our belief that with the right encouragement and support, students can surpass their own expectations. This approach guides every aspect of school life, equipping students with the skills and confidence to embrace opportunities and tackle challenges.</p>
                        <p className="about-principal-section-2-description">Through engaging teaching methods, a well-rounded curriculum, and a wide array of extracurricular activities, we help students discover their passions and explore their potential. Our connections to the RGS Global Village further enrich this experience, offering opportunities for cross-cultural collaboration and global perspectives. </p>
                    </div>
                    <div className="about-principal-section-2-image">
                        <Image src={RocketBackground} alt="rocketbackground" className="rocket-background-size" />
                        
                    </div>
                </div>

            </section>
            <section className="mt-10">
                <div className="image-description-container">
                    <div className="image-container">
                        <Image src={Section3BackgroundImage} alt="princialbackground" className="prinicpal-section3-background flex justify-end" />
                        <Image src={Section3Image} alt="prinicapalImage" className="prinicpal-section3-img" />
                    </div>
                    <div className="principal-description-container">
                        <div className="principal-description-sub-container">
                            <h3 className="principal-fullname text-3xl font-bold">World-Class Facilities and Holistic Development</h3>
                            <p className="principal-description">Our campus is designed to inspire and enable students to thrive. With cutting-edge facilities—including advanced science laboratories, art studios, sports facilities, and a multi-purpose hall—RGIS KL provides the perfect environment for a modern education.</p>
                            <p className="principal-description">But it’s not just about the facilities. Our programmes encourage critical thinking, creativity, and leadership. Whether through hands-on STEAM projects, performing arts opportunities, or outdoor learning, every student is supported to grow intellectually and personally.</p>
                        </div>

                        <div className="principal-description-sub-container">
                            <h3 className="principal-fullname text-3xl font-bold">Empowering Students to Go Beyond</h3>
                            <p className="principal-description">At RGIS KL, our goal is to deliver academic excellence while nurturing capable, compassionate, and ambitious individuals. Drawing on the values of Reigate Grammar School UK, we are committed to creating an environment where every student is inspired to ‘Go Beyond.’</p>
                            <p className="principal-description">I warmly invite you to join us as we embark on this exciting journey, shaping a brighter future for our children together.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WelcomePrincipal
