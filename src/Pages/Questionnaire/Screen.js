import React, { Fragment, useState, useEffect } from "react";
import Tabs from "react-responsive-tabs";
import { Button } from "reactstrap";
import TabContents from "./TabContents";

const Screen = ({
  data,
  handleButtonChange,
  screenData,
  setCurrentTab,
  finalSubmitted,
  userRole,
}) => {
  const [isPrevious, setIsPrevious] = useState(false);

  const tabsContent = [];

  data?.sections?.map((section, index) => {
    return tabsContent.push({
      title: section.shortDescription, 
      content: (
        <TabContents
          screenData={screenData}
          screenInfo={section.longDescription} 
          questions={section.questions}
          finalSubmitted={finalSubmitted}
          userRole={userRole}
        />
      ),
      key: index,
    });
  });

  useEffect(() => {
    if (screenData.activeScreen === 0 && screenData.activeTab === 0) {
      setIsPrevious(false);
    } else {
      setIsPrevious(true);
    }
  }, [screenData]);

  return (
    <Fragment>
      <Tabs
        tabsWrapperClass="body-tabs body-tabs-layout"
        transform={false}
        showInkBar={true}
        selectedTabKey={screenData.activeTab}
        items={tabsContent}
        onChange={(e) => setCurrentTab(e)}
      />
      {isPrevious && (
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
      )}

      <Button
        className="btn-primary"
        style={{
          display: "inline",
          borderColor: "#2e6ce4",
          padding: "7px 16px !important",
        }}
        onClick={() => handleButtonChange("next")}
      >
        {!finalSubmitted || (finalSubmitted && userRole === "ADMN") ? (
          <span>Save &#38; Continue</span>
        ) : (
          <span>Next</span>
        )}
      </Button>
    </Fragment>
  );
};
export default React.memo(Screen);
