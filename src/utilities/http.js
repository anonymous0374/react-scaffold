import axios from "axios";
import { SUCCESS, NOT_LOGIN, ERROR, NO_ACCESS } from "utilities/codes";

export function get(url, params) {
  return axios.get(url, { params }).then(
    res => {
      const {
        data: { code, msg },
        data
      } = res;
      if (!isNaN(code) && code === SUCCESS) {
        // nothing to do here, just pass on data to UI
      } else if (!isNaN(code) && code === NOT_LOGIN) {
        // have to tell UI to navigate to login page
      } else if (!isNaN(code) && code === ERROR) {
        // there's some error in processing the request
      }
    },
    err => {}
  );
}
