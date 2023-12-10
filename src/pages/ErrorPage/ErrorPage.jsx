import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
	const navigate = useNavigate();

	const redirectToHomePage = () => {
		navigate('/');
	};

	return (
		<div className="error-container">
			<img
				className="error-logo"
				src="/images/cream-logo.png"
				alt="Cream jar icon"
			/>
			<div className="error-text">
				<h2 id="error-heading">404</h2>
				<p>This is not the page you are looking for.</p>
				<p>Please, go back to the home page.</p>
			</div>
			<button className="error-button" onClick={redirectToHomePage}>
				Back to Home Page
			</button>
		</div>
	);
};
