import './IngredientsList.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CountContext } from '../../components/App/DataProvider';

export const IngredientsList = () => {
  const {
    safeCount,
    doubtCount,
    harmfulCount,
    safeIngrData,
    doubtIngrData,
    harmfulIngrData,
  } = useContext(CountContext);
  const navigate = useNavigate();
  const [showSafe, setShowSafe] = useState(false);
  const [showDoubt, setShowDoubt] = useState(false);

  const redirectToDetailPage = () => {
    navigate('/DetailPage');
  };

  const safeDetails = () => {
    setShowSafe(!showSafe);
  };

  const harmfulDetails = () => {
    setShowDoubt(!showDoubt);
  };

  return (
    <div className="ingredients-container">
      <h2 className="ingredients-heading">Ingredients List</h2>

      <div className="ingredients">
        <div className="ingredients__category">
          <img
            className="ingredients-icon"
            src="./images/cream-green.png"
            alt="Green Cream jar icon"
          />
          <div className="ingredients__text">
            <h3>Safe Ingredients</h3>
            <p>Amount:{safeCount}</p>
            <button className="ingredients-button" onClick={safeDetails}>
              Show list
            </button>
          </div>
        </div>
        {showSafe ? (
          <div className="detail-impact">
            <h5>List of Safe Ingredients:</h5>
            <div className="detail-list">
              {safeIngrData.map((item, index) => {
                return <span key={index}>{item}, </span>;
              })}
            </div>
          </div>
        ) : null}

        <div className="ingredients__category">
          <img
            className="ingredients-icon"
            src="./images/cream-orange.png"
            alt="Orange cream jar icon"
          />
          <div className="ingredients__text">
            <h3>Potentially harmful Ingredients</h3>
            <p>Amount: {doubtCount}</p>
            <button className="ingredients-button" onClick={harmfulDetails}>
              Show list
            </button>
          </div>
        </div>
        {showDoubt ? (
          <div className="detail-impact">
            <h5>List of Potentially harmful Ingredients:</h5>
            <div className="detail-impact">
              {doubtIngrData.map((item, index) => {
                return <span key={index}>{item}; </span>;
              })}
            </div>
          </div>
        ) : null}

        <div className="ingredients__category">
          <img
            className="ingredients-icon"
            src="./images/cream-red.png"
            alt="Red cream jar icon"
          />
          <div className="ingredients__text">
            <h3>Dangerous Ingredients</h3>
            <p>Amount: {harmfulCount}</p>
            <button
              className="ingredients-button"
              onClick={redirectToDetailPage}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
