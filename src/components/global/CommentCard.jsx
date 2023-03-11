import React from 'react'
import DisplayStar from './DisplayStar'
import { studio, userx_pp } from '@/assets/image'
import { FaThumbsUp } from 'react-icons/fa'

const CommentCard = () => {
    return (
        <div className='flex flex-col gap-6 mt-7 bg-card-bg px-8 sm:px-14 py-3 text-white rounded-[1.25rem]'>
            <div className='flex justify-between items-end gap-4'>
                <div className='flex items-center gap-4'>
                    <img src={userx_pp} alt="" className='h-16 sm:h-24 aspect-square rounded-full' />
                    <div>
                        <h4 className='text-h6 sm:text-h4 font-bold'>Tukang Gulung Kabel</h4>
                        <DisplayStar rating={4} />
                    </div>
                </div>
                <p className='text-b1 sm:text-h5 font-semibold'>21 Feb 2023</p>
            </div>
            <p className='text-h6 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro unde amet quae inventore assumenda qui. Quis ratione neque vel alias facilis, itaque quo saepe sapiente est perspiciatis nobis nisi.</p>
            <div className='h-[5.25rem] flex gap-6'>
                {[1, 2, 3, 4].map(photo => (
                    <div key={photo+"ph"} className='w-[6rem] h-full rounded-lg'>
                        <img key={photo} src={studio} alt="" className='h-full w-full object-cover rounded-lg' />
                    </div>
                ))}
            </div>
            <div className='text-h6 sm:text-h5 font-bold sm:ml-14'>Apakah Review Ini Membantu? <button className="h-6 w-6"><FaThumbsUp /></button></div>
        </div>
    )
}

export default CommentCard