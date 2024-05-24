import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
// import logger from "redux-logger";

import rootReducer from './reducers';
import * as actionCreators from './actions';
import {rootSaga} from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// if (__DEV__) {
//   middlewares.push(logger);
// }

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user','home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store;

export default function configureStore(preloadedState: any, window: any) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionCreators})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  store = createStore(persistedReducer, preloadedState, enhancer);
  const persistor = persistStore(store);
  return {
    persistor,
    runSaga: sagaMiddleware.run(rootSaga),
    store,
  };
}

export {store};
