/* eslint-disable */
import React, { Fragment } from "react";
import Tabs from "react-responsive-tabs";
import MiscUseCases from "./Miscellaneous/UseCases";
import Security from "./Miscellaneous/Security";
import CloudDataServices from "./Miscellaneous/CloudDataServices";
import { useState, useEffect } from "react";
import SystemIntegrators from "./Miscellaneous/SystemIntegrators";

import { Button } from "reactstrap";
import Checklogoutbrowser from "../../Utility/Checklogout";
const Miscellaneous = ({ changeStep, isPrevious }) => {

  const { checklogout } = Checklogoutbrowser();
  const [currentTab, setCurrentTab] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const tabCount = 3;
  checklogout();
  // console.log("misc" + isPrevious);
  useEffect(() => {
    if (isPrevious == true) {
      setCurrentTab(tabCount);
      // console.log("inside tab" + isPrevious);
    }
  });

  const tabsContent = [
    {
      title: "Use Cases ",
      content: (
        <MiscUseCases
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
    {
      title: "Security",
      content: (
        <Security handleSubComp={(direction) => handleSubComp(direction)} />
      ),
    },
    {
      title: "Cloud & Data Services ",
      content: (
        <CloudDataServices
          handleSubComp={(direction) => handleSubComp(direction)}
        />
      ),
    },
    {
      title: "System Integrators",
      content: (
        <SystemIntegrators
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
        currentTab < tabCount ? setCurrentTab(currentTab + 1) : "";
        changeStep("next", tabCount, currentTab);

        /*   if(currentTab ==0 || currentTab >= 2 )
          {
            console.log("in current tab 1" + currentTab);
            setDisabled(false);
            setDisabledPrev(false);
          }
          else
          {
            setDisabled(false);
            setDisabledPrev(false);
            console.log("in current tab2" + currentTab);
          } */
        break;
      case "prev":
        currentTab > 0 ? setCurrentTab(currentTab - 1) : "";
        changeStep("prev", tabCount, currentTab);
        break;
      default:
        console.log(`Sorry, we are unable to handle ${direction}.`);
    }
    if (currentTab == 0 || currentTab >= 2) {
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
        Save &#38; Continue
      </Button>
      <Button
        className="secondryabbtn"
        style={{
          display: "inline",
          float: "left",
        }}
        onClick={() => handleSubComp("prev")}
      >
        Back
      </Button>
      {/*<Button
        className="btn btn-secondar"
        style={{ display: "inline", float: "right" }}
        // onClick={() => changeStep("prev")}
        onClick={() => handleSubComp("prev")}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>*/}
    </Fragment>
  );
};

export default Miscellaneous;
