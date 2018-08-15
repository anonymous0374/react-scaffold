import axios from "axios";
import { API_REGISTER } from "configs/URIs";

export function register(basicInfo, extraInfo) {
  return axios.post(API_REGISTER, {
    params: {
      basicInfo,
      extraInfo
    }
  });
}
