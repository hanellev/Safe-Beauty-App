import './IngredientsList.css';
import { useContext } from 'react';
import { CountContext } from '../../components/App/DataProvider.jsx';

export const IngredientsList = (data) => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="ingredients-container">
      <h2>Ingredients List</h2>

      <div className="ingredient">
        <div className="ingredient__safe">
          <img
            className="ingredient__harmful-icon"
            src="./images/cream-green.png"
            alt="Safe Icon"
          />
          <div className="ingredient__text">
            <h3>Safe Ingredients</h3>
            <p>Amount:</p>
          </div>
        </div>

        <div className="ingredient__harmful">
          <img
            className="ingredient__harmful-icon"
            src="./images/cream-orange.png"
            alt="Harmful Icon"
          />
          <div className="ingredient__text">
            <h3>Harmful Ingredients</h3>
            <p>Amount:</p>
          </div>
        </div>

        <div className="ingredient__dangerous">
          <img
            className="ingredient__harmful-icon"
            src="./images/cream-red.png"
            alt="Dangerous Icon"
          />
          <div className="ingredient__text">
            <h3>Dangerous Ingredients</h3>
            <p>Amount:</p>
          </div>
          <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
      </div>
    </div>
  );
};
