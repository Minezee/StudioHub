import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filterData, setFilterData] = useState(() => {
        const storedFilterData = localStorage.getItem("filterData");
        return storedFilterData ? JSON.parse(storedFilterData) : {
            selectedProvince: null,
            selectedCity: null,
            selectedDate: null,
        };
    });

    useEffect(() => {
        localStorage.setItem("filterData", JSON.stringify(filterData));
    }, [filterData]);

    const updateFilterData = (data) => {
        setFilterData((prevState) => ({ ...prevState, ...data }));
    };

    return (
        <FilterContext.Provider value={{ filterData, updateFilterData }}>
            {children}
        </FilterContext.Provider>
    );
};