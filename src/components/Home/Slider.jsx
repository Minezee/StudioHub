// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { event_banner } from "@/assets";
import styles from "@/styles/Slider.module.css"

const Slider = () => {
    let arr = ["1", "2", "3", "4", "5", "6"]
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
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-color": "rgba(251, 193, 46)",
                    "--swiper-pagination-bullet-inactive-color": "rgba(252, 216, 124)",
                    "--swiper-pagination-bullet-inactive-opacity": "0.75",
                }}
                className="mySwiper relative text-white"
            >
                <button id="prev-btn" className={`${styles.btn} left-8`} onClick={handlePrevClick}>
                    <BsArrowLeftShort className="m-2"/>
                </button>
                {/* Slide */}
                {arr.map(name => (
                    <SwiperSlide key={name}>
                        <img className="h-auto w-full z-10" src={event_banner} alt="" />
                    </SwiperSlide>
                ))}
                {/* Slide */}
                <button id="next-btn" className={`${styles.btn} right-8`} onClick={handleNextClick}>
                    <BsArrowRightShort className="m-2"/>
                </button>
            </Swiper>
        </div>
    )
}

export default Slider