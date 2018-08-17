import axios from "axios";
import { API_LOGIN } from "configs/URIs";

export function login(name, password) {
  return axios.post(API_LOGIN, {
    params: {
      name,
      password
    }
  });
}
