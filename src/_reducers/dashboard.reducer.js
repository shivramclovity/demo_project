import { dashboardConstants } from "../_constants/dashboard.constant";

export function dashboards(state = {}, action) {
  switch (action.type) {
    /* Dashboard */
    case dashboardConstants.DASHBOARDTABLE_REQUEST:
      return {
        loading: true,
      };
    case dashboardConstants.DASHBOARDTABLE_SUCCESS:
      return {
        vendorList: action.response.response,
      };
    case dashboardConstants.DASHBOARDTABLE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
