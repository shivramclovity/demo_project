/* eslint-disable */
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import DocumentUpload from "./DocumentUpload/DocumentUpload";
import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import CustomFilefield from "../../Widgets/CustomeFilefield/CustomFilefield";
import Checklogoutbrowser from "../../Utility/Checklogout";

const UploadDocument = ({ changeStep }) => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();

  const [currentTab, setCurrentTab] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const tabCount = 0;
  const tabsContent = [
    {
      title: "Document Upload ",
      content: (
        <DocumentUpload
          handleSubComp={(direction) => handleSubComp(direction)}
          disabled={disabled}
        />
      ),
    },
  ];

  const getTabs = () => {
    return tabsContent.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.content,
      key: index,
    }));
  };

  const handleSubComp = (direction) => {
    switch (direction) {
      case "next":
        checklogout();
        currentTab < 0 ? setCurrentTab(currentTab + 1) : "";
        changeStep("next", tabCount, currentTab);
        break;
      case "prev":
        currentTab > 0 ? setCurrentTab(currentTab - 1) : "";
        changeStep("prev", tabCount, currentTab);
        break;
      default:
        console.log(`Sorry, we are unable to handle ${direction}.`);
        if (currentTab == 0 || currentTab >= 1) {
          setDisabled(true);
        } else {
          setDisabled(false);
        }
    }
  };

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
            <CardTitle style={{ marginBottom: "20px" }}>
              Upload document options
            </CardTitle>
            <Form>
              <Row form>
                <Label
                  for="exampleAddress"
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
                    <Label for="weLink">Save web link</Label>
                    <Input
                      type="text"
                      name="webLinkUrl"
                      id="webLinkUrl"
                      readOnly
                      placeholder="www.vendor768.com"
                    />
                  </FormGroup>
                </Col>
              </Row>
              {/*<FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Check me out
                </Label>
              </FormGroup>*/}
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
      <Button
        className="btn-primary"
        style={{
          display: "inline",
          borderColor: "#2e6ce4",
          padding: "7px 16px !important",
        }}
        onClick={() => handleSubComp("next")}
      >
        Save &#38; Continue
      </Button>
      <Button
        className="secondrybtn"
        style={{
          display: "inline",
          float: "left",
          fontSize: "22px",
          marginLeft: "-15px !important",
        }}
        onClick={() => handleSubComp("prev")}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>
      {/*<Button
        className="btn btn-secondar"
        style={{ display: "inline", float: "right" }}
        onClick={() => handleSubComp("prev")}
      >
        <i className="icon-Chevron---Left"></i>
      </Button>*/}
    </Fragment>
  );
};

export default UploadDocument;
