import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { HomePage } from './pages/HomePage';
import * as React from 'react';
import { IngredientsList } from './pages/IngredientsList/IngredientsList';
import { DetailPage } from './pages/DetailPage/DetailPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'IngredientsList',
				element: <IngredientsList />,
			},
			{
				path: 'DetailPage',
				element: <DetailPage />,
			},
		],
	},
]);

createRoot(document.querySelector('#app')).render(
	<RouterProvider router={router} />
);
