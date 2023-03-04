import { display_studio } from '@/assets'
import { DisplayStar } from '@/components/Global'

const StudioContainer = ({ title, paragraph, studio }) => {
    return (
        <section className='text-white'>
            <h2 className="text-orange-500 text-5xl font-black mt-20">{title}</h2>
            <p className="text-2xl font-medium mt-1">{paragraph}</p>
            <div className='mt-9 flex gap-4 justify-between'>
                {studio.map(data => (
                    <div key={data} className='text-2xl flex flex-col gap-3'>
                        <div className='h-[16.25rem] w-[18.5rem] rounded-xl'>
                            <img src={display_studio} alt="" className='h-full w-full rounded-xl' />
                        </div>
                        <h3>Corner Music Studio</h3>
                        <DisplayStar rating={4} />
                        <p className='text-orange-500 font-medium'>Rp 50.000</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StudioContainer