import React from 'react'
import Image from 'next/image'
import LogoTelkom from '../../Image/Logo1.png'
import LogoDigi from '../../Image/logo2.png'
import Sertif from '../../Image/aws.jpg'
import Sertif2 from '../../Image/sertif2.jpeg'
import Sertif3 from '../../Image/HARDIEK TATENDRA_page-0001.jpg'
import Sertif4 from '../../Image/IMG_20231002_0002_page-0001.jpg'

export default function Experience() {
  return (
    <div className=' bg-[#111827] py-12 lg:px-8 px-4'>
       <div className='flex flex-col items-center'>
         <div className='w-24 rounded-full px-2 py-2 bg-[#374151] flex justify-center'>
            <p className='text-white text-xs font-medium '>Experience</p>
         </div>
            <p className='text-white text-sm mt-4'>Here is a quick summary of my most recent experiences:</p>
            <div className='mt-6 flex flex-col gap-6'>
                <div className=' bg-[#1F2937] px-4 py-4 flex lg:gap-12 gap-8 shadow-lg '>
                  <div className='flex gap-4 w-20'>
                     <Image src={LogoTelkom} className='w-12 h-12 '></Image>
                  </div>
                  <div>
                    <p className=' text-sm lg:text-md font-bold text-white'>Student</p>
                    <p className='mt-4 text-white max-w-xs text-xs lg:text-sm'>I entered high school in 2020 during the Covid era. I entered SMK Telkom Purwokerto. SMK Telkom is a school under the auspices of the Telkom group which operates in the IT sector. So I registered with the Software Engineer major to learn how to develop a website or application.</p>
                  </div>
                  <div>
                    <p className='text-xs lg:text-sm text-white'>July 2020 - Mei 2024</p>
                  </div>
                </div>
                <div className=' bg-[#1F2937] px-4 py-4 flex lg:gap-12 gap-8 shadow-lg '>
                  <div className='flex gap-4 w-20'>
                     <Image src={LogoDigi} className='w-20 h-12 '></Image>
                  </div>
                  <div>
                    <p className=' text-sm lg:text-md font-bold text-white'>Frontend Developer</p>
                    <p className='mt-4 text-white max-w-xs text-xs lg:text-sm'>PT Diginet media is a company operating in the IT sector, the Diginet office is located in Sleman, Yogyakarta. I got an internship opportunity in the web department. this time I got the role as a frontend developer. Making the website comfortable so that users can get the experience is one of the goals of a frontend developer</p>
                  </div>
                  <div>
                    <p className='text-xs lg:text-sm text-white'>April 2023 - July 2023</p>
                  </div>
                </div>
                <div className=' bg-[#1F2937] px-4 py-4 flex lg:gap-12 gap-8 shadow-lg '>
                  <div className='flex gap-4 w-20'>
                     <Image src={LogoDigi} className='w-20 h-12 '></Image>
                  </div>
                  <div>
                    <p className=' text-sm lg:text-md font-bold text-white'>Full Stack Developer</p>
                    <p className='mt-4 text-white max-w-xs text-xs lg:text-sm'>PT Diginet media is a company operating in the IT sector, the Diginet office is located in Sleman, Yogyakarta. I got an internship opportunity in the web department. this time I got the role as a frontend developer. Making the website comfortable so that users can get the experience is one of the goals of a frontend developer</p>
                  </div>
                  <div>
                    <p className='text-xs lg:text-sm text-white'>July 2023 - Sept 2023</p>
                  </div>
                </div>
                <div className=' bg-[#1F2937] px-4 py-4 lg:flex  grid grid-cols-2 lg:gap-12 gap-4 shadow-lg '>
                  <Image src={Sertif} className= 'w-48 '/>
                  <Image src={Sertif2} className='w-48 '/>
                  <Image src={Sertif3} className='w-48 '/>
                </div>
                <div className=' bg-[#1F2937] px-4 py-4 flex justify-center shadow-lg '>
                  <Image src={Sertif4} className='w-72'/>        
                </div>
            </div>
       </div>
    </div>
  )
}
