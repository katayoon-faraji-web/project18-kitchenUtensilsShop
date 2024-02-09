"use client"
import Image from 'next/legacy/image'

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }


const SmallBox = ({src,span1,span2}) =>{
    return(
        <div className='w-[48%] lg:w-full flex justify-center items-center h-[100px] border-b border-black'>
            <Image loader={myLoader} src={src} alt="Picture of the author" width={60} height={60}/>
            <div className='w-[80%] h-full flex flex-wrap justify-start content-center font-primary ml-2'>
                <span className='flex w-full text-center text-[15px]'>{span1}</span>
                <span className='flex w-full text-center text-[15px]'>{span2}</span>
            </div>
        </div>
    )
}
export default SmallBox