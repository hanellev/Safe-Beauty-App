import './index.css';
import React, { useState, useEffect } from 'react';
import { processPhotoEden } from '../../api/edenAi';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import Webcam from 'react-webcam';

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

// const CameraButton = () => {
// 	const [picture, setPicture] = useState(null);
// 	const [isCameraOpen, setIsCameraOpen] = useState(false);

// 	const webcamRef = React.useRef(null);

// 	const capture = React.useCallback(() => {
// 		if (webcamRef.current) {
// 			const pictureSrc = webcamRef.current.getScreenshot();
// 			setPicture(pictureSrc);
// 		}
// 	}, [webcamRef, setPicture]);

// 	const handleChange = (e) => {
// 		setPicture(URL.createObjectURL(e.target.files[0]));
// 	};

// 	const buttonText = isCameraOpen ? 'Take a picture' : 'Use a camera';

// 	const handleClick = () => {
// 		if (!isCameraOpen) {
// 			setIsCameraOpen(true);
// 			return;
// 		}

// 		if (isCameraOpen) {
// 			capture();
// 			setIsCameraOpen(false);
// 			// TODO: implement logic to send picture to api
// 		}
// 	};

// 	if (picture) {
// 		return <span>loading...</span>;
// 	}

// 	return (
// 		<div className="button-container">
// 		{isCameraOpen && (
// 				<Webcam
// 					className="webcam-window"
// 					audio={false}
// 					ref={webcamRef}
// 					screenshotFormat="image/jpeg"
// 					videoConstraints={{
// 						facingMode: 'environment',
// 					}}
// 				/>
// 			)}
// 			{picture ? (
// 				<img src={picture} alt="Captured" />
// 			) : (
// 				<>
// 					<button className="take-a-pict" onClick={handleClick}>
// 						{buttonText}
// 					</button> */
// 			<input
// 				type="file"
// 				onChange={handleChange}
// 				className="upload"
// 				style={{ display: 'none' }}
// 			/>
// 			<button
// 				className="upload-button"
// 				onClick={() => document.querySelector('.upload').click()}
// 			>
// 				Upload Picture
// 			</button>
// 		</div>
// 	);
// };

// export default CameraButton;

// const CameraButton = () => {
// 	const [picture, setPicture] = useState(null);

// 	const handleChange = (e) => {
// 		setPicture(URL.createObjectURL(e.target.files[0]));
// 	};

// 	useEffect(() => {
// 		if (picture) {
// 			return <span>loading...</span>;
// 		}

// 		picture &&
// 			setTimeout(() => {
// 				redirect('/Ingredients List');
// 			}, 3000);
// 		return () => {
// 			console.log('cleanup');
// 		};
// 	}, [redirect, picture]);

// 	return (
// 		<div className="button-container">
// 			<input
// 				type="file"
// 				onChange={handleChange}
// 				className="upload"
// 				style={{ display: 'none' }}
// 			/>
// 			<button className="take-a-pict"></button>

// 			<button
// 				className="upload-button"
// 				onClick={() => document.querySelector('.upload').click()}
// 			>
// 				Select image
// 			</button>
// 		</div>
// 	);
// };

// export default CameraButton;
const CameraButton = () => {
	const [picture, setPicture] = useState(null);
	const [loading, setLoading] = useState(false);
	const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    if (picture) {
      processPhotoEden(picture);
    }
  }, [picture]);

	useEffect(() => {
		let timer;

		if (picture) {
			setLoading(true);

			timer = setTimeout(() => {
				setRedirect(true);
			}, 5000);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [picture]);

	if (redirect) {
		return <Redirect to="/Ingredients List" />;
	}

	return (
		<div className="button-container">
			{loading ? (
				<span>Loading...</span>
			) : (
				<>
					<input
						type="file"
						onChange={handleChange}
						className="upload"
						style={{ display: 'none' }}
					/>
					<button className="take-a-pict"></button>
					<button
						className="upload-button"
						onClick={() => document.querySelector('.upload').click()}
					>
						Select image
					</button>
				</>
			)}
		</div>
	);
};

export default CameraButton;
