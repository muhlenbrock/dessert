import axios from 'axios';

export const getDesserts = () => {
  return axios.get('/filter.php?c=Dessert');
};

export const getDessertById = id => {
  return axios.get(`/lookup.php?i=${id}`);
};
