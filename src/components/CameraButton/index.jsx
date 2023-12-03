import './index.css';
import React, { useState, useEffect } from 'react';
import { processPhotoEden } from '../../api/edenAi';

const CameraButton = () => {
  const [picture, setPicture] = useState(null);

  const handleChange = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    if (picture) {
      processPhotoEden(picture);
    }
  }, [picture]);

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
    <div className="button-container">
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
    </div>
  );
};

export default CameraButton;
