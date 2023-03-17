import { NavLink } from "react-router-dom"
import dayjs from "dayjs"

const MainFeature = ({ feature }) => {
    const date = dayjs().format('DD-MM-YYYY');

    return (
        <section>
            <div className="mt-[4.75rem] text-center">
                <h2 className="text-orange-500 text-5xl font-black">MAIN FEATURE</h2>
                <p className="text-2xl font-semibold text-white">Take advantage of our features to get information about the world of music</p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-10 sm:gap-[6.25rem] text-white text-3xl sm:text-[2.5rem] font-black">
                {feature.map(menu => (
                    <NavLink
                        to={`/${menu.name}?&province=jawa%20timur&city=malang&date=${date}`} key={menu.name}
                        className="bg-yellow-400 w-full sm:w-48 aspect-square sm:h-[12.5rem] flex flex-col items-center justify-center rounded-2xl text-white hover:text-dark hover:bg-orange-500"
                    >
                        <menu.icon className="h-[50%] sm:h-[5.5rem] w-auto" />
                        {menu.name}
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default MainFeature