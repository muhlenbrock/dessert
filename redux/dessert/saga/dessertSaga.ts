import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {put, takeLatest, call} from 'redux-saga/effects';
import {
  DessertType,
  GET_DESSERT_BY_ID,
  GET_DESSERTS,
  payloadAction,
} from '../types';
import {
  getDessertByIdErrorAction,
  getDessertByIdSuccessAction,
  getDessertsSuccessAction,
  getDessertsErrorAction,
} from '../slice';
import * as api from '../../../services/api/dessert';

function* getDessertByIdSaga({payload}: PayloadAction<payloadAction>) {
  try {
    const response: AxiosResponse<DessertType> = yield call(
      api.getDessertById,
      payload.id,
    );
    yield put(getDessertByIdSuccessAction(response.data));
  } catch (error) {
    yield put(getDessertByIdErrorAction(error));
  }
}

function* getDessertsSaga({}: PayloadAction) {
  try {
    const response: AxiosResponse<DessertType> = yield call(api.getDesserts);
    yield put(getDessertsSuccessAction(response.data));
  } catch (error) {
    yield put(getDessertsErrorAction(error));
  }
}

export function* watchGetDessert() {
  yield takeLatest(GET_DESSERT_BY_ID, getDessertByIdSaga);
  yield takeLatest(GET_DESSERTS, getDessertsSaga);
}
