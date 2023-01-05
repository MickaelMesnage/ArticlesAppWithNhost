import { ChakraProvider } from '@chakra-ui/react';
import { NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { BrowserRouter } from 'react-router-dom';
import nhost from './nhost';
import Router from './router';
import theme from './theme/theme';

const App = () => (
	// TODO deprecated
	<NhostReactProvider nhost={nhost}>
		{/* TODO Why any */}
		<NhostApolloProvider nhost={nhost as any}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ChakraProvider>
		</NhostApolloProvider>
	</NhostReactProvider>
);

export default App;
