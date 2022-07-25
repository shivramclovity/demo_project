import React, { Fragment, useEffect } from "react";
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
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const SystemIntegrators = ({ handleSubComp, disabled }) => {
  useEffect(() => {
    CustomSelect();
  }, []);

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
            <CardTitle style={{ paddingBottom: "10px" }}>
              System integation options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      ICT/Digital systems integration
                      <input type="checkbox" name="chkIctSystemIntegration" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      OT/Physical systems integration
                      <input
                        type="checkbox"
                        name="chkOtPhysicalSystemIntegration"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Mixed (IT + OT) systems integration
                      <input type="checkbox" name="chkMixedSystemIntegration" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Speciality Systems Integration
                      <input
                        type="checkbox"
                        name="chkSpecialtySystemIntegration"
                      />
                      <span className="checkmark"></span>
                    </label>
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

export default SystemIntegrators;
