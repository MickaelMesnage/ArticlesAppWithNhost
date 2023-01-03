import {
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useSignInEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import Path from '../../router/Path';

const SignInPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { toastError, toastSuccess } = useToast();
	const navigate = useNavigate();

	const { signInEmailPassword, isLoading } = useSignInEmailPassword();

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
			const { error, needsEmailVerification } = await signInEmailPassword(
				email,
				password,
			);

			if (needsEmailVerification) {
				toastError("Votre email n'a pas été vérifiéé !");
			} else if (error) {
				toastError('Error lors de la connexion');
			} else {
				toastSuccess('Connexion réussi');
				resetFields();
				goToHome();
			}
		}
	};

	return (
		<Box w={60}>
			<VStack align="start">
				<Heading>Connexion</Heading>
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
				<Link to={Path.SignUp}>
					<Text>Aller sur la page d&lsquo;inscription</Text>
				</Link>
			</VStack>
		</Box>
	);
};

export default SignInPage;
