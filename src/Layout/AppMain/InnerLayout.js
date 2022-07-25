import React, { Fragment } from "react";
import { PrivateOutlet } from "./PrivateOutlet";

// Layout Setup
import AppHeader from "../AppHeader";
import AppSidebar from "../AppSidebar";
import AppFooter from "../AppFooter";
// import { Outlet } from "react-router-dom";

const InnerLayout = ({ allowedRoles }) => {
  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            {/* <Outlet /> */}
            <PrivateOutlet allowedRoles={allowedRoles} />
          </div>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default InnerLayout;
