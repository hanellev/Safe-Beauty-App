import './index.css';
import React, { useState } from 'react';
import Webcam from 'react-webcam';

// const CameraButton = () => {
//   const [picture, setPicture] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);

//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     if (webcamRef.current) {
//       const pictureSrc = webcamRef.current.getScreenshot();
//       setPicture(pictureSrc);
//     }
//   }, [webcamRef, setPicture]);

//   const handleChange = (e) => {
//     setPicture(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleClick = () => {
//     if (!isCameraOpen) {
//       setIsCameraOpen(true);
//       return;
//     }

//     if (isCameraOpen) {
//       capture();
//       setIsCameraOpen(false);
//       // TODO: implement logic to send picture to api
//     }
//   };

//   if (picture) {
//     return <span>loading...</span>;
//   }

//   return (
//     <div className="container">
//       {isCameraOpen && (
//         <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//       )}
//       {picture ? (
//         <img src={picture} />
//       ) : (
//         <>
//           <button className="take-a-pict" onClick={handleClick}>
//             TAKE PICTURE
//           </button>
//           <input type="file" onChange={handleChange} className="upload" />
//         </>
//       )}
//     </div>
//   );
// };

// export default CameraButton;

const CameraButton = () => {
	const [picture, setPicture] = useState(null);
	const [isCameraOpen, setIsCameraOpen] = useState(false);

	const webcamRef = React.useRef(null);

	const capture = React.useCallback(() => {
		if (webcamRef.current) {
			const pictureSrc = webcamRef.current.getScreenshot();
			setPicture(pictureSrc);
		}
	}, [webcamRef, setPicture]);

	const handleChange = (e) => {
		setPicture(URL.createObjectURL(e.target.files[0]));
	};

	const buttonText = isCameraOpen ? 'TAKE A PICTURE' : 'USE A CAMERA';

	const handleClick = () => {
		if (!isCameraOpen) {
			setIsCameraOpen(true);
			return;
		}

		if (isCameraOpen) {
			capture();
			setIsCameraOpen(false);
			// TODO: implement logic to send picture to api
		}
	};

	if (picture) {
		return <span>loading...</span>;
	}

	return (
		<div className="container">
			{isCameraOpen && (
				<Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
			)}
			{picture ? (
				<img src={picture} alt="Captured" />
			) : (
				<>
					<button className="take-a-pict" onClick={handleClick}>
						{buttonText}
					</button>
					<input type="file" onChange={handleChange} className="upload" />
				</>
			)}
		</div>
	);
};

export default CameraButton;
