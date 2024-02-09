'use client' 
import Link from 'next/link'
const CheckoutLeft =()=>{
    return(
        <div className="w-full xl:w-[45%] h-[60%]  xl:h-full flex flex-wrap justify-start content-center px-6 mr-0 lg:mr-10">
            <div className='w-full flex justify-start h-[5%] relative '>
                <CustomSeparator />
            </div>
            <div className='w-fit flex flex-wrap content-center justify-start border rounded-lg border-[#c0b6ab] p-4 relative'>
                <button className='w-[100px] lg:w-[150px] rounded-md relative cursor-pointer after:content-[""] after:top-0 after:left-0 after:rounded-md after:flex after:absolute after:w-full after:h-full after:bg-transparent hover:after:bg-[#00000068] transition-all duration-500  h-[50px] bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADaCAMAAACbxf7sAAAAwFBMVEVaMfT///+2qPlSIvRVKfSRfPdOG/Tu6v6GbPZUJ/RXLfSypPlZL/TWzvzTy/xvTfVMFvP18v5R1yJKEPPHvftaJfqWgfdR3QDFufulk/ji3P15XPbNxPuOd/dYXdG6rfqejPhlQPVGAPNTrHRbGf1YWdRVnIlYZ8iahvjb1fzm4v2un/ny7/7o5P2IcPfAtPpoRPWAZfZyU/X6+P9Xa8FQ4wBWf61WgqpYYc5Ts2hbCf9SxUR7X/ZiOfRmQvWikPhkH0LyAAAHP0lEQVR4nO2dfX/aNhCAbSQEEgZE5BBwzHhZ1mFeAoF1bbcyvv+3mizZxhCTQFNIftd7/nIdsPT4ZN1JhMYp/RqEDvklYD3n14CW37sHVwJFoYGi0EBRaLwiSq/Ujcvzoqh3+9ft1XpyYV4S9R5+//z3w/X6clFeENWedzefvwCJ6XFR43lz9xXIY3pUNPH8DUhAj4omnn9A8TwU9RIxaPE8FPX4FzPLwvPcF/Vuv33+9ADSc1/09tvdzd2nB4ie+6L8z1jw0z/A5iHD/jN6a0z/hRfPZ7Pu7VcteQMvns/zqIkpvHgWFAyx6d1XcJ4FlZE2BehZVALyDX+HjlyaolrXu343Lg/uGUEDRaGBotBAUWigKDRQFBooCg0UhQaKQgNFoYGi0EBRaKAoNFAUGigKDRSFBopCA0WhgaLQQFFooCg0UBQaKAoNFIUGikIDRaGBotBAUWigKDRQFBooCg0UPesiXCPefh1BT+fc5n6GKK22Ncu3mnpsWD2dFTvve8s/Q5RFrmb8xi9MCxq659Bqy3Mu/1NE63HD7beJCmd2lqemS864/ocRZf65nq57ztPyUUQ9fr6nWzojpD8m6nEmJWPcfr//qKjgLH4d4a//PwBi+QOiDXZ6l39IlJCxHwWR3ybmlmailGipbDhRudl26kFQ77QpS89yqdG3RBCmb9Ru6Ilm2nvfEr2/qCe7WVNT5mWiRD72/cV2Y1sXqprrq7+xo4wPJkEwGXA2nIaNTncpU9VMtDViBsmm7y2qGrm26jIVLa8q9lRfaXmxaex3qmySASnFx7VRP+1qcgNyosQTSkOEfHxfUdvXjBpJRGvZqUiH2Z7LM41NiXnVNBfrMjsUFatWpVJZUE/2D69xTVHPsY1UJi17QLxnUlPiiJU9nNf9cG4P2yQVXedf3CYHovQ+uV1i+J6itGzauFdS9czRI30ePapDutB97RE9NzPVtC8YikR0n6YoFHWfqKq8oyjfxk1MRvo5VH4URUEvEw265WRY63LQ47P2KMkrYtQx/ZI70aD72E5KvkAWi3a51EM8Gt8vV734ge8PBvYH2cFlRdumjYHSyYHEuYKmz2NfEc7siA1ZXKOzmkgSqKfM8F2KVHSsCOVyZcfwPS0U7VE1cbuKSCXJSL+vpEZ2giPs+xVE08ze8gdNadOjFV3HQXaUOZ7oINHmbFeNcjOD1kgi2rX1OLd2C1Ik2uIec6MRaYZB2BRq5rYYrdqBwcIriOaL0pbflFkeDU2rxGS/mXI8ocO1pmlNpOLTkbSiM5acln56W/KiJl6zFSVjd/H0FNf6Exa79TiLJ8A2J+41RB2VX075WSrpmOjxbiIqzav6aUilySjKinbSDnIzs63Vfh51lsvlRgnq2ZHdmgcNQvrmPsUJh5DBdUQ92ZvvTBuqUFT8Z36aLVLtaEuGbi3Vt2PRPRD14g0LrprxnBv0HF09SJu9h1S/qs5UcB3RuGBtljLXNi8StXNWO+sJM/MIt6J+FtGxcTsQ3TxWq49b84ZwxJmzaa6EEa0R7TgmWVl8WVFzuylRw3GUtFYkaoxmo+xddtpNhm4rfUbt1BUUPaOWIXXi8FWkEZ0xsnU3LCvNLlsZjTWDjafXYCPT64o6Khplmx0etUbJrFtTxpTYkdsvnHUNI26exwWxhecTFXXJsq2IS4omC+StEp7HqsdFzaBcq3TStWVrKU0vetXDOFG2yHJX4qgoEUv9pNapZ0Ub0ktyzOUjmlQHtSbzxuvjQ9d2vGtNPfZk3tTMCgZ31h93J/YwOqiMeE50LAUbOoqJZLzqUpvtJv3L1rq7G2pJS8DD9BLYyEmiV+N2ARvKwlp3uV/rDof5FrZcKdarOBu7kpmS/J7LZScj2dnrZr04vTjUBnHd6PdDmw/Xm8Kivry/ejlkPZ/nFjsR44Pdvy5dMCzcfMtHCgZH7q9bXfc7T5dpUW650ztYj75Mm2dJ9PKijqymjVUGuxLQz4nGmdHZXzev7+OfW9Eg22EIh4c7DMdpTeYDRle5MxcvGCgbjmul2qBpPxbgXb/T8W0RRKvxsa38ZG+3J70Q5i8YJKJ6NdDu+6Wxw57tGR2nMZJcjOb5M5cWjTcyCdlt+PF4N4unN0GThInLnj9vzSqNrZOUCKmoTlNkbxv0JFGmhnubg1cQPfnyTMYbeplRJnqIt3lVdB2Gwf6Z8OOIHnJU1GGTV02fMTjjw4EPI0pf3dx8RryiO5lri5qcMyn6wI9tz/U86xPZK4vSdqgp/nCI3PuV05lM+Vl/iebav8OQn5QPEfHMdSrynHHr4C9rwANFoYGi0EBRaKAoNFAUGigKDRSFBopCA0WhgaLQQFFooCg0UBQaKAoNFIUGikIDRaGBotBAUWigKDRQFBooCg0UhQaKQgNFoYGi0EBRaKAoNFAUGigKDRSFBopCA0WhgaLQQFFooCg0UBQaKAoNFIUGikIDRaGBotBAUWigKDRo+X8tfIq+fVlrCAAAAABJRU5ErkJggg==")] bg-center bg-cover'></button>
                <button className='w-[100px] lg:w-[150px] rounded-md relative cursor-pointer after:content-[""] after:top-0 after:left-0 after:rounded-md after:flex after:absolute after:w-full after:h-full after:bg-transparent hover:after:bg-[#00000068] transition-all duration-500  mx-2 h-[50px] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJdjso_lcyN_0SmKZH4T0LwvUKVms39KghA&usqp=CAU")] bg-center bg-cover'></button>
                <button className='w-[100px] lg:w-[150px] rounded-md relative cursor-pointer after:content-[""] after:top-0 after:left-0 after:rounded-md after:flex after:absolute after:w-full after:h-full after:bg-transparent hover:after:bg-[#00000068] transition-all duration-500  h-[50px] bg-[url("https://25758250.fs1.hubspotusercontent-eu1.net/hub/25758250/hubfs/GooglePay-1.png?width=750&name=GooglePay-1.png")] bg-center bg-cover bg-no-repeat'></button>
            
            </div>   
            <div className='w-full flex justify-between border-b border-[#c0b6ab] my-4 py-2'>
                <span className=' flex text-[20px]'>contact</span>
                <span className='flex w-fit' >have an account?<Link className='flex ml-2 text-[#f4a620] hover:underline' href={'/login'}>log in</Link></span>
            </div>
        
            <span className='w-full flex text-[20px] my-4'>Shipping address</span>
            <div className='w-full flex flex-wrap justify-start content-start bg'>
              <div className='w-full flex justify-start '>
                <MultipleSelect />
              </div>
              <div className='w-full flex justify-between'>
                <input required spellCheck={false} className='w-[49%] text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='First Name' />
                <input required spellCheck={false} className='w-[49%] text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='Last Name' />
              </div>
              <input required spellCheck={false} className='w-full h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md my-2' type="text" placeholder='Address' />
              <input className='w-full h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md my-2' type="text" placeholder='Apartment,suite,etc.(optional)' />
              <input required spellCheck={false} className='w-full h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md my-2' type="text" placeholder='Phone' />
              <div className='w-full flex justify-between'>
                <input required spellCheck={false} className='w-[49%] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='city' />
                <input required spellCheck={false} className='w-[49%] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='state' />
              </div>
              <div className='w-full flex justify-start h-[50px] items-center'>
                <input required type="checkbox" className='h-[20px] w-[20px]' />
                <span className='w-[80%] h-full items-center bg-transparent px-4 text-stone-600 flex font-primary'>text me with news & offers.</span>
              </div>
              <div className='w-full flex justify-start h-[50px] items-center'>
                <input required type="checkbox" className='h-[20px] w-[20px]' />
                <span className='w-[80%] h-full items-center bg-transparent px-4 text-stone-600 flex font-primary'>Send me news and special offers via text message.</span>
              </div>
              <div className='w-full flex justify-end mt-4'>
                <Link href={'/payment'}><button className='w-[200px] h-[100px] bg-black text-[#faeddf] font-primary rounded-md cursor-pointer hover:bg-[#3e3e3e] transition-all duration-500'>Continue to shipping</button></Link>
              </div>
            </div>
        </div>
    )
}
export default CheckoutLeft



import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
}
function CustomSeparator() {
  const breadcrumbs = [
    <Typography underline="hover" key="1" color='#f4a620'  onClick={handleClick}>
      Information
    </Typography>,
    <Link  href='/payment' key="2" color='inherit'>
      Payment
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

// ************selection********************


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,

    },
  },
};

const names = [
  'Iran',
  'United States',
  'United Kingdom',
  'Australia',
  'France',
  'Italy',
  'Spain',
  'China',
  'Japan',
  
 
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 function MultipleSelect() {
  const theme = useTheme();
  const [country, setountry] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setountry(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350 }} className='ml-0' >
        <InputLabel id="demo-multiple-name-label" className='font-primary text-stone-600'>Country</InputLabel>
        <Select className='font-primary text-stone-600'
        
          multiple
          value={country}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem className='font-primary text-stone-600'
              key={name}
              value={name}
              style={getStyles(name, country, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
