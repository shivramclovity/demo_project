import { alertActions } from "./alert.actions";
import { userActions } from "./user.actions";
import { legalConstants } from "../_constants/legal.constants";
import { legal } from "../_services/legal.service";
// import { history } from "../_helpers";

const getNDA = (appId) => {
  return (dispatch) => {
    dispatch(request(appId));
    legal.getNDAFiles(appId).then(
      (data) => {
        dispatch(success(data.data));
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
  function request(appId) {
    return { type: legalConstants.NDA_FILES_REQUEST, appId };
  }
  function success(response) {
    return { type: legalConstants.NDA_FILES_SUCCESS, response };
  }
  function failure(error) {
    return { type: legalConstants.NDA_FILES_FAILURE, error };
  }
};

const getMOU = (appId) => {
  return (dispatch) => {
    dispatch(request(appId));
    legal.getMOUFiles(appId).then(
      (data) => {
        if (data.errorCode) {
          dispatch(failure(data.errorLongMessage.toString()));
        } else {
          dispatch(success(data.data));
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
  function request(appId) {
    return { type: legalConstants.MOU_FILES_REQUEST, appId };
  }
  function success(response) {
    return { type: legalConstants.MOU_FILES_SUCCESS, response };
  }
  function failure(error) {
    return { type: legalConstants.MOU_FILES_FAILURE, error };
  }
};

const getMSA = (appId) => {
  return (dispatch) => {
    dispatch(request(appId));
    legal.getMSAFiles(appId).then(
      (data) => {
        dispatch(success(data.data));
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
  function request(appId) {
    return { type: legalConstants.MSA_FILES_REQUEST, appId };
  }
  function success(response) {
    return { type: legalConstants.MSA_FILES_SUCCESS, response };
  }
  function failure(error) {
    return { type: legalConstants.MSA_FILES_FAILURE, error };
  }
};

const uploadDocAction = (payload) => {
  return (dispatch) => {
    switch (payload.actionType) {
      case "request":
        dispatch(request(payload.docType));
        break;
      case "success":
        dispatch(success(payload.docType));
        break;
      case "error":
        dispatch(failure(payload.docType));
        break;
      default:
        break;
    }
  };
  function request(docType) {
    if (docType === "NDA") {
      return { type: legalConstants.NDA_UPLOAD_REQUEST };
    } else if (docType === "MOU") {
      return { type: legalConstants.MOU_UPLOAD_REQUEST };
    } else if (docType === "MSA") {
      return { type: legalConstants.MSA_UPLOAD_REQUEST };
    }
  }
  function success(docType) {
    if (docType === "NDA") {
      return { type: legalConstants.NDA_UPLOAD_SUCCESS };
    } else if (docType === "MOU") {
      return { type: legalConstants.MOU_UPLOAD_SUCCESS };
    } else if (docType === "MSA") {
      return { type: legalConstants.MSA_UPLOAD_SUCCESS };
    }
  }
  function failure(docType) {
    if (docType === "NDA") {
      return { type: legalConstants.NDA_UPLOAD_FAILURE };
    } else if (docType === "MOU") {
      return { type: legalConstants.MOU_UPLOAD_FAILURE };
    } else if (docType === "MSA") {
      return { type: legalConstants.MSA_UPLOAD_FAILURE };
    }
  }
};

const getDocOptions = (docType) => {
  return (dispatch) => {
    legal.getFileOptions(docType).then(
      (data) => {
        switch (docType) {
          case "nda":
            dispatch(requestNDA_OPTS(data.data));
            break;
          case "mou":
            dispatch(requestMOU_OPTS(data.data));
            break;
          case "msa":
            dispatch(requestMSA_OPTS(data.data));
            break;
          default:
            break;
        }
      },
      (error) => {
        if (error === "other") {
          error = "";
          dispatch(userActions.logout());
        } else {
          dispatch(alertActions.error(error.toString()));
        }
      }
    );
  };
  function requestNDA_OPTS(response) {
    return { type: legalConstants.NDA_DOC_OPTIONS, response };
  }
  function requestMOU_OPTS(response) {
    return { type: legalConstants.MOU_DOC_OPTIONS, response };
  }
  function requestMSA_OPTS(response) {
    return { type: legalConstants.MSA_DOC_OPTIONS, response };
  }
};

export const legalActions = {
  getNDA,
  getMOU,
  getMSA,
  uploadDocAction,
  getDocOptions,
};
