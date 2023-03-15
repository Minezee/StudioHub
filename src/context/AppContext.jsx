import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/helpers/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    var token;

    useEffect(() => {
        token = Cookies.get('auth_token') || sessionStorage.getItem('auth_token');
    }, [Cookies.get('auth_token'), sessionStorage.getItem('auth_token')])

    const [buyerData, setBuyerData] = useState({
        contactName: null,
        contactPhoneNum: null,
        contactEmail: null,
    });

    const updateBuyerData = (data) => {
        setBuyerData((prevState) => ({ ...prevState, ...data }));
    };

    const [filterData, setFilterData] = useState(() => {
        const storedFilterData = localStorage.getItem("filterData");
        return storedFilterData
            ? JSON.parse(storedFilterData)
            : {
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

    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem("userData");
        return storedUserData
            ? JSON.parse(storedUserData)
            : {
                id: null,
                name: null,
                username: null,
                email: null,
                phoneNum: null,
                balance: null,
            };
    });

    useEffect(() => {
        if (token && userData.id) {
            axiosInstance.get(`user/${userData.id}`)
                .then(res => res?.data?.data)
                .then(res => {
                    updateUserData({
                        name: res.username,
                        username: res.username,
                        email: res.email,
                        phoneNum: null,
                        balance: 100000,
                    })
                })
                .catch(err => console.log(err))
        } else {
            setUserData({
                id: null,
                name: null,
                username: null,
                email: null,
                phoneNum: null,
                balance: null,
            })
        }
    }, [Cookies.get('auth_token'), sessionStorage.getItem('auth_token')])

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);

    const updateUserData = (data) => {
        setUserData((prevState) => ({ ...prevState, ...data }));
    };

    return (
        <AppContext.Provider
            value={{ token, buyerData, updateBuyerData, filterData, updateFilterData, userData, updateUserData }}>
            {children}
        </AppContext.Provider>
    );
};