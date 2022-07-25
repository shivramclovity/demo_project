import React from "react";
import { Stepper, Step } from "react-form-stepper";
import { Truncate } from "../Utility/Utility";

const StepperSection = (props) => {
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
    inactiveBgColor: "rgb(224, 224, 224)",
    inactiveTextColor: "#000",
    labelFontSize: "1rem",
    size: "2.7em",
  };

  return (
    <Stepper
      activeStep={
        props.finalSubmitted
          ? props.screenData.screenCount
          : props.screenData.activeScreen
      }
      connectorStateColors={true}
      styleConfig={{ ...styleConfig }}
      connectorStyleConfig={{ ...ConnectorStyleProps }}
    >
      {props.data?.map((screen, screenIndx) => (
        <Step
          id={screenIndx}
          key={screenIndx}
          onClick={() => props.changeScreen(screenIndx)}
          title={screen.shortDescription}
          label={Truncate(screen.shortDescription)}
        />
      ))}
      <Step
        id={props.data.length}
        key={props.data.length}
        onClick={() => props.changeScreen(props.data.length)}
        title="Application review"
        label={Truncate("Application review")}
      />
    </Stepper>
  );
};
export default StepperSection;
