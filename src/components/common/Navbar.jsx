import { logo_text } from "@/assets"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center bg-orange-500 px-16 py-4 text-white'>
            <img src={logo_text} alt="" />
            <div className='flex gap-10'>
                <div>Home</div>
                <div>Studio</div>
                <div>Rent</div>
                <div>Event</div>
                <div>Profile</div>
            </div>
            <NavLink to="/login" className='px-10 py-2 rounded-lg bg-[#FBC12E] font-semibold'>Login</NavLink>
        </div>
    )
}

export default Navbar