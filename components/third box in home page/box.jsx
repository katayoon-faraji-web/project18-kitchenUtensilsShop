import Link from "next/link";
import List from './list'
const Box = () => {
    return(
        <section className=" w-full h-fit overflow-hidden  flex flex-wrap justify-center content-start bg-[#faeddf] font-primary p-10">
            <ul className="w-full h-[100px] flex justify-center items-center ">
                <li className="w-[150px] h-full text-[20px] lg:text-[25px] cursor-pointer flex justify-center items-center p-2 relative text-black after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><Link href={"/"}>CakeWare</Link></li>
                <li className="w-[150px] h-full text-[20px] lg:text-[25px] cursor-pointer flex justify-center items-center p-2 relative text-black after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><Link href={"/"}>BakeWare</Link></li>
                <li className="w-[150px] h-full text-[20px] lg:text-[25px] cursor-pointer flex justify-center items-center p-2 relative text-black after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><Link href={"/"}>Sets</Link></li>
            </ul>
            <List/>
            <Link href={'/shopAll'}><button className="w-[150px] h-[40px] mt-10 lg:mt-20 bg-[#0e5540] text-[20px] text-white cursor-pointer rounded-md transition-all duration-500 hover:bg-[#faeddf] hover:text-black hover:border-2 hover:border-[#0e5540]">Shop All</button></Link>
        </section>
    )
}


export default Box;