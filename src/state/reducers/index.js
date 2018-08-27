import authReducer from 'reducers/auth';
import assetsReducer from 'reducers/assets';
import registerReducer from 'reducers/register';
import dashboardReducer from 'reducers/dashboard';
import cashflowReducer from 'reducers/cashflow';

/**
 * combineReducers function returns a function who invokes all interested reducers
 * with current state(of the whole app) and action, and returns the resulting
 * state(of the whole app)
 * Therefore, what combineReducers function returns  is a so called "root reducer"
 * This file exports this root reducer.
 *
 * I call the returned object "transitState" because it's a changing, temporary state
 */
function combineReducers() {
  return (state, action) => {
    let transitState = { ...state };
    const { auth, user: authUser } = authReducer(transitState, action);
    transitState = { ...transitState, auth, user: { ...authUser } };
    const { assets } = assetsReducer(transitState, action);
    transitState = { ...transitState, assets };
    const { auth: registerAuth, user: registerUser } = registerReducer(transitState, action);
    transitState = { ...transitState, auth: registerAuth, user: { ...registerUser } };
    const { dashboard } = dashboardReducer(transitState, action);
    transitState = { ...transitState, dashboard };
    const { cashflows } = cashflowReducer(transitState, action);
    transitState = { ...transitState, cashflows };
    return transitState;
  };
}

export default combineReducers();
