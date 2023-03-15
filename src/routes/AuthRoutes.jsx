import { Outlet, Navigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

const AuthRoutes = () => {
    const { token } = useContext(AppContext);

    return (
        token ? 
        <Navigate to={'/'} />
        :
        <Outlet />
    );
};

export default AuthRoutes;