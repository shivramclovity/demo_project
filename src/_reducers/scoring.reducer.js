import { scoringConstants } from "../_constants/scoring.constants";

export function scoring(state = {}, action) {
  switch (action.type) {
    /* Scoring List */
    case scoringConstants.SCORING_REQUEST:
      return {
        loading: true,
      };
    case scoringConstants.SCORING_SUCCESS:
      return {
        ...state,
        ...state.scoring,
        loading: false,
        scoringData: action.response,
      };
    case scoringConstants.SCORING_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
