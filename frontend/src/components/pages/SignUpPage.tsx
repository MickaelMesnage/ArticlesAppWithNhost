import {
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useSignUpEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import Path from '../../router/Path';

const SignUpPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { toastError, toastSuccess } = useToast();

	const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();

	const onSubmit = async () => {
		try {
			if (email && password) {
				const { error } = await signUpEmailPassword(email, password);
				if (!error) {
					toastSuccess('Inscription réussi');
					setEmail('');
					setPassword('');
					return <Navigate to={Path.Home} />;
				}
			}
		} catch (error) {
			toastError('Error lors de la inscription');
		}
	};

	return (
		<Box w={60}>
			<VStack align="start">
				<Heading>Inscription</Heading>
				<FormLabel>Email</FormLabel>
				<Input value={email} onChange={(e) => setEmail(e.target.value)} />
				<FormLabel>Mot de passe</FormLabel>
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onSubmit} disabled={isLoading}>
					Valider
				</Button>
				<Link to={Path.SignIn}>
					<Text>Aller sur la page de connexion</Text>
				</Link>
			</VStack>
		</Box>
	);
};

export default SignUpPage;
