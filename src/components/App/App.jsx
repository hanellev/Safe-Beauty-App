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
					to="/Ingredients List"
					className={isActive('/Ingredients List') ? 'active' : 'normal'}
				>
					Ingredients List
				</NavLink>
				<span> | </span>
			</nav>
			<Outlet />
		</div>
	);
};

// const App = () => {
// 	const navLinkClass = isActive ? 'active' : 'normal';
// 	return (
// 		<div className="container">
// 			<nav>
// 				<NavLink to="/" className={navLinkClass}>
// 					Home Page
// 				</NavLink>
// 				<span> | </span>
// 				<NavLink to="/Ingredients List" className={navLinkClass}>
// 					Ingredients List
// 				</NavLink>
// 				<span> | </span>
// 			</nav>
// 			<Outlet />
// 		</div>
// 	);
// };
