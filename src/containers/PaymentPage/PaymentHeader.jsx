import { NavLink } from "react-router-dom"
import { logo } from "@/assets"

const PaymentHeader = ({ steps, activeStep }) => {
    return (
        <div className="flex gap-[4.75rem] items-center mt-14 relative mb-7">
            <NavLink to={'/'} className="flex text-h4 font-bold gap-2 items-center text-yellow-500">
                <img src={logo} alt="logo" className="w-7" />
                STUDIO HUB
            </NavLink>
            <div className="flex flex-1 items-center">
                {steps.map((data, index) => {
                    if (index === 3) {
                        return (
                            <div key={data.title} className={`${activeStep > index ? "text-yellow-500" : "text-white"} flex flex-col items-center`}>
                                <div className={`${activeStep > index ? "bg-yellow-500" : "bg-white"} w-7 h-7 rounded-full`} />
                                <p className="absolute top-10">{data.title}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={data.title} className="flex w-1/6 items-center">
                                <div className={`${activeStep > index ? "text-yellow-500" : "text-white"} flex flex-col items-center`}>
                                    <div className={`${activeStep > index ? "bg-yellow-500" : "bg-white"} w-7 h-7 rounded-full`} />
                                    <p className="absolute top-10">{data.title}</p>
                                </div>
                                <div className={`${activeStep > index ? "bg-yellow-500" : "bg-white"} w-full h-1`} />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default PaymentHeader