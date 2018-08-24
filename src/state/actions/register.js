import { register as registerAPI, abandon as abandonAPI } from 'services/register';

export const REGISTER = 'REGISTER';
export const ABANDON = 'ABANDON';

export function register(payload) {
  const { basicInfo, extraInfo } = payload;
  return (dispatch, getState) => registerAPI(basicInfo, extraInfo).then(
    (res) => {
      const {
        data = {},
        data: {
          code, msg, name, email, city, gender, profession,
        },
      } = res;
      if (!isNaN(code) && code === 0) {
        return dispatch({
          type: REGISTER,
          payload: {
            code: 0,
            msg: `Welcome to our Assets Management System, ${name}!`,
            auth: {
              name,
              email,
              authenticated: true,
            },
            user: {
              name,
              city,
              gender,
              profession,
            },
          },
        });
      }

      return dispatch({
        type: REGISTER,
        payload: {
          code: -1, auth: { authenticated: false, name: 'Guest' }, user: {}, msg,
        },
      });
    },
    (err) => {
      throw new Error(err);
    },
  );
}

export function abandon(payload) {
  const { name, password } = payload;
  return dispatch => abandonAPI(name, password).then((res) => {}, (err) => {});
}
