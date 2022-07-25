import React, { useEffect, Fragment } from "react";
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
  Button,
} from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";
//import CustomFilefield from "../../../Widgets/CustomeFilefield/CustomFilefield";

const CompanyDetails = ({ handleSubComp }) => {
  useEffect(() => {
    CustomSelect();
  }, []);

  const { checklogout } = Checklogoutbrowser()
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
        <Card className="main-card mb-3 top-sec">
          <Row form>
            <Col sm={6}>
              <FormGroup className="form-top">
                <span className="status-vendor">Vendor 123</span>
              </FormGroup>
            </Col>
            <Col sm={6} className="status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Status:{" "}
                  <span className="text-shead status-required">
                    &nbsp;Approved - Legal Pending
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
            <CardTitle>Vendor Profile Details</CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Home"></i> <Label for="compayName" className="labeldetail">Company details</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Name:</strong> Vendor 123 llc</p>
                    <p className="pdetail"><strong>Address:</strong> 789 Cross Street, Buckhead, G.A, 30301</p>
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-User---Square"></i> <Label for="compayName" className="labeldetail">Point of contact</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Name:</strong> John Doe</p>
                    <p className="pdetail"><strong>Email:</strong> johndoe@email.com</p>
                    <p className="pdetail"><strong>Phone:</strong> (800)-123-5555</p>
                    <p className="pdetail"><strong>Address:</strong> 789 Cross Street, Buckhead, G.A, 30301</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Receipt"></i> <Label for="compayName" className="labeldetail">Business type</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Type:</strong> Privately owned</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Calendar---Note"></i> <Label for="compayName" className="labeldetail">Years in operation</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Years:</strong> 40</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-User---Square"></i> <Label for="compayName" className="labeldetail">Company size (employee)</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Employees:</strong> 50</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Dollar---Circle"></i> <Label for="compayName" className="labeldetail">Annual revenue</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Amount:</strong> $5,000,001-$10,000,000</p>
                    <p className="pdetail"><strong>Minority owned:</strong> No</p>
                    <p className="pdetail"><strong>Women owned:</strong> No</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Degrees"></i> <Label for="compayName" className="labeldetail">Company segment</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Segment:</strong> Smart city transportation or Transit authority</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Globe---2"></i> <Label for="compayName" className="labeldetail">Geographical area of operation</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Area:</strong> Atlanta, GA</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Book-Library"></i> <Label for="compayName" className="labeldetail">Federal supplier</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Option:</strong> Yes</p>
                    <p className="pdetail"><strong>DUNS number:</strong> 12-354-6789</p>
                    <p className="pdetail"><strong>Cage code:</strong> 12345</p>
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Notebook"></i> <Label for="compayName" className="labeldetail">Company capability (ies)</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Capabilities:</strong> Smart Utilities</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Video-Library"></i> <Label for="compayName" className="labeldetail">Video link (s)</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Link:</strong> www.123demo.com</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-Games"></i> <Label for="compayName" className="labeldetail">Company category</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Category:</strong> Hardware, Software</p>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Button
          className="btn-primary"
          style={{
            display: "inline",
            borderColor: "#2e6ce4",
            padding: "7px 16px !important",
          }}
          onClick={() => handleSubComp("next")}
        >
          Next
        </Button>
        <Button
          className="secondryabbtn"
          style={{ display: "inline", float: "left" }}
          onClick={() => handleSubComp("prev")}
        >
          Back
        </Button>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default CompanyDetails;
