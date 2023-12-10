export const responseProcessing = (d) => {
  //creating an array to choose the necessary part of data from response
  const responseReceived = d.bounding_boxes.map((item) => {
    return item.text;
  });

  const responseToLowercase = responseReceived.map((item) => {
    return item.toLowerCase();
  });

  // estimating the starting point of the ingredients list
  const startingPoint = () => {
    const index = responseToLowercase.indexOf('ingredients');
    if (responseToLowercase[index + 1] === ':') {
      return index + 2;
    } else if (responseToLowercase[index + 1] !== ':') {
      return responseToLowercase.indexOf('ingredients', index + 1) + 2;
    } else {
      console.log('ingredients not found..sorreyy');
    }
  };

  const start = startingPoint();

  //estimating the end point of the ingredients list
  const end = responseToLowercase.indexOf('.', startingPoint());

  //creating a dataset with picture-to-text processed ingredients list
  const addDataToDataset = () => {
    const dataRange = responseToLowercase.slice(start, end);
    const newArray = [];

    dataRange.map((item) => {
      if (item.toLowerCase().match(/\w{4,}/)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

  return addDataToDataset();
};
