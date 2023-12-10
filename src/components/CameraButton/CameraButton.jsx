import './CameraButton.css';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { processPhotoEden } from '../../api/edenAi.js';
import { responseProcessing } from '../../api/google_response_processing.jsx';
import { useMapResultsApi } from '../utils/utils.js';

const CameraButton = () => {
  const [loading, setLoading] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const navigate = useNavigate();

  const [resultApi, setResultApi] = useState([]);
  const mapResultsApi = useMapResultsApi();

  //sending data to API, receiving response, displaying Loading page, processing results
  const handleChange = useCallback(async (e) => {
    setLoading(true);
    const result = await processPhotoEden(e.target.files[0]);

    mapResultsApi(responseProcessing(result.google), resultApi, setViewResults);
    setViewResults(!viewResults);
  }, []);

  const redirectToIngrPage = () => {
    navigate('/IngredientsList');
  };

  return (
    <div className="button-container">
      {loading ? (
        <>
          {viewResults ? (
            <button className="upload-button" onClick={redirectToIngrPage}>
              View results
            </button>
          ) : (
            <p>Loading...</p>
          )}
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={handleChange}
            className="upload"
            style={{ display: 'none' }}
          />
          <button
            role="img"
            aria-label="logo-cream-jar"
            className="take-a-pict"
            onClick={() => document.querySelector('.upload').click()}
          ></button>
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
