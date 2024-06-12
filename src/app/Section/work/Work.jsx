import React from 'react'
import Image from 'next/image'
import Work1 from '../../Image/web1.jpeg'
import Work2 from '../../Image/web2.jpeg'
import Work3 from '../../Image/web3.jpeg'
import Work4 from '../../Image/web4.jpeg'
import Explore from '../../Image/explore.svg'
import { useRouter } from 'next/navigation'

export default function Work() {
    const route = useRouter()

    const goProject = ()=> {
      route.push('/Coming')
    }
    
  return (
    <div className=' bg-black px-8 py-12'>
      <div className='flex flex-col items-center'>
         <div className='w-24 rounded-full px-2 py-2 bg-[#374151] flex justify-center'>
            <p className='text-white text-xs font-medium'>Work</p>
         </div>
            <p className='text-white text-sm mt-4'>Some of the noteworthy projects I have built:</p>
         </div>
         <div className='mt-6 flex-col flex items-center gap-12'>
            <div className='flex lg:flex-row  flex-col'>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#374151] lg:rounded-s-lg rounded-t-lg lg:rounded-tr-none  flex items-center'>
                    <Image src={Work1} className='w-[350px]'/>
                </div>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#1F2937] lg:rounded-e-lg sm:rounded-b-lg  lg:rounded-bl-none'>
                    <p className='text-sm font-bold text-white'>Artfest</p>
                    <p className='text-white text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='mt-4'>
                        <div className=' flex flex-wrap gap-2'>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Html</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Javascript</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Tailwind</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>React</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Next Js</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Firebase</p>
                        </div>
                    </div>
                    <button className='mt-4' onClick={goProject}>
                        <Image src={Explore}/>    
                    </button>         
                </div>
            </div>
            <div className='flex lg:flex-row  flex-col'>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#374151] lg:rounded-s-lg rounded-t-lg lg:rounded-tr-none items-center'>
                    <Image src={Work2} className='w-[350px]'/>
                </div>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#1F2937] lg:rounded-e-lg rounded-b-lg lg:rounded-bl-none'>
                    <p className='text-sm font-bold text-white'>Company profile</p>
                    <p className='text-white text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='mt-4'>
                        <div className=' flex flex-wrap gap-2'>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Html</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Php</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Yii</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Css</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Mysql</p>
                        </div>
                    </div>
                    <button className='mt-4' onClick={goProject}>
                        <Image src={Explore}/>    
                    </button>         
                </div>
            </div>
            <div className='flex lg:flex-row  flex-col'>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#374151] lg:rounded-s-lg rounded-t-lg lg:rounded-tr-none  flex items-center justify-center'>
                    <Image src={Work3} className='w-[150px]'/>
                </div>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#1F2937] lg:rounded-e-lg rounded-b-lg lg:rounded-bl-none'>
                    <p className='text-sm font-bold text-white'>HealthyU</p>
                    <p className='text-white text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='mt-4'>
                        <div className=' flex flex-wrap gap-2'>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Javascript</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>React Native</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Figma</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Hook</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Postgres</p>
                        </div>
                    </div>
                    <button className='mt-4' onClick={goProject}>
                        <Image src={Explore}/>    
                    </button>         
                </div>
            </div>
            <div className='flex lg:flex-row  flex-col '>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#374151] lg:rounded-s-lg rounded-t-lg lg:rounded-tr-none  flex items-center justify-center'>
                    <Image src={Work4} className='w-[150px]'/>
                </div>
                <div className=' lg:w-96 h-86 px-12 py-8 bg-[#1F2937] lg:rounded-e-lg rounded-b-lg lg:rounded-bl-none'>
                    <p className='text-sm font-bold text-white'>Next Gen</p>
                    <p className='text-white text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className='mt-4'>
                        <div className=' flex flex-wrap gap-2'>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Html</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Javascript</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Tailwind</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>React</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Next Js</p>
                             <p className='text-white text-xs px-2 py-1 rounded-full bg-[#374151]'>Firebase</p>
                        </div>
                    </div>
                    <button className='mt-4 ' onClick={goProject}>
                        <Image src={Explore}/>    
                    </button>         
                </div>
            </div>
            <div>
                <button className='px-4 py-2 rounded-md bg-slate-600'>See all</button>
            </div>
         </div>
    </div>
  )
}
