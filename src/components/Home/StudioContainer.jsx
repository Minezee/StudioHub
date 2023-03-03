import { display_studio } from '../../assets'
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, index) => (
                <IoMdStar key={index} className="text-yellow-500 w-6 h-6" />
            ))}
            {hasHalfStar && (
                <IoMdStarHalf half className="text-yellow-500 w-6 h-6" />
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <IoMdStar key={fullStars + index} className="text-gray-300 w-6 h-6" />
            ))}
        </div>
    );
};

const StudioContainer = ({ title, paragraph, studio }) => {
    return (
        <section>
            <h2 className="text-orange-500 text-5xl font-black mt-20">{title}</h2>
            <p className="text-2xl font-medium mt-1">{paragraph}</p>
            <div className='mt-9 flex gap-4 justify-between'>
                {studio.map(data => (
                    <div key={data} className='text-2xl flex flex-col gap-3'>
                        <img src={display_studio} alt="" className='h-[16.25rem] w-[18.5rem]' />
                        <h3>Corner Music Studio</h3>
                        <Rating rating={4} />
                        <p className='text-orange-500 font-medium'>Rp 50.000</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default StudioContainer