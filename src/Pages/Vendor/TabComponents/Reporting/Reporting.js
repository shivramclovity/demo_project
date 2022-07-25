import React, { useEffect, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";

const Reporting = () => {
  useEffect(() => {
    CustomSelect();
  }, []);

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
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup style={{ marginBottom: "0.5rem" }}>
                    <Label for="numberCompanyname">
                      Company name
                    </Label>
                    <Input
                      type="text"
                      name="numberCompanyname"
                      id="numberCompanyname"
                      placeholder="Enter Company name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberUsLocations" style={{ display: "block" }}>
                      &nbsp;
                    </Label>
                    <Button className="mt-2 btn-default" name="find" style={{ float: "left" }}> Find </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Card className="main-card mb-3">
          <CardBody>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup style={{ marginBottom: "0.5rem" }}>
                    <Label for="numberUsLocations">
                      Segment
                    </Label>

                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkUseCaseOptions chkbx">
                    <label className="input">
                      Select all
                      <input type="checkbox" name="chkAll" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkUseCaseOptions chkbx">
                    <label className="input">
                      Smart city campus
                      <input type="checkbox" name="chkSmartCityCampus" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart multi-use building
                      <input type="checkbox" name="chkSmartMultiBuilding" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart city transportation or transit authority
                      <input type="checkbox" name="chkSmartCityTransaportation" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart city / municiple / public sector / federal / state
                      <input type="checkbox" name="chkSmartCityMunciple" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Card className="main-card mb-3">
          <CardBody>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup style={{ marginBottom: "0.5rem" }}>
                    <Label for="numberUsLocations">
                      Use cases
                    </Label>

                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkUseCaseOptions chkbx">
                    <label className="input">
                      Select all
                      <input type="checkbox" name="chkSelectAll" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
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
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Other
                      <input type="checkbox" name="chkOther" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>

            </Form>
          </CardBody>
        </Card>
        <Label>Selected items: <span style={{ color: "#E61E28" }}>4</span></Label>
        <Button
          className="btn-primary"
          style={{
            display: "inline",
            borderColor: "#2e6ce4",
            padding: "7px 16px !important",
          }}
        >
          Search
        </Button>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Reporting; 
