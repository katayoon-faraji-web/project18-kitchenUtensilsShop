"use client"
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState } from 'react'
const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }

const List = () => {
    const [data,dataSet] = useState([{src:"cdn/shop/files/laura-chautin-dutchess-product-01_335x201_crop_center@2x.png",title:'great jones x laura chautin the dutchess',desc:'collectible!', price:'215',id:'1'},
    {src:"cdn/shop/files/laura-chautin-dutch-baby-product-01_453x302_crop_center.png",title:'great jones x laura chautin baby',desc:'collectible!', price:'175',id:'2'},
    {src:"cdn/shop/products/GJ_FAMILY__41119_green_BD-S_335x201_crop_center@2x.png",title:'family style',desc:'5-piece set of cookware essentials!', price:'495',id:'3'},
    {src:"cdn/shop/products/Group_658_1_335x201_crop_center@2x.png",title:'the starting lineup',desc:'3-piece set of cookware & bakeware for beginners!', price:'150',id:'4'}])
    return(
        <section className=" w-full h-fit flex flex-wrap justify-center content-start bg-[#faeddf] mt-10">
            {data.map((val,i)=>{
                return(
                   <Link key={i} href={"/shopAll/"+val.id}>
                        <div className='w-[320px] h-[400px] flex flex-wrap justify-center content-start mx-2'>
                            <Image className='bg-[#ede1d4] rounded-lg'
                                loader={myLoader}
                                src={val.src}
                                alt="Picture of the author"
                                width={320}
                                height={200}
                            />
                            
                            <span className='flex w-full justify-center text-center my-4 text-[20px] lg:text-[25px] font-primary'>{val.title}</span>
                            <p className='flex w-full justify-center text-center text-[15px] lg:text-[20px] font-primary'>{val.desc}</p>
                            <span className='flex w-full justify-center text-center text-[15px] font-primary'>${val.price}</span>
                        </div>
                   </Link> 
                )
            })}

        </section>
    )
}


export default List;