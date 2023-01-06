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
import { Link, useNavigate } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import Path from '../../router/Path';

const SignUpPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { toastError, toastSuccess } = useToast();
	const navigate = useNavigate();

	const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();

	const resetFields = () => {
		setEmail('');
		setPassword('');
	};

	const goToHome = () => {
		navigate(Path.Home);
	};

	const areEmailAndPasswordValid = (): boolean =>
		Boolean(email) && Boolean(password);

	const onSubmit = async () => {
		if (areEmailAndPasswordValid()) {
			const { error } = await signUpEmailPassword(email, password);

			if (error) {
				toastError("Error lors de l'inscription");
			} else {
				toastSuccess('Inscription réussie');
				resetFields();
				goToHome();
			}
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
