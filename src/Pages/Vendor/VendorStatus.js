import React, { Fragment, useState } from "react";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Tabs from "react-responsive-tabs";

// Child component
//import VendorStatusContent from "./VendorStatusContent";
import CompanyDetails from "./TabComponents/VendorStatus/CompanyDetails";
import ProductImages from "./TabComponents/VendorStatus/ProductImages";
import Videos from "./TabComponents/VendorStatus/Videos";
import TechDocs from "./TabComponents/VendorStatus/TechDocs";
import Nda from "./TabComponents/VendorStatus/Nda";
import Checklogoutbrowser from "../Utility/Checklogout";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setActiveScreenTab } from "../../reducers/ThemeOptions";

const VendorStatus = () => {
  const { checklogout } = Checklogoutbrowser();
  // const dispatch = useDispatch();
  checklogout();
  const [currentTabName, setCurrentTabName] = useState("About Us");
  const [currentTab, setCurrentTab] = useState(0);
  const tabCount = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabsContent = [
    {
      title: "About us",
      content: <Nda handleSubComp={(direction) => handleSubComp(direction)} />,
    },
    {
      title: "COMPANY DETAILS",
      content: (
        <CompanyDetails
          handleSubComp={(direction) => handleSubComp(direction)}
        />
      ),
    },
    {
      title: "TECH DOCS",
      content: (
        <TechDocs handleSubComp={(direction) => handleSubComp(direction)} />
      ),
    },
    {
      title: "VIDEOS",
      content: (
        <Videos handleSubComp={(direction) => handleSubComp(direction)} />
      ),
    },
    {
      title: "PRODUCT IMAGES",
      content: (
        <ProductImages
          handleSubComp={(direction) => handleSubComp(direction)}
        />
      ),
    },
  ];

  const handleSubComp = (direction) => {
    // console.log("current tab default" + currentTab);
    switch (direction) {
      case "next":
        if (currentTab < tabCount) {
          setCurrentTab(currentTab + 1);
          getTabsName(currentTab + 1);
        }
        break;

      case "prev":
        if (currentTab > 0) {
          setCurrentTab(currentTab - 1);
          getTabsName(currentTab - 1);
        }
        break;
      default:
        console.log(`Sorry, we are unable to handle ${direction}.`);
    }
  };

  function getTabs() {
    return tabsContent.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.content,
      key: index,
    }));
  }

  function tabChange(value) {
    // dispatch(setActiveScreenTab([currentTabName]));
    setCurrentTab(value);
    getTabsName(value);
  }

  function getTabsName(value) {
    if (value === 0) {
      setCurrentTabName("About Us");
    } else if (value === 1) {
      setCurrentTabName("Company Details");
    } else if (value === 2) {
      setCurrentTabName("Tech Docs");
    } else if (value === 3) {
      setCurrentTabName("Videos");
    } else if (value === 4) {
      setCurrentTabName("Product Images");
    }
  }

  return (
    <Fragment>
      <PageTitle
        title="Vendor Status"
        currentTab={[currentTabName]}
        breadcrumbName="vendorStatus"
        subheading="Provide status information"
        icon="pe-7s-graph text-success"
      />
      {/*   <h5 style={{ fontSize: "16px", fontWeight: "600" }}>Vendor Status</h5> */}
      <p style={{ fontSize: "14px", fontWeight: "400" }}></p>
      <Tabs
        tabsWrapperClass="body-tabs body-tabs-layout"
        transform={false}
        showInkBar={true}
        selectedTabKey={currentTab}
        items={getTabs()}
        onChange={(e) => tabChange(e)}
      />
      {/*  <VendorStatusContent /> */}
    </Fragment>
  );
};

export default VendorStatus;
