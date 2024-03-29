import { lomba } from '@/assets/image'
import { NavLink } from 'react-router-dom'

const Information = () => {
    return (
        <section className='w-full bg-transparent sm:bg-yellow-400 mt-10 sm:mt-20 grid grid-cols-3 gap-4 md:gap-10 place-items-center p-0 sm:py-5 md:py-12 lg:py-9 rounded-lg lg:rounded-[20px] px-0 sm:px-4 md:px-10'>
            {[1, 2, 3].map(data => (
                <NavLink to={`/event/detail/Musik Hebat 2022`} key={data + "event"} className='h-auto'>
                    <img src={lomba} alt="" className='w-full h-full' />
                </NavLink>
            ))}
        </section>
    )
}

export default Information