import { refresh as refreshAPI } from 'services/dashboard';

export const REFRESH_DASHBOARD = 'REFRESH_DASHBOARD';

export default function refresh() {
  return dispatch => refreshAPI().then(
    (res) => {
      const {
        data: { code, msg, mockData },
      } = res;
      if (!isNaN(code) && code === 0) {
        return dispatch({
          type: REFRESH_DASHBOARD,
          payload: {
            code: 0,
            msg,
            mockData,
          },
        });
      }
    },
    () => dispatch({
      type: REFRESH_DASHBOARD,
      payload: {
        code: -1,
        msg: 'something is wrong with dashboard data',
        mockData: null,
      },
    }),
  );
}
