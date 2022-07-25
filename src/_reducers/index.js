import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { vendors } from "./vendor.reducer";
import ThemeOptions from "../reducers/ThemeOptions";
import { dashboards } from "./dashboard.reducer";
import { questionnaire } from "./questionnaire.reducer";
import { scoring } from "./scoring.reducer";
import { legal } from "./legal.reducer";
import { vendorInfo } from "./vendorInfo.reducer";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export { ThemeOptions };

const rootReducer = combineReducers({
  ThemeOptions,
  authentication,
  users,
  alert,
  vendors,
  dashboards,
  questionnaire,
  scoring,
  legal,
  vendorInfo,
});

export default rootReducer;
