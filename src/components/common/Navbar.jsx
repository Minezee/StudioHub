import { logo } from "@/assets"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className='w-full flex justify-between items-center bg-orange-500 px-16 py-4 text-white'>
            <div className="flex text-white text-xl font-bold gap-6 items-center">
                <img src={logo} alt="logo" className="h-14 w-auto"/>
                STUDIO HUB
            </div>
            <ul className='flex gap-10 text-xl'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Studio</Link></li>
                <li><Link to="/">Rent</Link></li>
                <li><Link to="/">Event</Link></li>
                <li><Link to="/">Profile</Link></li>
            </ul>
            <NavLink to="/login" className='px-10 py-2 rounded-lg bg-[#FBC12E] font-semibold text-lg'>Login</NavLink>
        </header>
    )
}

export default Navbar