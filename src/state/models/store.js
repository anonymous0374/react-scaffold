import { createStore, /* combineReducers, */ applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

// initialState is the minimal but complete shape of the whole app
export const initialState = {
  auth: {
    authenticated: false,
    name: null,
    password: null,
    remember: false,
  },
  user: {
    name: null,
    email: null,
    city: null,
    profession: null,
    gender: null,
  },
  dashboard: {
    mockData: null,
  },
  assets: [],
};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
