import { Spinner } from '@chakra-ui/react';
import { useAuthenticationStatus } from '@nhost/react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Path from './Path';

const NotConnectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuthenticationStatus();
	const location = useLocation();

	if (isLoading) return <Spinner />;

	if (isAuthenticated) {
		return <Navigate to={Path.Home} state={{ from: location }} replace />;
	}

	return <Outlet />;
};

export default NotConnectedRoute;
