import './ErrorPage.css';

export const ErrorPage = () => {
	return (
		<div className="error-container">
			<span role="img" aria-label="banner" className="error-banner" />
			<div className="error-text">
				<h2 id="error-heading">404</h2>
				<p>This is not the page you are looking for.</p>
				<p>Please, go back to the home page.</p>
				<p id="error-text__mobile">Ups...</p>
			</div>
		</div>
	);
};
