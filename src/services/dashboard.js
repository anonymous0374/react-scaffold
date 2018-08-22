import axios from "axios";
import API_REFRESH_DASHBOARD from "configs/URIs";

export default function fresh() {
  return axios.get(API_REFRESH_DASHBOARD);
}
