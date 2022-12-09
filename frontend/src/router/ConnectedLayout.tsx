import { Box, Button, HStack, Link, VStack } from '@chakra-ui/react';
import { useSignOut } from '@nhost/react';
import { Outlet, useNavigate } from 'react-router-dom';
import Path from './Path';

const LINKS: Array<{ label: string; path: string }> = [
	{
		label: 'Articles',
		path: Path.ArticleList,
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
		<VStack>
			<HStack justify="space-between" w="full" p={8} borderBottom="solid">
				<Box>
					{LINKS.map(({ label, path }) => (
						<Link key={path} href={path}>
							{label}
						</Link>
					))}
				</Box>
				<Button onClick={onClick}>Se déconnecter</Button>
			</HStack>
			<Outlet />
		</VStack>
	);
};

export default ConnectedLayout;
