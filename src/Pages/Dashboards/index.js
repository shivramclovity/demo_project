import React, { Fragment } from "react";
import { Outlet, Route } from "react-router-dom";

// DASHBOARDS
// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import { ToastContainer } from "react-toastify";

const Dashboards = () => {
  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            {/* <BasicDashboard /> */}
            <Outlet />
            {/* <Route path={`${match.url}/basic`} component={BasicDashboard}/> */}
          </div>
          <AppFooter />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </Fragment>
  );
};

export default Dashboards;
