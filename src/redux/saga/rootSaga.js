import { all } from 'redux-saga/effects'
import albumSaga from './albumSaga'

export default function* rootSaga() {
  yield all([
    albumSaga(),
  ])
}