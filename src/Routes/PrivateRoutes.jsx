import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation() 
    if (loading) {
        return (<div className='flex items-center justify-center'>
            <span className="loading loading-bars loading-lg text-red-600 text-center mt-64"></span>

        </div>)
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;