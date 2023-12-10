import './App.css';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { DataProvider, CountContext } from './DataProvider';
import { useContext, useEffect } from 'react';

const Navigation = () => {
	const { safeCount,
    doubtCount,
    harmfulCount } = useContext(CountContext);
	const location = useLocation();
	const isActive = (path) => location.pathname === path;

	if (safeCount === 0 && doubtCount === 0 && harmfulCount === 0  ) {
		return null;
	}

	return (
		<nav>
			<NavLink to="/" className={isActive('/') ? 'active' : 'normal'}>
				Home
			</NavLink>
			<span> | </span>
			<NavLink
				to="/IngredientsList"
				className={isActive('/IngredientsList') ? 'active' : 'normal'}
			>
				Ingredients
			</NavLink>
			<span> | </span>
			<NavLink
				to="/DetailPage"
				className={isActive('/DetailPage') ? 'active' : 'normal'}
			>
				Detail
			</NavLink>
		</nav>
	);
};

export const App = () => {
	// const hideNavBarOnHome = location.pathname === '/';

	// Funkce, která určuje, zda je daná cesta aktivní

	return (
		<DataProvider>
			<div className="app-container">
				{/* {!hideNavBarOnHome && ( */}
				<Navigation />
				{/* )} */}
				<Outlet />
			</div>
		</DataProvider>
	);
};
