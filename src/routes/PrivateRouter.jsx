import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from '../components';

const PrivateRoutes = () => {
    const token = sessionStorage.token;

    return (
        token ? 
        <Outlet />
        :
        <Navigate to={'/login'} />
    );
};

export default PrivateRoutes;