import data from './ingredients_dataset_API.json';
import { useState, useEffect } from 'react';

export const resultsProcessing = (someString) => {
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
  const [safeCount, setSafeCount] = useState(0);
  const [potentialDangerCount, setPotentialDangerCount] = useState(0);
  const [harmfulCount, setHarmfulCount] = useState(0);

  const [safeIngredientsData, setSafeIngredientsData] = useState([]);
  const [potentialDangerIngredientsData, setPotentialDangerIngredientsData] =
    useState([]);
  const [harmfulIngredientsData, setHarmfulIngredientsData] = useState([]);

  ingredientList.map((item) => {
    if (databaseIngredients.contains(item)) {
      console.log('found something');
    } else {
      console.log('at least we got here');
    }
  });
  console.log(someString);
};
