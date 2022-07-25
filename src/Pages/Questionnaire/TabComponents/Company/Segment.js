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
} from "reactstrap";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const Segment = ({ handleSubComp }) => {

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
            <CardTitle style={{ marginBottom: "30px" }}>
              Segment options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City/Municipal/Public Sector/Federal/State
                      <input type="checkbox" name="chkSmartCity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Multi-Use Building
                      <input type="checkbox" name="chkSmartBuilding" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City Campus
                      <input type="checkbox" name="chkSmartCityCampus" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City Transportation or Transit Authority
                      <input type="checkbox" name="chkSmartCityTransit" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City Enabler
                      <input type="checkbox" name="chkSamrtCityEnbler" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City Utility
                      <input type="checkbox" name="chkSmartCityUtility" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup check>
                {/*<Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Check me out
  </Label>*/}
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Segment;
