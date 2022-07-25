import axios from "axios";
import { API_QUESTIONNAIRE } from "./api.constants";
// import { questionnairData } from "../data/questionnaireData";
// import { answerData } from "../data/answerData";

const questionnaireScreen = () => {
  // return Promise.resolve(questionnairData);

  return axios
    .get(`${API_QUESTIONNAIRE.LIST}`)
    .then((response) => {
      return response.data;
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
const getAnswerData = (appNo) => {
  // return Promise.resolve(answerData);
  return axios
    .get(`${API_QUESTIONNAIRE.ANSWER_DATA}${appNo}/response`)
    .then((response) => {
      return response.data;
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

const getAppInfo = (appNo) => {
  return axios
    .get(`${API_QUESTIONNAIRE.APP_INFO}${appNo}`)
    .then((response) => {
      return response.data;
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

const saveQuestionnare = (payload) => {
  // console.log("saving", payload.formData);
  return axios
    .post(`${API_QUESTIONNAIRE.SAVE}${payload.appNo}`, {
      answers: payload.formData,
    })
    .then((response) => {
      // console.log("questionnaire data: ", response);
      return response.data;
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

const finalSubmitQuestionnare = (appno) => {
  // console.log("saving", payload.formData);
  return axios
    .post(`${API_QUESTIONNAIRE.FINAL}${appno}`)
    .then((response) => {
      return response.data;
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

export const questionnaire = {
  questionnaireScreen,
  getAnswerData,
  saveQuestionnare,
  finalSubmitQuestionnare,
  getAppInfo,
};
