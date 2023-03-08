import { DisplayStar, DisplayImage } from "@/components/global"
import { useRef } from "react"

const Detail = () => {
    const orderSection = useRef(null);

    const scrollToSection = (ref) => {
        const sectionElement = ref.current;
        if (sectionElement) {
            const scrollPosition = sectionElement.offsetTop - window.innerHeight / 2 + sectionElement.offsetHeight / 2;
            window.scroll({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-card-bg px-14 py-6 rounded-[20px] text-white'>
            <div className="flex flex-col sm:flex-row items-start justify-between">
                <div>
                    <h2 className="text-orange-500 text-h3 sm:text-h2 font-semibold">Corner Music Studio</h2>
                    <p className="text-2xl font-semibold">Lowokwaru, Malang</p>
                </div>
                <DisplayStar rating={4} lg />
            </div>
            <DisplayImage />
            <div className="mt-20 flex justify-between items-center font-bold">
                <p className="text-h4 sm:text-h3 text-orange-500">Rp 50.000</p>
                <button onClick={() => scrollToSection(orderSection)} className="bg-orange-500 px-[1.5rem] sm:px-[4.25rem] py-3 sm:py-4 rounded-lg sm:text-h5 text-h6">
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Detail