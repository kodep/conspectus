import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './reducers/auth';
import tasks from './reducers/tasks'

const rootReducer = combineReducers({
  auth,
  tasks,
  form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store;
