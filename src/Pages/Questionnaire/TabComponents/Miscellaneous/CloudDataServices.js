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
} from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const CloudDataServices = ({ handleSubComp, disabled }) => {
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
            <CardTitle style={{ paddingBottom: "10px" }}>
              Cloud and data services options
            </CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Cloud services
                      <input type="checkbox" name="chkCloudServices" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Platform/Aggregators
                      <input type="checkbox" name="chkDataPlatform" />
                      <span className="checkmark"></span>
                    </label>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="chkbx">
                    <label className="input">
                      Data Marketplaces/Exchanges
                      <input type="checkbox" name="chkDataMarketplaces" />
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

export default CloudDataServices;
