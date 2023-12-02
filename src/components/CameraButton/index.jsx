import './index.css';
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useRef, useCallback } from 'react';

// const CameraButton = () => {
//   const [picture, setPicture] = useState(null);
//   const  []
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot();
//     setPicture(pictureSrc);
//   }, [webcamRef, setPicture]);
//   const handleChange = (e) => {
//     setPicture(URL.createObjectURL(e.target.files[0]));
//   };

//   return (
//     <span class="container">
//       <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//       <button className="take-a-pict" onClick={capture}>
//         {picture ? 'RETAKE PICTURE' : 'TAKE PICTURE'}
//       </button>
//       {picture && <img src={picture} />}
//       <input type="file" onChange={handleChange} className="upload" />
//     </span>
//   );
// };

// const CameraButton = () => {
// 	const [picture, setPicture] = useState(null);
// 	const webcamRef = useRef(null);

// 	const capture = useCallback(() => {
// 		const pictureSrc = webcamRef.current.getScreenshot();
// 		setPicture(pictureSrc);
// 	}, [webcamRef, setPicture]);

// 	const retakePicture = () => {
// 		setPicture(null);
// 	};

// 	const handleChange = (e) => {
// 		setPicture(URL.createObjectURL(e.target.files[0]));
// 	};

// 	return (
// 		<span className="camera-container">
// 			{!picture && (
// 				<div className="webcam-container">
// 					<Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
// 				</div>
// 			)}
// 			<button
// 				className={`take-a-pict ${picture ? 'hidden' : ''}`}
// 				onClick={capture}
// 				style={{ display: picture ? 'none' : 'block' }}
// 			>
// 				{picture ? 'RETAKE PICTURE' : 'TAKE PICTURE'}
// 			</button>
// 			{picture && (
// 				<div>
// 					<img src={picture} alt="Captured" />
// 					<button
// 						className="retake-button"
// 						onClick={retakePicture}
// 						style={{ display: picture ? 'block' : 'none' }}
// 					>
// 						RETAKE PICTURE
// 					</button>
// 				</div>
// 			)}
// 			<input
// 				type="file"
// 				onChange={handleChange}
// 				className={`upload ${picture ? 'hidden' : ''}`}
// 				style={{ display: picture ? 'none' : 'block' }}
// 			/>
// 		</span>
// 	);
// };

// export default CameraButton;

// const CameraButton = () => {
// 	const [picture, setPicture] = useState(null);
// 	const webcamRef = useRef(null);

// 	const capture = useCallback(() => {
// 		const pictureSrc = webcamRef.current.getScreenshot();
// 		setPicture(pictureSrc);
// 	}, [webcamRef, setPicture]);

// 	const buttonText = picture ? 'RETAKE PICTURE' : 'TAKE PICTURE';

// 	const handleButtonClick = () => {
// 		if (picture) setPicture(null);
// 		else capture();
// 	};

// 	const handleChange = (e) => {
// 		setPicture(URL.createObjectURL(e.target.files[0]));
// 	};

// 	return (
// 		<span className="camera-container">
// 			<div className="webcam-container">
// 				<Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
// 			</div>
// 			<button className="take-a-pict" onClick={handleButtonClick}>
// 				{buttonText}
// 			</button>
// 			{picture && <img src={picture} alt="Captured" />}
// 			<input type="file" onChange={handleChange} className="upload" />
// 		</span>
// 	);
// };

// export default CameraButton;

const CameraButton = () => {
	const [picture, setPicture] = useState(null);
	const webcamRef = useRef(null);

	const capture = useCallback(() => {
		const pictureSrc = webcamRef.current.getScreenshot();
		setPicture(pictureSrc);
	}, [webcamRef]);

	const handleButtonClick = () => {
		if (picture) setPicture(null);
		else capture();
	};

	const handleChange = (e) => {
		setPicture(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className="camera-container">
			<div className="webcam-container">
				{picture ? (
					<img src={picture} alt="Captured" />
				) : (
					<Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
				)}
			</div>
			<button className="take-a-pict" onClick={handleButtonClick}>
				{picture ? 'RETAKE PICTURE' : 'TAKE PICTURE'}
			</button>
			<input type="file" onChange={handleChange} className="upload" />
		</div>
	);
};

export default CameraButton;
