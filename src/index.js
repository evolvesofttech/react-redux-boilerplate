import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import createEncryptor from 'redux-persist-transform-encrypt';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createBrowserHistory } from 'history';

import config from './config';
import createRootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import './index.css';
import App from './App';

const history = createBrowserHistory({ basename: '/' });
const sagaMiddleware = createSagaMiddleware();

let reducer, persistor, store;
if (config.isPersistStoreEnabled) {
  const encryptor = createEncryptor({
    secretKey: 'react-redux-boilerplate',
    onError: function(error) {
      console.log(error);
    }
  });
  const persistConfig = {
    key: 'root',
    storage,
    transform: [ encryptor ],
    stateReconciler: autoMergeLevel2,
    blacklist: []
  }
  reducer = persistReducer(persistConfig, createRootReducer(history));
  store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )
  persistor = persistStore(store);
} else {
  reducer = createRootReducer(history);
  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    {
      config.isPersistStoreEnabled
      ? <PersistGate loading={null} persistor={persistor}>
        <App history={history} />
      </PersistGate>
      : <App history={history} />
    }
  </Provider>,
  document.getElementById('root')
);
