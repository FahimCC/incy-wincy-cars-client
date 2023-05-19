import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import AddAToys from '../pages/add-a-toys/AddAToys';
import AllToys from '../pages/all-toys/AllToys';
import Blog from '../pages/blog/Blog';
import Home from '../pages/home/Home';
import MyToys from '../pages/my-toys/MyToys';
import ErrorPage from '../pages/shared/ErrorPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/all-toys',
				element: (
					<PrivateRoute>
						<AllToys />
					</PrivateRoute>
				),
			},
			{
				path: '/my-toys',
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
			},
			{
				path: '/add-a-toys',
				element: (
					<PrivateRoute>
						<AddAToys />
					</PrivateRoute>
				),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
]);

export default router;
