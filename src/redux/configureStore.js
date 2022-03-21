import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { continentsReducer, continentReducer } from './reducers/continentsReducer';
import countriesReducer from './reducers/countriesReducer';

const reducer = combineReducers({
  continentsReducer,
  continentReducer,
  countriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
