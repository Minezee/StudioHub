import UserLayout from "@/components/layout/UserLayout"
import { BNI } from "@/assets/image"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopupPayment = () => {
    const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
    const [dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    //coutdown
    useEffect(() => {
        const countDownDate = new Date().getTime() + 86399300;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    //date formating
    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedTime = tomorrow.toLocaleTimeString('en-US', {
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
        });

        setDueDate(`Due on ${tomorrow.getDate()} ${formattedTime}`);
    }, []);

    return (
        <UserLayout>
            <div className="px-32">
                <div className="text-h5 font-bold flex flex-col gap-7 text-white">
                    <div className="flex justify-between">
                        Total Payment
                        <span className="text-orange-500">Rp 45.000</span>
                    </div>
                    <div className="flex justify-between">
                        Payment within
                        <div className="text-right">
                            <span className="text-orange-500">{countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds</span>
                            <p className="text-h6 font-normal">{dueDate}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7 text-h5 text-white">
                    <div className="mt-10 flex justify-between items-end font-bold">
                        <img src={BNI} alt="logo BNI" className="h-[6.75rem] w-auto" />
                        <div className="text-white">
                            Account Number:
                            <p className="text-orange-500 text-h2 leading-none mt-5">8806 123 1234 1234 1</p>
                        </div>
                        <button onClick={() => navigate('/payment-success')} className="text-primary-color">COPY</button>
                    </div>
                    <p className="text-primary-color">It will tak less than 10 minutes to verify making payment</p>
                    <p>To ensure Virtual Account number remains the same, please complate payment before creating another order with virtual account</p>
                    <p>Accepts transfers from Bank BNI only</p>
                </div>
            </div>
        </UserLayout>
    )
}

export default TopupPayment