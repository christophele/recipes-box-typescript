import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);