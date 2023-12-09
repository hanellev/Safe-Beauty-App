import './index.css';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { processPhotoEden } from '../../api/edenAi.js';
import { responseProcessing } from '../../api/google_response_processing.jsx';
import { resultsProcessing } from '../../api/results_processing.jsx';
import data from '../../api/ingredients_dataset_API.json';
import { CountContext } from '../App/DataProvider.jsx';

export const CameraButton = () => {
  const { count, setCount } = useContext(CountContext);
  const [picture, setPicture] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [newIngredientList, setNewIngredientList] = useState([
    'one',
    'two',
    'three',
    'nothing changed',
  ]);
  const [safeCount, setSafeCount] = useState(0);
  const [potentialDangerCount, setPotentialDangerCount] = useState(0);
  const [harmfulCount, setHarmfulCount] = useState(0);

  const [safeIngredientsData, setSafeIngredientsData] = useState([]);
  const [potentialDangerIngredientsData, setPotentialDangerIngredientsData] =
    useState([]);
  const [harmfulIngredientsData, setHarmfulIngredientsData] = useState([]);

  // json database and some dummy data for results processing
  const databaseIngredients = data;
  const ingredientList = [
    'aqua',
    'water',
    'paraffinum',
    'liquidum',
    'minera',
    '-cetyl',
    'dimethicone',
    'butylene',
    'glycol',
    'glycerin',
    'stearyl',
    'dimethicone',
    'squalane',
    'glyceryl',
    'cocoate',
    'dimethicon',
    'dioxane',
    'hydrogenated',
    'polydecene',
    'honey',
    'magnesium',
    'sulfat',
    'tapioca',
    'starch',
    'ethyleneglycol',
    'chlorphenesin',
    'cymen',
    'polyquaternium',
    'polymethylsilsesquioxane',
    'citric',
    'acid',
  ];

  // 1 - switching to the loading page; 2 - processing the data and assiging to apiData variable
  const handleChange = useCallback(async (e) => {
    setLoading(true);
    const result = await processPhotoEden(e.target.files[0]);
    console.log(result);
    setApiData(result.google);
    // mapIngredients();
    // responseProcessing();
  }, []);
  // [processPhotoEden, setLoading, setApiData]
  // );
  useEffect(() => {
    console.log(newIngredientList);
  }, [newIngredientList]);
  // const handleClick = () => {};

  const handleClick = () => {
    //checking if if received a response - in console log
    console.log(apiData);

    //processing response to get the ingredient list
    const result = responseProcessing(apiData);
    console.log(result);

    //DOESNT WORK -> trying to assign processed data/resulting array to a variable
    setNewIngredientList(result);

    //imported 'api database' from Hana with ingredients description
    console.log(databaseIngredients);
  };
  const mapIngredients = () => {
    //looking for the ingredients in the ingredients database; counting safe and harmful, creating arrays for safe and harmful to display later
    ingredientList.map((item) => {
      if (databaseIngredients.find((o) => o.name === item)) {
        console.log('found -', item);
        setHarmfulCount((harmfulCount) => harmfulCount + 1);
        harmfulIngredientsData.push(
          databaseIngredients.find((o) => o.name === item),
        );
      } else if (databaseIngredients.find((o) => o.name.includes(item))) {
        console.log('found -', item);
        setPotentialDangerCount(
          (potentialDangerCount) => potentialDangerCount + 1,
        );
        potentialDangerIngredientsData.push(
          databaseIngredients.find((o) => o.name.includes(item)),
        );
      } else {
        console.log('at least it was trying');
        setSafeCount((safeCount) => safeCount + 1);
        safeIngredientsData.push(item);
      }
    });

    //checking if result processing works (currently counting works, found result pushed into new arrays to display)
    console.log('harmful: ', harmfulIngredientsData);
    console.log('potential danger: ', potentialDangerIngredientsData);
    console.log('safe: ', safeIngredientsData);
  };

  // useEffect(() => {
  // let timer;

  // if (loading) {
  // setLoading(true);

  //     timer = setTimeout(() => {
  //       navigate('/IngredientsList');
  //     }, 8000);
  //   }

  //   //return () => clearTimeout(timer);
  // }, [loading]);

  return (
    <div className="button-container">
      {loading ? (
        <>
          <button onClick={handleClick}>View results!</button>
          <div>Safe ingredients: {safeCount}</div>
          <div>Potentially dangerous ingredients: {potentialDangerCount}</div>
          <div>Harmful ingredients: {harmfulCount}</div>
          <div>
            {harmfulIngredientsData.map((item) => {
              return (
                <div key={item.id}>
                  {' '}
                  {item.name}: {item.impact}
                </div>
              );
            })}
          </div>
        </>
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
          <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </>
      )}
    </div>
  );
};
