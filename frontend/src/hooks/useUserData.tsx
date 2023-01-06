import { useUserData as useNhostUserData } from '@nhost/react';

const useUserData = () => {
	const userData = useNhostUserData();

	return { userId: userData?.id, isConnected: Boolean(userData?.id) };
};

export default useUserData;
