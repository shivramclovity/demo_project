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
    Button,
} from "reactstrap";
import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const Mou = ({ handleSubComp, disabled }) => {
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
                                <span className="text-shead">Vendor 123</span>
                            </FormGroup>
                        </Col>
                        <Col sm={6} className="text-right">
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
                        <Col sm={6} className="text-head text-right">
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
                        <Col sm={6} className="text-head text-right">
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
                        <CardTitle>Vendor 123 Details</CardTitle>
                        <Form>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
                <Button
                    className="secondryabbtn"
                    style={{
                        display: "inline"
                    }}
                    onClick={() => handleSubComp("next")}
                >
                    Next
        </Button>
                <Button
                    className="btn-primary"
                    style={{
                        display: "inline",
                        borderColor: "#2e6ce4",
                        padding: "7px 16px !important",
                    }}

                >
                    Send MOU
        </Button>
                <Button
                    className="secondrybtn"
                    style={{ display: "inline", float: "left", fontSize: "22px", marginLeft: "0px !important" }}
                    onClick={() => handleSubComp("prev")}
                >
                    <i className="icon-Chevron---Left"></i>
                </Button>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default Mou;
