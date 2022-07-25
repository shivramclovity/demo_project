import axios from "axios";
import { API_VENDOR } from "./api.constants";
// import { scoringData } from "../data/scoringData";

const scoringList = (appNo) => {
  // return Promise.resolve(scoringData);

  return (
    // .get(`${API_VENDOR.SCORING}9f667353-ebf2-4389-b29e-70d719507302`)
    axios
      .get(`${API_VENDOR.SCORING}${appNo}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        let errStr = error.response.data.message;
        if (error.response.data.status === 401) {
          errStr = "Unauthorised request, please login";
        } else if (errStr === undefined) {
          errStr = "Something went wrong!";
        }
        throw errStr;
      })
  );
};

export const scoring = {
  scoringList,
};
