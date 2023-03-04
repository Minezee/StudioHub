import { logo_footer } from "@/assets"
import { FiInstagram } from "react-icons/fi"
import { BsFacebook, BsYoutube } from "react-icons/bs"
import { NavLink, Link } from "react-router-dom"
import footer from "@/styles/Footer.module.css"

const socialMedia = [
    {
        icon: FiInstagram,
        url: "https://www.instagram.com/nauvalfhrza",
        name: "instagram"
    },
    {
        icon: BsFacebook,
        url: "https://www.instagram.com/nauvalfhrza",
        name: "facebook"
    },
    {
        icon: BsYoutube,
        url: "https://www.instagram.com/nauvalfhrza",
        name: "youtube"
    },
]

const about = [
    {
        text: "How to Book",
        url: "https://www.instagram.com/nauvalfhrza",
    },
    {
        text: "Help Center",
        url: "https://www.instagram.com/nauvalfhrza",
    },
    {
        text: "Contact Us",
        url: "https://www.instagram.com/nauvalfhrza",
    },
    {
        text: "About Us",
        url: "https://www.instagram.com/nauvalfhrza",
    },
]

const product = [
    {
        text: "Book Studio Music",
        url: "https://www.instagram.com/nauvalfhrza",
    },
    {
        text: "Rent Musical Instrument",
        url: "https://www.instagram.com/nauvalfhrza",
    },
    {
        text: "Event Information",
        url: "https://www.instagram.com/nauvalfhrza",
    },
]

const Footer = () => {
    return (
        <div className='bg-gray-footer flex flex-col text-white px-10 lg:px-[6.25rem] pt-[4.5rem]'>
            <div className="flex justify-evenly xl:justify-start gap-6 xl:gap-[8.25rem] mb-10">
                <div className="max-w-[10.5rem] xl:max-w-[12.25rem] flex flex-col justify-center items-center">
                    <img src={logo_footer} alt="Studio Hub" className="w-32 sm:w-40 xl:w-[12.25rem]" />
                    <p className="text-center xl:text-start font-light text-xs">The Best App For Music Drivers In Indonesia! The Best Selection of Music Studio Rental Platform</p>
                    <div className="flex justify-between w-4/5 xl:gap-9 mt-4">
                        {socialMedia.map(social => (
                            <NavLink key={social.name} to={social.url} className="bg-orange-500 px-2 py-2 rounded-full flex items-center justify-center">
                                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className={footer.title}>About Studio Hub</h3>
                    <ul className={footer.sub}>
                        {about.map(data => (
                            <li key={data.text} className="mt-4 xl:mt-5"><Link to={data.url}>{data.text}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className={footer.title}>Product</h3>
                    <ul className={footer.sub}>
                        {product.map(data => (
                            <li key={data.text} className="mt-4 xl:mt-5"><Link to={data.url}>{data.text}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center my-4">Copyright © 2023 Studio Hub</div>
        </div>
    )
}

export default Footer