import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import SignInPage from '../components/pages/SignInPage';
import SignUpPage from '../components/pages/SignUpPage';
import ConnectedLayout from './ConnectedLayout';
import Path from './Path';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
	<Routes>
		<Route path={Path.SignIn} element={<SignInPage />} />
		<Route path={Path.SignUp} element={<SignUpPage />} />
		<Route path={Path.ArticleList} element={<ProtectedRoute />}>
			<Route path="*" element={<ConnectedLayout />}>
				{/* <Route path="*" element={<HomePage />} /> */}
				<Route path="*" element={<div>ok</div>} />
			</Route>
		</Route>
		<Route path="/" element={<Navigate to={Path.ArticleList} />} />
		<Route path="*" element={<Navigate to={Path.Home} />} />
	</Routes>
);

export default Router;
