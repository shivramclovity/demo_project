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

const UploadDocumentReview = ({ handleSubComp, disabled }) => {
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
            <CardTitle style={{ marginBottom: "30px" }}>
              Document upload details
            </CardTitle>
            <Form>
              <Row form>
                <Label
                  for="documents"
                  style={{ marginBottom: "20px", marginLeft: "12px" }}
                >
                  Documents
                </Label>
                <Col md={12}>
                  <FormGroup>
                    <CustomFilefield
                      name="document1"
                      placeholder="Document 1"
                      custom="true"
                    />
                    <CustomFilefield
                      name="document2"
                      placeholder="Document 2"
                      custom="true"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="saveWebLink">Save web link</Label>
                    <Input
                      type="text"
                      name="saveWebLink"
                      id="saveWebLink"
                      placeholder="www.vendor768.com"
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

export default UploadDocumentReview;
