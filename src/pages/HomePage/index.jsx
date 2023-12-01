import './style.css';
import { Header } from '/components/Header/Header.jsx';
import { Footer } from '/components/Footer/Footer.jsx';

export const HomePage = () => {
	return (
		<div className="container">
			<Header />
			<span>
				<button className="take-a-pict">Take a picture</button>
			</span>
			<button className="upload">Upload picture</button>
			<Footer />
		</div>
	);
};
