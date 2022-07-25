import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import Checklogoutbrowser from "../Utility/Checklogout";
import "./SuccessCheckmark.css";

const Success = () => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();

  return (
    <Fragment>
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
            <CardTitle></CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup
                    style={{ textAlign: "center", padding: "50px 0px" }}
                  >
                    <div className="wrapper_success">
                      <svg
                        className="checkmark_success"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark_circle_success"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark_check_success"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <Label style={{ fontSize: "24px", fontWeight: "600" }}>
                      Application submitted successfully!
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Success;
