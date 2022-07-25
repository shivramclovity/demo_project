import { vendorInfoConstants } from "../_constants/vendorInfo.constants";

export function vendorInfo(state = {}, action) {
  switch (action.type) {
    /* Vendor question List */
    case vendorInfoConstants.VENDOR_INFO_REQUEST:
      return {
        loading: true,
      };
    case vendorInfoConstants.VENDOR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        ...state.vendorInfo,
        infoData: action.response,
      };
    case vendorInfoConstants.VENDOR_INFO_FAILURE:
      return {
        error: action.error,
      };

    case vendorInfoConstants.VENDOR_ANSWER_DATA_REQUEST:
      return {
        loading: true,
      };
    case vendorInfoConstants.VENDOR_ANSWER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        ...state.vendorInfo,
        answers: action.response,
      };
    case vendorInfoConstants.VENDOR_ANSWER_DATA_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
