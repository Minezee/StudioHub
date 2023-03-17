import DisplayStar from "./DisplayStar"
import { HiLocationMarker } from "react-icons/hi"
import { MdReviews } from "react-icons/md"
import { Link } from "react-router-dom"

const Card = ({data}) => {
    return (
        <Link to={`detail/${data.name.toLowerCase()}`} className="bg-card-bg flex h-32 sm:h-[12.5rem] justify-between text-white border-[1px] border-orange-500 hover:opacity-80">
            <div className="flex items-center gap-5">
                <div className="h-full aspect-square">
                    <img src={data.img} alt={data.name} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 font-medium">
                    <h3 className="text-lg sm:text-2xl leading-3">{data.name}</h3>
                    <DisplayStar rating={4.2} />
                    <div className="flex items-center gap-2 text-xs sm:text-base">
                        <HiLocationMarker className="h-4 sm:h-5 w-auto" />
                        {data.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-base">
                        <MdReviews className="h-4 sm:h-5 w-auto" />
                        {`Ratings ${data.rating.star} (${data.rating.resp})`}
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="h-full w-1 bg-orange-500" />
                <div className="flex flex-col justify-end items-start pl-5 pr-4 sm:pr-10 my-4">
                    <div className="flex flex-col justify-end items-start">
                        {data.realPrice ? 
                        ( <s className="text-xs sm:text-xl font-medium">Rp {data.realPrice}</s>)
                        :
                        ""}
                        <p className="font-bold text-base sm:text-[2rem] text-orange-500">{data.price ? "Rp " + data.price.toLocaleString("id-ID") : "Free"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card