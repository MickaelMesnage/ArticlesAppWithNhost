import { Spinner } from '@chakra-ui/react';
import { useAuthenticationStatus } from '@nhost/react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Path from './Path';

const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuthenticationStatus();
	const location = useLocation();
	console.log('dede');

	if (isLoading) return <Spinner />;

	if (!isAuthenticated) {
		return <Navigate to={Path.SignIn} state={{ from: location }} replace />;
	}
	console.log('ddddddd');

	return <Outlet />;
};

export default ProtectedRoute;
