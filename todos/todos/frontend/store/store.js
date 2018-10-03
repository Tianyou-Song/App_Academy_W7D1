import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import {middleware} from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
  rootReducer, preloadedState, applyMiddleware(middleware)
  );
}

export default configureStore;
