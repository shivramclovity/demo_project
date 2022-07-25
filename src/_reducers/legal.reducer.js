import { legalConstants } from "../_constants/legal.constants";

export function legal(
  state = {
    ndaData: { loading: false },
    msaData: { loading: false },
    mouData: { loading: false },
  },
  action
) {
  switch (action.type) {
    /* NDA */
    case legalConstants.NDA_FILES_REQUEST:
      return {
        ...state,
        ...state.legal,
        ndaData: { loading: true },
      };
    case legalConstants.NDA_FILES_SUCCESS:
      return {
        ...state,
        ...state.legal,
        ndaData: { loading: false, rows: action.response },
      };
    case legalConstants.NDA_FILES_FAILURE:
      return {
        error: action.error,
      };

    /* MOU */
    case legalConstants.MOU_FILES_REQUEST:
      return {
        ...state,
        ...state.legal,
        mouData: { loading: true },
      };
    case legalConstants.MOU_FILES_SUCCESS:
      return {
        ...state,
        ...state.legal,
        mouData: { loading: false, rows: action.response },
      };
    case legalConstants.MOU_FILES_FAILURE:
      return {
        error: action.error,
      };

    /* MSA */
    case legalConstants.MSA_FILES_REQUEST:
      return {
        ...state,
        ...state.legal,
        msaData: { loading: true },
      };
    case legalConstants.MSA_FILES_SUCCESS:
      return {
        ...state,
        ...state.legal,
        msaData: { loading: false, rows: action.response },
      };
    case legalConstants.MSA_FILES_FAILURE:
      return {
        error: action.error,
      };

    /* NDA UPLOAD */
    case legalConstants.NDA_UPLOAD_REQUEST:
      return {
        ...state,
        ...state.legal,
        ndaData: { loading: true },
      };
    case legalConstants.NDA_UPLOAD_SUCCESS:
      return {
        ...state,
        ...state.legal,
        ndaData: { loading: false },
      };
    case legalConstants.NDA_UPLOAD_FAILURE:
      return {
        ...state,
        ...state.legal,
        ndaData: { loading: false },
      };

    /* MOU UPLOAD */
    case legalConstants.MOU_UPLOAD_REQUEST:
      return {
        ...state,
        ...state.legal,
        mouData: { loading: true },
      };
    case legalConstants.MOU_UPLOAD_SUCCESS:
      return {
        ...state,
        ...state.legal,
        mouData: { loading: false },
      };
    case legalConstants.MOU_UPLOAD_FAILURE:
      return {
        ...state,
        ...state.legal,
        mouData: { loading: false },
      };

    /* MSA UPLOAD */
    case legalConstants.MSA_UPLOAD_REQUEST:
      return {
        ...state,
        ...state.legal,
        msaData: { loading: true },
      };
    case legalConstants.MSA_UPLOAD_SUCCESS:
      return {
        ...state,
        ...state.legal,
        msaData: { loading: false },
      };
    case legalConstants.MSA_UPLOAD_FAILURE:
      return {
        ...state,
        ...state.legal,
        msaData: { loading: false },
      };

    /* DOC OPTIONS */
    case legalConstants.NDA_DOC_OPTIONS:
      return {
        ...state,
        ndaOptions: action.response,
      };
    case legalConstants.MOU_DOC_OPTIONS:
      return {
        ...state,
        mouOptions: action.response,
      };
    case legalConstants.MSA_DOC_OPTIONS:
      return {
        ...state,
        msaOptions: action.response,
      };

    /*  case vendorConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            }; */
    default:
      return state;
  }
}
