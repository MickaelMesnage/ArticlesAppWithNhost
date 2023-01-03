import { Button, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { getToken } from '../../../api/functions';
import useToast from '../../../hooks/useToast';

const GetTokenPage = () => {
	const [key, setKey] = useState<string>('');
	const { toastSuccess, toastError } = useToast();

	const onSubmit = async () => {
		if (key) {
			try {
				await getToken({ key });
				toastSuccess('Token récupéré avec succès');
			} catch (error) {
				toastError('Erreur lors de la récupération du token');
			}
		}
	};

	return (
		<VStack w="30rem" align="start">
			<Heading>
				Récupérer un token à partir d&lsquo;une clef grâce à une cloud function
			</Heading>
			<FormLabel>Clef</FormLabel>
			<Input value={key} onChange={(e) => setKey(e.target.value)} />
			<Button onClick={onSubmit}>Récupérer le token</Button>
		</VStack>
	);
};

export default GetTokenPage;
