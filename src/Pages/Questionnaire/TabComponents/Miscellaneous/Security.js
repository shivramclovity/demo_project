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
  Label,
  Input,
} from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const Security = ({ handleSubComp }) => {
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
              Security Options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Security
                      <input type="checkbox" name="chkDataSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Network Security
                      <input type="checkbox" name="chkNetworkSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Devices Security
                      <input type="checkbox" name="chkDevicesSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Cloud Security
                      <input type="checkbox" name="chkCloudSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Lighting and Control Devices
                      <input type="checkbox" name="chkLightControlDevice" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="others">Others</Label>
                    <Input
                      type="text"
                      name="others"
                      id="others"
                      placeholder="Others"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle>Hardware and Devices</CardTitle>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Key Technology Development Partners
                      <input type="checkbox" name="chkKeyTechDevPartners" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Sensors
                      <input type="checkbox" name="chkSensors" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Small Cells/Gateways/Routers
                      <input type="checkbox" name="chkSmallCellsRouters" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Edge Computers/Servers
                      <input type="checkbox" name="chkEdgeComputersServers" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Video Cameras
                      <input type="checkbox" name="chkVideoCameras" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Lighting and Control Devices
                      <input type="checkbox" name="chkLightControlDevice" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Kiosks
                      <input type="checkbox" name="chkKiosks" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Digital Signage
                      <input type="checkbox" name="chkDigitalSignage" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Parking Meters/Payment Terminals
                      <input type="checkbox" name="chkParkingMeters" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="others1">Others</Label>
                    <Input
                      type="text"
                      name="others1"
                      id="others1"
                      placeholder="Others"
                    />
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

export default Security;
