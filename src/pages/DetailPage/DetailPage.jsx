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
              <dl className="detail-list">
                <dt>Allergenic: {item.allergenic ? 'yes' : 'no'}</dt>
                <dt>Carcinogenic: {item.carcinogenic ? 'yes' : 'no'}</dt>
                <dt>
                  Suitable for pregnant woman:{' '}
                  {item['suitable-for-pregnant-women'] ? 'yes' : 'no'}
                </dt>
                <dt>Impact:</dt>
                <dd>{item.impact}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </>
  );
};
