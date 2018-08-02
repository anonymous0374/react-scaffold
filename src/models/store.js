import { createStore, combineReducers } from "redux";
import authReducer from "reducers/auth";

export const initialState = { auth: { login: false, userName: null } };
export const store = createStore(
  combineReducers({ auth: authReducer }),
  initialState
);
export const unsubscribe = store.subscribe(() => {
  console.info(`state change subscribed: `);
  console.info(store.getState());
});
