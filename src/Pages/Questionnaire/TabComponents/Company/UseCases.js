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
  Input,
} from "reactstrap";
import CustomFilefield from "../../../Widgets/CustomeFilefield/CustomFilefield";

const UseCases = ({ handleSubComp, disabled }) => {
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
            <CardTitle style={{ marginBottom: "22px" }}>
              Use Cases options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkUseCaseOptions chkbx">
                    <label className="input">
                      Smart Light
                      <input type="checkbox" name="chkSmartLight" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Parking
                      <input type="checkbox" name="chkSmartParking" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Transportation
                      <input type="checkbox" name="chkSmartTransportation" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Mobility
                      <input type="checkbox" name="chkSmartMobility" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Utilities
                      <input type="checkbox" name="chkSmartUtilities" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Buildings
                      <input type="checkbox" name="chkSmartBuildings" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart School
                      <input type="checkbox" name="chkSmartSchool" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Traffic
                      <input type="checkbox" name="chkSmartTraffic" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Fleet Management
                      <input type="checkbox" name="chkSmartFleetManagement" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Asset Tracking
                      <input type="checkbox" name="chkSmartAssetTracking" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Air Quality
                      <input type="checkbox" name="chkSmartAirQuality" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Pedestrian Tracking
                      <input type="checkbox" name="chkSmartPedestrian" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      COVID Tracking
                      <input type="checkbox" name="chkCovidTracking" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Curbside Management
                      <input
                        type="checkbox"
                        name="chkSmartCurbsideManagement"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart First Responder Management
                      <input
                        type="checkbox"
                        name="chkSmartResponderManagement"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Waste Management
                      <input type="checkbox" name="chkSamrtWasteManagement" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Grid
                      <input type="checkbox" name="chkSmartGrid" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Network or SBMC/LTE/Single Cell
                      <input type="checkbox" name="chkSmartNetworkSingleCell" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Signage/Kiosk Display
                      <input type="checkbox" name="chkSmartSignage" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Wearable
                      <input type="checkbox" name="chkSmartWearble" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Monitoring (Network, utility & HVAC)
                      <input type="checkbox" name="chkSmartMonitoring" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Security
                      <input type="checkbox" name="chkSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      AI/ML
                      <input type="checkbox" name="chkAiMl" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Analytics/Data Trending/Dashboards
                      <input type="checkbox" name="chkAnalytics" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Pedestrian Tracking
                      <input type="checkbox" name="chkPedestrianTracking" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Sensor/Device Manufacturing or Supplier
                      <input type="checkbox" name="chkSensorManufacturing" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Gateway Manufacturer or Supplier
                      <input type="checkbox" name="chkGateway" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Network or SIM Supplier
                      <input type="checkbox" name="chkNetwork" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Micro-chip Processor OEM
                      <input type="checkbox" name="chkMicroChip" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      System Integrator/Consulting
                      <input type="checkbox" name="chkSystemIntegrator" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Utility Company
                      <input type="checkbox" name="chkUtilityCompany" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      City
                      <input type="checkbox" name="chkCity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Cyber Security
                      <input type="checkbox" name="chkDataCyberSecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Cloud Providers or Resellers
                      <input type="checkbox" name="chkCloudProviders" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Dynamic Pricing for Electric
                      <input type="checkbox" name="chkDynamicPricing" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Alternative Vehicles (Scooter, E-Bikes)
                      <input type="checkbox" name="chkSmartAlternative" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Transportation Vehicles (People Movers)
                      <input type="checkbox" name="chkSmartTransportation" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Water (Quality Monitoring, Leakage Detection &
                      Consumption Tracking)
                      <input type="checkbox" name="chkSmartWater" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Enabler Hardware - Gateway, Sensor, Laptop, iPad &
                      Phone
                      <input type="checkbox" name="chkSmartGateway" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginBottom: "12px" }}>
                <Col md={6}>
                  <FormGroup className="chkbx">
                    <Label for="others">Others</Label>
                    <Input
                      type="text"
                      name="others"
                      id="others"
                      placeholder="Others"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="chkbx">
                    <Label for="industriesServed">Industries Served</Label>
                    <Input
                      type="text"
                      name="industriesServed"
                      id="industriesServed"
                      placeholder="Industries served"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Federal Supplier
                      <input type="checkbox" name="chkFederalSupplier" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="dnsNumber">DUNS Number</Label>
                    <Input
                      type="text"
                      name="dnsNumber"
                      id="dnsNumber"
                      placeholder="DUNS number"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cageCode">CAGE Code</Label>
                    <Input
                      type="text"
                      name="cageCode"
                      id="cageCode"
                      placeholder="CAGE code"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="apiIntegrationInstructions">
                      API Integration Instructions
                    </Label>
                    <Input
                      type="text"
                      name="apiIntegrationInstructions"
                      id="apiIntegrationInstructions"
                      placeholder="Api ingtegration instructions"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label
                      for="apiIntegrationInstructionsFile"
                      style={{ display: "block", paddingTop: "8px" }}
                    >
                      &nbsp;
                    </Label>
                    {/* <input type="file" id="real-file" hidden="hidden" />
                    <Button type="button" id="custom-button">
                      Choose a file
                    </Button>
                    <span id="custom-text">No file chosen, yet.</span> */}
                    <CustomFilefield name="apiInstructionDoc" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <Label
                    for="industrieServed"
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Industries Served
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Hardware
                      <input type="checkbox" name="chkIndustriesServed" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Software
                      <input type="checkbox" name="chkSoftware" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Services
                      <input type="checkbox" name="chkServices" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="others1">Others</Label>
                    <Input type="text" name="others1" id="others1"
                      placeholder="Others"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                {/*} <Input type="checkbox" name="check" id="exampleCheck" />
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

export default UseCases;
