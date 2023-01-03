import { Box, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
	return (
		<Box w="full" h="full">
			<Center h="full" p={8}>
				<Outlet />
			</Center>
		</Box>
	);
};

export default AuthLayout;
