import { API_DASHBOARD } from "./api.constants";
import axios from "axios";

const vendorListData = (pageNo) => {
  return axios
    .get(`${API_DASHBOARD.VENDOR_LIST}${pageNo}`)
    .then((response) => {
      return response.data.data[0];
    })
    .catch((error) => {
      let errStr = error.response.data.message;
      if (
        error.response.data.error === "Unauthorized" &&
        error.response.status === 401
      ) {
        localStorage.removeItem("user");
        localStorage.removeItem("userlogin");
        errStr = "other";
      } else if (error.response.data.status === 401) {
        errStr = "Unauthorised request, please login";
      } else if (errStr === undefined) {
        errStr = "Something went wrong!";
      }
      throw errStr;
    });
};

export const dashboardService = {
  vendorListData,
};
