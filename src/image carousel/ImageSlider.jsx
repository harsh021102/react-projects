import React, { useEffect, useState } from 'react'
import {bridge,leaf,building, car,beach} from '../utils/images'
import {easeInOut, motion} from 'framer-motion'
import IconArrowLeft from '../icons/IconArrowLeft'
import IconArrowRight from '../icons/IconArrowRight'
const images = [
    leaf,building,bridge,car,beach
]
const variant = {
    hiddenRight: {
        opacity: 0,
        x: 200,
    },
    hiddenLeft: {
        opacity: 0,
        x: -200,
    },
    visible:{
        opacity:1,
        x:0,
        transition: easeInOut,
        delay: 2,
    }
}
const buttonVariant = {
    hidden: {
        opacity: 0.5
    },
    hover:{
        opacity:1,
        scale: 1.1,
        transition: easeInOut,
    }
}
const ImageSlider = () => {
    const [current,setCurrent] = useState(0);
    const [direction,setDirection] = useState("hiddenLeft");
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
        }, 6000);
        
        return () => {
            clearInterval(interval);
        };
      }, []);

    const next = () => {
        setDirection("hiddenLeft")
        setCurrent(current===images.length-1?0:current+1)
    }
    const prev = () => {
        setDirection("hiddenRight")
        setCurrent(current===0?images.length-1:current-1)
    }
    return (
        <div className='w-11/12 md:w-1/2 h-[30rem] flex gap-4'>
            <div className='flex-1 flex justify-center items-center '>
                <motion.button className='p-2 absolute z-10 rounded-md border-2' onClick={prev}
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                ><IconArrowLeft className="text-3xl text-white"/></motion.button>
            </div>
            <div  className='w-10/12 rounded-xl aspect-auto shadow-sm'>
                {
                    images.map(
                        (image,index)=>
                            index===current&&(
                            <motion.img key={index} src={image} alt="background" className='bg-contain h-full w-full bg-no-repeat rounded-md'
                            variants={variant}
                            initial={`${direction}`}
                            animate='visible'
                            />)
                        )
                }
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <motion.button className='border-2 p-2 z-10 rounded-md absolute' onClick={next}
                variants={buttonVariant}
                initial="hidden"
                whileHover="hover"
                ><IconArrowRight className="text-3xl text-white"/></motion.button>
            </div>
        </div>
  )
}

export default ImageSlider