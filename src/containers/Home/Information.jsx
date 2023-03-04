import React from 'react'
import { lomba } from '@/assets'

const Information = () => {
    return (
        <section className='w-full bg-yellow-400 mt-20 grid grid-cols-3 gap-4 md:gap-10 place-items-center py-5 md:py-12 lg:py-9 rounded-lg lg:rounded-[20px] px-4 md:px-10'>
            {[1, 2, 3].map(data => (
                <div key={data + "event"} className='h-auto'>
                    <img src={lomba} alt="" className='w-full h-full' />
                </div>
            ))}
        </section>
    )
}

export default Information