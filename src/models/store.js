import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import authReducer from "reducers/auth";
import assetsReducer from "reducers/assets";

export const initialState = {
  auth: { login: false, userName: null, password: null, remember: false },
  assets: null
};

export const store = createStore(
  combineReducers({ auth: authReducer, assets: assetsReducer }),
  initialState,
  applyMiddleware(thunk, logger)
);
