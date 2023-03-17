import UserLayout from "@/components/layout/UserLayout"
import { Listbox } from "@headlessui/react"
import { useState } from "react"
import { paymentMethod } from "@/constants/paymentMethod"
import { SlArrowDown } from "react-icons/sl"
import styles from "@/styles/Styles.module.css"
import { dana } from "@/assets/image"
import { useNavigate } from "react-router-dom"

const PaymentMethod = () => {
    const [payMethod, setPayMethod] = useState(paymentMethod[0]);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate("/topup-confirmation");
    }

    return (
        <UserLayout>
            <div className="flex items-end text-white gap-28 mt-10">
                <form onSubmit={handleSubmit} className="w-2/3">
                    <h2 className="text-h4 font-bold">PAYMENT METHOD</h2>
                    <p className="mt-12">Please select a payment method</p>
                    <Listbox value={payMethod} onChange={setPayMethod}>
                        <div className='w-2/5 relative font-bold mt-6'>
                            <Listbox.Button className="bg-orange-500 text-dark flex justify-between items-center px-5 py-4 w-full rounded-xl text-h5 mt-3 hover:bg-orange-400">
                                {payMethod.name}
                                <SlArrowDown className='w-4' />
                            </Listbox.Button>
                            <Listbox.Options className="bg-orange-500 text-dark rounded-2xl absolute top-[4.25rem] z-20 w-full">
                                {paymentMethod.map((data) => (
                                    <Listbox.Option
                                        key={data.name}
                                        value={data}
                                        disabled={data.unavailable}
                                        className="bg-orange-500 text-dark px-5 py-4 w-full rounded-xl text-h5 cursor-pointer hover:bg-orange-400"
                                    >
                                        {data.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                    <p className="mt-12 text-h5">You'll have a chance to review your order before it's placed.</p>
                    <div className="w-full flex justify-end">
                        <button className={`mt-6 ${styles.orderBtn}`}>Continue</button>
                    </div>
                </form>
                <div className="flex-1">
                    <h2 className="text-h5">PAYMENT METHOD</h2>
                    <div className="bg-primary-color font-bold text-dark px-6 py-7 flex flex-col gap-3">
                        <p>We accept the following secure payment methods:</p>
                        <div className="grid grid-cols-3 gap-3">
                            <img src={dana} alt="dana" />
                            <img src={dana} alt="dana" />
                            <img src={dana} alt="dana" />
                        </div>
                        <p>When you submit your payment information your data is protected by Secure Socket Layer (SSL) technology certified by a digital certificate.</p>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}

export default PaymentMethod