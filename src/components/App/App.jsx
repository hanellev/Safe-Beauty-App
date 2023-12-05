import './App.css';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

export const App = () => {
	const location = useLocation();

	// Funkce, která určuje, zda je daná cesta aktivní
	const isActive = (path) => location.pathname === path;

	return (
		<div className="container">
			<nav>
				<NavLink to="/" className={isActive('/') ? 'active' : 'normal'}>
					Home Page
				</NavLink>
				<span> | </span>
				<NavLink
					to="/IngredientsList"
					className={isActive('/IngredientsList') ? 'active' : 'normal'}
				>
					Ingredients List
				</NavLink>
				<span> | </span>
				<NavLink
					to="/DetailPage"
					className={isActive('/DetailPage') ? 'active' : 'normal'}
				>
					Detail Page
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};
