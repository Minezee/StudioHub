import { Outlet, Navigate } from "react-router-dom";

const PaymentRouter = () => {
    const isPayment = sessionStorage.getItem('isPayment');
    const token = Cookies.get('auth_token') || sessionStorage.getItem('auth_token')

    if (!token) return <Navigate to={'/login'} />

    return (
        isPayment ?
            <Outlet />
            :
            <Navigate to={'/'} />
    );
};

export default PaymentRouter