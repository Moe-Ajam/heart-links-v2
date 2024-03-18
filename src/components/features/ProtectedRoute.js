import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const ProtectedRoute = ({ children }) => {
    const { oktaAuth, authState } = useOktaAuth();
    const location = useLocation();

    if (!authState) {
        // Authentication state is not determined yet
        return <div>Loading...</div>;
    }

    if (!authState.isAuthenticated) {
        // Redirect to login page if not authenticated
        // Replace '/login' with your login route
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;