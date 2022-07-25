import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";

// Layout components
import InnerLayout from "./InnerLayout";
import OuterLayout from "./OuterLayout";

// Page components
import Login from "../../Pages/Users/Login";
import Reset from "../../Pages/Users/Reset";
import ChangePassword from "../../Pages/Users/ChangePassword";
import InviteVendor from "../../Pages/Vendor/InviteVendor";
import Questionnaire from "../../Pages/Questionnaire/Questionnaire";
// import VendorInfo from "../../Pages/Vendor/VendorInfo";
import VendorStatus from "../../Pages/Vendor/VendorStatus";

import Administrative from "../../Pages/Administrative/Administrative";
import { alertActions, userActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Unauthorized } from "../../Pages/Vendor/Unauthorized";
import Dashboard from "../../Pages/Vendor/Dashboard";
import DynamicInputs from "../../Pages/Widgets/InputElement/DynamicInputs";
import Legal from "../../Pages/Vendor/Legal";
import usePageVisibility from "use-page-visibility";
import Checklogoutbrowser from "../../Pages/Utility/Checklogout";
import QuestionnaireOld from "../../Pages/Questionnaire/Questionnaire_old";
import VendorInformation from "../../Pages/VendorInformation/VendorInformation";
import Scoring from "../../Pages/ReviewScoring/Scoring";

// const Dashboards = lazy(() => import('../../Pages/Dashboards'));
// const Widgets = lazy(() => import('../../Pages/Widgets'));
// const Elements = lazy(() => import('../../Pages/Elements'));
// const Components = lazy(() => import('../../Pages/Components'));
// const Charts = lazy(() => import('../../Pages/Charts'));
// const Forms = lazy(() => import("../../Pages/Forms"));
// const Tables = lazy(() => import('../../Pages/Tables'));

const AppMain = () => {
  // const logofftime = 1;
  // let loggedoff = false;
  const { checklogout } = Checklogoutbrowser();
  checklogout();
  const handleVisibilityChange = (visible) => {
    if (visible) {
      checklogout();
    }
  };

  usePageVisibility(handleVisibilityChange);

  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const notify = (message, type) =>
    toast(message, {
      className: `alert-${type}`,
    });

  if (Object.keys(alert).length > 0) {
    notify(alert.message, alert.type);
    dispatch(alertActions.clear());
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<OuterLayout />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          {/*    <Route path="/*" element={<Navigate replace to="/login" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path=":change-password" element={<ChangePassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/dynamic-inputs" element={<DynamicInputs />} />
        </Route>

        <Route
          path="/"
          element={
            <InnerLayout
              allowedRoles={["ADMN", "VNDR", "SALE", "LEGL", "SMART_CITY_USER"]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route
            path="/vendor/vendor-information"
            element={<VendorInfo />}
          ></Route> */}
          <Route
            path="/vendor/vendor-information"
            element={<VendorInformation />}
          ></Route>
          <Route path="/vendor/vendor-status" element={<VendorStatus />} />
        </Route>

        <Route
          path="/vendor"
          element={<InnerLayout allowedRoles={["ADMN", "VNDR"]} />}
        >
          <Route
            path="/vendor"
            element={<Navigate to="/dashboard" replace />}
          />
        </Route>

        <Route element={<InnerLayout allowedRoles={["ADMN", "VNDR"]} />}>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
          <Route path="/questionnaire2" element={<QuestionnaireOld />}></Route>
          <Route
            path="/questionnaire/*"
            element={<NoMatch url="/dashboard" />}
          />
        </Route>

        <Route
          element={
            <InnerLayout
              allowedRoles={["ADMN", "SALE", "LEGL", "SMART_CITY_USER"]}
            />
          }
        >
          <Route path="/vendor/invite-vendor" element={<InviteVendor />} />
        </Route>

        <Route
          path="/vendor"
          element={<InnerLayout allowedRoles={["ADMN", "VNDR", "LEGL"]} />}
        >
          <Route path="/vendor/legal" element={<Legal />}></Route>
        </Route>

        <Route element={<InnerLayout allowedRoles={["ADMN"]} />}>
          <Route path="/admin" element={<Administrative />} />
          <Route path="/review-scoring" element={<Scoring />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<Navigate replace to="/unauthorized" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};
export default AppMain;

const NoMatch = ({ url }) => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={url ? url : "/"}>Go to dashboard</Link>
      </p>
    </div>
  );
};

const Logout = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(new Date());
    if (user) {
      dispatch(userActions.logout());
    } else {
      navigate("/login");
    }
  }, [user, dispatch, navigate]);

  return <></>;
};
