import React, { Fragment } from "react";
// import Tabs from "react-responsive-tabs";
import PageTitle from "../../Layout/AppMain/PageTitle";
import DashboardContent from "./DashboardContent";

// Child component
// import InviteVendorContent from "./InviteVendorContent";

const Dashboard = () => {
  return (
    <Fragment>
      <PageTitle
        title="Dashboard"
        //   heading="Dasboard"
        breadcrumbName="dashboard"
        subheading="Dasboard"
        icon="pe-7s-graph text-success"
      />
      {/* <InviteVendorContent /> */}

      <h5 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "25px" }}>
        Analytics Dashboard
      </h5>
      <p style={{ fontSize: "14px", fontWeight: "400", display: "none" }}>
        Sub content text will goes here
      </p>
      <DashboardContent />
    </Fragment>
  );
};

export default Dashboard;
