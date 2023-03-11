import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [buyerData, setBuyerData] = useState({
        contactName: null,
        contactPhoneNum: null,
        contactEmail: null
    });

    const updateBuyerData = (data) => {
        setBuyerData((prevState) => ({ ...prevState, ...data }));
    };

    return (
        <OrderContext.Provider value={{ buyerData, updateBuyerData }}>
            {children}
        </OrderContext.Provider>
    );
};