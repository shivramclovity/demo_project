import React, { Fragment, useEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, CardBody, CardTitle, Form } from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";

const DocumentUpload = ({ handleSubComp, disabled }) => {
  useEffect(() => {
    CustomSelect();
  }, []);
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
            <CardTitle>Information Details</CardTitle>
            <Form>
              {/* <Button
                color="primary"
                className="mt-2"
                name="next"
                disabled={disabled}
                onClick={() => handleSubComp("next")}
              >
                Next
                </Button> */}
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default DocumentUpload;
