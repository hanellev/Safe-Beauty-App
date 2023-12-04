import './ErrorPage.css';

export const ErrorPage = () => {
	return (
		<main>
			<span role="img" aria-label="banner" className="error-banner" />
			<h2>404</h2>
			<p>This is not the page you are looking for.</p>
			<p>Please, go back to the home page.</p>
		</main>
	);
};
