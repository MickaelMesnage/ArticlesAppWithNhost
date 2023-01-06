import { Navigate, Route, Routes } from 'react-router-dom';
import ArticleListPage from '../components/pages/ArticleListPage/ArticleListPage';
import GetTokenPage from '../components/pages/GetTokenPage/GetTokenPage';
import ImageListPage from '../components/pages/ImageListPage/ImageListPage';
import SignInPage from '../components/pages/SignInPage';
import SignUpPage from '../components/pages/SignUpPage';
import AuthLayout from './AuthLayout';
import ConnectedLayout from './ConnectedLayout';
import Path from './Path';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
	<Routes>
		<Route path={Path.SignIn} element={<AuthLayout />}>
			<Route index element={<SignInPage />} />
		</Route>
		<Route path={Path.SignUp} element={<AuthLayout />}>
			<Route index element={<SignUpPage />} />
		</Route>
		<Route path={Path.ArticleList} element={<ProtectedRoute />}>
			<Route path="*" element={<ConnectedLayout />}>
				<Route index element={<ArticleListPage />} />
			</Route>
		</Route>
		<Route path={Path.ImageList} element={<ProtectedRoute />}>
			<Route path="*" element={<ConnectedLayout />}>
				<Route index element={<ImageListPage />} />
			</Route>
		</Route>
		<Route path={Path.GetToken} element={<ProtectedRoute />}>
			<Route path="*" element={<ConnectedLayout />}>
				<Route index element={<GetTokenPage />} />
			</Route>
		</Route>
		<Route path="/" element={<Navigate to={Path.ArticleList} />} />
		<Route path="*" element={<Navigate to={Path.Home} />} />
	</Routes>
);

export default Router;
