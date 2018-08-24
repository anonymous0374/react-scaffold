import { login as loginAPI, logout as logoutAPI, getUser as getUserAPI } from 'services/auth';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER = 'GET_USER';

export function login(credentials) {
  let { name, password } = credentials;
  name = name ? name.trim() : '';
  password = password ? password.trim() : '';

  return dispatch => loginAPI(name, password).then(
    (res) => {
      const {
        data: {
          code, msg, authenticated, user,
        },
      } = res;
      if (!isNaN(code) && code === 0) {
        return dispatch({
          type: LOGIN,
          payload: {
            auth: { authenticated, msg, name },
            user,
          },
        });
      }
      return dispatch({
        type: LOGIN,
        payload: { auth: { name: null, authenticated: false, msg }, user: {} },
      });
    },
    (err) => {
      throw new Error(err);
    },
  );
}

export function logout() {
  return (dispatch) => {
    logoutAPI().then(
      (res) => {
        const {
          data: { code, msg },
        } = res;

        if (!isNaN(code) && code === 0) {
          return dispatch({
            type: LOGOUT,
            payload: {
              auth: {
                name: 'Guest',
                authenticated: false,
              },
              user: null,
            },
          });
        }
        throw new Error(msg);
      },
      (err) => {
        throw new Error(err);
      },
    );
  };
}

export function getUser() {
  return (dispatch) => {
    getUserAPI().then(
      (res) => {
        const {
          data: {
            code, msg, name: userName, email, city, profession, gender,
          },
        } = res;

        if (!isNaN(code) && code === 0 && userName !== 'Guest') {
          return dispatch({
            type: GET_USER,
            payload: {
              auth: { authenticated: true, msg, name: userName },
              user: {
                name: userName,
                email,
                profession,
                city,
                gender,
              },
            },
          });
        }

        return dispatch({
          type: GET_USER,
          payload: {
            auth: { authenticated: false, msg, name: 'Guest' },
            user: {
              name: 'Guest',
              email: null,
              profession: null,
              city: null,
              gender: false,
            },
          },
        });
      },
      (err) => {
        throw new Error(err);
      },
    );
  };
}
