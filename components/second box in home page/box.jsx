'use client'
import "../../src/app/globals.css"
import Image from 'next/legacy/image'
import Head from './head'

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }



const Box = () => {
    return(
        <section className="w-full h-[70vh] lg:h-[80vh] relative flex flex-wrap justify-center content-start bg-[#0e5540] overflow-hidden">
           <ul className="w-[70%] hidden lg:flex justify-center items-center mt-10">
                <li className="w-[100px] "><Image loader={myLoader} src="cdn/shop/files/VOGUE_LOGO_2_300x.png" alt="Picture of the author" width={100} height={50}/></li>
                <li className="w-[260px]  mx-20"><Image className="mx-10" loader={myLoader} src="cdn/shop/files/New-York-Times-logo_b568246e-115b-429c-86a0-7251f4701f24_300x.png" alt="Picture of the author" width={260} height={50} /></li>
                <li className="w-[100px] "><Image loader={myLoader} src="cdn/shop/files/publisher-logo_300x.png" alt="Picture of the author" width={100} height={50}/></li>
           </ul>
            <div className="w-full overflow-hidden flex absolute justify-center mt-10 content-between h-[60vh]  ">
                <div className="w-[180%] lg:w-[120%] absolute overflow-hidden flex justify-between ">
                    <Image  loader={myLoader} src="cdn/shop/files/red-cabbage_1_wecompress.com_x352_crop_center.png?v=1637191274" alt="Picture of the author" width={400} height={400}/>
                    <Image loader={myLoader} src="cdn/shop/files/rosemary_1_1_x293_crop_center.png" alt="Picture of the author"  width={500} height={200}/>
                </div>
                <div className="w-full absolute h-full  justify-center items-center lg:flex hidden">
                    <q className="absolute text-[60px] w-[40%] text-[#f4a620] text-center justify-center mx-auto top-[40%] ">Great jones make pots and pans you will not want to put away.</q>
                </div>
                <div className="w-[70%] bg-white h-[50%] flex flex-wrap content-center absolute justify-center items-center rounded-lg lg:hidden">
                    <span className="w-full flex text-[50px] text-black justify-center">VOGUE</span>
                    <q className="w-[80%] text-black tetx-[20px] text-center">Great jones make pots and pans you will not want to put away.</q>
                </div>
            </div>

        </section>
    )
}


export default Box;