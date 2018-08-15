import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import authReducer from "reducers/auth";
import assetsReducer from "reducers/assets";
import registerReducer from "reducers/register";

export const initialState = {
  auth: { login: false, userName: null, password: null, remember: false },
  user: {
    userName: null,
    email: null,
    city: null,
    profession: null,
    gender: null
  },
  assets: []
};

export const store = createStore(
  combineReducers({
    auth: authReducer,
    assets: assetsReducer,
    user: registerReducer
  }),
  initialState,
  applyMiddleware(thunk, logger)
);
