import './style.css';
import { Header } from '/components/Header/Header.jsx';
import { Footer } from '/components/Footer/Footer.jsx';
import CameraButton from '/components/CameraButton/CameraButton.jsx';

export const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <CameraButton />
      <Footer />
    </div>
  );
};
