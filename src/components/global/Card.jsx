import { display_studio } from "@/assets"
import DisplayStar from "./DisplayStar"
import { HiLocationMarker } from "react-icons/hi"
import { MdReviews } from "react-icons/md"

const Card = () => {
    return (
        <div className="bg-card-bg flex h-32 sm:h-[12.5rem] justify-between text-white">
            <div className="flex items-center gap-5">
                <div className="h-full w-auto">
                    <img src={display_studio} alt="" className="w-auto h-full" />
                </div>
                <div className="flex flex-col gap-2 font-medium">
                    <h3 className="text-lg sm:text-2xl leading-3">Corner Music Studio</h3>
                    <DisplayStar rating={4} />
                    <div className="flex items-center gap-2 text-xs sm:text-base">
                        <HiLocationMarker className="h-4 sm:h-5 w-auto" />
                        Lowokwaru, Malang
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-base">
                        <MdReviews className="h-4 sm:h-5 w-auto" />
                        {"Ratings 4,2 (872)"}
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="h-full w-1 bg-orange-500" />
                <div className="flex flex-col justify-end items-start px-5 my-4">
                    <s className="text-xs sm:text-xl font-medium">Rp 70.000</s>
                    <p className="font-bold text-lg sm:text-[2rem] text-orange-500">Rp 50.000</p>
                </div>
            </div>
        </div>
    )
}

export default Card