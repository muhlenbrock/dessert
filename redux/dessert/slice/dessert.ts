import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DESSERT, DessertStateType, DessertType, payloadAction} from '../types';

const dessertInitialState: DessertStateType = {
  dessert: {
    data: null,
    isLoading: false,
    errors: '',
  },
  dessertList: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const dessertSlice = createSlice({
  name: DESSERT,
  initialState: dessertInitialState,
  reducers: {
    getDessertByIdAction: (
      state: DessertStateType,
      {payload: data}: PayloadAction<payloadAction>,
    ) => {
      state.dessert.isLoading = true;
      state.dessert.errors = '';
    },
    getDessertByIdSuccessAction: (
      state: DessertStateType,
      {payload: dessert}: PayloadAction<DessertType>,
    ) => {
      state.dessert.isLoading = false;
      state.dessert.data = dessert;
    },
    getDessertByIdErrorAction: (
      state: DessertStateType,
      {payload: error}: PayloadAction<any>,
    ) => {
      state.dessert.isLoading = false;
      state.dessert.errors = error;
    },
    getDessertsAction: (
      state: DessertStateType,
      {payload: data}: PayloadAction<payloadAction>,
    ) => {
      state.dessertList.isLoading = true;
      state.dessertList.errors = '';
    },
    getDessertsSuccessAction: (
      state: DessertStateType,
      {payload: dessert}: PayloadAction<DessertType>,
    ) => {
      state.dessertList.isLoading = false;
      state.dessertList.data = dessert;
    },
    getDessertsErrorAction: (
      state: DessertStateType,
      {payload: error}: PayloadAction<any>,
    ) => {
      state.dessertList.isLoading = false;
      state.dessertList.errors = error;
    },
  },
});

export const {
  getDessertByIdAction,
  getDessertByIdSuccessAction,
  getDessertByIdErrorAction,
  getDessertsAction,
  getDessertsSuccessAction,
  getDessertsErrorAction,
} = dessertSlice.actions;
export default dessertSlice.reducer;
