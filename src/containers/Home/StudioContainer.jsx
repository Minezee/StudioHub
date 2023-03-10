import { display_studio } from '@/assets';
import { DisplayStar } from '@/components/global';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StudioContainer = ({ title, paragraph, studio }) => {
    return (
        <section className='text-white'>
            <h2 className="text-orange-500 text-3xl lgtext-5xl font-black mt-10 sm:mt-20">{title}</h2>
            <p className="text-2xl font-medium mt-1">{paragraph}</p>
            {/* large */}
            <Swiper
            slidesPerView={5}
            spaceBetween={20}
            slidesPerGroup={5}
            initialSlide={0}
            loop
            className='mySwiper hidden lg:block mt-9'>
                {studio.map(data => (
                    <SwiperSlide key={data} className='text-2xl flex flex-col gap-3 cursor-pointer'>
                        <div className='h-[15.25rem] rounded-xl'>
                            <img src={display_studio} alt="" className='h-full w-full rounded-xl' />
                        </div>
                        <h3>Corner Music Studio {data}</h3>
                        <DisplayStar rating={4} />
                        <p className='text-orange-500 font-medium text-xl lg:text-2xl'>Rp 50.000</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* small */}
            <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={3}
            initialSlide={0}
            loop
            className='mySwiper block lg:hidden mt-9'>
                {studio.map(data => (
                    <SwiperSlide key={data} className='text-2xl flex flex-col gap-3 cursor-pointer'>
                        <div className='h-[15.25rem] rounded-xl'>
                            <img src={display_studio} alt="" className='h-full w-full rounded-xl' />
                        </div>
                        <h3>Corner Music Studio {data}</h3>
                        <DisplayStar rating={4} />
                        <p className='text-orange-500 font-medium text-xl lg:text-2xl'>Rp 50.000</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default StudioContainer