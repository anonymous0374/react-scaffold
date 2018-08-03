import { createStore, combineReducers } from "redux";
import authReducer from "reducers/auth";

export const initialState = {
  auth: { login: false, userName: null, password: null, remember: false }
};
export const store = createStore(
  combineReducers({ auth: authReducer }),
  initialState
);
export const unsubscribe = store.subscribe(() => {
  console.info(`state change subscribed: `);
  console.info(store.getState());
});
