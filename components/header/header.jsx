import { BsPlusLg } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { PiListFill } from "react-icons/pi";
import Link from "next/link";
import Header2 from './header2'
const Header = () => {
    return(
        <header className="fixed flex flex-wrap justify-center content-center px-4 w-full h-fit z-40">
            <div className="w-full h-[40px] bg-[#960047]  fixed top-0 flex justify-center items-center text-white z-40"> up to 33% off ! Shop The Collection.</div>
            <div className="fixed bg-[#faeddf] h-[80px] lg:h-[100px] flex flex-wrap justify-center content-center w-full top-[40px] z-40 "><Header2 /></div>

        </header>
    )

}


export default Header;