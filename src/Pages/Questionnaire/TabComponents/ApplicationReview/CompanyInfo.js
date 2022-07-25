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

const CompanyInfoReview = ({ handleSubComp, disabled }) => {
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
            <CardTitle>Company information Details</CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup style={{ marginBottom: "10px" }}></FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="companyName">Company Name or dba</Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company name"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="ein">EIN</Label>
                    <Input
                      type="text"
                      name="ein"
                      id="ein"
                      placeholder="Ein"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="entytyType">Entity Type</Label>
                    <Input
                      type="text"
                      name="entytyType"
                      id="entytyType"
                      placeholder="Entity type"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="corporateHeadQuarter">
                      Corporate Headquarter
                    </Label>
                    <Input
                      type="text"
                      name="corporateHeadQuarterAddressLine1"
                      id="corporateHeadQuarterAddressLine1"
                      placeholder="Corporate headquarter address line 1"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="corporateHeadQuarterAddressLine2"
                      id="corporateHeadQuarterAddressLine2"
                      placeholder="Corporate headquarter address line 2"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="companyCity"
                      id="companyCity"
                      className="custom-select"
                      placeholder="Atlanta"
                      disabled
                    >
                      <option value="DH" className="selection">
                        Atlanta
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="companyState"
                      id="companyState"
                      className="custom-select"
                      placeholder="GA"
                      disabled
                    >
                      <option value="DH" className="selection">
                        GA
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="companyZipcode"
                      id="companyZipcode"
                      placeholder="Headquarter zip code"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>

                <Col md={4}>
                  <FormGroup>
                    <select
                      name="companyCountry"
                      id="companyCountry"
                      className="custom-select"
                      placeholder="USA"
                      disabled
                    >
                      <option value="DH" className="selection">
                        USA
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="numberUsLocations">
                      Number of US Locations
                    </Label>
                    <Input
                      type="text"
                      name="numberUsLocations"
                      id="numberUsLocations"
                      placeholder="No. of US locations"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="primaryAddressUS">
                      Primary Address Serving in the US
                    </Label>
                    <Input
                      type="text"
                      name="primaryAddressUS1"
                      id="primaryAddressUS1"
                      placeholder="Primary address serving in US line 1"
                      readOnly
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="primaryAddressUS2"
                      id="primaryAddressUS2"
                      placeholder="Primary address serving in US line 2"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="pCity"
                      id="pCity"
                      className="custom-select"
                      placeholder="Atlanta"
                      disabled
                    >
                      <option value="DH" className="selection">
                        Atlanta
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="pState"
                      id="pState"
                      className="custom-select"
                      placeholder="GA"
                      disabled
                    >
                      <option value="DH" className="selection">
                        GA
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="pZipCode"
                      id="pZipCode"
                      placeholder="Zip code"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mainPointContactFirstName">
                      Main Point of Contact
                    </Label>
                    <Input
                      type="text"
                      name="mainPointContactFirstName"
                      id="mainPointContactFirstName"
                      placeholder="Main point contact first name"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mainPointContactLastName">&nbsp;</Label>
                    <Input
                      type="text"
                      name="mainPointContactLastName"
                      id="mainPointContactLastName"
                      placeholder="Main point contact last name"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactEmail"
                      id="mainPointContactEmail"
                      placeholder="Main point contact email"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactNumber"
                      id="mainPointContactNumber"
                      placeholder="Main point contact number"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactMobileNumber"
                      id="mainPointContactMobileNumber"
                      placeholder="Main point contact mobile no."
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactAddressLine1"
                      id="mainPointContactAddressLine1"
                      placeholder="Main point contact address line 1"
                      readOnly
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactAddressLine2"
                      id="mainPointContactAddressLine2"
                      placeholder="Main point contact address line 2"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="mainPointContactCity"
                      id="mainPointContactCity"
                      className="custom-select"
                      placeholder="Main point contact city"
                      disabled
                    >
                      <option value="DH" className="selection">
                        Atlanta
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="mainPointContactState"
                      id="mainPointContactState"
                      className="custom-select"
                      placeholder="GA"
                      disabled
                    >
                      <option value="DH" className="selection">
                        Select State
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactZipCode"
                      id="mainPointContactZipCode"
                      placeholder="Main point contact zip code"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <Label for="dateFounded">Date Founded</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="dateFounded"
                      id="dateFounded"
                      placeholder="Date founded (eg. 09/12/2016)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="yearOperation">Year in Operation</Label>
                  <FormGroup>
                    <select
                      name="yearOperation"
                      id="yearOperation"
                      className="custom-select"
                      placeholder="Year in operation (eg. 6-10)"
                      disabled
                    >
                      <option value="DH" className="selection">
                        0-5
                      </option>
                      <option value="A">6-10</option>
                      <option value="B">11-15</option>
                      <option value="C">16-20</option>
                      <option value="D">21-25</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <Label for="businessType" style={{ marginBottom: "12px" }}>
                    Business Type
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Non-Profit
                      <input
                        type="checkbox"
                        name="chkNonProfit"
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
                      Publicly Traded
                      <input
                        type="checkbox"
                        name="chkPubliclyTraded"
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
                      Seeking Funding
                      <input
                        type="checkbox"
                        name="chkSeekFunding"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Minority Owned
                      <input
                        type="checkbox"
                        name="chkMinorityOwned"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "15px" }}>
                Qualification Details
              </CardTitle>
              <hr />
              <Row form style={{ marginTop: "-14px" }}>
                <Col md={4}>
                  <Label for="qualificationDetails">&nbsp;</Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Customer Case Studies
                      <input
                        type="checkbox"
                        name="chkCustomerCaseStudies"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label for="qualificationDetailsFile">&nbsp;</Label>
                  <FormGroup>
                    <i
                      className="icon-File---Text"
                      style={{
                        fontSize: "26px",
                        color: "#2E6CE4",
                        cursor: "pointer",
                      }}
                    ></i>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="averageSolutionKpi">
                      Average RIO of Solution and Related KPI
                    </Label>
                    <Input
                      type="email"
                      name="averageSolutionKpi"
                      id="averageSolutionKpi"
                      placeholder="Average RIO of solution and related kpi"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Product/Solutuon Certification
                      <input
                        type="checkbox"
                        name="chkProductCert"
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
                      Data Privacy and Security Credentials
                      <input
                        type="checkbox"
                        name="chkDataPrivacy"
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
                    <Input
                      type="email"
                      name="averageSolutionKpi2"
                      id="averageSolutionKpi2"
                      placeholder="Average solution kpi"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Insurance Certifications
                      <input
                        type="checkbox"
                        name="chkInsuranceCertification"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <i
                      className="icon-File---Text"
                      style={{
                        fontSize: "26px",
                        color: "#2E6CE4",
                        cursor: "pointer",
                      }}
                    ></i>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Industry-Specific Business Certifications
                      <input
                        type="checkbox"
                        name="chkIndustryBusinessCert"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <i
                      className="icon-File---Text"
                      style={{
                        fontSize: "26px",
                        color: "#2E6CE4",
                        cursor: "pointer",
                      }}
                    ></i>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="regulatoryRiskImpact">
                      Regulatory Risks and Impacts
                    </Label>
                    <Input
                      type="email"
                      name="regulatoryRiskImpact"
                      id="regulatoryRiskImpact"
                      placeholder="Regulatory risks and impacts"
                      readOnly
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
              <hr />
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
                  <Label for="yearMostRecent">Year 3 (Most recent)</Label>
                  <FormGroup>
                    <select
                      name="yearMostRecent"
                      id="yearMostRecent"
                      className="custom-select"
                      placeholder="Year 3 (eg. $0 - $5,000,0000)"
                      disabled
                    >
                      <option value="DH" className="">
                        $0 - $5,000,000
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
                      placeholder="Year 2 (eg. $0 - $5,000,000)"
                      disabled
                    >
                      <option value="DH" className="">
                        $0 - $5,000,000
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
                      placeholder="Year 1 (eg. $0 - $5,000,000)"
                      disabled
                    >
                      <option value="DH" className="">
                        $0 - $5,000,000
                      </option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="totalFunding">Total Funding</Label>
                    <Input
                      type="text"
                      name="totalFunding"
                      id="totalFunding"
                      placeholder="Total funding (eg. $0-$5,000,000)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="mostRecentFunding">
                      Most Recent Funding Amount
                    </Label>
                    <Input
                      type="text"
                      name="mostRecentFunding"
                      id="mostRecentFunding"
                      placeholder="Most recent funding (eg.$0-$5,000,000)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label
                    for="currentlySeekingFunding"
                    style={{ marginBottom: "14px" }}
                  >
                    &nbsp;
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Currently Seeking Funding
                      <input
                        type="checkbox"
                        name="chkcurrentlySeekingFunding"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <Label for="employeeCount">Employee Count</Label>
                  <FormGroup>
                    <select
                      name="employeeCount"
                      id="employeeCount"
                      className="custom-select"
                      placeholder="Employee count (eg. 51-100)"
                      disabled
                    ></select>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="numberOfDevelopers">
                      Numbers of In-House Developers
                    </Label>
                    <Input
                      type="text"
                      name="numberOfDevelopers"
                      id="numberOfDevelopers"
                      placeholder="Number of developers (eg. 50)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="offShoreDevelopers">Off-Shore Developers</Label>
                    <Input
                      type="text"
                      name="offShoreDevelopers"
                      id="offShoreDevelopers"
                      placeholder="Off shore developers (eg. 50)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="numberCustomersSupported">
                      Numbers of Customers Supported
                    </Label>
                    <Input
                      type="text"
                      name="numberCustomersSupported"
                      id="numberCustomersSupported"
                      placeholder="No of customers supported (eg. 1000)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label
                    for="willingCollaborateRfps"
                    style={{ marginBottom: "14px" }}
                  >
                    &nbsp;
                  </Label>
                  <FormGroup className="chkbx">
                    <Label
                      for="willingCollaborateRfps"
                      style={{ marginBottom: "14px" }}
                    >
                      &nbsp;
                    </Label>
                    <label className="input">
                      Willingness to collaborate for RFPs
                      <input
                        type="checkbox"
                        name="chkwillingCollaborateRfps"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label
                    for="demoCollateralAvailable"
                    style={{ marginBottom: "14px" }}
                  >
                    &nbsp;
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Demo/Marketing collateral available
                      <input
                        type="checkbox"
                        name="chkdemoCollateralAvailable"
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
                    <Label for="processSolutionDelivery">
                      Process and average time to solution delivery
                    </Label>
                    <Input
                      type="text"
                      name="processSolutionDelivery"
                      id="processSolutionDelivery"
                      placeholder="Process and average time to solution delivery"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="resourceRequiredSolution">
                      Resources required to implement solution
                    </Label>
                    <Input
                      type="text"
                      name="resourceRequiredSolution"
                      id="resourceRequiredSolution"
                      placeholder="Resources required to implement solution"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="preferredBusinessType">
                      Preferred business model/agreement type
                    </Label>
                    <Input
                      type="text"
                      name="preferredBusinessType"
                      id="preferredBusinessType"
                      placeholder="Preferred business model/agreement type"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="prefferedModeCommunicationCox">
                      Preferred mode of communication with Cox
                    </Label>
                    <Input
                      type="text"
                      name="prefferedModeCommunicationCox"
                      id="prefferedModeCommunicationCox"
                      placeholder="Preferred mode of communication"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "15px" }}>
                Segment details
              </CardTitle>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Smart City/Municipal/Public Sector/Federal/State
                      <input
                        type="checkbox"
                        name="chkSmartCity"
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
                      Smart Multi-Use Building
                      <input
                        type="checkbox"
                        name="chkSmartBuilding"
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
                      Smart City Campus
                      <input
                        type="checkbox"
                        name="chkSamrtCampus"
                        defaultChecked
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ paddingTop: "15px" }}>
                Use cases Details
              </CardTitle>
              <hr />
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
                        name="chkSmartParking"
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
                        name="chkSmartTransaportation"
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
                        name="chkSmartUtilities"
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
                        name="chkSmartPedestrianTracking"
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
                <Col md={4}>
                  <FormGroup>
                    <Label for="others">Others</Label>
                    <Input
                      type="text"
                      name="others1"
                      id="others1"
                      placeholder="Others"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="industriesServed">Industries Served</Label>
                    <Input
                      type="text"
                      name="industriesServed"
                      id="industriesServed"
                      placeholder="Industries served"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label for="federalSupplier" style={{ marginBottom: "14px" }}>
                    &nbsp;
                  </Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Federal Supplier
                      <input
                        type="checkbox"
                        name="chkFederalSupplier"
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
                    <Label for="dunsNumber">DUNS Number</Label>
                    <Input
                      type="text"
                      name="dunsNumber"
                      id="dunsNumber"
                      placeholder="DUNS number"
                      readOnly
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
                      readOnly
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
                      placeholder="API integration instructions"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <Label
                    for="apiIntegrationInstructionsFile"
                    style={{ marginTop: "9px" }}
                  >
                    &nbsp;
                  </Label>

                  <FormGroup>
                    <i
                      className="icon-File---Text"
                      style={{
                        fontSize: "26px",
                        color: "#2E6CE4",
                        cursor: "pointer",
                      }}
                    ></i>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Software
                      <input
                        type="checkbox"
                        name="chkSoftware"
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
                      Services
                      <input
                        type="checkbox"
                        name="chkServices"
                        disabled
                        defaultChecked
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
                    <Input type="text" name="others" id="others" disabled placeholder="Others" />
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

export default CompanyInfoReview;
