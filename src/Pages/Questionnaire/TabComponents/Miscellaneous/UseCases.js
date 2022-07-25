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

const MiscUseCases = ({ handleSubComp, disabled }) => {
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
            <CardTitle style={{ paddingBottom: "18px" }}>
              Use cases options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
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
                      <input type="checkbox" name="chkSamrtParking" />
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
              </Row>
              <Row form>
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
              </Row>
              <Row form>
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
              </Row>
              <Row form>
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
                      <input type="checkbox" name="chkSamrtAirQuality" />
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
                        name="chkSmartPedestrianTracking"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
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
                        name="chkSamrtCurbsideManagement"
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
                        name="chkSmartFirstResponderManagement"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Waste Management
                      <input type="checkbox" name="chkSmartWasteManagement" />
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
                      <input type="checkbox" name="chkSmartNetwork" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
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
                      Smart Monitoring (Network, utility & HVAC)
                      <input type="checkbox" name="chkSamrtMonitoring" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Wearable
                      <input type="checkbox" name="chkSamrtWaerable" />
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
                      <input type="checkbox" name="chkPedestrian" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Sensor/Device Manufacturing or Supplier
                      <input type="checkbox" name="chkSensorDevice" />
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
                      <input type="checkbox" name="chkNetworkSim" />
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
                      Data Cyber Security
                      <input type="checkbox" name="chkDataCyber" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Cloud Providers or Resellers
                      <input type="checkbox" name="chkCloudResellers" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Dynamic Pricing for Electric
                      <input type="checkbox" name="chkDynamicElectric" />
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
                      Smart Alternative Vehicles (Scooter, E-Bikes)
                      <input type="checkbox" name="chkSmart" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Transportation Vehicles (People Movers)
                      <input type="checkbox" name="chkSmart" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart Enabler Hardware - Gateway, Sensor, Laptop, iPad &
                      Phone
                      <input type="checkbox" name="chkSmartEnableHardware" />
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
              </Row>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default MiscUseCases;
