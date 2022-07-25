import React, { Fragment } from "react";
import PageTitle from "../../Layout/AppMain/PageTitle";
//import Tabs from "react-responsive-tabs";

// Child component
import Reporting from "./TabComponents/Reporting/Reporting";

/* 
const tabsContent = [
  {
    title: "Reporting ",
    content: <Reporting />,
  },
]; */

const ReportingMain = () => {
  return (
    <Fragment>
      <PageTitle
        title="Reporting"
        heading="Reporting"
        subheading="Reporting"
        icon="pe-7s-graph text-success"
      />
      <h5 style={{ fontSize: "16px", fontWeight: "600" }}>Vendor Search</h5>
      <p style={{ fontSize: "14px", fontWeight: "400" }}>Search vendor or company by name or selected options</p>
      {<Reporting />}
    </Fragment>
  );
};

export default ReportingMain;
