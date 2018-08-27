import { REFRESH_DASHBOARD } from 'actions/dashboard';

export default function dashboardReducer(state, action) {
  let rtn = { ...state };
  const { type, payload } = action;
  switch (type) {
    case REFRESH_DASHBOARD: {
      const { mockData, msg } = payload;
      rtn = {
        ...state,
        mockData,
        msg,
      };
      break;
    }
    default: {
      // do nothing
    }
  }

  return rtn;
}
