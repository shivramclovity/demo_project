import React, { Fragment, useState, useEffect } from "react";

import Tabs from "react-responsive-tabs";
import PageTitle from "../../Layout/AppMain/PageTitle";

// Child Component
import ReviewScoring from "./ReviewScoring";
import Checklogoutbrowser from "../Utility/Checklogout";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { scoringActions } from "../../_actions/scoring.actions";
import Loader from "../Widgets/Loader/Loader";

const Scoring = () => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();
  const [parms] = useSearchParams();
  const appNo = parms.get("appno");
  const dataObj = useSelector((state) => state.scoring.scoringData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(scoringActions.getScoring(appNo));
  }, [appNo, dispatch]);

  const [currentTabName, setCurrentTabName] = useState("Review & Scoring");
  const [currentTab, setCurrentTab] = useState(0);

  const tabsContent = [
    {
      title: "REVIEW & SCORING",
      content: <ReviewScoring data={dataObj} />,
    },
  ];

  const getTabs = () => {
    let tabsData = tabsContent;
    return tabsData.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.content,
      key: index,
    }));
  };

  const tabChange = (value) => {
    setCurrentTab(value);
    getTabsName(value);
  };

  const getTabsName = (value) => {
    if (value === 0) {
      setCurrentTabName("Review & Scoring");
    }
  };

  return (
    <Fragment>
      {!dataObj && <Loader message="Please wait! Loading..."></Loader>}
      <PageTitle
        title="Vendor Information"
        currentTab={[currentTabName]}
        breadcrumbName="Review & Scoring"
        subheading="Provide vendor information"
        icon="pe-7s-graph text-success"
        style={{ padding: "8px 30px !important" }}
      />
      {dataObj && (
        <>
          <p style={{ fontSize: "14px", fontWeight: "400" }}></p>
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout"
            transform={false}
            showInkBar={true}
            selectedTabKey={currentTab}
            items={getTabs()}
            onChange={(e) => tabChange(e)}
          />
        </>
      )}
    </Fragment>
  );
};
export default Scoring;
