import axios from "axios";
import { API_GETASSETS } from "configs/URIs";

export function getAssets(name) {
  return axios.get(API_GETASSETS, {
    params: {
      name
    }
  });
}
