import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

// import MainReducer from './Redux/Reducers/MainReducer';

import App from './App';

//To be able to use Redux DevTools Extension add window.devToolsExtension ? window.devToolsExtension() : (f) => f
// const store = compose(
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// )(createStore)(MainReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
