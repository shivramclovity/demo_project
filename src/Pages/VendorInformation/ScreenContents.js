import React from "react";
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
import { GetAnswer } from "./GetAnswer";

const ScreenContents = ({ screens }) => {
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
          {screens?.map((data, indx) => {
            return (
              <Form key={indx}>
                <CardTitle
                  style={{
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {data.longDescription.replace("screen", "")}
                </CardTitle>

                {data?.sections?.map((section) => {
                  return (
                    <div key={section.id}>
                      <CardTitle style={{ padding: "8px", background: "#eee" }}>
                        {section.shortDescription.replace("Section", "")}
                      </CardTitle>
                      <hr />
                      {section?.questions.map((item) => {
                        let initialValue = GetAnswer(item.id);
                        let optionsArr = [];
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
                                    disabled={true}
                                  />
                                ) : (
                                  <InputElement
                                    type={item.control.key}
                                    name={item.label.shortDescription}
                                    value={initialValue}
                                    disabled={true}
                                  />
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  );
                })}
              </Form>
            );
          })}
        </CardBody>
      </Card>
    </ReactCSSTransitionGroup>
  );
};
export default React.memo(ScreenContents);
