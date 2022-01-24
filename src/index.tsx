import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);