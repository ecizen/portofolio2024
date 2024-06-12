'use client'
import { createContext } from 'react'
 
const Context = createContext()
import React from 'react'
import Image from "next/image";
import SpotlightLeft from './Image/spotlight.svg'
import SpotlightRight from './Image/spotlight2.svg'
import Arrow from './Image/Arrow.Svg'
import { motion } from 'framer-motion'
import Navbar from './component/Navbar'
import Paralax from './Section/paralax/Paralax';

import About from './Section/about/About';
import Skill from './Section/skill/skill'
import Experience from './Section/experience/Experience'
import Work from './Section/work/Work';
import Footer from './component/Footer';


export default function Home() {
  return (
    <main className="">
     <section id='Home' className='h-screen bg-[#000319] relative px-4'>
        <div className='hidden lg:flex'>
            <Navbar />
        </div> 
        <Image src={SpotlightLeft} className='absolute left-0'></Image>
        <Image src={SpotlightRight} className='absolute right-0'></Image>
        <div className='flex flex-col justify-center items-center h-full'>
            <motion.div initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1, ease: "easeInOut" }}      >
                <p className='text-sm text-[#E4ECFF] font-light'>HARDIEK TATENDRA SIUUUU</p>
            </motion.div>
            <motion.p  initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, ease: "easeInOut" }}   className=' mt-6 text-3xl lg:text-5xl font-bold max-w-2xl text-center text-white'>Junior Web developer <span className='text-[#CBACF9]'>Mobile Developer</span></motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5, ease: "easeInOut" }}   className=' text-sm  text-center lg:text-md text-[#E4ECFF] mt-4'>Hi! I’m Hardiek Tatenda, a Junior programmer based Indonesia</motion.p>
            <motion.button initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1.2, ease: "easeInOut" }}  className='h-12 px-4 bg-gradient-to-r from-gray-800 to-slate-900 flex items-center rounded-lg gap-2 mt-6 ' >
                <p className='text-sm font-bold text-white'>download cv</p>
                <Image src={Arrow}></Image>
            </motion.button>
            <div className='hover:scale-125 transition-all ease-in-out duration-150 absolute text-5xl md:text-7xl lg:text-8xl text-[#ffffff09] bottom-[50px] whitespace-nowrap'>
                Writer Gamer Art
            </div>
        </div>
    </section>
    <section id='About'><Paralax type="portofolio"/></section>
    <section ><About/></section>
    <section id='Skill'><Skill/></section>
    <section id='Experience'><Experience/></section>
    <section id='Work'><Work/></section>
    <section><Footer/></section>

    </main>
    
  );
}
