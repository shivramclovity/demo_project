import { alertActions } from ".";
import { questionnaire } from "../_services/questionnaire.service";
import { vendorInfoConstants } from "../_constants/vendorInfo.constants";
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
    return { type: vendorInfoConstants.VENDOR_INFO_REQUEST };
  }
  function success(response) {
    return { type: vendorInfoConstants.VENDOR_INFO_SUCCESS, response };
  }
  function failure(error) {
    return { type: vendorInfoConstants.VENDOR_INFO_FAILURE, error };
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
    return { type: vendorInfoConstants.VENDOR_ANSWER_DATA_REQUEST };
  }
  function success(response) {
    return { type: vendorInfoConstants.VENDOR_ANSWER_DATA_SUCCESS, response };
  }
  function failure(error) {
    return { type: vendorInfoConstants.VENDOR_ANSWER_DATA_FAILURE, error };
  }
};

export const vendorInfoActions = {
  getScreens,
  getAnswerData,
};
