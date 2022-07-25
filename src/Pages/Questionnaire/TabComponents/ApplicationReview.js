/* eslint-disable */
import React, { Fragment } from "react";
import Tabs from "react-responsive-tabs";

import { Button } from "reactstrap";
import CompanyInfoReview from "./ApplicationReview/CompanyInfo";
import MiscellaneousReview from "./ApplicationReview/miscellaneous";
import UploadDocumentReview from "./ApplicationReview/UploadDocument";
import { useState } from "react";
import Checklogoutbrowser from "../../Utility/Checklogout";

const ApplicationReview = ({ changeStep }) => {

  const { checklogout } = Checklogoutbrowser();
  checklogout();

  const [currentTab, setCurrentTab] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const tabCount = 2;
  const tabsContent = [
    {
      title: "Company Info ",
      content: (
        <CompanyInfoReview
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
    {
      title: "Miscellaneous",
      content: (
        <MiscellaneousReview
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
    {
      title: "Document Upload",
      content: (
        <UploadDocumentReview
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
  ];

  const getTabs = () => {
    return tabsContent.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.content,
      key: index,
    }));
  };

  const handleSubComp = (direction) => {
    switch (direction) {
      case "next":
        currentTab < 2 ? setCurrentTab(currentTab + 1) : "";
        changeStep("next", tabCount, currentTab);
        break;
      case "prev":
        currentTab > 0 ? setCurrentTab(currentTab - 1) : "";
        changeStep("prev", tabCount, currentTab);
        break;
      default:
        console.log(`Sorry, we are unable to handle ${direction}.`);
    }
    if (currentTab == 0 || currentTab >= 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <Fragment>
      <Tabs
        tabsWrapperClass="body-tabs body-tabs-layout"
        transform={false}
        showInkBar={true}
        selectedTabKey={currentTab}
        items={getTabs()}
        onChange={(e) => setCurrentTab(e)}
      />
      <Button
        className="btn-primary"
        style={{
          display: "inline",
          borderColor: "#2e6ce4",
          padding: "7px 16px !important",
        }}
        onClick={() => handleSubComp("next")}
      >
        {/*  Submit */}
        Save &#38; Continue
      </Button>
      <Button
        className="secondrybtn"
        style={{ display: "inline", float: "left", fontSize: "22px", marginLeft: "-15px !important" }}
        onClick={() => handleSubComp("prev")}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>
      {/*<Button
        className="btn btn-secondar"
        style={{ display: "inline", float: "right" }}
        onClick={() => handleSubComp("prev")}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>*/}
    </Fragment>
  );
};

export default ApplicationReview;
