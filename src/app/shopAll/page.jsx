'use client'
import { useEffect } from "react";
import '../globals.css'
import useStore from "../../../zustand/store";
import Link from "next/link";
import Image from 'next/legacy/image'
const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }
export default  function ShopAll() {
    const close_menu = useStore(state=>state.close_menu)
    const shopItems = useStore(state=>state.shopItems)
    const fetch = useStore(state=>state.fetch)
    const set_pagee = useStore(state=>state.set_page)
    const get_page_num = useStore(state=>state.page_num)
    const set_categ = useStore(state=>state.set_categ)
    const categ = useStore(state=>state.category)
    close_menu()
    let arr = []
    for(let i=0;i<get_page_num;i++){
        arr.push(i)
    }
    useEffect(()=>{
        fetch()

    },[])
    function set_page(x){
        set_pagee(x)
        fetch()
    }
    function set_category(x){
        set_categ(x)
        set_pagee(1)
        fetch()

    }
    return (
        <main className="w-full h-fit flex flex-wrap justify-center content-start overflow-hidden bg-[#faeddf] relative pt-[160px]">
            <ul className="flex flex-wrap w-full justify-center mb-20 mt-10">
                <li  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-2 cursor-pointer">
                    <div onClick={()=>{set_category('')}} className="w-full h-full flex flex-wrap relative">
                        <div className="group w-full h-full bg-cover bg-no-repeat bg-[url('https://greatjonesgoods.com/cdn/shop/files/8_b72b206b-b457-4c51-beae-c103a97558b3_217x217_crop_center.png')] hover:bg-[url('https://greatjonesgoods.com/cdn/shop/files/7_6c3df83f-2aed-45cf-9a1c-e79c879bb853_243x243_crop_center@2x.png')]"><span className="absolute top-[10%] left-[50%] -translate-x-[50%]  font-primary text-[#0f5643] transition-all duration-500 group-hover:text-white text-[25px]">shop all</span></div>
                    </div>
                </li>
                <li  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-2 cursor-pointer">
                    <div onClick={()=>{set_category('CookWare')}} className="w-full h-full flex flex-wrap relative">
                        <div className="group w-full h-full bg-cover bg-no-repeat bg-[url('https://greatjonesgoods.com/cdn/shop/files/16_8cf19671-8eff-4396-a2ef-cb3d1ba0c68b_297x297_crop_center.png')] hover:bg-[url('https://greatjonesgoods.com/cdn/shop/files/15_fd99357b-4ac3-4b25-ba27-5a521eb36f94_217x217_crop_center.png')]"><span className="absolute top-[10%] left-[50%] -translate-x-[50%]  font-primary text-[#0f5643] transition-all duration-500 group-hover:text-white text-[25px]">cookware</span></div>
                    </div>
                </li>
                <li  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-2 cursor-pointer">
                    <div onClick={()=>{set_category('BakeWare')}} className="w-full h-full flex flex-wrap relative">
                        <div className="group w-full h-full bg-cover bg-no-repeat bg-[url('https://greatjonesgoods.com/cdn/shop/files/collection-sheet_217x217_crop_center.jpg')] hover:bg-[url('https://greatjonesgoods.com/cdn/shop/files/collection-sheet-2_217x217_crop_center.jpg')]"><span className="absolute top-[10%] left-[50%] -translate-x-[50%]  font-primary text-[#0f5643] transition-all duration-500 group-hover:text-white text-[25px]">bakeware</span></div>
                    </div>
                </li>
                <li  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-2 cursor-pointer">
                    <div onClick={()=>{set_category('Sets')}} className="w-full h-full flex flex-wrap relative">
                        <div className="group w-full h-full bg-cover bg-no-repeat bg-[url('https://greatjonesgoods.com/cdn/shop/files/Group_672_1_217x217_crop_center.png')] hover:bg-[url('https://greatjonesgoods.com/cdn/shop/files/Group_673_217x217_crop_center.png')] "><span className="absolute top-[10%] left-[50%] -translate-x-[50%]  font-primary text-[#0f5643] transition-all duration-500 group-hover:text-white text-[25px]">Sets On Sale</span></div>
                        
                    </div>
                </li>
            </ul>
            <h2 className="w-full text-[40px] font-primary text-center ">{categ}</h2>
            <p className="w-full text-center text-[15px] font-primary mb-20">here to equip and empower you to cook at home.</p>
            {shopItems && shopItems.map((val,i)=>{
                let s = val.img1
                s = s.slice(28)
                return(
                    <Link key={i} href={"/shopAll/"+val.id}>
                        <div className='w-[400px] h-[400px] flex flex-wrap justify-center content-start mx-2'>
                            <Image className='bg-[#ede1d4] rounded-lg' loader={myLoader} src={s} alt="Picture of the author" width={500} height={300}/>
                            <span className='flex w-full justify-center text-center  text-[20px] lg:text-[20px] font-primary'>{val.category}</span>
                            <span className='flex w-full justify-center text-center my-4 text-[20px] lg:text-[20px] font-primary'>{val.title}</span>
                            <span className='flex w-full justify-center text-center text-[15px] font-primary'>${val.price}</span>
                          
                        </div>
                   </Link>
                )
            })}
            <div className="w-full flex justify-center h-[50px]">
                {arr.map((v,i)=>{
                    return(
                        <span key={i} onClick={()=>{set_page(i+1)}} className="flex text-[25px] text-[#0f5643] cursor-pointer mx-2 hover:scale-105 hover:text-[#bc004b]">{i+1}</span>
                    )
                })}
                {arr=[]}
            </div>
            
            
        </main>
    );
}

