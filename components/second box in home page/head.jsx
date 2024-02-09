'use client'
import "../../src/app/globals.css"
import Image from 'next/image'

const Head = () => {
    return(
        <div className="w-full  justify-center items-center h-[70px] overflow-hidden">
            <Image alt="txt1" width={100} height={40} src={"/images/t1.png"}/>
        </div>

    )
}

export default Head;