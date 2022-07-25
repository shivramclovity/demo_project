import { alertActions, userActions } from ".";
import { dashboardService } from "../_services/dashboard.service";
import { dashboardConstants } from "../_constants/dashboard.constant";

export const dashboardActions = {
  vendorList,
};

function vendorList(page = 1) {
  return (dispatch) => {
    dispatch(request());

    dashboardService.vendorListData(page).then(
      (response) => {
        dispatch(success({ response }));
      },
      (error) => {
        if (error === "other") {
          //   window.location = "/login";
          error = "";
          dispatch(userActions.logout());
        } else {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      }
    );
  };
  function request(payload) {
    return { type: dashboardConstants.DASHBOARDTABLE_REQUEST, payload };
  }
  function success(response) {
    return { type: dashboardConstants.DASHBOARDTABLE_SUCCESS, response };
  }
  function failure(error) {
    return { type: dashboardConstants.DASHBOARDTABLE_FAILURE, error };
  }
}
