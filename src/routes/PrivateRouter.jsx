import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthRoutes = () => {
    const token = Cookies.get('auth_token') || sessionStorage.getItem('auth_token');

    return (
        token ? 
        <Navigate to={'/'} />
        :
        <Outlet />
    );
};

export default AuthRoutes;