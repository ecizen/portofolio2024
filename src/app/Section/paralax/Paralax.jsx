'use client'
import { createContext, useRef } from 'react'
 
const Context = createContext()

import { motion, useScroll, useTransform } from "framer-motion"
import "./parallax.css"


export default function Paralax({type}) {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })
  const yText=useTransform(scrollYProgress,[0,1], ["0%", "500%"])
  const yBg=useTransform(scrollYProgress,[0,1], ["0%", "100%"])
  return (
    <div
    ref={ref}
     className="h-screen overflow-hidden relative flex items-center justify-center" style={{
      background:type === "service" 
      ? "linear-gradient(180deg, #111132, #0c0c1d)" 
      : "linear-gradient(180deg, #111132, #505064)"
    }}>
        <motion.h1 style={{y: yText}} className="lg:text-[100px] text-[60px] text-white">{type==="service" ? "what we do": "what we did?"}</motion.h1>
        <motion.div className="montains"></motion.div>
        <motion.div className="planets" style={{y:yBg , backgroundImage: `url(${type==="service" ? "../../Image/planets.png" : "../../Image/sun.png" })`
      }}></motion.div>
        <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}
