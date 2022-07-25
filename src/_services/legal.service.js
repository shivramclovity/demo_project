import axios from "axios";
import { API_LEGAL } from "./api.constants";

const getNDAFiles = (appNo) => {
  return (
    axios
      // .get(`${API_LEGAL.NDA_FILES}${appNo}`)
      .post(`${API_LEGAL.LIST}NDA&parent=${appNo}`)
      .then((response) => {
        // console.log(response);
        return response.data;
      })
      .catch((error) => {
        /* let errStr = error.response.data.message;
      if (error.response.data.status === 401) {
        errStr = "Unauthorised request, please login";
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
          errStr = error.message;
          console.log("Error", error.message);
        }
        throw errStr;
      })
  );
};

const getMOUFiles = (appNo) => {
  return (
    axios
      // .get(`${API_LEGAL.MOU_FILES}${appNo}`)
      .post(`${API_LEGAL.LIST}MOU&parent=${appNo}`)
      .then((response) => {
        return response.data;
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
        throw errStr;
      })
  );
};
const getMSAFiles = (appNo) => {
  return (
    axios
      // .get(`${API_LEGAL.MSA_FILES}${appNo}`)
      .post(`${API_LEGAL.LIST}MSA&parent=${appNo}`)
      .then((response) => {
        return response.data;
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
        throw errStr;
      })
  );
};
const getFileOptions = (docType) => {
  return axios
    .get(`${API_LEGAL.FILE_OPTIONS}${docType}`)
    .then((response) => {
      return response.data;
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
      throw errStr;
    });
};

export const legal = {
  getNDAFiles,
  getMOUFiles,
  getMSAFiles,
  getFileOptions,
};
