'use client'
import './background.css';
import { createContext, useRef } from 'react'
 
const Context = createContext()
import Planet03 from '../../Image/planet-03.png'
import Planet06 from '../../Image/planet-06.png'
import Planet08 from '../../Image/planet-08.png'
import Planet10 from '../../Image/planet-10.png'
import Image from 'next/image';
import HtmIcon from '../../Image/Html.svg'
import Css from '../../Image/Css.svg'
import Javascript from '../../Image/Javascript.svg'
import Tailwind from '../../Image/Tailwind Css.svg'
import Php from '../../Image/Php.svg'
import Angular from '../../Image/Angular.svg'
import Yii from '../../Image/Yii.svg'
import Laravel from '../../Image/Laravel.svg'
import ReactIcon from '../../Image/React.svg'
import { motion } from 'framer-motion';

const floatingAnimation = {
    hidden: { y: 0 },
    visible: {
      rotate: 360,
      y: [0, -20, 0],
       // Adjust the y values to change the movement
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }
    }
  };
  
  const spinningAnimation = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

export default function skill() {
  return (
    <div className='back w-screen  lg:px-8 px-0 py-12 relative'>
    <motion.div
        className='absolute left-10 lg:left-20'
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image src={Planet03} className='w-8 lg:w-16' />
      </motion.div>
      <motion.div
        className='absolute right-10 lg:right-20'
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image src={Planet06} className='w-8 lg:w-16' />
      </motion.div>
      <motion.div
        className='absolute bottom-10 left-10 lg:bottom-0 lg:left-20'
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image src={Planet08} className='w-8 lg:w-16' />
      </motion.div>
      <motion.div
        className='absolute bottom-10 right-10 lg:bottom-0 lg:right-20'
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image src={Planet10} className='w-8 lg:w-16' />
      </motion.div>
        <div>
        <h1 className='text-white text-center text-3xl delay-[300ms] duration-[800ms] taos:[transform:translate3d(0,-200px,0)_scale(0.6)] taos:opacity-0'>Skills <span className='font-bold text-[#CBACF9]'>Mana</span></h1>
        <div className='flex justify-center'>
        <div className='mt-12  items-center grid lg:grid-cols-5 grid-cols-3 gap-8'>
            <div>
                <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                    <Image src={HtmIcon} className='w-8 group-hover:scale-125 transition-all ease-in-out  absolute' />
                </div>  
            </div>    
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Css} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Javascript} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Tailwind} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Php} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Angular} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={ReactIcon} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Laravel} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
            <div className='w-16 h-16 border-2 border-white hover:bg-[#6E0FB8] rounded-md mx-auto flex items-center justify-center transition-all ease-in-out duration-200  group hover:translate-y-6'>
                <Image src={Yii} className='w-8 group-hover:scale-125 transition-all ease-in-out ' />
            </div>      
        </div>
        </div>
        </div>
    </div>
  )
}
