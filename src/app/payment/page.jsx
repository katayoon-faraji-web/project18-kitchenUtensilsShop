'use client'
import CheckoutRight from '../../../components/checkoutright/box'
import { FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
const Payment = () =>{
    return(
        <section className="w-full h-[170vh] lg:h-[120vh] flex flex-wrap justify-center px-10 items-start content-start bg-[#faeddf] font-primary mt-20">
           <PaymentCart/>
           <CheckoutRight/>
        </section>
    )
}
export default Payment

const PaymentCart = () =>{
    const check_date =(e) =>{
        let val = String(e.target.value)
        console.log(e.target);
        if((val.search(/[a-z]/)>=0 || val.search(/[ا-ی]/)>=0) || ((e.target.value).slice(0,1)!=1) || ((e.target.value).slice(1,2)>=3) || ((e.target.value).length>5)){
            e.target.value = e.target.value.slice(0,(e.target.value).length-1)
        }
        if(e.target.value.length==2){
            e.target.value =  e.target.value +'/'
        }
    }
    const check_name =(e) =>{
        let val = String(e.target.value)
        if(val.search(/[0-9]/)>=0 || val.length>50){
            e.target.value = e.target.value.slice(0,(e.target.value).length-1)
        }
    }
    const check_number =(e) =>{
        let val = String(e.target.value)
        if((val.search(/[a-z]/)>=0 || val.search(/[ا-ی]/)>=0) || val.length>19){
            e.target.value = e.target.value.slice(0,(e.target.value).length-1)
        }
        if(e.target.value.length==4 || e.target.value.length==9 || e.target.value.length==14){
            e.target.value =  e.target.value +'-'
        }
    }
    const check_security =(e) =>{
        let val = String(e.target.value)
        if((val.search(/[a-z]/)>=0 || val.search(/[ا-ی]/)>=0) || val.length>4){
            e.target.value = e.target.value.slice(0,(e.target.value).length-1)
        }
    }
    
    return(
        <div className="w-full xl:w-[45%] h-[60%]  xl:h-full flex flex-wrap justify-start content-start px-6 mr-0 lg:mr-10 mt-24">
            <div className='w-full flex justify-start h-[5%] relative '>
                <CustomSeparator />
            </div>
            <span className='w-full flex text-[20px] my-4'>Payment</span>
            <p className='w-full text-[15px] mb-4'>All transactions are secure and encrypted.</p>
            <div className='w-full h-[500px] flex flex-wrap justify-start content-start p-6 border border-[#c0b6ab] rounded-md'>
                <div className='flex justify-start h-[60px] w-[95%] border-b border-[#c0b6ab]  items-center'>
                    <span  className='w-[20px] h-[20px] rounded-full flex bg-[#f4a620] relative'>
                        <span className='w-[8px] h-[8px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full flex bg-white '></span>
                    </span>
                    <span className='flex justify-start text-[20px] items-center ml-2'>Credit Crad</span>
                </div>
                
                <div className='w-full relative justify-start'>
                <input onKeyUp={check_number} required spellCheck={false} className='w-full text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md mt-6' type="text" placeholder='Card Number' />
                    <FaLock className='absolute top-[50%] right-[2%] w-[20px] h-[20px] text-[#656464]'/>
                </div>
                
                <input onKeyUp={check_name} required spellCheck={false} className='w-full text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md my-2' type="text" placeholder='Name On Card' />
                <div className='w-full flex justify-between'>
                    <input onKeyUp={check_date} required spellCheck={false} className='w-[49%] text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='Expiration Date(MM/YY)' />
                    <input onKeyUp={check_security} required spellCheck={false} className='w-[49%] text-[15px] h-[50px] bg-transparent px-4 text-black placeholder:text-[15px] placeholder:text-stone-600 border-[#c0b6ab] font-primary border rounded-md' type="text" placeholder='Security Code' />
                </div>
                <div className='w-full flex justify-start h-[30px] items-center mt-10'>
                    <input required type="radio" checked className='h-[20px] w-[20px] bg-red-400' />
                    <span className='w-[80%] h-full items-center bg-transparent px-4 text-stone-600 flex font-primary'>	Same as shipping address</span>
                </div>
                <div className='w-full flex justify-start h-[30px] items-center'>
                    <input required type="radio"  className='h-[20px] w-[20px]' />
                    <span className='w-[80%] h-full items-center bg-transparent px-4 text-stone-600 flex font-primary'>	Use a different billing address</span>
                </div>
                <div className='w-full flex justify-between mt-4 '>
                    <Link href={'/checkout'} className='text-[#f4a620] tetx-[15px] no-underline w-[250px] flex justify-start items-center hover:underline'><IoIosArrowBack /> Back To CheckOut</Link>
                    <button className='w-[100px] h-[80px] bg-black text-[#faeddf] font-primary rounded-md cursor-pointer hover:bg-[#3e3e3e] transition-all duration-500'>Pay Now</button>
                </div>
            </div>
        </div>
        
    )
}



import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
}
function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color='inherit'  href='/checkout' >
      Information
    </Link>,
    <Typography  key="2" color='#f4a620' onClick={handleClick}>
      Payment
    </Typography>,
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



