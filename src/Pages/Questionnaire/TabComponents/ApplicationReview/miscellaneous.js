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

const MiscellaneousReview = ({ handleSubComp, disabled }) => {
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
            <CardTitle style={{ marginBottom: "30px" }}>
              Use cases details
            </CardTitle>
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Light
                      <input
                        type="checkbox"
                        name="chkSmartLight"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Parking
                      <input
                        type="checkbox"
                        name="chkSamrtParking"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Transportation
                      <input
                        type="checkbox"
                        name="chkSmartTransportation"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Utilities
                      <input
                        type="checkbox"
                        name="chkSamrtUtilities"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Traffic
                      <input
                        type="checkbox"
                        name="chkSmartTraffic"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Air Quality
                      <input
                        type="checkbox"
                        name="chkSmartAirQuality"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Pedestrian Tracking
                      <input
                        type="checkbox"
                        name="chkSamrtPedestrianTracking"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Waste Management
                      <input
                        type="checkbox"
                        name="chkSmartWasteManagement"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Grid
                      <input
                        type="checkbox"
                        name="chkSmartGrid"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Waerable
                      <input
                        type="checkbox"
                        name="chkSmartWaerable"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Pedestrian Tracking
                      <input
                        type="checkbox"
                        name="chkPedestrianTracking"
                        defaultChecked
                        disabled
                      />
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
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label
                    for="keyTechnologyDevelopmentPartners"
                    style={{ marginBottom: "14px" }}
                  >
                    &nbsp;
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Key Technology Development Partners
                      <input
                        type="checkbox"
                        name="chkkeyTechnologyDevelopmentPartners"
                        disabled
                        defaultChecked
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "15px" }}>
                Security Details
              </CardTitle>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Security
                      <input
                        type="checkbox"
                        name="chkDataSecurity"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Network Security
                      <input
                        type="checkbox"
                        name="chkNetworkSecurity"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Devices Security
                      <input
                        type="checkbox"
                        name="chkDevicesSecurity"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Lighting and Control Devices
                      <input
                        type="checkbox"
                        name="chkLightControlDevices"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup className="chkbx">
                    <Label for="others1">Others</Label>
                    <Input
                      type="text"
                      name="others1"
                      id="others1"
                      placeholder="Others"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ marginTop: "6px" }}>Hardware and devices</CardTitle>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Key Technology Development Partners
                      <input
                        type="checkbox"
                        name="chkKeyTechDevPartner"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Sensors
                      <input
                        type="checkbox"
                        name="chkSensors"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Digital Signage
                      <input
                        type="checkbox"
                        name="chkDigitalSignage"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Parking Meters/Payment Terminals
                      <input
                        type="checkbox"
                        name="chkParkingTerminals"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="others2">Others</Label>
                    <Input
                      type="text"
                      name="others2"
                      id="others2"
                      placeholder="Others"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "5px" }}>
                Cloud and data services details
              </CardTitle>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Cloud services
                      <input
                        type="checkbox"
                        name="chkCloudServices"
                        disabled
                        defaultChecked
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Platform/Aggregators
                      <input
                        type="checkbox"
                        name="chkDataPaltform"
                        disabled
                        defaultChecked
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Marketplaces/Exchanges
                      <input
                        type="checkbox"
                        name="chkDataMarketplaces"
                        disabled
                        defaultChecked
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "8px" }}>
                System integrators details
              </CardTitle>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      OT/Physical systems integration
                      <input
                        type="checkbox"
                        name="chkPhysicalSystemIntegration"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Mixed (IT + OT) systems integration
                      <input
                        type="checkbox"
                        name="chkMixed"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Specialty Systems Integration
                      <input
                        type="checkbox"
                        name="chkSpecialty"
                        defaultChecked
                        disabled
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

export default MiscellaneousReview;
