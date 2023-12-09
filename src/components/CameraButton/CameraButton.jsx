import './CameraButton.css';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { processPhotoEden } from '../../api/edenAi.js';
import { CountContext } from '../App/DataProvider.jsx';
import { responseProcessing } from '../../api/google_response_processing.jsx';
responseProcessing;
import data from '../../api/ingredients_dataset_API.json';
// import { mapIngredients } from '../../api/ingredients_mapping.jsx';

const CameraButton = () => {
  const {
    apiData,
    setApiData,
    safeCount,
    setSafeCount,
    doubtCount,
    setDoubtCount,
    harmfulCount,
    setHarmfulCount,
    safeIngrData,
    doubtIngrData,
    harmfulIngrData,
  } = useContext(CountContext);
  const [loading, setLoading] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const navigate = useNavigate();

  const [resultApi, setResultApi] = useState([]);

  //sending data to API, receiving response, displaying Loading page
  const handleChange = useCallback(async (e) => {
    setLoading(true);
    const result = await processPhotoEden(e.target.files[0]);
    setApiData(result.google);
    console.log('handlechange -->', result);
  }, []);

  const redirectToIngrPage = () => {
    navigate('/IngredientsList');
  };

  // useEffect(() => {
  //   let timer;

  //   if (viewResults) {
  //     // setLoading(true);

  //     timer = setTimeout(() => {
  //       return (
  //         <button className="upload-button" onClick={redirectToIngrPage}>
  //           View results
  //         </button>
  //       );
  //     }, 8000);
  //   }

  //return () => clearTimeout(timer);
  // }, [loading]);

  //processing API data once we have it
  useEffect(() => {
    console.log('useEffect API processing -->', apiData);

    setResultApi(responseProcessing(apiData));
  }, [apiData]);

  //looking for the ingredients in the ingredients database; counting safe and harmful, creating arrays for safe and harmful to display later
  useEffect(() => {
    console.log('useEffect result API -->', resultApi);
    // would be better to have it in a different file in the api folder, but it falls outside of the context perimeter ??

    //importing database of dangerous products
    const databaseIngredients = data;

    //looking for the ingredients in the ingredients database; counting safe and harmful, creating arrays for safe and harmful to display later
    resultApi.map((item) => {
      if (databaseIngredients.find((o) => o.name === item)) {
        setHarmfulCount((harmfulCount) => harmfulCount + 1);
        harmfulIngrData.push(databaseIngredients.find((o) => o.name === item));
      } else if (databaseIngredients.find((o) => o.name.includes(item))) {
        setDoubtCount((doubtCount) => doubtCount + 1);
        doubtIngrData.push(item);
      } else {
        setSafeCount((safeCount) => safeCount + 1);
        safeIngrData.push(item);
      }
    });

    setViewResults(!viewResults);
  }, [resultApi]);

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
