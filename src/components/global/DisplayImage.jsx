import { studio } from "@/assets/image"

const DisplayImage = () => {
    const dummy = [1, 2, 3, 4, 5, 6];
    return (
        <div className="mt-3 flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-3/4">
                <img src={studio} alt="" className="w-full h-full rounded-xl sm:rounded-[1.25rem]" />
            </div>
            <div className="grid grid-cols-3 sm:grid-row-3 sm:grid-cols-1 flex-1 gap-2 sm:gap-8">
                {dummy.map((img, index) => {
                    if (index === 2 && index + 1 < dummy.length) {
                        return (
                            <div key={index} className="relative w-full flex items-center justify-center">
                                <img src={studio} alt="" className="w-full rounded-xl sm:rounded-[1.25rem] filter blur-sm" />
                                <p className="absolute text-b2 sm:text-h5 font-semibold text-center">See All Photos</p>
                            </div>
                        )
                    } else if (index > 2) {
                        return null;
                    }
                    else {
                        return (
                            <img key={index} src={studio} alt="" className="w-full rounded-xl sm:rounded-[1.25rem]" />
                        )
                    }
                }
                )}
            </div>
        </div>

    )
}

export default DisplayImage