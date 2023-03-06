import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { FilterContext } from "@/context/FilterContext";

const ResultHeader = () => {
    const [searchParams] = useSearchParams();
    const [isFocus, setIsFocus] = useState(false)
    const { filterData ,updateFilterData } = useContext(FilterContext);
    const province = searchParams.get('province') || filterData.selectedProvince;
    const city = searchParams.get('city') || filterData.selectedCity;
    const date = searchParams.get('date') || filterData.selectedDate;

    useEffect(() => {
        updateFilterData({
            selectedProvince: province,
            selectedCity: city,
            selectedDate: date,
        });
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="pt-20 mb-7">
            <div className="w-full bg-yellow-400 pl-0 sm:pl-10 md:pl-[6.5rem] sm:pr-10 py-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-start">
                <div>
                    <p className="text-2xl font-medium">Your Search result in {city}, {province}</p>
                    <p className="font-light">{date}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                    <NavLink to={'/'} className={`text-white text-lg sm:text-xl font-medium bg-orange-500 flex items-center justify-center py-2 rounded-xl ${isFocus ? "sm:px-10" : "sm:flex-1"}`}>
                        <p className="px-10 sm:px-0">Change</p>
                    </NavLink>
                    <form onSubmit={handleSubmit} className={`flex items-center bg-dark pr-4 rounded-xl shadow-md text-yellow-400 w-3/4 sm:w-auto text-xl ${!isFocus && 'sm:flex-1'}`}>
                        <input
                            required
                            type="text"
                            placeholder="Search..."
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            className="px-4 py-2 focus:outline-none bg-transparent w-full"
                        />
                        <button type="submit" className="px-2 text-lg">
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResultHeader