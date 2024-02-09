'use client'
import {  useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { AiOutlineClose } from "react-icons/ai";
import useStore from '../../zustand/store';
const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
}

const Box = ({data})=>{
    const menu = useRef()
    let menuStatus = useStore(state=>state.menu)
    const close_menu = useStore(state=>state.close_menu)
    const [dataa,dataaSet] = useState([])
    useEffect(()=>{
        dataaSet(data)
        if(menuStatus=='closed'){
            menu.current.style.display ='none'
        }else if(menuStatus=='opened'){
            menu.current.style.display ='flex'
        }
    },[menuStatus])

    return(
        <div ref={menu} className='w-full h-[100vh] bg-[#27272795]'>
            <section  className="w-[90%] h-[400px] px-10 absolute top-[120px] lg:top-[140px] left-[5%] bg-[#f4a620] z-40">
                <span onClick={close_menu} className='cursor-pointer w-[60px] h-[60px] absolute top-[5%] right-0'><AiOutlineClose className='w-full'/></span>
                 <div className='w-full h-full flex justify-center items-center '>
                    <ul className='w-[20%] h-full flex flex-wrap justify-start content-start  py-20'>
                        <li onClick={close_menu} className='w-full cursor-pointer text-[20px] xl:text-[35px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}> {data[0].span1}</Link></li>
                        <li onClick={close_menu} className='w-full cursor-pointer text-[20px] xl:text-[35px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}> {data[0].span2}</Link></li>
                        <li onClick={close_menu} className='w-full cursor-pointer text-[20px] xl:text-[35px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}> {data[0].span3}</Link></li>
                    </ul>
                    <div className='w-[80%] h-full flex justify-center items-center'>
                        {data && data.map((val,i)=>{
                            if(i!=0){
                                return(
                                    <div key={i} className='w-[320px] h-[250px] flex flex-wrap justify-center content-start mx-2'>
                                        <Image className='bg-[#d1983b] rounded-lg' loader={myLoader} src={val.src} alt="Picture of the author" width={320} height={200}/>
                                        <span className='flex w-full justify-center text-center my-4 text-[20px] lg:text-[25px] font-primary'>{val.title}</span>
                                        <span className='flex w-full justify-center text-center text-[15px] font-primary'>${val.price}</span>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Box

