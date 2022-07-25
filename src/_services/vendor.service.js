import { API_VENDOR } from "./api.constants";
import axios from "axios";

const inviteVendor = (payload) => {
  return axios
    .post(API_VENDOR.INVITE, payload)
    .then((response) => {
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
        console.log("Server not available");
      } else {
        errStr = error.message;
        console.log("Error", error.message);
      }

      throw errStr;
    });
};

const vendorProfile = (payload) => {
  return axios
    .get(`${API_VENDOR.PROFILE}${payload.vendor_id}/hori/screens`)
    .then((response) => {
      if (response.data.errorCode === "CVP-ENUM-013") {
        return response.data.errorCode;
      } else {
        return response.data.data[0];
      }
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

export const vendorService = {
  inviteVendor,
  vendorProfile,
};
