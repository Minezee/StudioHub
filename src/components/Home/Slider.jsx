// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Slider = () => {
    let arr = ["Budi", "Rudi", "Reza", "Faris", "Dede", "Aan"]
    const swiperRef = useRef(null);

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };

    return (
        <div>
            <Swiper
                ref={swiperRef}
                navigation={{
                    nextEl: "#next-btn",
                    prevEl: "#prev-btn"
                }}
                pagination
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                style={{
                    "--swiper-navigation-color": "black",
                    "--swiper-navigation-size": "20px",
                    "--swiper-navigation-height": "100%",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-color": "white",
                }}
                className="mySwiper bg-gray-400 h-[500px] relative"
            >
                <button id="prev-btn" className="absolute top-1/2 z-20" onClick={handlePrevClick}>
                    {"<"}
                </button>
                {arr.map(name => (
                    <SwiperSlide key={name}>
                        <div className="flex items-center justify-center h-full z-10">{name}</div>
                    </SwiperSlide>
                ))}
                <button id="next-btn" className="absolute top-1/2 right-0 z-20" onClick={handleNextClick}>
                    Next
                </button>
            </Swiper>
        </div>
    )
}

export default Slider