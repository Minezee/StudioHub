import { BsCheckLg } from "react-icons/bs"
import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"

const Confirm = () => {
    sessionStorage.removeItem('isPayment')
    return (
        <div className='relative flex-1 h-full w-full flex items-center justify-center gap-[7.5rem] text-white'>
            <div className="flex justify-center items-center h-[18.75rem] aspect-square rounded-full bg-orange-500 border-yellow-400 border-[3rem] text-white">
                <BsCheckLg className="w-2/3 h-auto" />
            </div>
            <div className="text-h4 font-bold">
                <h2 className="text-h2">Payment Success</h2>
                <p className="font-normal">Kamu baru aja bayar transaksimu pakai ****. Kerenn!</p>
                <div className="w-4/5 h-2 bg-orange-500 my-7 rounded-full" />
                <h3>Total Payment</h3>
                <span className="text-h1 text-orange-500">Rp 68.434</span>
            </div>
            <NavLink to={'/history'} className="absolute bottom-14 right-0 mt-24 text-h4 font-bold flex items-center">
                Check Transaction
                <IoIosArrowForward />
            </NavLink>
        </div>

    )
}

export default Confirm