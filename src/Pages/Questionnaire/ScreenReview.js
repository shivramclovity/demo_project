import React, { memo, Fragment } from "react";
import Tabs from "react-responsive-tabs";
import { Button } from "reactstrap";
import ReviewContents from "./ReviewContents";
import Success from "./Success";

const ScreenReview = ({
  data,
  handleButtonChange,
  screenData,
  setCurrentTab,
  isSubmitted,
  finalSubmitted,
}) => {
  const tabsContent = [
    {
      title: "Review Sections ",
      content: <ReviewContents screens={data} />,
      key: 0,
    },
  ];

  return (
    <Fragment>
      {!isSubmitted ? (
        <div>
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout"
            transform={false}
            showInkBar={true}
            selectedTabKey={screenData.activeTab}
            items={tabsContent}
            onChange={(e) => setCurrentTab(e)}
          />

          <Button
            className="secondryabbtn"
            style={{
              display: "inline",
              float: "left",
            }}
            onClick={() => handleButtonChange("prev")}
          >
            Back
          </Button>
          {!finalSubmitted && (
            <Button
              className="btn-primary"
              style={{
                display: "inline",
                borderColor: "#2e6ce4",
                padding: "7px 16px !important",
              }}
              onClick={() => handleButtonChange("final")}
            >
              Submit
            </Button>
          )}
        </div>
      ) : (
        <Success />
      )}
    </Fragment>
  );
};
export default memo(ScreenReview);
