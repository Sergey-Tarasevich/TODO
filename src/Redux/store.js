import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './Reducers/TodoReducer';
import thunk from 'redux-thunk';

// export let store = createStore(reducer);
// export let store = compose(
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// )(createStore)(reducer);

// config redux
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f);

export let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
