import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const OuterLayout = () => {
  return (
    <Fragment>
      <div className="app-main">
        <div className="app-main__outer" style={{ paddingLeft: "0" }}>
          <div className="app-main__inner" style={{ padding: "0% 20%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OuterLayout;
