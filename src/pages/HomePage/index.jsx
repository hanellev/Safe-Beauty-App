import './style.css';
import { Header } from '/components/Header/Header.jsx';
import { Footer } from '/components/Footer/Footer.jsx';
// import CameraButton from '../../components/CameraButton';

export const HomePage = () => {
	return (
		<div className="container">
			<Header />
			{/* <CameraButton /> */}
			<button
				className="upload-button"
				onClick={() => document.querySelector('.upload').click()}
			>
				Upload Picture
			</button>
			;
			<Footer />
		</div>
	);
};
