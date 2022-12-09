import { Navigate, Route, Routes } from 'react-router-dom';
import ArticleListPage from '../components/pages/ArticleListPage/ArticleListPage';
import GetTokenPage from '../components/pages/GetTokenPage/GetTokenPage';
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
				<Route path="*" element={<ArticleListPage />} />
			</Route>
		</Route>
		<Route path={Path.GetToken} element={<ProtectedRoute />}>
			<Route path="*" element={<ConnectedLayout />}>
				<Route path="*" element={<GetTokenPage />} />
			</Route>
		</Route>
		<Route path="/" element={<Navigate to={Path.ArticleList} />} />
		<Route path="*" element={<Navigate to={Path.Home} />} />
	</Routes>
);

export default Router;
