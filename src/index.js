import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './api/Routes'

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.getElementById('root'));
