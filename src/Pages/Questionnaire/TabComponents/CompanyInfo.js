/* eslint-disable */
import React, { Fragment, useState, useEffect } from "react";
import Tabs from "react-responsive-tabs";
import { Button, InputGroupText } from "reactstrap";
import Information from "./Company/Information";
import Qualifications from "./Company/Qualifications";
import Segment from "./Company/Segment";
import UseCases from "./Company/UseCases";
import Checklogoutbrowser from "../../Utility/Checklogout";
//import Infodynamic from "./Company/InformationDynamic";

const CompanyInfo = ({ changeStep, isPrevious }) => {
  const { checklogout } = Checklogoutbrowser();
  const [currentTab, setCurrentTab] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const tabCount = 3;
  checklogout();

  useEffect(() => {
    if (isPrevious == true) {
      setCurrentTab(tabCount);
    }
    currentTab == 0 ? setDisabledPrev(true) : setDisabledPrev(false);
  });

  const tabsContent = [
    {
      title: "Information ",
      content: (
        <Information
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
    {
      title: "Qualifications",
      content: (
        <Qualifications
          handleSubComp={(direction) => handleSubComp(direction)}
        />
      ),
    },
    {
      title: "Segment ",
      content: (
        <Segment handleSubComp={(direction) => handleSubComp(direction)} />
      ),
    },
    {
      title: "Use cases",
      content: (
        <UseCases
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
        currentTab < 3 ? setCurrentTab(currentTab + 1) : "";
        changeStep("next", tabCount, currentTab);
        setDisabledPrev(false);
        break;
      case "prev":
        currentTab > 0 ? setCurrentTab(currentTab - 1) : "";
        changeStep("prev", tabCount, currentTab);
        currentTab == 1 ? setDisabledPrev(true) : setDisabledPrev(false);
        break;
      default:
        console.log(`Sorry, we are unable to handle ${direction}.`);
    }
    /*  if (currentTab == 0 || currentTab >= 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    } */
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
        Save &#38; Continue
      </Button>

      {/*<Button
        className="btn-secondar"
        style={{ display: "inline", float: "right" }}
        onClick={() => handleSubComp("prev")}
        disabled={disabledPrev}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>*/}
    </Fragment>
  );
};

export default CompanyInfo;
