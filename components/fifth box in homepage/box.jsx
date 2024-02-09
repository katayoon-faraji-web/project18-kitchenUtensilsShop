"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.css';
import Image from 'next/legacy/image'
import { useState ,useEffect} from 'react';
import { FaRegArrowAltCircleRight ,FaRegArrowAltCircleLeft } from "react-icons/fa";



const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
}
const Box =() =>{
  const [data,dataSet] = useState('3')
  
  useEffect(() => {
    let myMediaQuery = window.matchMedia('(min-width: 900px)');
    function widthChangeCallback(myMediaQuery) {
      if(myMediaQuery.matches) {
        dataSet('3')
      }else {
        dataSet('1')
      }
    }
    myMediaQuery.addEventListener('change', widthChangeCallback);
  }, [])
    return(
      <div className='w-full p-10 flex flex-wrap justify-center overflow-hidden'>
        <h3 className='flex w-full text-[40px] text-start'>What is Cooking?</h3>
        <FaRegArrowAltCircleRight className='w-[50px] h-[50px] text-[#0f5643] absolute right-[5%]' />
        <Swiper className='mt-10 p-5 w-full overflow-hidden'
          spaceBetween={20}
          slidesPerView={data}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/337353439_179446474883821_7611089960289075762_n_582x617_crop_center.jpg?v=1691789580")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>the fry family via @zoes-table</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/Screen_Shot_2022-04-05_at_10.37.15_AM_582x617_crop_center.png?v=1649180381")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>hot dish via @feedingmy3sons</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/354912927_593238195991467_6692300102401441981_n_582x617_crop_center.jpg?v=1691790465")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>the dutchess via @robbieguevarra</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/375883362_682994320524079_6817078988332972292_n_582x617_crop_center.jpg?v=1694392738")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>glossy dutch baby via @kchysmith</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/Screen_Shot_2022-04-05_at_10.36.36_AM_582x617_crop_center.png?v=1649180281")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>holy sheet via @kcosteen</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/2_a202e296-75e0-41a2-ac3e-5787dff9967e_582x617_crop_center.png?v=1682964820")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>beyond measure duo via @whatalexiscooked</span></SwiperSlide>
        <SwiperSlide className='bg-white cursor-pointer justify-center flex flex-wrap rounded-xl w-[300px] h-[550px] p-6 '><div className='w-full h-[90%] rounded-xl bg-[url("https://greatjonesgoods.com/cdn/shop/files/Screen_Shot_2022-11-07_at_11.00.32_AM_582x617_crop_center.png?v=1667837074")]'></div><span className='w-[90%] items-center cursor-pointer h-[40px] mt-4 bg-white justify-center border border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-primary text-[15px] text-[#0e5540] rounded-3xl flex text-start'>great fellow kettle via @apertourecoffee</span></SwiperSlide>
      </Swiper>

      </div>
    )
}
export default  Box

