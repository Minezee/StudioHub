import { display_studio } from "@/assets"
import DisplayStar from "../global/DisplayStar"
import { HiLocationMarker } from "react-icons/hi"
import { MdReviews } from "react-icons/md"

const Card = () => {
    return (
        <div className="bg-card-bg flex justify-between text-white">
            <div className="flex items-center gap-5">
                <div className="w-[12.5rem] h-[12.5rem]">
                    <img src={display_studio} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 font-medium">
                    <h3 className="text-2xl">Corner Music Studio</h3>
                    <DisplayStar rating={4} />
                    <div className="flex items-center gap-2">
                        <HiLocationMarker className="h-5 w-auto" />
                        Lowokwaru, Malang
                    </div>
                    <div className="flex items-center gap-2">
                        <MdReviews className="h-5 w-auto" />
                        {"Ratings 4,2 (872)"}
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="h-full w-1 bg-orange-500" />
                <div className="flex flex-col justify-end items-start px-5 my-4">
                    <s className="text-xl font-medium">Rp 70.000</s>
                    <p className="font-bold text-[2rem] text-orange-500">Rp 50.000</p>
                </div>
            </div>
        </div>
    )
}

export default Card