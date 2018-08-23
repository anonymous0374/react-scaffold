import authReducer from 'reducers/auth';
import assetsReducer from 'reducers/assets';
import registerReducer from 'reducers/register';
import dashboardReducer from 'reducers/dashboard';

function combineReducers() {
  return (state, payload) => {
    const { auth, user: authUser } = authReducer(state, payload);
    const { assets } = assetsReducer(state, payload);
    const { user: registerUser } = registerReducer(state, payload);
    const { dashboard } = dashboardReducer(state, payload);

    return {
      auth,
      assets,
      user: {
        ...authUser,
        ...registerUser,
      },
      dashboard,
    };
  };
}

export default combineReducers();
