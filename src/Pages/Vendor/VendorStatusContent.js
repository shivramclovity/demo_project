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
import CustomSelect from "../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../Utility/Checklogout";

const VendorStatusContent = () => {
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
        <h5 style={{ fontSize: "16px", fontWeight: "600" }}>Vendor Status</h5>
        <p style={{ fontSize: "14px", fontWeight: "400" }}>
          Vendor Status Information
        </p>
        <Card className="main-card mb-3 top-sec">
          <Row form>
            <Col sm={6}>
              <FormGroup className="form-top">
                <span className="text-shead">Vendor 678</span>
              </FormGroup>
            </Col>
            <Col sm={6} className="status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Status:
                  <span className="text-shead status-required">
                    &nbsp;Pending Application Review
                  </span>
                </span>
              </FormGroup>
            </Col>
            <div className="clearfix"></div>
            <Col sm={6} className="text-head">
              <FormGroup className="form-top">
                <span className="text-head">
                  Type: <span className="text-shead">BEP Full Application</span>
                </span>
              </FormGroup>
            </Col>
            <Col sm={6} className="text-head status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Started: <span className="text-shead">01/25/2022</span>
                </span>
              </FormGroup>
            </Col>
            <div className="clearfix"></div>
            <Col sm={6} className="text-head">
              <FormGroup className="form-top">
                <span className="text-head">
                  App No.: <span className="text-shead">#03105864</span>
                </span>
              </FormGroup>
            </Col>
            <Col sm={6} className="text-head status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Submitted: <span className="text-shead">01/28/2022</span>
                </span>
              </FormGroup>
            </Col>
          </Row>
        </Card>
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle style={{ marginBottom: "1.75rem" }}>
              Vendor Status Information
            </CardTitle>
            <Form>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label for="exampleAddress">
                      Company Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="comapnyname"
                      id="comapnyname"
                      placeholder="Contact name (eg. Vendor 678)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="contactDetails">
                      Contact Details <span className="text-danger">*</span>
                    </Label>

                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="contactDetails"> &nbsp;</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Contact email (eg. johndoe@example.com)"
                      readOnly
                      //  onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      readOnly
                      //  onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="category" style={{ marginBottom: "0.6rem" }}>
                      Category <span className="text-danger">*</span>
                    </Label>
                    <select
                      name="category"
                      id="category"
                      className="custom-select"
                      placeholder="Hardware"
                      disabled
                    ></select>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="web" style={{ marginBottom: "0.6rem" }}>
                      Website
                    </Label>
                    <Input
                      type="text"
                      name="websiteurl"
                      id="websiteurl"
                      placeholder="www.vendor768.com"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address line 1 (eg. 545 Wise Street)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="address2"
                      id="address2"
                      placeholder="Address line 2"
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginBottom: "10px" }}>
                <Col md={4}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder=""
                      value=""
                    />
                    {/*<select
                      name="category"
                      id="category"
                      className="custom-select"
                      placeholder="Atlanta"
                      disabled
  ></select>*/}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <select
                      name="state"
                      id="state"
                      className="custom-select readonly"
                      placeholder="GA"
                      disabled
                    ></select>
                  </FormGroup>
                </Col>
                <Col sm={4}>
                  <FormGroup>
                    <Label for="zipcode">Zip</Label>
                    <Input
                      type="text"
                      name="zip"
                      id="zipcode"
                      placeholder="Zip code (eg. 30301)"
                      readOnly
                    />
                  </FormGroup>
                </Col>
                {/*<CustomDatepicker value={value} onChange={setValue} />*/}
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label for="shorDesc">Short Description</Label>
                    <Input
                      type="textarea"
                      name="shorDesc"
                      id="shorDesc"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod tortor ut scelerisque pharetra. Nullam pharetra urna vitae eros vestibulum, eget congue ante fringilla. Fusce vehicula risus a tellus commodo, quis placerat nunc elementum. Curabitur porttitor augue id nulla venenatis iaculis."
                      readOnly
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

export default VendorStatusContent;
