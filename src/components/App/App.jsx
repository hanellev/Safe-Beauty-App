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
			<Outlet />
		</div>
	);
};
