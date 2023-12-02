import './index.css';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

const CameraButton = () => {
  const [picture, setPicture] = useState(null);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  }, [webcamRef, setPicture]);
  const handleChange = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <span class="container">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button className="take-a-pict" onClick={capture}>
        {picture ? 'RETAKE PICTURE' : 'TAKE PICTURE'}
      </button>
      {picture && <img src={picture} />}
      <input type="file" onChange={handleChange} className="upload" />
    </span>
  );
};

export default CameraButton;
