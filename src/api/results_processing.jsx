import { ingredientsDataset } from './google_response_processing';
import data from './results_processing.jsx';
import { useState, useEffect } from 'react';

const [safeCount, setSafeCount] = useState(0);
const [potentialDangerCount, setPotentialDangerCount] = useState(0);
const [harmfulCount, setHarmfulCount] = useState(0);

const [safeIngredientsData, setSafeIngredientsData] = useState([]);
const [potentialDangerIngredientsData, setPotentialDangerIngredientsData] =
  useState([]);
const [harmfulIngredientsData, setHarmfulIngredientsData] = useState([]);

ingredientsDataset.map((item) => {});
