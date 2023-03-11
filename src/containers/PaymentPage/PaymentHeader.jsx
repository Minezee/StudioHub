import { NavLink, useNavigate } from "react-router-dom"
import { logo } from "@/assets/image"
import { IoIosArrowBack } from "react-icons/io"

const PaymentHeader = ({ steps, activeStep, setActiveStep }) => {
    const navigate = useNavigate();
    
    function handleClick(){
        if(activeStep > 0 && activeStep < 3){
            setActiveStep(activeStep - 1)
        }else{
            navigate(-1)
        }
    }
    
    return (
        <div className="flex justify-between items-center mt-14 relative mb-7">
            <button onClick={handleClick} className="flex text-h5 font-bold gap-2 items-center text-white">
                <IoIosArrowBack />
                BACK
            </button>
            <div className="flex justify-center flex-1 items-center">
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
            <NavLink to={'/'} className="flex text-h4 font-bold gap-2 items-center text-yellow-500">
                <img src={logo} alt="logo" className="w-7" />
                STUDIO HUB
            </NavLink>
        </div>
    )
}

export default PaymentHeader