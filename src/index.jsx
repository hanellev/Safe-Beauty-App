import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import * as React from 'react';
import { IngredientsList } from './pages/IngredientsList/IngredientsList';
import './global.css';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Link,
	NavLink,
} from 'react-router-dom';

const App = () => {
	return (
		<div className="container">
			<nav>
				<NavLink to="/">Home Page</NavLink>
				<span> | </span>
				<NavLink to="/Ingredients List">Ingredients List</NavLink>
				<span> | </span>
			</nav>
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// errorElement: <ErrorPage />,

		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'Ingredients List',
				element: <IngredientsList />,
			},
		],
	},
]);

createRoot(document.querySelector('#app')).render(
	<RouterProvider router={router} />
);
