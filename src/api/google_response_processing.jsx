import data from './google_response.json';

const responseReceived = data.google.bounding_boxes.map((item) => {
  return item.text;
});

const startingPoint = () => {
  const index = responseReceived.indexOf('Ingredients');
  if (responseReceived[index + 1] === ':') {
    return index + 2;
  } else if (responseReceived[index + 1] !== ':') {
    return responseReceived.indexOf('Ingredients', index + 1) + 2;
  } else {
    console.log('ingredients not found..sorreyy');
  }
};
const start = startingPoint();
const end = responseReceived.indexOf('.', startingPoint());

const addDataToDataset = () => {
  const dataRange = responseReceived.slice(start, end);
  const newArray = [];

  dataRange.map((item) => {
    if (item.toLowerCase().match(/\w{4,}/)) {
      newArray.push(item);
    }
  });
  return newArray;
};

export const ingredientsDataset = addDataToDataset();
