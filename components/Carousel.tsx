"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const caro = [
  {
    id: 1,
    img_url: "https://beatnik-5.myshopify.com/cdn/shop/files/Award-winning-mens-sustainable-glasses-and-womens-eyewear-2.jpg?v=1617271934&width=2375",
    title: "REFRAME YOUR WORLD",
    des: "with sustainable eye wear",
    link: "",
  },

  {
    id: 2,
    img_url: "https://beatnik-5.myshopify.com/cdn/shop/files/BIRD-Sunglasses-Studio-079-QuickEdit_99f31fb0-3567-412d-8ebc-5e00fd4c05e4.jpg?v=1614290166&width=2400",
    title: "UNIQUE YOU UNIQUE FRAMES",
    des: " Timeless sunglasses for every occasion",
    link: "",
  },

  {
    id: 3,
    img_url: " https://beatnik-5.myshopify.com/cdn/shop/files/C82A0688_v2_Crop.jpg?v=1630053096&width=2400",
    title: "SHARE YOUR SUN",
    des: "From $75, with prescription lenses",
    link: "",
  },
]

function Carousel() {

  const [current,setCurrent] = useState(0)

  useEffect(()=>{
    const interval = setInterval(() => {//yhaa name kuch v de sakte haibut ye predifinded hai
      setCurrent(prev=>(prev === caro.length - 1 ? 0: prev + 1 ))//index0 = first slider, 1 = second slider, 2 = third slider. ab first slider pe, 0-1 = false, second slider pe 1-1 = false, third slider 2-1 = true
    },3000);//ab false hone pe +1 ho jaa raha and next slider me chala jaa raha haa smjh gye

    return()=> clearInterval(interval);//yaha pe call kar diya usko hmm
  }, [])

  return (
    <div className='xl:h-[calc(100vh-80px)] md:h-[calc(60vh-50px)] h-[calc(50vh-100px)] bg-red-200 overflow-hidden relative'>
        <div className=" w-max h-full flex transition-all ease-in-out duration-1000"
            style={{transform: `translateX(-${current * 100}vw)`}} >
           {caro.map((slide)=>(
              <div className="w-screen h-full flex flex-col gap-16 xl:flex-row" key={slide.id}>
                  <div className='relative h-full w-full flex'>
                    <img
                        src={slide.img_url}
                        alt=''
                        height={800}
                        width={800}
                      className='object-cover w-full h-full'
                    />
                    
                    <div className='absolute top-8 w-full items-center text-white flex flex-col gap-8'>
                      <div className='text-xl font-[500]'>{slide.title}</div>
                      <div className='text-5xl font-[700]'>{slide.des}</div>
                    <Button className='w-40'>Shop Now{slide.link}</Button>
                  </div>
                  </div>
              </div>

           ))} 
        </div>

        <div className="absolute  m-auto left-1/2 xl:bottom-4 flex gap-4">
        {caro.map((slide,index)=>(
          <div 
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
            ${current ===index ? "scale-150" : ""}`}//scale mtlb size. jab current 2 hoga and idex v 2 to scale 150 ok
            key={slide.id}
            onClick={()=>setCurrent(index)}
          >
            {current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
          </div>
        ))}
        </div>

    </div>
  )
}

export default Carousel