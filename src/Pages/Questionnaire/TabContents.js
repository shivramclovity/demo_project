import React, { useRef } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import InputElement from "../Widgets/InputElement/InputElement";
import { GetAnswer, GetAnswerObject } from "./GetAnswer";

const TabContents = ({ screenInfo, questions, finalSubmitted, userRole }) => {
  const frmName = "inputData"; //`screen_${screenData.activeScreen}__tab_${screenData.activeTab}`;
  const qForm = useRef(null);
  localStorage.setItem(frmName, JSON.stringify([]));
  const isDisabled =
    userRole === "ADMN" && finalSubmitted === true ? false : finalSubmitted;
  const addInputData = (dataObj) => {
    const data = JSON.parse(localStorage.getItem(frmName));
    const prvData = data.find(
      (data) => data.question_master === dataObj.question_master
    );

    if (prvData) {
      prvData.option_master = dataObj.option_master;
      prvData.additionalDetail = dataObj.additionalDetail;
    } else {
      data.push(dataObj);
    }
    localStorage.setItem(frmName, JSON.stringify(data));
  };

  const handleChange = (value, inputData, isDropdown = false) => {
    if (isDropdown) {
      /* 
       Find the value option master from questionnaire
       list and set/update the option_master below 
       */
      inputData.option_master = value;
      addInputData(inputData);
    } else {
      let trimmedData = value.trim();
      if (trimmedData !== "") {
        inputData.additionalDetail = trimmedData;
        addInputData(inputData);
      }
    }
  };

  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionName="TabsAnimation"
      transitionAppear={true}
      transitionAppearTimeout={0}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Card className="main-card mb-3">
        <CardBody>
          <CardTitle>{screenInfo}</CardTitle>

          <Form name={frmName} ref={qForm}>
            <Col md={12}>
              <FormGroup></FormGroup>
            </Col>
            {questions.map((item) => {
              let initialValue = GetAnswer(item.id);
              let answerObj = GetAnswerObject(item.id);

              let optVal =
                answerObj?.options.length > 0
                  ? answerObj?.options[0]?.id
                  : null;
              let inputInfo = {
                question_master: item?.id,
                question: answerObj?.id,
                option_master: item?.optionMasters[0]?.id,
                option: optVal,
                additionalDetail: "",
              };

              let optionsArr = [
                /*  { label: `Select ${item.label.shortDescription}`, value: "" }, */
              ];
              if (item.optionMasters.length > 1) {
                item.optionMasters.map((elem) =>
                  optionsArr.push({
                    label: elem.optionDetail.shortDescription,
                    value: elem.id,
                  })
                );
              }
              return (
                <Row form key={item.id}>
                  <Col md={12}>
                    <Label
                      for={item.label.shortDescription}
                      title={item.label.shortDescription}
                    >
                      {item?.label?.shortDescription}
                    </Label>
                    <FormGroup>
                      {item.control.key === "SLST" ||
                      item.control.key === "MLST" ? (
                        <InputElement
                          type={item.control.key}
                          name={item.label.shortDescription}
                          options={optionsArr}
                          value={initialValue}
                          handleChange={handleChange}
                          inputData={inputInfo}
                          disabled={isDisabled}
                        />
                      ) : (
                        <InputElement
                          type={item.control.key}
                          name={item.label.shortDescription}
                          value={initialValue}
                          handleChange={handleChange}
                          inputData={inputInfo}
                          disabled={isDisabled}
                        />
                      )}
                    </FormGroup>
                  </Col>
                </Row>
              );
            })}
          </Form>
        </CardBody>
      </Card>
    </ReactCSSTransitionGroup>
  );
};
export default TabContents;
