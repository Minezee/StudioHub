import { display_studio } from '@/assets'
import { DisplayStar } from '@/components/Global'

const StudioContainer = ({ title, paragraph, studio }) => {
    let studioData;
    if(window.innerWidth < 1000){
        studioData = studio.slice(2)
    } else {
        studioData = studio
    }

    return (
        <section className='text-white'>
            <h2 className="text-orange-500 text-3xl lgtext-5xl font-black mt-20">{title}</h2>
            <p className="text-2xl font-medium mt-1">{paragraph}</p>
            <div className='mt-9 grid lg:grid-cols-5 grid-cols-3 gap-4'>
                {studioData.map(data => (
                    <div key={data} className='text-2xl flex flex-col gap-3'>
                        <div className='h-3/5 rounded-xl'>
                            <img src={display_studio} alt="" className='h-full w-full rounded-xl' />
                        </div>
                        <h3>Corner Music Studio</h3>
                        <DisplayStar rating={4} />
                        <p className='text-orange-500 font-medium text-xl lg:text-2xl'>Rp 50.000</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StudioContainer