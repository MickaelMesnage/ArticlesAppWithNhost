import { ChakraProvider } from '@chakra-ui/react';
import { NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { BrowserRouter } from 'react-router-dom';
import nhost from './nhost';
import Router from './router';
import theme from './theme/theme';

const App = () => (
	<NhostReactProvider nhost={nhost}>
		<NhostApolloProvider nhost={nhost}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ChakraProvider>
		</NhostApolloProvider>
	</NhostReactProvider>
);

export default App;
