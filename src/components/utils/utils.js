import data from '../../api/ingredients_dataset_API.json';
import {useContext} from 'react'
import {CountContext} from "../App/DataProvider"

export const useMapResultsApi = () => {
	const {
		setSafeCount,
		setDoubtCount,
		setHarmfulCount,
		safeIngrData,
		doubtIngrData,
		harmfulIngrData,
	} = useContext(CountContext);

    const databaseIngredients = data;

    const mapViewResults = (resultApi) => {

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
    }

    return mapViewResults
};