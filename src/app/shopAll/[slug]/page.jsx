'use client'
import '../../globals.css'
import SmallBox from "../../../../components/fourth box in home page/smallBox"
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from "react-image-gallery";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';
import useStore from "../../../../zustand/store";

const myLoader = ({ src, width, quality }) => {
    return `https://greatjonesgoods.com/${src}?w=${width}&q=${quality || 75}`
  }

const SinglePost = ({params})=>{
  const add_to_cart = useStore(state=>state.add_to_cart)
  let cartItems = useStore(state=>state.cartItems)

  const [data,dataSet] = useState([])
  useEffect(() => {
      fetch(`https://65b1e88a9bfb12f6eafc5897.mockapi.io/platesShop/${params.slug}`,{next:{revalidation:1}})
      .then(res =>res.json())
      .then(tasks =>dataSet(tasks))
      
  }, [])
  const images = [
      {original: data.img1,thumbnail :data.img1},
      {original: data.img2,thumbnail :data.img2},
      {original: data.img3,thumbnail :data.img3},
      {original: data.img4,thumbnail :data.img4},
      { original: data.img5,thumbnail :data.img5},];

    function addToCart(d){
        const newItem = {
          id:d.id,
          category:d.category,
          titile:d.title,
          price:d.price,
          img:d.img1,
          number:'1',
        }
        console.log(newItem.img);
        if(newItem.img!=undefined){
          console.log('yes');
          let flag = 0
          let myLocal = localStorage.getItem('myProducts')
          let db = []
          if(myLocal!=null){
              let localStorageContent =  JSON.parse((localStorage.getItem('myProducts')))
              localStorageContent.map((val)=>{
                  db.push(val)
              })
              db.map((v)=>{
                if(v.id==newItem.id){
                  flag++
                }
              })
              if(flag==0){
                db.push(newItem)
              }
              localStorage.setItem('myProducts',JSON.stringify(db))
            
          }else{
            db.push(newItem)
            localStorage.setItem('myProducts',JSON.stringify(db))
          }
        }
    }
        

    return(
        <main className="w-full h-fit xl:h-[90vh] relative mt-40 flex flex-wrap justify-center  content-center items-start">
            <div className="w-[80%] lg:w-[60%] h-[40%] lg:h-[80%] flex items-start justify-center">
                <ImageGallery  showPlayButton={false} showBullets={true} showNav={false} showThumbnails={true} thumbnailPosition={'bottom'}  items={images} />
            </div>
            <div className="w-full p-10 lg:p-0 lg:w-[35%] h-full flex flex-wrap justify-start content-start mt-20">
                <div className="w-full flex justify-between">
                    <span className="text-[25px] text-black flex">{data.title}</span>
                    <span className="text-[30px] text-black flex">$ {data.price}</span>
                </div>
                <div className="w-full  my-4">
                    <HoverRating/>
                </div>
                <p className="w-full text-black text-[15px] lg:text-[20px] my-4 font-primary">A good Dutch oven lasts forever; a Great Jones Dutch oven is your best friend forever. Our 6.75-quart enameled cast-iron Dutchess moves gracefully from stove to oven to table centerpiece.</p>
                <SmallBox src={"cdn/shop/files/image_15_32ec73f8-c117-4ec3-8c79-f08221b04669_41x41@2x.png"} span1={'Fill your bag'} span2={'Free shipping on orders over $100.'}/>
                <SmallBox src={"cdn/shop/files/image_16_9ea039f6-0f45-4418-b5d3-589d2735c521_41x41@2x.png"} span1={'No questions asked.'} span2={'60-day free trial, with free returns.'}/>
                <button onClick={()=>{addToCart(data)}} className='w-full h-[40px] bg-[#0f5643] text-[#faeddf] my-4 font-primary text-[20px] text-center cursor-pointer transition-all duration-500 hover:bg-[#faeddf] hover:text-[#0f5643] rounded-md font-bold'>ADD TO CART</button>
            </div>
        </main>
    )
}
    
// }
export default SinglePost



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function HoverRating() {
    const [value, setValue] = React.useState(3.5);
    const [hover, setHover] = React.useState(-1);
  
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
  }






