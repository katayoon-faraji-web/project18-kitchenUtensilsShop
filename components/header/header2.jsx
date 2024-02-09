'use client'
import { BsPlusLg } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { PiListFill } from "react-icons/pi";
import Link from "next/link";
import MenuShopAll from "./../menu_shopall/box"
import {useState} from "react";
import useStore from "../../zustand/store";
import Search from '../../components/search/box'
import DropDown from '../../components/menu/box'


const Header = () => {
    const menuStatus = useStore(state=>state.menu)
    const open_menu = useStore(state=>state.open_menu)
    const open_cart = useStore(state=>state.open_cart)
    const user = useStore(state=>state.user)
    const searchbox = useStore(state=>state.searchbox)
    const open_searchbox = useStore(state=>state.open_searchbox)
    const close_searchbox = useStore(state=>state.close_searchbox)
    const dropdown = useStore(state=>state.dropdown)
    const open_dropdown = useStore(state=>state.open_dropdown)
    const close_dropdown = useStore(state=>state.close_dropdown)
    
    
    const [turn1,turn1Set] = useState([{span1:'cookware',span2:'bakeware',span3:'sets'},
    {src:"cdn/shop/files/dutchess_45_01-blue_261x211.png",title:'the dutchess', price:'125'},
    {src:"cdn/shop/files/Group_643_1_261x211.png",title:'holy sheet', price:'35'},
    {src:"cdn/shop/files/Group_642_261x211.png",title:'hot dish', price:'65'},
    {src:"cdn/shop/files/Group_477_261x211.png",title:'large fry', price:'90'}])

    const [turn2,turn2Set] = useState([{span1:'cast-iron',span2:'stainless-steel',span3:'cookware sets'},
    {src:"cdn/shop/files/dutchess_45_01-blue_261x211.png",title:'the dutchess', price:'125'},
    {src:"cdn/shop/products/Group_655_1_261x211.png",title:'the starting lineup', price:'150'},
    {src:"cdn/shop/products/PreciousMetalsBundle_0065_210308_v2_1_261x211.png",title:'precious metal', price:'65'},
    {src:"cdn/shop/products/The_Fry_Family_Image1_261x211.png",title:'the fry family', price:'145'}])
    
    const [turn3,turn3Set] = useState([{span1:'sheet pans',span2:'ceramic',span3:'bakeware sets'},
    {src:"cdn/shop/files/Group_643_1_261x211.png",title:'holy sheets', price:'125'},
    {src:"cdn/shop/products/Group_669_261x211.png",title:'stoneware sweeties', price:'95'},
    {src:"cdn/shop/files/EasyCake_Blueberry_1_261x211.png",title:'easy cake', price:'100'},
    {src:"cdn/shop/products/1_04f4ac7e-c9ef-4084-afcf-ac64ba30c0f4_261x211.png",title:'little hottie', price:'40'}])
    const [data,dataSet] = useState(turn1)

    function openTheMenu(t){
        dataSet(t)
        open_menu()
    }
    function openCart(){
        open_cart()
    }
    function toggle_serch_box(){
      if(searchbox=='closed'){
        open_searchbox()
      }else if(searchbox=='opened'){
        close_searchbox()
      }
    }
    function toggle_dropdown(){
      if(dropdown=='closed'){
        open_dropdown()
      }else if(dropdown=='opened'){
        close_dropdown()
      }
    }
    
    return(
        <header className="fixed flex flex-wrap justify-center content-center w-full h-fit z-40 bg-transparent">
            <div className=" w-full h-[80px] lg:h-[100px] flex justify-between lg:justify-center  items-center px-4 font-primary">
                <ul className="h-full w-[45%]  flex justify-start items-center ">
                    <li onClick={toggle_dropdown} className="w-fit h-full text-[25px] cursor-pointer flex lg:hidden justify-center items-center p-2 relative"><PiListFill /></li>
                    <li className="w-fit h-full text-[15px] md:text-[18px] cursor-pointer hidden xl:flex justify-center items-center p-2 relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0">valentine sale</li>
                    <li className="w-fit h-full text-[15px] md:text-[18px] cursor-pointer hidden lg:flex justify-center items-center p-2 relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><button onClick={()=>{openTheMenu(turn1)}}>Shop All</button><BsPlusLg /></li>
                    <li className="w-fit h-full text-[15px] md:text-[18px] cursor-pointer hidden lg:flex justify-center items-center p-2 relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><button onClick={()=>{openTheMenu(turn2)}}>CookWare</button><BsPlusLg /></li>
                    <li className="w-fit h-full text-[15px] md:text-[18px] cursor-pointer hidden lg:flex justify-center items-center p-2 relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><button onClick={()=>{openTheMenu(turn3)}}>Bakeware</button><BsPlusLg /></li>
                </ul>

                <div className="w-[20%] h-full flex justify-center items-center">
                  <Link href={'/'} className="w-[100px] relative z-50 lg:w-[150px] h-[200px] flex justify-center items-center lg:mr-10">
                      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.11 95.13" className="header__logo__full" role="presentation">
                          <path d="M73.23,41.61c5.48,0,9.22-2.26,12-7.29a1,1,0,0,0,.08-.78,1,1,0,0,0-.48-.62l-1.07-.6a1,1,0,0,0-.78-.09,1,1,0,0,0-.62.48c-2,3.46-4.9,5.41-8,5.41-5,0-7.31-3.33-7.31-10.48,0-.5,0-1,0-1.51l0-.17h16.8a1,1,0,0,0,.41-.08,1,1,0,0,0,.34-.24,1,1,0,0,0,.22-.35,1,1,0,0,0,.06-.41c-.48-7.1-5-11.15-12.6-11.15-8.26,0-14,5.71-14,13.91C58.28,36.13,64.15,41.61,73.23,41.61Zm-6-19.17c.56-3.94,2.13-5.62,5.24-5.62,2.72,0,4.5,2.22,4.5,5.65v.18H67.21Z"></path>
                          <path d="M95.86,41.49c3.68,0,7-1.94,9.15-3.58l.23-.17.06.27c.55,2.3,2.45,3.42,5.81,3.42a10.93,10.93,0,0,0,5.18-1,.94.94,0,0,0,.41-.38,1,1,0,0,0,.15-.53v-.63a.87.87,0,0,0-.1-.42.94.94,0,0,0-.25-.34,1.17,1.17,0,0,0-.37-.22,1.05,1.05,0,0,0-.43,0l-.34,0c-1.15,0-1.73-.8-1.73-2.37V22.18c0-7.34-6.77-8.45-10.81-8.45-7.51,0-12.76,2.86-12.76,7,0,2.15,1.13,3.39,3.1,3.39a4.28,4.28,0,0,0,4.31-3.33c.91-2.82,2.18-4,4.43-4,2.77,0,3.24,1.55,3.24,5v2.85l-.15,0c-8.68,1.58-16.71,3.94-16.71,10.46C88.27,39,91.24,41.49,95.86,41.49Zm9.06-13.86.22,0v7.22l-.08.06a8,8,0,0,1-4.71,1.7A3.09,3.09,0,0,1,97,33.28c0-3.59,4-4.87,7.91-5.64Z"></path>
                          <path d="M39.43,60.52c0,8.35,5.94,14,14.78,14S69,68.87,69,60.52,63,46.61,54.21,46.61,39.43,52.2,39.43,60.52Zm20.83,0c0,7.52-1.87,10.87-6,10.87S48.16,68,48.16,60.52,50,49.69,54.21,49.69s6,3.34,6,10.83Z"></path>
                          <path d="M118.37,46.61c-8.26,0-14,5.7-14,13.91,0,8.48,5.86,14,15,14,5.48,0,9.22-2.26,12-7.29a1,1,0,0,0-.4-1.39l-1.06-.61a1,1,0,0,0-1.4.39c-2,3.46-4.91,5.41-8,5.41-5,0-7.32-3.32-7.32-10.47a12.79,12.79,0,0,1,.06-1.52l0-.16H130a.9.9,0,0,0,.4-.09.92.92,0,0,0,.35-.24,1,1,0,0,0,.21-.35,1.14,1.14,0,0,0,.07-.41C130.5,50.65,126,46.61,118.37,46.61ZM123,55.52h-9.77l0-.21c.57-3.94,2.13-5.62,5.25-5.62,2.73,0,4.49,2.22,4.49,5.65Z"></path>
                          <path d="M144.57,87c8.66,0,14.54-6.09,14.54-14.22,0-8.51-6.46-11.91-11-14.25-3.33-1.78-6-3.19-6-5.74,0-2,1.53-3.29,4-3.29,2.61,0,6.2,1.82,8.76,6.84a1.08,1.08,0,0,0,.51.48,1.05,1.05,0,0,0,.7,0l.1,0a1,1,0,0,0,.58-.45,1.06,1.06,0,0,0,.14-.72l-1.36-7.31a1.07,1.07,0,0,0-.36-.61,1,1,0,0,0-.65-.24h-.35a1,1,0,0,0-.56.17,1.06,1.06,0,0,0-.38.43l-.45,1-.18-.12a12.39,12.39,0,0,0-7.72-2.33c-6.43,0-10.92,3.5-10.92,8.5,0,5.44,4.46,7.61,9.62,10.14,4.21,2.17,8.5,4.36,8.5,9.37,0,1.86-.49,8.93-8.75,8.93-4.44,0-7.8-2.49-7.8-6.67,0-2,1.16-3.26,2.94-3.26s2.12,1.18,2.6,2.33,1,2.52,3.07,2.52,3.48-1.45,3.48-3.78c0-2.88-2.87-6-7.15-6-5,0-9,3.65-9,8.15C131.45,82.79,136.6,87,144.57,87Z"></path>
                          <path d="M120.11,32.16V17.91H118a1,1,0,0,1-1-1v-.21a1,1,0,0,1,.17-.56,1,1,0,0,1,.45-.38,13,13,0,0,0,7.88-9.08,1,1,0,0,1,.37-.53,1,1,0,0,1,.61-.21h1.14a1,1,0,0,1,1,1V14.6h5.31a1,1,0,0,1,1,1v1.25a1,1,0,0,1-1,1h-5.29V34.44c0,3.72.85,6,3.22,6,2.13,0,2.53-2.08,3-3.77.54-2.17,1.89-3.35,4-3.21A3.26,3.26,0,0,1,141,34.54a3.22,3.22,0,0,1,.83,2.25c-.1,3.6-4,6.15-10.7,6.15-6,0-11-3.5-11-10.78Z"></path>
                          <path d="M86.35,14.23c2.86,0,4.13-2.42,4.13-4.82,0-4.85-4.3-8-11-8-3.85,0-8.82,1.88-14.77,5.59a87.7,87.7,0,0,0-12.06,9.14l-.31.28V14.77a.92.92,0,0,0-.08-.4,1,1,0,0,0-.22-.33.91.91,0,0,0-.33-.22,1.09,1.09,0,0,0-.39-.08h-.72a4.87,4.87,0,0,0-2.33.6l-7,3.87a1.12,1.12,0,0,0-.4.38,1.07,1.07,0,0,0-.14.52v.32a1,1,0,0,0,.3.72,1,1,0,0,0,.72.31h.59c1.12,0,1.63.58,1.63,1.9V36c0,1.57-.54,2.22-2.38,2.56a1,1,0,0,0-.6.36,1,1,0,0,0-.24.65v.16a1,1,0,0,0,1,1H54.58a1,1,0,0,0,1-1v-.15a1,1,0,0,0-.24-.66,1,1,0,0,0-.61-.35c-1.86-.33-2.37-1-2.37-2.57V21.38l0,0C55.73,15.7,70.42,5.2,78.47,5.2c2.79,0,4.67,1.19,4.67,3a4,4,0,0,1-.25,1.29,4.53,4.53,0,0,0-.28,1.41A3.41,3.41,0,0,0,86.35,14.23Z"></path>
                          <path d="M35.22,70.12c0,9.45-3.72,17-16,17-8,0-13.11-4.38-13.11-10.29,0-4.5,4-8.16,9-8.16,4.27,0,7.15,3.09,7.15,6,0,2.34-1.33,3.79-3.48,3.79S16.22,77.25,15.68,76c-.48-1.14-1-2.33-2.6-2.33s-2.94,1.28-2.94,3.26c0,4.18,3.37,6.68,7.8,6.68,8.15,0,8.75-7.72,8.75-11.36L26.63,40l-.27.14A13.4,13.4,0,0,1,20,41.63c-5.91,0-10.93-2-14.51-5.68S0,27,0,20.81,1.9,9.4,5.49,5.68,14.09,0,20,0c4.1,0,7.3.84,9.78,2.55l.19.13.52-1.2A1,1,0,0,1,30.88,1a1.06,1.06,0,0,1,.57-.17h1.07a1,1,0,0,1,.63.23,1,1,0,0,1,.37.56l2.27,9.57a1.06,1.06,0,0,1-.11.76,1,1,0,0,1-.6.47l-.29.08A1,1,0,0,1,33.6,12c-2.93-5.55-7.42-8.71-12.44-8.71C14,3.32,10.56,9,10.56,20.81c0,11.57,3.23,17.44,9.61,17.44a8.57,8.57,0,0,0,6.42-2.48l0-.05V28.46c0-3.05-.76-3.73-3.62-4.05a1,1,0,0,1-.92-1v-.16a1.06,1.06,0,0,1,.3-.73,1,1,0,0,1,.73-.3H38.17a1,1,0,0,1,.73.3,1.06,1.06,0,0,1,.3.73v.19a1,1,0,0,1-.25.67,1.06,1.06,0,0,1-.64.34c-2.21.32-3,1-3,4Z"></path>
                          <path d="M100.1,80.15V55.4c0-5.84-3-8.79-8.91-8.79a17.2,17.2,0,0,0-8.53,2.79l-.27.18V47.63a1,1,0,0,0-1-1h-.72a4.8,4.8,0,0,0-2.34.6l-7,3.86a1,1,0,0,0-.39.38,1,1,0,0,0-.15.52v.32A1,1,0,0,0,71,53a1,1,0,0,0,.73.31h.57c1.12,0,1.63.58,1.63,1.9V68.85c0,1.58-.54,2.23-2.38,2.57a1,1,0,0,0-.6.35,1.07,1.07,0,0,0-.24.66v.16a1,1,0,0,0,.3.72,1,1,0,0,0,.73.3H84.58a1,1,0,0,0,1-1v-.15a1,1,0,0,0-.24-.66,1.07,1.07,0,0,0-.61-.36c-1.86-.33-2.37-1-2.37-2.57V52.94l.08,0a9.21,9.21,0,0,1,5.27-1.76c2.53,0,3.93,1.43,3.93,4V77.91c0,8.4,3.63,17.22,16,17.22,8,0,13.12-4.38,13.12-10.3,0-4.49-4-8.15-9-8.15-4.28,0-7.15,3.08-7.15,6,0,2.34,1.33,3.79,3.47,3.79s2.53-1.23,3.07-2.53,1-2.33,2.6-2.33c1.79,0,2.94,1.27,2.94,3.26,0,4.18-3.36,6.67-7.8,6.67C100.31,91.51,100.1,82.2,100.1,80.15Z"></path>
                      </svg>
                      
                  </Link>
                </div>
                <ul className="w-[20%] h-full flex justify-end items-center ml-24 md:ml-40 lg:ml-80">
                    <li onClick={()=>{toggle_serch_box()}} className="w-fit h-full cursor-pointer text-[25px] flex justify-center items-center p-5"><IoSearch /></li>
                    <li className="w-fit h-full cursor-pointer text-[18px] hidden lg:flex justify-center items-center p-5 relative  after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0"><Link href={"/"}>About</Link></li>
                    <li className="w-fit h-full cursor-pointer text-[18px] hidden relative lg:flex justify-center items-center p-5   after:flex after:w-0 after:h-[2px] after:bg-black after:absolute after:left-[50%] after:top-[80%] after:transition-all after:duration-500 hover:after:w-[90%] hover:after:left-0">
                        <Link href={"/login"}>{user=='Account'?'Account':<><BackgroundLetterAvatars UN={user}/><div className="absolute top-[70%] right-0 w-full h-[100px]"><CustomizedSelects/></div></>}
                        </Link>
                        </li>
                    <li onClick={()=>{openCart()}} className="Z-50 w-fit h-full cursor-pointer text-[25px] flex justify-center items-center p-5"><BsCart4 /></li>
                </ul>
            </div>
            <MenuShopAll data={data} />
            <Search />
            <DropDown />
        </header>
    )

}


export default Header;


// avatar
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

 function BackgroundLetterAvatars({UN}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(UN)} />

    </Stack>
  );
}

// *************************************************

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {

      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

 function CustomizedSelects() {
  const [account, setAccount] = React.useState('');
  const log_out_from_user = useStore(state=>state.log_out_from_user)
  const handleChange = (event) => {
    setAccount(event.target.value);
  };
  return (
    <div>
      
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={account}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem onClick={log_out_from_user} value={'logout'}>log out</MenuItem>

        </Select>
      </FormControl>
      
    </div>
  );
}