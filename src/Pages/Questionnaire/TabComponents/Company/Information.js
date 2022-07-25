import React, { Fragment, useEffect, useRef } from "react";
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
// import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
// import CustomDatepicker from "../../../Widgets/CustomDatepicker/CustomDatepicker";

const Information = () => {
  useEffect(() => {
    // CustomSelect();
  }, []);

  const textInput = useRef();

  /* function componentDidMount() {
    console.log("component did mount");
    this.textInput.focus();
  } */

  function handleClick() {
    console.log("clicked");
    textInput.current.focus();
  }

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
            <CardTitle>Information details</CardTitle>
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
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="ein">EIN</Label>
                    <Input type="text" name="ein" id="ein" placeholder="Ein" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="entityType">Entity Type</Label>
                    <Input
                      type="text"
                      name="entityType"
                      id="entityType"
                      placeholder="Entity type"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="corporateHeadquater">
                      Corporate Headquarter
                    </Label>
                    <Input
                      type="text"
                      name="corporateHeadquaterAddress1"
                      id="corporateHeadquaterAddress1"
                      placeholder="Corporate headquater address line 1 "
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="corporateHeadquaterAddress2"
                      id="corporateHeadquaterAddress2"
                      placeholder="Corporate headquater address line 2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="infoCity"
                      id="infoCity"
                      className="custom-select"
                      placeholder="Select City"
                    >
                      <option value="DH" className="selection">
                        Select City
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
                      name="infoState"
                      id="infoState"
                      className="custom-select"
                      placeholder="Select State"
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
                      name="infoZipCode"
                      id="infoZipCode"
                      placeholder="Zip code"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="infoCountry"
                      id="infoCountry"
                      className="custom-select"
                      placeholder="Select Country"
                    >
                      <option value="DH" className="selection">
                        Select Country
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
                      placeholder="Number of US locations"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="primaryLocationsUs">
                      Primary Address Serving in the US
                    </Label>
                    <Input
                      type="text"
                      name="primaryLocationsUsAddress1"
                      id="primaryLocationsUsAddress1"
                      placeholder="Primary address serving US line 1"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="primaryLocationsUsAddress2"
                      id="primaryLocationsUsAddress2"
                      placeholder="Primary address serving US line 2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <select
                      name="primaryCity"
                      id="primaryCity"
                      className="custom-select"
                      placeholder="Select City"
                    >
                      <option value="DH" className="selection">
                        Select City
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
                      name="primaryState"
                      id="primaryState"
                      className="custom-select"
                      placeholder="Select State"
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
                      name="primaryZipCode"
                      id="primaryZipCode"
                      placeholder="Zip code"
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
                      placeholder="Contact first name"
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
                      placeholder="Contact last name"
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
                      placeholder="Contact email"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactWorkNo"
                      id="mainPointContactWorkNo"
                      placeholder="Contact work no."
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactMobileNo"
                      id="mainPointContactMobileNo"
                      placeholder="Contact mobile no."
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactAddress1"
                      id="mainPointContactAddress1"
                      placeholder="Contact address line 1"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mainPointContactAddress2"
                      id="mainPointContactAddress2"
                      placeholder="Contact address line 2"
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
                      placeholder="Select city"
                    >
                      <option value="DH" className="selection">
                        Select City
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
                      placeholder="Select state"
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
                      placeholder="Zip code"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <Label for="dateFounded">Date Founded</Label>
                  <FormGroup>
                    {/*  <Input
                      type="text"
                      name="dateFounded"
                      id="dateFounded"
                      placeholder="MM/DD/YYYY"
                    /> */}
                    <span
                      className="date icon-Calendar---Dates"
                      onClick={handleClick}
                    ></span>
                    {/* <CustomDatepicker
                      value={value}
                      onChange={setValue}
                      ref={textInput}
                    /> */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="yearOperation">Year in Operation</Label>
                  <FormGroup>
                    <select
                      name="yearOperation"
                      id="yearOperation"
                      className="custom-select"
                      placeholder="Select Years"
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
                  <Label for="businessType">Business Type</Label>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Non-Profit
                      <input type="checkbox" name="chkNonProfit" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Privately Owned
                      <input type="checkbox" name="chkPrivatelyOwned" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Publicly Traded
                      <input type="checkbox" name="chkPublicklyTraded" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Start Up
                      <input type="checkbox" name="chkStartUp" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Seeking Funding
                      <input type="checkbox" name="chkSeekingFunding" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  {/*<Label for="minorityOwned"></Label>*/}
                  <FormGroup className="chkbx">
                    <label className="input">
                      Minority Owned
                      <input type="checkbox" name="chkMinorityOwned" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Women Owned
                      <input type="checkbox" name="chkWomenOwned" />
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

export default Information;
