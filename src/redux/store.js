// import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './reducers/auth';

// const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
// export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store;
