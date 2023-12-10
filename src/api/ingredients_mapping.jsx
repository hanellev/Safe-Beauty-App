import React, { useState, useContext } from 'react';
import { CountContext } from '../components/App/DataProvider';
import data from '../api/ingredients_dataset_API.json';

export const mapIngredients = (ingredientsList) => {
  const {
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

  const databaseIngredients = data;

  //looking for the ingredients in the ingredients database; counting safe and harmful, creating arrays for safe and harmful to display later
  ingredientsList.map((item) => {
    if (databaseIngredients.find((o) => o.name === item)) {
      setHarmfulCount((harmfulCount) => harmfulCount + 1);
      harmfulIngrData.push(databaseIngredients.find((o) => o.name === item));
    } else if (databaseIngredients.find((o) => o.name.includes(item))) {
      setDoubtCount((doubtCount) => doubtCount + 1);
      doubtIngrData.push(
        databaseIngredients.find((o) => o.name.includes(item)),
      );
    } else {
      setSafeCount((safeCount) => safeCount + 1);
      safeIngrData.push(item);
    }
  });
};
