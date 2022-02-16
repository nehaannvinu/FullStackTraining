import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/albums`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchAlbum(action) {
   try {
      const users = yield call(getApi);
      yield put({type: 'GET_ALBUM_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_ALBUM_FAILED', message: e.message});
   }
}

function* albumSaga() {
   yield takeEvery('GET_ALBUM_REQUESTED', fetchAlbum);
}

export default albumSaga;