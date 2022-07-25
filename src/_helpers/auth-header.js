import axios from "axios";

export function setAuthHeader() {
  // set authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
