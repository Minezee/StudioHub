import { useSearchParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const ResultHeader = () => {
    const [searchParams] = useSearchParams();
    const province = searchParams.get('province');
    const city = searchParams.get('city');
    const date = searchParams.get('date');

    return (
        <div className="pt-20 mb-7">
                <div className="w-full bg-yellow-400 px-[6.5rem] py-4 rounded-2xl flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-medium">Your Search result in {city}, {province}</p>
                        <p className="font-light">{date}</p>
                    </div>
                    <NavLink to={'/'} className="text-white text-2xl font-medium bg-orange-500 px-10 py-2 rounded-xl">Change</NavLink>
                </div>
        </div>
    )
}

export default ResultHeader