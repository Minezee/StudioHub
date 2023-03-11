import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PaymentRouter = () => {
    const isPayment = sessionStorage.getItem('isPayment');
    const isAuth = Cookies.get('auth_token') || sessionStorage.getItem('auth_token');

    if(!isAuth) return <Navigate to={'/login'}/>

    return (
        isPayment ? 
        <Outlet />
        :
        <Navigate to={'/'} />
    );
};

export default PaymentRouter