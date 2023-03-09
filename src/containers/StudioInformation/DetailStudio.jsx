import { DisplayImage, DetailHeader } from "@/components/global"

const DetailStudio = ({orderSection}) => {
    const scrollToSection = (ref) => {
        const sectionElement = ref.current;
        if (sectionElement) {
            const scrollPosition = sectionElement.offsetTop - window.innerHeight / 2.2 + sectionElement.offsetHeight / 2;
            window.scroll({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-card-bg px-4 sm:px-14 py-6 rounded-[20px] text-white'>
            <DetailHeader name="Corner Music Studio" location="Lowokwaru, Malang" rate={4}/>
            <DisplayImage />
            <div className="mt-10 sm:mt-20 flex justify-between items-center font-bold">
                <p className="text-h4 sm:text-h3 text-orange-500">Rp 50.000</p>
                <button onClick={() => scrollToSection(orderSection)} className="bg-orange-500 px-[1.5rem] sm:px-[4.25rem] py-3 sm:py-4 rounded-lg sm:text-h5 text-h6">
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default DetailStudio