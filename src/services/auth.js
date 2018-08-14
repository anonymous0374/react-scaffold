import axios from "axios";

export function getUserByName(name) {
  return axios.get("/ams/user", {
    params: {
      name
    }
  });
}

export function login(name, password) {
  return axios.post("/ams/login", {
    params: {
      name,
      password
    }
  });
}
