import React, { Fragment, useState } from "react";

import Tabs from "react-responsive-tabs";
import PageTitle from "../../Layout/AppMain/PageTitle";

// Child Component
// import VendorProfile from "./TabComponents/VendorInfo/VendorProfile";
import ReviewScoring from "./TabComponents/VendorInfo/ReviewScoring";
import Checklogoutbrowser from "../Utility/Checklogout";

const tabsContent = [
  {
    title: "VENDOR PROFILE ",
    content: <VendorProfile />,
  },
  {
    title: "REVIEW & SCORING",
    content: <ReviewScoring />,
  },
];

const getTabs = () => {
  let tabsData = tabsContent;

  if (localStorage.getItem("user") !== null) {
    const role = JSON.parse(localStorage.getItem("user")).roles[0];
    if (role === "VNDR") {
      tabsData = tabsContent.filter(
        (item) => item.title !== "REVIEW & SCORING"
      );
    }
  }
  return tabsData.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
};

const VendorInfo = () => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();
  const [currentTabName, setCurrentTabName] = useState("Vendor Profile");
  const [currentTab, setCurrentTab] = useState(0);

  const tabChange = (value) => {
    setCurrentTab(value);
    getTabsName(value);
  };

  const getTabsName = (value) => {
    if (value === 0) {
      setCurrentTabName("Vendor Profile");
    } else if (value === 1) {
      setCurrentTabName("Review & Scoring");
    }
  };

  return (
    <Fragment>
      <PageTitle
        title="Vendor Info"
        currentTab={[currentTabName]}
        breadcrumbName="vendorInfo"
        subheading="Provide vendor information"
        icon="pe-7s-graph text-success"
        style={{ padding: "8px 30px !important" }}
      />
      {/* <h5 style={{ fontSize: "1px", fontWeight: "600" }}></h5> */}
      <p style={{ fontSize: "14px", fontWeight: "400" }}></p>
      <Tabs
        tabsWrapperClass="body-tabs body-tabs-layout"
        transform={false}
        showInkBar={true}
        selectedTabKey={currentTab}
        items={getTabs()}
        onChange={(e) => tabChange(e)}
      />
    </Fragment>
  );
};
export default VendorInfo;
