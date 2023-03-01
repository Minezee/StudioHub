import { logo_text } from "@/assets"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center bg-orange-500 px-16 py-6 text-white'>
            <img src={logo_text} alt="" />
            <div className='flex gap-10'>
                <div>Home</div>
                <div>Studio</div>
                <div>Rent</div>
                <div>Event</div>
                <div>Profile</div>
            </div>
            <NavLink to="/login" className='px-4 py-2 bg-orange-400'>Login</NavLink>
        </div>
    )
}

export default Navbar