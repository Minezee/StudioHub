import { studio } from "@/assets"

const OrderContainer = () => {
    return (
        <div className='flex gap-4'>
            <img src={studio} alt="" className="w-[420px] rounded-[20px] hidden xl:block" />
            <div className="bg-yellow-400 rounded-[20px] px-6 py-6 flex-1 text-dark">
                <h3 className="text-h3 sm:text-h2 font-bold">Room Deluxe</h3>
                <p className="text-h6 sm:text-h5 font-semibold">Recording Room</p>
                <div className="mt-3 h-2 w-full bg-dark rounded" />
                <div className="grid grid-cols-3 sm:grid-cols-5 text-white mt-7 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(data => (
                        <div key={data+"oc"} className="bg-dark py-2 rounded font-bold grid place-content-center">10:00 - 11:00</div>
                    ))}
                </div>
                <button className="bg-orange-500 text-dark text-h5 font-bold mt-10 float-right px-8 sm:px-16 py-3 sm:py-4 rounded-lg">Order Now</button>
            </div>
        </div>
    )
}

export default OrderContainer