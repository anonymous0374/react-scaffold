import axios from 'axios';
import {
  SUCCESS, NOT_LOGIN, ERROR, NO_ACCESS,
} from 'configs/codes';

export function get(url, params) {
  return axios.get(url, { params });
}

export function post(url, params) {
  return axios.post(url, { params });
}
