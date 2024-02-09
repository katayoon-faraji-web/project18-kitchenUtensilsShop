"use client"
import Image from 'next/legacy/image'
import { useState } from 'react'
import SmallBox from './smallBox' 
const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }

const Box = () => {
    const [data,dataSet] = useState([{src:"cdn/shop/files/image_15_32ec73f8-c117-4ec3-8c79-f08221b04669_41x41@2x.png",span1:'Fill your bag',span2:'Free shipping on orders over $100.'},
    {src:"cdn/shop/files/image_16_9ea039f6-0f45-4418-b5d3-589d2735c521_41x41@2x.png",span1:'No questions asked.',span2:'60-day free trial, with free returns.'}])
    return(
        <section className=" w-full h-[120vh] flex flex-wrap justify-center items-center content-center bg-[#f4a620] overflow-hidden">
            <div className="box4 w-full lg:w-[70%] h-[50%] lg:h-full bg-no-repeat bg-cover"></div>
            <div className="w-full lg:w-[30%] h-[50%] lg:h-full flex flex-wrap justify-center content-center p-4">
                <span className="w-full flex text-[30px] lg:text-[50px] justify-center lg:justify-start  mt-10">We have got you covered.</span>
                <p className="w-full text-[15px] lg:text-[20px] font-primary text-justify border-b border-black py-4 mt-10">A variety of materials like cast iron, stainless steel, ceramic, and wood set you up for success and serve different purposes in your kitchen. We have got them all. If you need help figuring out which is best for you, or what it takes to roast a chicken, we are here.</p>
                <SmallBox src={data[0].src} span1={data[0].span1} span2={data[0].span2}/>
                <SmallBox src={data[1].src} span1={data[1].span1} span2={data[1].span2}/>
               
            </div>
        </section>
    )
}

export default Box;

// const SmallBox = ({src,span1,span2}) =>{
//     return(
//         <div className='w-[48%] lg:w-full flex justify-center items-center h-[100px] border-b border-black'>
//             <Image loader={myLoader} src={src} alt="Picture of the author" width={60} height={60}/>
//             <div className='w-[80%] h-full flex flex-wrap justify-start content-center font-primary ml-2'>
//                 <span className='flex w-full text-center text-[15px]'>{span1}</span>
//                 <span className='flex w-full text-center text-[15px]'>{span2}</span>
//             </div>
//         </div>
//     )
// }