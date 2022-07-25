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
import CustomFilefield from "../../../Widgets/CustomeFilefield/CustomFilefield";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const Qualifications = ({ handleSubComp }) => {
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
            <CardTitle>Qualification options</CardTitle>
            <Form>
              <Row form>
                <Col md={4}>
                  <Label for="qualificationOptions">&nbsp;</Label>
                  <FormGroup>
                    <label className="input">
                      Customer Case Studies
                      <input type="checkbox" name="chkCustomerCaseStudies" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label for="caseStudyFile">&nbsp;</Label>
                  <FormGroup>
                    {/* <input type="file" id="real-file" hidden="hidden" />
                    <Button type="button" id="custom-button">
                      Choose a file
                    </Button>
                    <span id="custom-text">No file chosen, yet.</span> */}
                    <CustomFilefield name="cuseStudyFile" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="averageRioKpi">
                      Average RIO of Solution and Related KPI
                    </Label>
                    <Input
                      type="email"
                      name="averageRioKpi"
                      id="averageRioKpi"
                      placeholder="Average RIO of solution and related kpi"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Product/Solution Certification
                      <input type="checkbox" name="chkProductSolution" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <label className="input">
                      Data Privacy and Security Credentials
                      <input type="checkbox" name="chkDataPrivacySecurity" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="averageRioKpi1"
                      id="averageRioKpi1"
                      placeholder="Email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Insurance Certifications
                      <input type="checkbox" name="chkInsuranceCert" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    {/* <input type="file" id="real-file" hidden="hidden" />
                    <Button type="button" id="custom-button">
                      Choose a file
                    </Button>
                    <span id="custom-text">No file chosen, yet.</span> */}
                    <CustomFilefield name="insCertificate" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <label className="input">
                      Industry-Specific Business Certifications
                      <input type="checkbox" name="chkIndustrySpecificCert" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    {/* <input type="file" id="real-file" hidden="hidden" />
                    <Button type="button" id="custom-button">
                      Choose a file
                    </Button>
                    <span id="custom-text">No file chosen, yet.</span> */}
                    <CustomFilefield name="bizzCertificate" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="regulatoryRisksImpacts">
                      Regulatory Risks and Impacts
                    </Label>
                    <Input
                      type="email"
                      name="regulatoryRisksImpacts"
                      id="regulatoryRisksImpacts"
                      placeholder="Regulatory risks impacts"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup className="form-heading">
                    <h6 className="form-heading">Stability</h6>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup className="form-heading">
                    <Label for="annualRevenue">
                      Annual Revenue (Last three Years)
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <Label for="year3">Year 3 (Most recent)</Label>
                  <FormGroup>
                    <select
                      name="year3"
                      id="year3"
                      className="custom-select"
                      placeholder="Annual revenue"
                    >
                      <option value="DH" className="">
                        0 - $5,000,000
                      </option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label for="year2">Year 2</Label>
                  <FormGroup>
                    <select
                      name="year2"
                      id="year2"
                      className="custom-select"
                      placeholder="Annual revenue year 2"
                    >
                      <option value="DH" className="">
                        0 - $5,000,000
                      </option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label for="year1">Year 1</Label>
                  <FormGroup>
                    <select
                      name="year1"
                      id="year1"
                      className="custom-select"
                      placeholder="Annual revenue year 1"
                    >
                      <option value="DH" className="">
                        0 - $5,000,000
                      </option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="totalFunding">Total Funding</Label>
                    <Input
                      type="text"
                      name="totalFunding"
                      id="totalFunding"
                      placeholder="Total funding"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mostRecentFundingAmount">
                      Most Recent Funding Amount
                    </Label>
                    <Input
                      type="text"
                      name="mostRecentFundingAmount"
                      id="mostRecentFundingAmount"
                      placeholder="Most recent funding amount"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Currently Seeking Funding
                      <input
                        type="checkbox"
                        name="chkCurrentlySeekingFunding"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <Label for="employeeCount">Employee Count</Label>
                  <FormGroup>
                    <select
                      name="employeeCount"
                      id="employeeCount"
                      className="custom-select"
                      placeholder="Select Employee Count"
                    >
                      <option value="DH" className="">
                        Less than 50
                      </option>
                      <option value="DH" className="">
                        51-100
                      </option>
                      <option value="DH" className="">
                        101-150
                      </option>
                      <option value="DH" className="">
                        151-200
                      </option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberInHouseDevelopers">
                      Numbers of In-House Developers
                    </Label>
                    <Input
                      type="text"
                      name="numberInHouseDevelopers"
                      id="numberInHouseDevelopers"
                      placeholder="No. in house developers"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberOffshoreDevelopers">
                      Numbers of Off-Shore Developers
                    </Label>
                    <Input
                      type="text"
                      name="numberOffshoreDevelopers"
                      id="numberOffshoreDevelopers"
                      placeholder="No. off-shore developers"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberCustomersSupported">
                      Numbers of Concurrent Customers Supported
                    </Label>
                    <Input
                      type="text"
                      name="numberCustomersSupported"
                      id="numberCustomersSupported"
                      placeholder="No. customers supported"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <Label for="commercial">Commercial</Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Willingness to co-brand and/or co-market solutions
                      <input type="checkbox" name="chkWillingCobrand" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Willingness to collaborate for RFPs
                      <input type="checkbox" name="chkWillingRfps" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Demo/Marketing collateral available
                      <input
                        type="checkbox"
                        name="chkDemoCollateralAvailable"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="processSolutionDeliver">
                      Process and average time to solution delivery
                    </Label>
                    <Input
                      type="text"
                      name="processSolutionDeliver"
                      id="processSolutionDeliver"
                      placeholder="Process and average time solution delivery"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="resourceRequiredImplementSolution">
                      Resources required to implement solution
                    </Label>
                    <Input
                      type="text"
                      name="resourceRequiredImplementSolution"
                      id="resourceRequiredImplementSolution"
                      placeholder="Resources required implement solution"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="preferredBusinessModel">
                      Preferred business model/agreement type
                    </Label>
                    <Input
                      type="text"
                      name="preferredBusinessModel"
                      id="preferredBusinessModel"
                      placeholder="Preferred business type"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="preferredModeCommunicationCox">
                      Preferred mode of communication with Cox
                    </Label>
                    <Input
                      type="text"
                      name="preferredModeCommunicationCox"
                      id="preferredModeCommunicationCox"
                      placeholder="Preferred mode of communication"
                    />
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

export default Qualifications;
