'use client'
import { createContext } from 'react'
 
const Context = createContext()
import React from 'react'

import Image from 'next/image'
import SpotlightLeft from '../Image/spotlight.svg'
import SpotlightRight from '../Image/spotlight2.svg'
import Arrow from '../Image/arrow.svg'
import { motion } from 'framer-motion'
import Navbar from '../component/Navbar'

export default function hero() {
  return (
    <section className='h-screen bg-[#000319] relative'>
        <div>
            <Navbar />
        </div>
        <Image src={SpotlightLeft} className='absolute'></Image>
        <Image src={SpotlightRight} className='absolute right-0'></Image>
        <div className='flex flex-col justify-center items-center h-full'>
            <motion.div initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1, ease: "easeInOut" }}      >
                <p className='text-sm text-[#E4ECFF] font-light'>HARDIEK TATENDRA SIUUUU</p>
            </motion.div>
            <motion.p  initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, ease: "easeInOut" }}   className=' mt-6 text-xl lg:text-5xl font-bold max-w-2xl text-center text-white'>Junior Web developer <span className='text-[#CBACF9]'>Mobile Developer</span></motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, ease: "easeInOut" }}   className='text-md text-[#E4ECFF] mt-4'>Hi! I’m Hardiek Tatenda, a Junior programmer based Indonesia</motion.p>
            <motion.button initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1.2, ease: "easeInOut" }}  className='h-12 px-4 bg-gradient-to-r from-gray-800 to-slate-900 flex items-center rounded-lg gap-2 mt-6 hover:scale-125 transition-all ease-in-out duration-150' >
                <p className='text-sm font-bold text-white '>Get in touch</p>
                <Image src={Arrow}></Image>
            </motion.button>
            <motion.div
                className='absolute text-7xl text-[#ffffff09] bottom-[50px] whitespace-nowrap overflow-hidden' // Added overflow-hidden
                animate={{ x: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >
                Writer Content Creator Influencer
            </motion.div>
        </div>
    </section>

  )
}
