import {DessertStateType} from './dessert/types';
import dessertsReducer from './dessert/slice';

export type StateType = {
  desserts: DessertStateType;
};

const rootReducers = {
  desserts: dessertsReducer,
};

export default rootReducers;
