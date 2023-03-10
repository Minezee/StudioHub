import { useContext } from "react"
import { OrderContext } from "@/context/OrderContext"
import { studio } from "@/assets";

const Review = () => {
    const { buyerData } = useContext(OrderContext);
    return (
        <div className='w-full flex gap-11 text-white'>
            <div className="w-4/6 flex flex-col gap-7">
                <div className="font-semibold">
                    <h3 className="text-h4 text-orange-400">Mohon Review Pesanan Anda</h3>
                    <p className="text-h6">Mohon periksa kembali pesanan Anda sebelum melanjutkan  pembayaran</p>
                </div>
                <div className="flex bg-card-bg font-semibold">
                    <img src={studio} alt="studio image" className="w-64 aspect-square rounded-[1.25rem]"/>
                    <div className="flex-1 flex flex-col bg-yellow-400 rounded-[1.25rem] px-6 py-3 text-dark">
                        <h4 className="text-h4">Room Deluxe</h4>
                        <p className="text-h6">Recording Room</p>
                        <div className="w-full h-1 bg-dark rounded-full"/>
                        <div className="flex flex-col gap-3 justify-center flex-1 font-bold">
                            <div className="flex gap-[4.75rem]">
                                Check-in
                                <span>Sun, 5 Mar 2023, 15:00</span>
                            </div>
                            <div className="flex gap-[4.75rem]">
                                Check-in
                                <span>Sun, 5 Mar 2023, 15:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-h5 font-semibold text-orange-400">Payment Method</h4>
                    <div className="mt-6 flex">
                        {/* Still not fix */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review