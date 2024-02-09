"use client"
import Image from 'next/legacy/image'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }

const Footer = () => {
    return(
        <footer className="relative w-full h-fit lg:h-[110vh] overflow-hidden flex flex-wrap justify-between content-start p-10 bg-[#0f5643] overflow-x-hidden">

            <div className='w-full lg:w-[45%] h-[70%] flex flex-wrap justify-center lg:justify-start content-start pt-10'>
                <svg className='w-[100px]' role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 142.5">
                    <title>Great Jones</title><desc>Great Jones Logo</desc>
                    <path fill="#ffffff" stroke="none" d="M57,5.64c28.33,0,51.36,29.43,51.36,65.61s-23,65.61-51.36,65.61S5.64,107.43,5.64,71.25,28.67,5.64,57,5.64ZM57,0C41.53,0,27.06,7.6,16.26,21.41,5.78,34.83,0,52.5,0,71.25s5.78,36.42,16.26,49.84C27.06,134.9,41.53,142.5,57,142.5s29.94-7.6,40.74-21.41C108.22,107.67,114,90,114,71.25s-5.78-36.42-16.26-49.84C86.94,7.6,72.47,0,57,0ZM83,63.92c0-5,1.39-6.16,5.08-6.68a1.81,1.81,0,0,0,1.08-.64,1.74,1.74,0,0,0,.39-1.18,1.5,1.5,0,0,0-.08-.7,1.64,1.64,0,0,0-.36-.61,1.67,1.67,0,0,0-.58-.4,1.6,1.6,0,0,0-.69-.13h-25a1.93,1.93,0,0,0-.68.15,1.88,1.88,0,0,0-.56.41,1.71,1.71,0,0,0-.36.59,1.78,1.78,0,0,0-.1.69,1.61,1.61,0,0,0,.93,1.65,1.66,1.66,0,0,0,.66.14c4.75.53,6,1.66,6,6.72V76C67.15,78.07,63.1,80.21,58,80.21c-10.59,0-16-9.74-16-29C42,31.67,47.74,22.17,59.58,22.17c8.35,0,15.83,5.25,20.58,14.47a1.81,1.81,0,0,0,.63.66,1.71,1.71,0,0,0,.88.24c1.28,0,2.44-.93,2.14-2.23L80.1,19.71a1.91,1.91,0,0,0-.72-1.19A2,2,0,0,0,78,18.13H76.92a2,2,0,0,0-2,1.3l-.75,1.72C69.7,18,64.66,16.69,57.6,16.69c-20.27,0-33.25,14-33.25,34.58S37.38,85.79,57,85.79a23.26,23.26,0,0,0,11.68-2.68V104.5c0,12.46-4.92,18.87-14.47,18.87-7.38,0-13-4.15-13-10.61,0-3.76,1.92-5.88,4.88-5.88,5.59,0,2.91,8.07,9.42,8.07,3.56,0,5.76-2.41,5.76-6.33,0-5.56-5.22-9.91-11.87-9.91-8.38,0-15,6-15,14,0,9.5,9,16.61,21.79,16.61C74,129.33,83,119.83,83,101Z"></path>
                </svg>
                <p className='w-full text-white text-[15px] lg:text-[20px] my-10 font-primary'>serving up fresh news,recipes,exclusives,and more.join our email list.</p>
                <div className='w-full flex justify-start relative'>
                    <input type="email" placeholder='Email...' className='w-[80%] h-[70px] bg-transparent border-b-2 border-white placeholder:text-[50px] text-white text-[30px] placeholder:text-slate-300' />
                    <button className='text-white cursor-pointer text-[20px] font-primary absolute top-[30px] right-[20%]'>submit</button>
                </div>
            </div>
            <div className='w-full lg:w-[45%] h-[50%] flex flex-wrap justify-center lg:justify-start content-center pt-10 relative z-20'>
                <div className='hidden w-full h-[50%] lg:flex justify-start items-center mr-10 lg:mr-0'>
                    <Image className='absolute bottom-0' loader={myLoader} src={"cdn/shop/files/GREAT_JONES_11-20-18_41214_1_434x347.jpg"} alt="Picture of the author" width={200} height={150}/>
                </div>
                <div className='w-[90%] lg:w-full h-[50%] flex justify-start items-center mt-10'>
                    <ul className='w-[35%] h-full hidden lg:flex flex-wrap justify-start content-start'>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>Our Story</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>rack your order</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>shipping,return</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>discount policy</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>FAQs</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>contact</li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[30px] cursor-pointer font-primary'>returns</li>
                    </ul>
                    <ul className='lg:w-[50%] w-full h-full flex flex-wrap justify-start content-start'>
                        <li className='w-full text-[15px] text-white flex justify-start h-[40px] cursor-pointer font-primary'><Link className='flex w-full' href={"mailto:farajikatayoon75@gmail.com"}><MdEmail className='mr-2'/>farajikatayoon75@gmail.com</Link></li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[40px] cursor-pointer font-primary'><Link className='flex w-full' href={"https://github.com/katayoon-faraji-web"}><BsGithub className='mr-2'/>katayoon-faraji-web</Link></li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[40px] cursor-pointer font-primary'><Link className='flex w-full' href={"https://www.linkedin.com/in/katayoon-faraji-web-3b722b207"}><BsLinkedin className='mr-2'/>katayoon-faraji-web</Link></li>
                        <li className='w-full text-[15px] text-white flex justify-start h-[40px] cursor-pointer font-primary'><Link className='flex w-full' href={"https://instagram.com/katayoon_faraji_web"}><RiInstagramFill className='mr-2'/>katayoon_faraji_web</Link></li>

                    </ul>
                </div>
            </div>
            <div className='w-full h-[300px] relative bottom-0 bg-[#0f5643] flex justify-center'>
                <Image className='absolute bottom-0' loader={myLoader} src={"cdn/shop/files/footer_670x202.jpg"} alt="Picture of the author" width={850} height={400}/>
            </div>

        </footer>
    )
}

export default Footer;