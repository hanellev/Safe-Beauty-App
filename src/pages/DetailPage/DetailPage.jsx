import './DetailPage.css';
import { useContext } from 'react';
import { CountContext } from '../../components/App/DataProvider';

export const DetailPage = () => {

  const { safeIngrData, doubtIngrData, harmfulIngrData } =
    useContext(CountContext);
  return (
    <>
      <div className="detail-page-container" id="danger">
        <img
          className="detail-icon"
          src="./images/cream-red.png"
          alt="Red cream jar icon"
        />
        <h2 className="detail-heading">Dangerous Ingredients</h2>
        {harmfulIngrData.map((item) => {
          return (
            <div className="detail-info" key={item.id}>
              <h4 className="detail-name">{item.name}</h4>
              <div className="detail-labels">
                <label className="allergenic">Allergenic: {item.allergenic ? 'yes' : 'no'}</label>
                <label className="carcinogenic">Carcinogenic: {item.carcinogenic ? 'yes' : 'no'}</label>
                <label className="pregnancy">
                  Suitable for pregnant woman:{' '}
                  {item['suitable-for-pregnant-women'] ? 'yes' : 'no'}</label>
                <dt>Impact:</dt>
                <p className="detail-impact">{item.impact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
