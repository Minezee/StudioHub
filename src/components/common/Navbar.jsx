import { logo_text } from "@/assets"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className='w-full flex justify-between items-center bg-orange-500 px-16 py-4 text-white'>
            <img src={logo_text} alt="" />
            <ul className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Studio</Link></li>
                <li><Link to="/">Rent</Link></li>
                <li><Link to="/">Event</Link></li>
                <li><Link to="/">Profile</Link></li>
            </ul>
            <NavLink to="/login" className='px-10 py-2 rounded-lg bg-[#FBC12E] font-semibold'>Login</NavLink>
        </header>
    )
}

export default Navbar