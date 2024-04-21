import {all} from 'redux-saga/effects';
import {watchGetDessert} from './dessert/saga/dessertSaga';

export default function* rootSaga() {
  yield all([watchGetDessert()]);
}
