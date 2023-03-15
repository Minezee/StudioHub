import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const PaymentRouter = () => {
    const isPayment = sessionStorage.getItem('isPayment');
    const { token } = useContext(AppContext);

    if(!token) return <Navigate to={'/login'}/>

    return (
        isPayment ? 
        <Outlet />
        :
        <Navigate to={'/'} />
    );
};

export default PaymentRouter