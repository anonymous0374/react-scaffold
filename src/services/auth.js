import axios from "axios";
import { API_LOGIN, API_LOGOUT, API_GET_USER } from "configs/URIs";

export function login(name, password) {
  return axios.post(
    API_LOGIN,
    {
      params: {
        name,
        password
      }
    },
    {
      withCredentials: true,
      htpOnly: false
    }
  );
}

export function logout(name) {
  return axios.post(API_LOGOUT, {
    params: name
  });
}

export function getUser() {
  return axios.post(API_GET_USER);
}
