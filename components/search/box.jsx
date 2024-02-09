'use client'
import { IoSearch } from "react-icons/io5";
import useStore from "../../zustand/store";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/legacy/image'
const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }


  
const Search = () =>{
    let arr = []
    const searchpage = useRef()
    const [s,setS] = useState([])
    const fetch = useStore(state=>state.fetchWhole)
    const wholeItems = useStore(state=>state.wholeItems)
    const searchbox = useStore(state=>state.searchbox)
    useEffect(()=>{
        fetch()
        console.log(searchbox);
        if(searchbox=='closed'){
            searchpage.current.style.display ='none'
        }else if(searchbox=='opened'){
            searchpage.current.style.display ='flex'
        }

    },[searchbox])
    const search = (e) =>{
        arr = []
        let search_val = e.target.value
        if(search_val!=''){
            let search_val_len = e.target.value.length
            wholeItems && wholeItems.map((val)=>{
                let flag = 0
                if(((val.title.toLowerCase()).slice(0,search_val_len))==search_val){
                    if(arr!=[]){
                        arr.map((v)=>{
                            if(v.title==val.title){
                                flag++
                            }
                        })
                    }
                    if(flag==0){

                        arr.push(val)
                    }
                    
                }
            })

        }
        setS(arr)
        
    }

    return(
        <section ref={searchpage} className="w-full h-[70vh]  flex flex-wrap justify-center content-start overflow-x-hidden overflow-y-scroll bg-[#faeddf] absolute z-40 mt-24">
           <div className="w-[97%] h-[80px] flex justify-start items-center px-6 mt-4 fixed top-[120px] z-30 bg-[#faeddf]">
                <IoSearch className="w-[5%] h-[50%]"/>
                <input onKeyUp={search} spellCheck={false} type="search" className="w-[95%] h-[80px] bg-transparent border-b font-primary px-2 border-black text-[30px] text-black" />
           </div>
           <div className="w-[90%] h-fit flex flex-wrap justify-center content-center mt-40 ">
            {s && s.map((val,i)=>{
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
           </div>
        </section>
    )
}
export default Search