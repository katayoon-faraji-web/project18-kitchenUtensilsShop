'use client'
import {  useEffect, useRef} from 'react'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import useStore from '../../zustand/store';

const DropDown = ()=>{
    const menu = useRef()
    let dropdown = useStore(state=>state.dropdown)
    const close_dropdown = useStore(state=>state.close_dropdown)
    useEffect(()=>{
        if(dropdown=='closed'){
            menu.current.style.display ='none'
        }else if(dropdown=='opened'){
            menu.current.style.display ='flex'
        }
    },[dropdown])

    return(

            <section ref={menu} className="w-full h-[100vh] p-6 absolute top-[120px]  left-0 bg-[#f4a620] z-40 flex lg:hidden justify-start content-start">
                    <ul className='w-full h-full flex flex-wrap justify-start content-start  py-10'>
                        <li onClick={close_dropdown} className='w-full cursor-pointer text-[25px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}>shop all</Link></li>
                        <li onClick={close_dropdown} className='w-full cursor-pointer text-[25px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}>CookWare</Link></li>
                        <li onClick={close_dropdown} className='w-full cursor-pointer text-[25px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}>bakeWare</Link></li>
                        <li onClick={close_dropdown} className='w-full cursor-pointer text-[25px] text-start relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[90%] after:transition-all after:duration-500 hover:after:w-[52%] hover:after:left-0'><Link href={'/shopAll'}>Sets</Link></li>
                    </ul>
            </section>
    )
}
export default DropDown

