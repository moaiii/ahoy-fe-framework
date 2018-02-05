import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';


import landingPageReducer from './components/landing-page/reducer';

let reducers = combineReducers({
  landingPageReducer
});

let logger = createLogger({
  collapsed : true
});

let store = createStore(
	reducers,
	applyMiddleware(logger)
);

export default store;