import axios from "axios";
import { saveAs } from "file-saver";

const uploadFile = (payload) => {
  return axios
    .post(payload.url, payload.data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error: ", error);
      let errStr = error.response.data.message;
      if (error.response.data.status === 401) {
        errStr = "Unauthorised request, please login";
      } else if (errStr === undefined) {
        errStr = "Something went wrong!";
      }
      throw error;
    });
};

const downloadFile = (url, name) => {
  return axios
    .get(url, { responseType: "arraybuffer" })

    .then((blob) => {
      saveAs(new Blob([blob.data]), name);
    })
    .catch((error) => {
      console.log("Error: ", error);
      let errStr = error.response;
      if (errStr && error.response.status === 401) {
        errStr = "Unauthorised request, please login";
      } else if (errStr === undefined) {
        errStr = "Something went wrong!";
      }
      throw error;
    });
};

export const common = {
  uploadFile,
  downloadFile,
};
