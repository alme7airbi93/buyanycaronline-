import App from './common/components/App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import configureStore from '../src/common/store/configureStore'
import Firebase, { FirebaseContext } from './common/components/Firebase'
// '../common/store/configureStore';
// import App from '../common/containers/App';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);

