import authReducer from 'reducers/auth';
import assetsReducer from 'reducers/assets';
import registerReducer from 'reducers/register';
import dashboardReducer from 'reducers/dashboard';

/**
 * combineReducers function returns a function who invokes all interested reducers
 * with current state(of the whole app) and payload, and returns the resulting
 * state(of the whole app)
 * Therefore, what combineReducers function returns  is a so called "root reducer"
 * This file exports this root reducer.
 *
 * I call the returned object "transitState" because it's a changing, temporary state
 */
function combineReducers() {
  return (state, payload) => {
    let transitState = { ...state };
    const { auth, user: authUser } = authReducer(transitState, payload);
    transitState = { ...transitState, auth, user: { ...authUser } };
    const { assets } = assetsReducer(transitState, payload);
    transitState = { ...transitState, assets };
    const { user: registerUser } = registerReducer(transitState, payload);
    transitState = { ...transitState, user: { ...registerUser } };
    const { dashboard } = dashboardReducer(transitState, payload);
    transitState = { ...transitState, dashboard };
    return transitState;
  };
}

export default combineReducers();
