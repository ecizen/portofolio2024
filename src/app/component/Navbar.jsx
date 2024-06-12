import React from 'react'
import Image from 'next/image'
import Instagram from '../Image/instagram.svg'
import Whatsapp from '../Image/whatsapp.svg'
import LinkedIn from '../Image/linkedin.svg'

export default function Navbar() {
  const Item = ["Home", "About", "Skill", "Experience", "Work"]
  return (
    <nav className='fixed z-50 py-8 lg:w-full'>
      <div className='flex  justify-center'>
        <ul className="links flex gap-6 px-4 py-4 border border-gray-700 bg-gradient-to-r from-gray-900 from-90% to-slate-800 rounded-lg">
          {Item.map(item => (
            <a href={`#${item}`} key={item} className="text-sm text-white font-bold">
              {item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}
