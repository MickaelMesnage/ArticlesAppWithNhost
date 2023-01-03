import { Box, Button, HStack, Link, VStack } from '@chakra-ui/react';
import { useSignOut } from '@nhost/react';
import { Outlet, useNavigate } from 'react-router-dom';
import Path from './Path';

const LINKS: Array<{ label: string; path: string }> = [
	{
		label: 'Articles',
		path: Path.ArticleList,
	},
	{
		label: 'Récupérer un token',
		path: Path.GetToken,
	},
];

const ConnectedLayout = () => {
	const { signOut } = useSignOut();
	const navigate = useNavigate();

	const onClick = () => {
		signOut();
		navigate(Path.SignIn);
	};

	return (
		<VStack align="start">
			<HStack justify="space-between" w="full" p={8} borderBottom="solid">
				<Box>
					<HStack gap={4}>
						{LINKS.map(({ label, path }) => (
							<Link key={path} href={path}>
								{label}
							</Link>
						))}
					</HStack>
				</Box>
				<Button onClick={onClick}>Se déconnecter</Button>
			</HStack>
			<Box p={8}>
				<Outlet />
			</Box>
		</VStack>
	);
};

export default ConnectedLayout;
