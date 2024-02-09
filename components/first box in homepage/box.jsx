'use client'
import Link from "next/link";
import "../../src/app/globals.css"

const Box = () => {
    
    return(
        <section  className="box w-full h-[80vh] flex flex-wrap justify-center overflow-hidden content-start lg:content-center bg-center bg-cover mt-24">
            <span className="w-full flex justify-center text-[50px] lg:text-[80px] text-white font-third mt-16 lg:mt-0 [text-shadow:_0_1px_0_var(--tw-shadow-color)]">Enjoy Up To 33% Off</span>
            <span className="w-full flex justify-center text-[25px] lg:text-[30px] text-white my-4 font-third">Our Collection Is Now On Sale.</span>
            <button className="w-[200px] h-[40px] lg:w-[300px] lg:h-[60px] bg-white text-black flex justify-center items-center text-[20px] lg:text-[25px] cursor-pointer rounded-md hover:bg-[#0f5643] hover:text-[#faeddf] transition-all duration-500"><Link href={"/shopAll"}>Shop Now</Link></button>

        </section>
    )
}


export default Box;