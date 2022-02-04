import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer.js';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;