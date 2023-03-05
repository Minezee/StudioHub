import { logo } from "@/assets"
import { NavLink, Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import { useState, useEffect } from "react"

const navMenu = [
    {
        name: "Studio",
        direct: "/",
    },
    {
        name: "Event",
        direct: "/",
    },
    {
        name: "Profile",
        direct: "/",
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            {/* Dekstop */}
            <header className='w-full hidden justify-between items-center bg-orange-500 px-16 py-4 text-white md:flex'>
                <div className="flex text-white text-xl font-bold gap-6 items-center">
                    <img src={logo} alt="logo" className="h-14 w-auto" />
                    STUDIO HUB
                </div>
                <nav className='flex gap-10 text-xl'>
                    {navMenu.map(menu => (
                        <Link key={menu.name} to={menu.direct}>{menu.name}</Link>
                    ))}
                </nav>
                <NavLink to="/login" className='px-10 py-2 rounded-lg bg-[#FBC12E] font-semibold text-lg'>Login</NavLink>
            </header>

            {/* Mobile */}
            <header className='w-full flex justify-between md:hidden text-lg bg-orange-500 px-6 py-3 text-white'>
                <NavLink to="/" className="flex text-white font-bold gap-4 items-center">
                    <img src={logo} alt="logo" className="h-12 w-auto" />
                    STUDIO HUB
                </NavLink>
                <button onClick={() => setIsOpen(!isOpen)} className="rounded-md text-white text-3xl">
                    {isOpen ? <IoClose /> : <AiOutlineMenu />}
                </button>
            </header>
            <div className={`${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"} fixed flex py-16 flex-col items-center justify-between font-semibold text-white w-full bg-orange-500 h-full z-40 transition-all`}>
                <div className="flex flex-col h-[calc(100%-45px)]">
                    <nav className='flex flex-col items-center gap-24 text-4xl font-bold flex-grow'>
                        {navMenu.map((menu) => (
                            <NavLink key={menu.name} onClick={() => setIsOpen(false)} to={menu.direct}>{menu.name}</NavLink>
                        ))}
                    </nav>
                    <NavLink to={"/login"} className="bg-white px-6 py-3 font-bold rounded-lg text-orange-500 text-3xl">Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar