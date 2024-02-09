'use client'
import { GrClose } from "react-icons/gr";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { LiaPlusSquare } from "react-icons/lia";
import { LiaMinusSquare } from "react-icons/lia";
import useStore from "../../zustand/store";
import Image from 'next/legacy/image'
import {  useEffect, useRef, useState } from 'react'
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }


const Cart = () =>{
    let myLocal = ''
    let localStorageContent = []
    let count_number = useRef()
    let whole_price = useRef()
    const cart = useRef()
    const cartItems = useStore(state=>state.cartItems)
    const cartStatus = useStore(state=>state.cart)
    const close_cart = useStore(state=>state.close_cart)
    const update_cart = useStore(state=>state.update_cart)
    const set_wholePrice = useStore(state=>state.set_wholePrice)
    const set_wholeNumber = useStore(state=>state.set_wholeNumber)
    function closeCart(){
        close_cart()
    }
    useEffect(()=>{

        if(cartStatus=='closed'){
            cart.current.style.right ='-500px'
            cart.current.parentElement.style.display ='none'
        }else if(cartStatus=='opened'){
            
            cart.current.parentElement.style.display ='flex'
            cart.current.style.right = 0

        }

        myLocal = localStorage.getItem('myProducts')
        let countNumber = 0
        let wholePrice = 0
        if(myLocal!=null){
            localStorageContent = JSON.parse((localStorage.getItem('myProducts')))
            localStorageContent.map((v)=>{
                countNumber += Number(v.number)
                wholePrice += ((Number(v.price))*(Number(v.number)))
            })
        }
        set_wholePrice(wholePrice)
        set_wholeNumber(countNumber)
        count_number.current.innerHTML = countNumber 
        whole_price.current.innerHTML = '$'+wholePrice 
        update_cart(localStorageContent)
        
   

    },[cartStatus])
    const delete_item = (id)=>{
        localStorageContent = JSON.parse((localStorage.getItem('myProducts')))
        localStorageContent=localStorageContent.filter((i)=> i.id!==id)
        localStorage.setItem("myProducts",JSON.stringify(localStorageContent))
        update_cart(localStorageContent)
    }
    const increment = (a) =>{
        localStorageContent = JSON.parse((localStorage.getItem('myProducts')))
        let itemIndex = localStorageContent.findIndex((i)=>i.id===a.id)
        console.log(itemIndex);
        let num = Number(localStorageContent[itemIndex].number)
        localStorageContent[itemIndex].number = num+1
        console.log(localStorageContent[itemIndex].number);
        localStorage.setItem("myProducts",JSON.stringify(localStorageContent))
        update_cart(localStorageContent)
    }
    const decrement = (a) =>{
        localStorageContent = JSON.parse((localStorage.getItem('myProducts')))
        let itemIndex = localStorageContent.findIndex((i)=>i.id===a.id)
        console.log(itemIndex);
        let num = Number(localStorageContent[itemIndex].number)
        if((num)<=1){
            localStorageContent[itemIndex].number = num
            
        }else{

            localStorageContent[itemIndex].number = num-1
        }
        console.log(localStorageContent[itemIndex].number);
        localStorage.setItem("myProducts",JSON.stringify(localStorageContent))
        update_cart(localStorageContent)
    }

    const _Close =(e)=>{
        e.stopPropagation()
        close_cart()
    }
    const StopProp = (e) =>{
        e.stopPropagation()
    }

    return(
        <section onClick={_Close} className="w-[100%] h-[100vh]  fixed top-0 right-0 z-40 flex justify-end bg-[#3a3a3aa7]">
            <div ref={cart} onClick={StopProp} className="w-[100%] md:w-[600px] h-full transition-all duration-700 bg-[#fce9d5]  fixed p-10 top-0 right-0 z-50 flex flex-wrap justify-center content-start">
                <div className="w-full flex justify-between ">
                    <div className="flex justify-start items-center ">
                        <span ref={count_number} className="flex text-[20px] font-primary mr-2">0</span>
                        <BsCart4 className="cursor-pointer text-[25px]"/>
                    </div>
                    <GrClose className="cursor-pointer text-[25px]" onClick={()=>{closeCart()}} />
                </div>
                <div className="flex w-full justify-between h-[50px] mt-10">
                    <span className="text-[20px] font-primary text-start">your cart</span>
                    <span ref={whole_price} className="text-[20px] font-primary">price</span>
                </div>
                <div className="w-full mt-4 h-[70%]   overflow-y-scroll flex flex-wrap justify-start content-start items-start">
                    {cartItems && cartItems.map((val,i)=>{
                        let s = val.img
                        s = s.slice(28)
                        return(
                            <div key={i} className="w-full flex justify-between items-center border-b border-black py-2">
                                <div className="w-[40%] relative h-full bg-[#ede1d4] rounded-lg">
                                    <Image priority={true} loader={myLoader} src={s} alt="Picture of the author" width={450} height={300}/>
                                    <IoCloseCircleOutline  onClick={()=>{delete_item(val.id)}}  className="absolute cursor-pointer hover:scale-105 transition-all duration-300 w-[20px] h-[20px]  top-[5px] left-[5px] z-50"/>
                                </div>
                                <div className="w-[55%] flex h-full flex-wrap justify-start content-start">
                                    <div className="w-full flex justify-between items-center">
                                        <span className="flex tetx-[15px]  lg:text-[18px] font-primary">{val.titile}</span>
                                        <span className="flex text-[12px] lg:text-[15px] font-primary">${val.price}</span>
                                    </div>
                                    <span className="flex text-[15px] font-primary my-4">{val.category}</span>
                                    <div className="w-full flex justify-start items-center">
                                        <LiaMinusSquare onClick={()=>{decrement(val)}} className="w-[30px] h-[30px] cursor-pointer"/>
                                        <span className="text-[15px] lg:text-[20px] font-primary mx-2">{val.number}</span>
                                        <LiaPlusSquare onClick={()=>{increment(val)}} className="w-[30px] h-[30px] cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="w-full md:w-[580px] flex justify-center items-center fixed bottom-0 right-[20px] h-[100px] z-50 bg-[#fce9d5] shadow-3xl">
                    <Link href={'/checkout'}><button className="w-[300px] md:w-[500px] rounded-md h-[40px] bg-[#0f5643] text-[#fce9d5] text-[20px] font-primary cursor-pointer transition-all duration-500 hover:bg-[#faeddf] hover:text-[#0f5643] hover:border-2 hover:border-[#0e5540]">CHECKOUT</button></Link>
                </div>
                
            </div>
                

        </section>
    )
}
export default Cart