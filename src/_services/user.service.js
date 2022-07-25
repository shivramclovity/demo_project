// import { authHeader } from "../_helpers";
import axios from "axios";
import { API_USER, ENCRYPT } from "./api.constants";
import { setAuthHeader } from "../_helpers";
import { JSEncrypt } from "jsencrypt";

const login = (username, password) => {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(ENCRYPT.PUBLICKEY);
  let encryptedPass = encrypt.encrypt(password);

  const payload = { email: username, password: encryptedPass };

  return axios
    .post(API_USER.LOGIN, payload)
    .then((response) => {
      const loginuser = isRoleExists(response.data.data[0].roles[0]);
      if (!loginuser) {
        response.data.data[0].roles[0] = "SMART_CITY_USER";
      }
      const currentDateTime = new Date();
      localStorage.setItem("user", JSON.stringify(response.data.data[0]));
      localStorage.setItem("userlogin", currentDateTime);
      setAuthHeader();
      return response.data.data[0];
    })
    .catch((error) => {
      let errStr,
        errRes = error.response;

      if (
        errRes &&
        errRes.data.error === "Unauthorized" &&
        errRes.status === 401
      ) {
        errStr = "Invalid username or password";
      } else if (errRes === undefined) {
        errStr = "Something went wrong!";
      } else {
        console.log("Error", error.message);
      }
      throw errStr;
    });
};

const isRoleExists = (roletype) => {
  let Isvalid = false;
  const Roles = ["ADMN", "VNDR", "SALE", "LEGL", "SPCH"];
  Roles.some(function (el) {
    if (el === roletype) {
      Isvalid = true;
      return Isvalid;
    } else return Isvalid;
  });
  return Isvalid;
};

const resetPasswordLink = (payload) => {
  //will send reset link in email.
  return axios
    .post(API_USER.RESET_LINK, payload)
    .then((response) => {
      return response.data.data[0];
    })
    .catch((error) => {
      /* let errStr = error.response.data.message;
      if (
        error.response.data.error === "Unauthorized" &&
        error.response.status === 401
      ) {
        localStorage.removeItem("user");
        localStorage.removeItem("userlogin");
        errStr = "other";
      }
      if (error.response.data.status === 401) {
        errStr = "This email address does not exist";
      } else if (errStr === undefined) {
        errStr = "Something went wrong!";
      } */

      let errStr,
        errRes = error.response;
      if (
        errRes &&
        errRes.data.error === "Unauthorized" &&
        errRes.status === 401
      ) {
        errStr = "other";
      } else if (errRes === undefined) {
        errStr = "Something went wrong!";
      } else {
        console.log("Error", error.message);
      }
      throw errStr;
    });
};

const changePassword = (payload) => {
  const url = `${API_USER.CHANGE_PASSWORD}${payload.token}&mode=${payload.mode}`;
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(ENCRYPT.PUBLICKEY);
  let encryptedPass = encrypt.encrypt(payload.password);

  return axios
    .post(url, { password: encryptedPass })
    .then((response) => {
      return response.data.data[0];
    })
    .catch((error) => {
      let errStr = error.response.data.message;
      if (errStr === undefined) {
        errStr = "Something went wrong!";
      }
      throw errStr;
    });
};

const logout = () => {
  const user = localStorage.getItem("user");
  if (!user) return;

  return axios
    .delete(API_USER.LOGOUT)
    .then((response) => {
      localStorage.clear();
      return response.data.data[0];
    })
    .catch((error) => {
      let errStr,
        errRes = error.response;
      if (
        errRes &&
        errRes.data.error === "Unauthorized" &&
        errRes.status === 401
      ) {
        errStr = "other";
      } else if (errRes === undefined) {
        errStr = "Something went wrong!";
      } else {
        errStr = error.message;
        console.log("Error", error.message);
      }

      localStorage.clear();
      throw errStr;
    });
};

/* function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // Logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
} */

export const userService = {
  login,
  resetPasswordLink,
  changePassword,
  logout,
};
