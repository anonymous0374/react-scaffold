import authReducer from 'reducers/auth';
import assetsReducer from 'reducers/assets';
import registerReducer from 'reducers/register';
import dashboardReducer from 'reducers/dashboard';
import cashflowReducer from 'reducers/cashflow';

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
    const { auth: registerAuth, user: registerUser } = registerReducer(transitState, payload);
    transitState = { ...transitState, auth: registerAuth, user: { ...registerUser } };
    const { dashboard } = dashboardReducer(transitState, payload);
    transitState = { ...transitState, dashboard };
    const { cashflows } = cashflowReducer(transitState, payload);
    transitState = { ...transitState, cashflows };
    return transitState;
  };
}

export default combineReducers();
