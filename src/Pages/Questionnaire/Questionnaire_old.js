import React, { Fragment, useState } from "react";
import { Stepper, Step } from "react-form-stepper";

//import Tabs from "react-responsive-tabs";
import PageTitle from "../../Layout/AppMain/PageTitle";

// Questionnaire components
import CompanyInfo from "./TabComponents/CompanyInfo";
import Miscellaneous from "./TabComponents/Miscellaneous";
import UploadDocument from "./TabComponents/UploadDocument";
import ApplicationReview from "./TabComponents/ApplicationReview";
import Checklogoutbrowser from "../Utility/Checklogout";
import Success from "./Success";

const QuestionnaireOld = () => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPrevious, setIsPrevious] = useState(false);

  const handleStepChange = (direction, tabCount, currentTab) => {
    switch (direction) {
      case "next":
        checklogout();
        if (currentTab >= tabCount) {
          setCurrentStep(currentStep + 1);
        }
        break;
      case "prev":
        if (currentTab === 0) {
          setCurrentStep(currentStep - 1);
          setIsPrevious(true);
        } else {
          setIsPrevious(false);
        }
        break;
      default:
        console.log(`Sorry, we are out of ${direction}.`);
    }
  };

  const ConnectorStyleProps = {
    stepSize: 10,
    size: "0.1em",
    activeColor: "rgb(255, 188, 0)",
    completedColor: "#00d184",
    className: "customConnector",
  };

  const styleConfig = {
    activeBgColor: "rgb(255, 188, 0)",
    activeTextColor: "#000",
    completedBgColor: "#00d184",
    /* completedTextColor: "", */
    inactiveBgColor: "rgb(224, 224, 224)",
    inactiveTextColor: "#000",
    labelFontSize: "1rem",
    size: "2.7em",
  };

  return (
    <Fragment>
      <PageTitle
        title="Questionnaire"
        heading="Gneral Information Section"
        breadcrumbName="questionnaire"
        subheading="Gneral Information Section"
        icon="pe-7s-graph text-success"
      />
      <Stepper
        activeStep={currentStep}
        connectorStateColors={true}
        styleConfig={{ ...styleConfig }}
        connectorStyleConfig={{ ...ConnectorStyleProps }}
      >
        <Step onClick={() => setCurrentStep(0)} label="Company info" />
        <Step onClick={() => setCurrentStep(1)} label="Miscellaneous" />
        <Step onClick={() => setCurrentStep(2)} label="Document upload" />
        <Step onClick={() => setCurrentStep(3)} label="Application review" />
      </Stepper>

      {currentStep === 0 && (
        <CompanyInfo changeStep={handleStepChange} isPrevious={isPrevious} />
      )}
      {currentStep === 1 && (
        <Miscellaneous changeStep={handleStepChange} isPrevious={isPrevious} />
      )}
      {currentStep === 2 && <UploadDocument changeStep={handleStepChange} />}
      {currentStep === 3 && <ApplicationReview changeStep={handleStepChange} />}
      {currentStep === 4 && <Success />}
    </Fragment>
  );
};

export default QuestionnaireOld;
