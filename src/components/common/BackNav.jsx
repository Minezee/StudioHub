import { IoIosArrowBack } from "react-icons/io"
import { NavLink } from "react-router-dom"
import { logo } from "@/assets/image"

const BackNav = () => {
    return (
        <div className="flex justify-between items-center mt-14 relative mb-20">
            <NavLink to={-1} className="flex text-h5 font-bold gap-2 items-center text-white">
                <IoIosArrowBack />
                BACK
            </NavLink>
            <NavLink to={'/'} className="flex text-h4 font-bold gap-2 items-center text-yellow-500">
                <img src={logo} alt="logo" className="w-7" />
                STUDIO HUB
            </NavLink>
        </div>
    )
}

export default BackNav