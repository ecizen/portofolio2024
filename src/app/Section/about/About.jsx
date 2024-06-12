'use client'
import React from 'react'

import { createContext,} from 'react'
 
const Context = createContext()

import { motion,  } from "framer-motion"

export default function About() {
   

  return (
    <div className=' bg-[#111827] px-8 py-12'>
        <h1 className='text-white text-center text-3xl delay-[300ms] duration-[800ms] taos:[transform:translate3d(0,-200px,0)_scale(0.6)] taos:opacity-0'>Who is this <span className='font-bold text-[#CBACF9]'>person ?</span></h1>
        <div className='flex flex-col items-center mt-8'>
              <p className="text-[80px] text-center animate-bounce ">&#128640;</p>   
              <p className='text-sm mt-4 text-gray-300 max-w-xl text-center delay-[300ms] duration-[800ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0" data-taos-offset="300'>Let me introduce myself, my name is <span className='font-bold text-[#CBACF9]'>Hardiek Tatendra</span>, I am an <span className='font-bold text-[#CBACF9]'>Informatics</span> Engineering student at <span className='font-bold text-[#CBACF9]'>Telkom Pwt</span>. I come from Wonogiri, Central Java. My hobbies are playing games and programming. My favorite programming language is <span className='font-bold text-[#CBACF9]'>Javascript</span></p>
        </div>
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
    </div>
  )
}
