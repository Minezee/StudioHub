import React from 'react'
import { lomba } from '@/assets'

const Information = () => {
    return (
        <section className='w-full bg-yellow-400 mt-20 flex justify-evenly py-9 rounded-[20px]'>
            <div className='h-[22rem] w-[24.25rem]'>
                <img src={lomba} alt="" className='w-full h-full'/>
            </div>
            <div className='h-[22rem] w-[24.25rem]'>
                <img src={lomba} alt="" className='w-full h-full'/>
            </div>
            <div className='h-[22rem] w-[24.25rem]'>
                <img src={lomba} alt="" className='w-full h-full'/>
            </div>    
        </section>
    )
}

export default Information