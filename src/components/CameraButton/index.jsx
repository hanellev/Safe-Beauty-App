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

  return (
    <span>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button className="take-a-pict" onClick={capture}>
        Take a picture
      </button>
      {picture && <img src={picture} />}
    </span>
  );
};

export default CameraButton;
