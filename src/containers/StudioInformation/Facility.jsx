import { studio_facility } from "@/assets"
import PageWrapper from "@/components/layout/PageWrapper"

const Facility = () => {
    return (
        <div className='bg-card-bg px-[6.5rem] pt-10 pb-4 mt-7 rounded-[20px] text-orange-500 flex flex-col gap-6'>
            <h3 className='text-5xl font-bold'>Facility</h3>
            <div className='grid grid-cols-5 gap-5'>
                {[1, 2, 3, 4, 5].map(data => (
                    <div className="aspect-square">
                        <img src={studio_facility} alt="" className="h-full w-full object-cover rounded-2xl" />
                    </div>
                ))}
            </div>
            <p className="text-2xl text-center">show more</p>
        </div>
    )
}

export default Facility