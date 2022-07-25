import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";
import redirect from "../Pages/Utility/Redirect";

export const userActions = {
  login,
  sendResetLink,
  changePassword,
  logout,
};

function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from.pathname);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function sendResetLink(username) {
  return (dispatch) => {
    dispatch(request(username));
    userService.resetPasswordLink({ email: username }).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("Reset link sent to your email address"));
        setTimeout(() => {
          redirect("/login");
        }, 5000);
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
  function request(email) {
    return { type: userConstants.EMAIL_RESET_REQUEST, email };
  }
  function success(response) {
    return { type: userConstants.EMAIL_RESET_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.EMAIL_RESET_FAILURE, error };
  }
}
function changePassword(payload) {
  return (dispatch) => {
    dispatch(request());
    userService.changePassword(payload).then(
      (response) => {
        dispatch(success(response));
        if (response.message.includes("successfully")) {
          dispatch(
            alertActions.success("Password has been changed successfully")
          );
          setTimeout(() => {
            redirect("/login");
          }, 5000);
        } else {
          dispatch(alertActions.error(response.message));
        }
        history.push("/change-password");
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

  function request() {
    return { type: userConstants.CHANGE_PASSWORD_REQUEST };
  }
  function success(response) {
    return { type: userConstants.CHANGE_PASSWORD_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CHANGE_PASSWORD_FAILURE, error };
  }
}

function logout() {
  return (dispatch) => {
    dispatch(request());
    userService.logout().then(
      (res) => {
        dispatch(success(res));
        // history.push("/login");
        window.location.reload();
      },
      (error) => {
        if (error === "other") {
          error = "";
          dispatch(userActions.logout());
        }
        if (error !== "") {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
        window.location.reload();
      }
    );
  };

  function request() {
    return { type: userConstants.LOGOUT_REQUEST };
  }
  function success(response) {
    return { type: userConstants.LOGOUT_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.LOGOUT_FAILURE, error };
  }

  /* userService.logout();
  return { type: userConstants.LOGOUT_REQUEST }; */
}
