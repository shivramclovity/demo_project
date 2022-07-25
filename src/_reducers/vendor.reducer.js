import { vendorConstants } from "../_constants";

export function vendors(state = {}, action) {
  switch (action.type) {
    /* Invite Vendor */
    case vendorConstants.INVITE_REQUEST:
      return {
        loading: true,
      };
    case vendorConstants.INVITE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.response,
      };
    case vendorConstants.INVITE_FAILURE:
      return {
        error: action.error,
      };

    /* Viewing Profile */
    case vendorConstants.VENDOR_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case vendorConstants.VENDOR_PROFILE_SUCCESS:
      return {
        viewProfile: action.response.response,
      };
    case vendorConstants.VENDOR_PROFILE_FAILURE:
      return {
        error: action.error,
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
