import refresh as refreshAPI from 'services/dashboard'

export const REFRESH_DASHBOARD = 'REFRESH_DASHBOARD'

export default function refresh () {
  return dispatch => refreshAPI().then(res => {
    const {data: {code, msg, dashboard}, data = {}} = res
    if (!isNaN(code) && code === 0) {
      return dispatch({
        type: REFRESH_DASHBOARD,
        payload: []
      })
    }

    
  }, err => {})
}