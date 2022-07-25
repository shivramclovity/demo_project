import { alertActions } from ".";
import { questionnaire } from "../_services/questionnaire.service";
import { questionnaireConstants } from "../_constants/questionnaire.constants";
// import { history } from "../_helpers";

const getScreens = () => {
  return (dispatch) => {
    dispatch(request());
    questionnaire.questionnaireScreen().then(
      (data) => {
        dispatch(
          success(data.data[0].screens.sort((a, b) => a.sequence - b.sequence))
        );
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: questionnaireConstants.QUESTIONNAIRE_REQUEST };
  }
  function success(response) {
    return { type: questionnaireConstants.QUESTIONNAIRE_SUCCESS, response };
  }
  function failure(error) {
    return { type: questionnaireConstants.QUESTIONNAIRE_FAILURE, error };
  }
};

const saveQuestionnare = (payload) => {
  return (dispatch) => {
    dispatch(request(payload));
    questionnaire.saveQuestionnare(payload).then(
      (data) => {
        // console.log("action save resp: ", data);
        if (data) {
          dispatch(questionnaireActions.getAnswerData(payload.appNo));
          dispatch(questionnaireActions.getScreens());
          dispatch(success(data.data[0]));
        }
        /* dispatch(
          success(data.data[0].screens.sort((a, b) => a.sequence - b.sequence))
        ); */
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: questionnaireConstants.QUESTIONNAIRE_SAVE_REQUEST };
  }
  function success(response) {
    return {
      type: questionnaireConstants.QUESTIONNAIRE_SAVE_SUCCESS,
      response,
    };
  }
  function failure(error) {
    return { type: questionnaireConstants.QUESTIONNAIRE_SAVE_FAILURE, error };
  }
};

const finalQuestionnare = (appno) => {
  return (dispatch) => {
    dispatch(request(appno));
    questionnaire.finalSubmitQuestionnare(appno).then(
      (data) => {
        // console.log("action final resp: ", data);
        if (data.errors) {
          dispatch(failure(data?.errors[0]));
          let err_msg = `${data?.errors[0]?.errorShortMessage}`;
          dispatch(alertActions.error(err_msg));
          // dispatch(success("Application has been submitted successfully"));
        } else {
          dispatch(success("Application has been submitted successfully"));
          console.log(data[0]);
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: questionnaireConstants.QUESTIONNAIRE_FINAL_REQUEST };
  }
  function success(response) {
    return {
      type: questionnaireConstants.QUESTIONNAIRE_FINAL_SUCCESS,
      response,
    };
  }
  function failure(error) {
    return { type: questionnaireConstants.QUESTIONNAIRE_FINAL_FAILURE, error };
  }
};

const getAnswerData = (appNo) => {
  return (dispatch) => {
    dispatch(request());
    questionnaire.getAnswerData(appNo).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: questionnaireConstants.QUESTIONOPTION_REQUEST };
  }
  function success(response) {
    return { type: questionnaireConstants.QUESTIONOPTION_SUCCESS, response };
  }
  function failure(error) {
    return { type: questionnaireConstants.QUESTIONOPTION_FAILURE, error };
  }
};

const getAppInfo = (appNo) => {
  return (dispatch) => {
    dispatch(request());
    questionnaire.getAppInfo(appNo).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request() {
    return { type: questionnaireConstants.APPLICATION_INFO_REQUEST };
  }
  function success(response) {
    return { type: questionnaireConstants.APPLICATION_INFO_SUCCESS, response };
  }
  function failure(error) {
    return { type: questionnaireConstants.APPLICATION_INFO_FAILURE, error };
  }
};

export const questionnaireActions = {
  getScreens,
  getAnswerData,
  saveQuestionnare,
  finalQuestionnare,
  getAppInfo,
};
