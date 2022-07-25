import { questionnaireConstants } from "../_constants/questionnaire.constants";
const user = JSON.parse(localStorage.getItem("user"));
const status = user?.status === "Application Submitted" ? true : false;

export function questionnaire(
  state = { finalSubmitted: status, isSubmitted: null, saving: false },
  action
) {
  switch (action.type) {
    /* Questionnaire List */
    case questionnaireConstants.APPLICATION_INFO_REQUEST:
      return {
        ...state,
        appInfo: {
          loading: true,
        },
      };
    case questionnaireConstants.APPLICATION_INFO_SUCCESS:
      return {
        ...state,
        appInfo: {
          ...state.appInfo,
          loading: false,
          data: action.response,
        },
      };
    case questionnaireConstants.APPLICATION_INFO_FAILURE:
      return {
        ...state,
        appInfo: {
          loading: false,
        },
        error: action.error,
      };

    /* Questionnaire List */
    case questionnaireConstants.QUESTIONNAIRE_REQUEST:
      return {
        ...state,
        pageData: {
          loading: true,
        },
      };
    case questionnaireConstants.QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        finalSubmitted: status,
        pageData: {
          ...state.pageData,
          loading: false,
          data: action.response,
        },
      };
    case questionnaireConstants.QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        pageData: {
          loading: false,
        },
        error: action.error,
      };

    /* Get Answer Data */
    case questionnaireConstants.QUESTIONOPTION_REQUEST:
      return {
        ...state,
        answerData: {
          loading: true,
        },
      };
    case questionnaireConstants.QUESTIONOPTION_SUCCESS:
      return {
        ...state,
        answerData: {
          ...state.answerData,
          loading: false,
          data: action.response,
        },
      };

    case questionnaireConstants.QUESTIONOPTION_FAILURE:
      return {
        ...state,
        answerData: {
          loading: false,
        },
        error: action.error,
      };

    /* Save Questionnaire */
    case questionnaireConstants.QUESTIONNAIRE_SAVE_REQUEST:
      return {
        ...state,
        saving: true,
      };
    case questionnaireConstants.QUESTIONNAIRE_SAVE_SUCCESS:
      return {
        ...state,
        saving: false,
      };
    case questionnaireConstants.QUESTIONNAIRE_SAVE_FAILURE:
      return {
        ...state,
        saving: false,
        error: action.error,
      };

    /* Submit Questionnaire */
    case questionnaireConstants.QUESTIONNAIRE_FINAL_REQUEST:
      return {
        ...state,
        saving: true,
      };
    case questionnaireConstants.QUESTIONNAIRE_FINAL_SUCCESS:
      return {
        ...state,
        saving: false,
        isSubmitted: true,
        finalSubmitted: true,
      };
    case questionnaireConstants.QUESTIONNAIRE_FINAL_FAILURE:
      return {
        ...state,
        saving: false,
        submitError: action.error,
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
