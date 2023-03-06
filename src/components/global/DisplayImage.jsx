import { DisplayStar } from "@/components/global"
import { studio } from "@/assets"

const DisplayImage = () => {
    const dummy = [1, 2, 3, 4, 5, 6];
    return (
        <div className="mt-3 flex gap-5">
            <img src={studio} alt="" className="w-3/4 rounded-[20px]" />
            <div className="grid grid-row-3 grid-cols-1 flex-1 gap-8">
                {dummy.map((img, index) => {
                    if (index === 2 && index + 1 < dummy.length) {
                        return (
                            <div className="relative w-full flex items-center justify-center">
                                <img src={studio} alt="" className="w-full rounded-[20px] filter blur-sm" />
                                <p className="absolute text-2xl font-semibold">See All Photos</p>
                            </div>
                        )
                    } else if (index > 2) {
                        return null;
                    }
                    else {
                        return (
                            <img src={studio} alt="" className="w-full rounded-[20px]" />
                        )
                    }
                }
                )}
            </div>
        </div>

    )
}

export default DisplayImage