import { vendorConstants } from "../_constants";
import { vendorService } from "../_services";
import { alertActions, userActions } from ".";
import redirect from "../Pages/Utility/Redirect";

// import { history } from "../_helpers";

export const vendorActions = {
  inviteVendor,
  vendorProfile,
};

function inviteVendor(payload = "") {
  return (dispatch) => {
    dispatch(request({ payload }));

    vendorService.inviteVendor(payload).then(
      (response) => {
        dispatch(success({ response }));
        if (response.message.includes("exists")) {
          dispatch(alertActions.error("Vendor already invited"));
        } else {
          dispatch(
            alertActions.success("Vendor invitation has been sent successfully")
          );
        }
        // history.push(from.pathname);
      },
      (error) => {
        if (error === "other") {
          error = "";
          dispatch(userActions.logout());
        }
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(payload) {
    return { type: vendorConstants.INVITE_REQUEST, payload };
  }
  function success(response) {
    return { type: vendorConstants.INVITE_SUCCESS, response };
  }
  function failure(error) {
    return { type: vendorConstants.INVITE_FAILURE, error };
  }
}

function vendorProfile(payload) {
  return (dispatch) => {
    dispatch(request({ vendor_id: payload }));

    vendorService.vendorProfile({ vendor_id: payload }).then(
      (response) => {
        if (response === "CVP-ENUM-013") {
          dispatch(alertActions.error("Invalid application ID"));
          setTimeout(() => {
            redirect("/dashboard");
          }, 5000);
        } else {
          dispatch(success({ response }));
        }
      },
      (error) => {
        if (error === "other") {
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
    return { type: vendorConstants.VENDOR_PROFILE_REQUEST, payload };
  }
  function success(response) {
    return { type: vendorConstants.VENDOR_PROFILE_SUCCESS, response };
  }
  function failure(error) {
    return { type: vendorConstants.VENDOR_PROFILE_FAILURE, error };
  }
}
