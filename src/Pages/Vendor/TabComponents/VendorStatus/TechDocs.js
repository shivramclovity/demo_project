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
import DownloadFile from "../../../Widgets/CustomeFilefield/DownloadFile";
import Checklogoutbrowser from "../../../Utility/Checklogout";


const TechDocs = ({ handleSubComp }) => {
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
                  Status:
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
            <CardTitle style={{ marginBottom: "1.75rem" }}>
              Company technical documents
            </CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-File---Code"></i> <Label for="compayName" className="labeldetail">Integration API (s)</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup style={{ paddingTop: "10px" }}>
                    <p className="pdetail"><strong>Download docs:</strong> {/*<span className="downicon"><i className="icon-File---Download"></i></span>*/}</p>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <DownloadFile
                      name="Cox_api"
                      placeholder="Cox_api"
                      custom="true"
                    />
                    <DownloadFile
                      name="Cox_api_file"
                      placeholder="Cox_api_file"
                      custom="true"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginTop: "30px" }}>
                <Col md={12}>
                  <FormGroup className="groupdetail">
                    <i className="detaili icon-File---Shredder"></i> <Label for="compayName" className="labeldetail">Collateral</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup style={{ paddingTop: "10px" }}>
                    <p className="pdetail"><strong>Download docs:</strong> {/*<span className="downicon"><i className="icon-File---Download"></i></span>*/}</p>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <DownloadFile
                      name="Cox_whitepaper"
                      placeholder="Cox_whitepaper"
                      custom="true"
                    />
                    <DownloadFile
                      name="Cox_whitepaper_n"
                      placeholder="Cox_whitepaper_n"
                      custom="true"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginTop: "30px" }}>
                <Col md={12}>
                  <FormGroup className="groupdetail">

                    <i className="detaili icon-File---Text"></i> <Label for="compayName" className="labeldetail">Certifications</Label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="grouphr">
                    <hr className="hrdetail" />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <p className="pdetail"><strong>Doc:</strong> Industry / Speciality group certification</p>
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
export default TechDocs;
