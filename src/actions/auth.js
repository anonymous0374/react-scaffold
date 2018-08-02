export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}
