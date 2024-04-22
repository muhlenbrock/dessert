import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const storeDataObj = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('orders', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getDataObj = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('orders');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const storeDataObjPush = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    const ordersObject = await getDataObj();
    console.log('ordersObject:', ordersObject);
    await AsyncStorage.setItem('orders', jsonValue);
  } catch (e) {
    // saving error
  }
};
