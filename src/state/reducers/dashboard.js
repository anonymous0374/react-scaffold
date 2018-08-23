import { REFRESH_DASHBOARD } from 'actions/dashboard';

export default function dashboardReducer(state, action) {
  let rtn = { ...state };
  switch (action.type) {
    case REFRESH_DASHBOARD: {
      const { mockData, msg } = action.payload;
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
