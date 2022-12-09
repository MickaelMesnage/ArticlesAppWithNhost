import { useToast as useToastCUI, UseToastOptions } from '@chakra-ui/react';

const toastOption: UseToastOptions = {
	position: 'top-right',
	duration: 5000,
	isClosable: true,
};

const useToast = () => {
	const toast = useToastCUI();

	const toastError = (description: string, option?: UseToastOptions) =>
		toast({
			...toastOption,
			description,
			status: 'error',
			...option,
		});

	const toastSuccess = (description: string, option?: UseToastOptions) =>
		toast({
			...toastOption,
			description,
			status: 'success',
			...option,
		});

	return { toastSuccess, toastError };
};

export default useToast;
