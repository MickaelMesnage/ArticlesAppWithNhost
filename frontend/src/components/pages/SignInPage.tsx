import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useSignInEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import Path from '../../router/Path';

const SignInPage = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const { toastError, toastSuccess } = useToast();
	const navigate = useNavigate();

	const { signInEmailPassword, isLoading } = useSignInEmailPassword();

	const onSubmit = async () => {
		try {
			if (email && password) {
				const { error } = await signInEmailPassword(email, password);
				if (!error) {
					setEmail('');
					setPassword('');
					toastSuccess('Connexion réussi');
					navigate(Path.Home);
				}
			}
		} catch (error) {
			toastError('Error lors de la connexion');
		}
	};

	return (
		<Box w={60}>
			<VStack align="start">
				<Heading>Connexion</Heading>
				<Input value={email} onChange={(e) => setEmail(e.target.value)} />
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
