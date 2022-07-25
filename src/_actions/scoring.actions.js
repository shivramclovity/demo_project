import { alertActions } from ".";
import { scoring } from "../_services/scoring.service";
import { scoringConstants } from "../_constants/scoring.constants";
// import { history } from "../_helpers";

const getScoring = (appId) => {
  return (dispatch) => {
    dispatch(request(appId));
    scoring.scoringList(appId).then(
      (res) => {
        if (res) {
          let company = res.data[0].companyName;
          let obj = res.data[0];
          let objData = {
            companyName: company,
            scorings: obj,
          };

          delete objData.scorings.companyName;
          dispatch(success(objData));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(appId) {
    return { type: scoringConstants.SCORING_REQUEST, appId };
  }
  function success(response) {
    return { type: scoringConstants.SCORING_SUCCESS, response };
  }
  function failure(error) {
    return { type: scoringConstants.SCORING_FAILURE, error };
  }
};

export const scoringActions = {
  getScoring,
};
