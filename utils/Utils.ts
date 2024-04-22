export const getIngredients = (obj: object) => {
  try {
    const filtered = Object.keys(obj)
      .filter(key => {
        return key.includes('strIngredient');
      })
      .reduce((objReduce, key) => {
        objReduce[key] = obj[key];
        return objReduce;
      }, {});
    return Object.values(filtered);
  } catch (error) {
    return [];
  }
};

export const getMeasures = (obj: object) => {
  try {
    const filtered = Object.keys(obj)
      .filter(key => {
        return key.includes('strMeasure');
      })
      .reduce((objReduce, key) => {
        objReduce[key] = obj[key];
        return objReduce;
      }, {});
    return Object.values(filtered);
  } catch (error) {
    return [];
  }
};
