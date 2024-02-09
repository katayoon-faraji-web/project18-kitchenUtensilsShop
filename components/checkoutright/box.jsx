'use client'
import useStore from "../../zustand/store";
import Image from 'next/legacy/image'
import { BsCart4 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
}
const CheckoutRight = () =>{
    const wholePrice = useStore(state=>state.wholePrice)
    const cartItems = useStore(state=>state.cartItems)

    return(
        
        <div  className="w-full xl:w-[35%] h-[40%] xl:h-full flex flex-wrap  justify-start content-center border-left border-stone-300 rounded-lg ">
            <div  className="w-full h-[40%] flex flex-wrap  justify-start content-start overflow-y-scroll px-4">
                {cartItems && cartItems.map((val,i)=>{
                    let s = val.img
                    s = s.slice(28)
                    return(
                        <div key={i} className="w-full flex justify-start content-start  py-2">
                            <div className="w-[100px] relative bg-white rounded-lg overf">
                                <Image priority={true} loader={myLoader} src={s} alt="Picture of the author" width={100} height={80}/>
                                <div className="absolute -top-[12%] -left-[22%] w-[40px] h-[40px]">
                                    <CustomizedBadges num={val.number}/>
                                </div>
                            </div>
                            <div className="w-[55%] flex h-full flex-wrap justify-start content-start ml-2 mt-4 pt-2">
                                <div className="w-full flex justify-between items-center">
                                    <span className="flex text-[15px] font-primary">{val.titile}</span>
                                    <span className="flex text-[12px] font-primary">${val.price}</span>
                                </div>
                                <span className="flex text-[12px] font-primary my-2">{val.category}</span>
                            
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full h-[40%] flex flex-wrap justify-start content-start pt-8 border-t border-[#c0b6ab]">
                <div className="w-full flex justify-between items-center px-8">
                    <span className="flex text-[15px] text-stone-600">subtotal</span>
                    <span className="flex text-[15px] text-black">wholePrice</span>
                </div>
                <div className="w-full flex justify-between items-center px-8 my-4">
                    <span className="flex text-[15px] text-stone-600">shipping</span>
                    <span className="flex text-[15px] text-black">$0</span>
                </div>
                <div className="w-full flex justify-between items-center px-8">
                    <span className="flex text-[15px] text-stone-600">total</span>
                    <span className="flex text-[15px] text-black">wholePrice</span>
                </div>
            </div>
        </div>

    )
}
export default CheckoutRight


import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    left: 0,
    top: 0,
    padding: '4px',
    backgroundColor:'gray',
    
  },
}));

function CustomizedBadges({num}) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={num} color="secondary">
      </StyledBadge>
    </IconButton>
  );
}