import { logo } from "@/assets/image"
import { NavLink, Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { AppContext } from "@/context/AppContext"
import { navMenu } from "@/constants/navMenu"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userData } = useContext(AppContext);
    const navigate = useNavigate();
    const token = Cookies.get('auth_token') || sessionStorage.getItem('auth_token');

    // prevent user scrolling when open navigation on mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    function handleLogout() {
        Cookies.remove("auth_token");
        sessionStorage.removeItem("auth_token");
        sessionStorage.removeItem("isPayment");
        localStorage.removeItem("userData")
        navigate('/login')
    }

    return (
        <>
            {/* Dekstop */}
            <header className='w-full hidden justify-between items-center bg-orange-500 px-16 py-4 text-dark sm:flex'>
                <NavLink title="Back to home" to={'/'} className="flex text-xl font-bold gap-6 items-center">
                    <img src={logo} alt="logo" className="h-14 w-auto" />
                    STUDIO HUB
                </NavLink>
                <nav className='flex gap-10 text-xl'>
                    {navMenu.map(menu => (
                        <Link key={menu.name} to={menu.direct}>{menu.name}</Link>
                    ))}
                </nav>
                {token ?
                    <div className="relative group">
                        <div className="flex items-center gap-2 text-h6 font-bold">
                            Welcome, {userData.username}
                            <img src={userData.photo} alt="photo profile" className="h-11 w-11 rounded-full object-cover"/>
                        </div>
                        <div className="absolute group-hover:block top-10 z-50 w-full hidden pt-7 py-5">
                            <div className="bg-yellow-500 flex flex-col items-center font-bold justify-center text-center rounded-lg">
                                <NavLink to="/profile" className="rounded w-full py-2 hover:bg-yellow-600">Profile</NavLink>
                                <NavLink to="/history" className="rounded w-full py-2 hover:bg-yellow-600">History</NavLink>
                                <button onClick={handleLogout} className="rounded w-full py-2 hover:bg-yellow-600">Logout</button>
                            </div>
                        </div>
                    </div>
                    :
                    <NavLink to="/login" className='px-10 py-2 rounded-lg bg-[#FBC12E] font-semibold text-lg'>Login</NavLink>
                }
            </header>

            {/* Mobile */}
            <header className={`w-full flex justify-between sm:hidden text-lg ${isOpen ? "bg-dark" : "bg-orange-500"} px-6 py-3 text-white transition-all`}>
                <NavLink to="/" className="flex text-white font-bold gap-4 items-center">
                    <img src={logo} alt="logo" className="h-12" />
                    STUDIO HUB
                </NavLink>
                <button onClick={() => setIsOpen(!isOpen)} className="rounded-md text-white text-3xl">
                    {isOpen ? <IoClose /> : <AiOutlineMenu />}
                </button>
            </header>
            <div className={`${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"} fixed flex py-16 flex-col items-center justify-between font-semibold text-light-txt w-full bg-dark h-full z-40 transition-all`}>
                <div className="flex flex-col h-[calc(100%-45px)]">
                    <nav className='flex flex-col items-center gap-10 text-4xl font-bold flex-grow'>
                        {navMenu.map((menu) => (
                            <NavLink key={menu.name} onClick={() => setIsOpen(false)} to={menu.direct}>{menu.name}</NavLink>
                        ))}
                        {userData.id ?
                            <>
                                <NavLink onClick={() => setIsOpen(false)} to={'/profile'}>Profile</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to={'/'}>History</NavLink>
                            </>
                            :
                            null}
                    </nav>
                    {userData.id ?
                        <button onClick={handleLogout} className="bg-primary-color px-6 py-3 font-bold rounded-lg text-dark text-3xl">Logout</button>
                        :
                        <NavLink to={"/login"} className="bg-primary-color px-6 py-3 font-bold rounded-lg text-dark text-3xl">Login</NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar