import { BsCheckLg } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import UserLayout from "@/components/layout/UserLayout"
import { useEffect } from "react"
import Cookies from "js-cookie"

const PaymentSuccess = () => { 
    const token = Cookies.get('auth_token') || sessionStorage.getItem('auth_token')

    useEffect(() => {
        fetch('https://daffarel.aenzt.tech/api/v1/validate', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(datas => console.log(datas))
            .catch(err => console.log(err))
    }, []);

    return (
        <UserLayout>
            <div className='relative flex-1 mt-20 h-full w-full flex flex-col sm:flex-row justify-center gap-10 sm:gap-[7.5rem] text-white'>
                <div className="flex justify-center items-center h-[18.75rem] aspect-square rounded-full bg-orange-500 border-primary-color border-[3rem] text-white">
                    <BsCheckLg className="w-2/3 h-auto" />
                </div>
                <div className="text-h4 font-bold text-center sm:text-start">
                    <h2 className="text-h2">Payment Success</h2>
                    <p className="font-normal">Kamu baru aja bayar transaksimu pakai ****. Kerenn!</p>
                    <div className="w-full sm:w-4/5 h-2 bg-orange-500 my-7 rounded-full" />
                    <h3>Total Payment</h3>
                    <span className="text-h1 text-orange-500">Rp 45.000</span>
                </div>
                <NavLink to={'/history'} className="absolute bottom-14 right-0 mt-24 text-h4 font-bold flex items-center">
                    Check Transaction
                    <IoIosArrowForward />
                </NavLink>
            </div>
        </UserLayout>
    )
}

export default PaymentSuccess