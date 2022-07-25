import React, { useEffect, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
    Col,
    Row,
    Card,
    CardTitle,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import CustomSelect from "../../Widgets/CustomSelect/CustomSelect";


const DaysPendingActions = ({ handleSubComp, disabled }) => {
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

                <Card className="main-card mb-3 top-sec">
                    <CardTitle>Vendor <span style={{ color: "#ff0000", float: "right" }}>Mockup is not completed</span></CardTitle>
                    <hr />
                    <Row form>
                        <Col className="col-lg-4">
                            <FormGroup className="form-top">
                                <span className="text-shead">Days with dept</span>
                            </FormGroup>
                        </Col>
                        <Col className="col-lg-8">
                            <FormGroup className="form-top">
                                <span className="text-shead">Performance</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="fromdaysdeptexceptional">
                                    From
                                </Label>
                                <Input
                                    type="text"
                                    name="fromdaysdeptexceptional"
                                    id="fromdaysdeptexceptional"
                                    placeholder="0"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="todaysdeptexceptional">
                                    To
                                </Label>
                                <Input
                                    type="text"
                                    name="todaysdeptexceptional"
                                    id="todaysdeptexceptional"
                                    placeholder="7"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <Label for="numberCompanyname" style={{ display: "block" }}>
                                    &nbsp;
                                </Label>
                                <span className="pending">
                                    Exceptional
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="goodtdaysdeptstart"
                                    id="gooddaysdepttstart"
                                    placeholder="8"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="gooddaysdepttend"
                                    id="gooddaysdepttend"
                                    placeholder="14"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#00D084" }}>
                                    Good
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromacceptabledaysdept"
                                    id="fromacceptabledaysdept"
                                    placeholder="15"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="toacceptabledaysdept"
                                    id="toacceptabledaysdept"
                                    placeholder="21"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#FA831B" }}>
                                    Acceptable
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginBottom: "15px" }}>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromdaysdeptimprovement"
                                    id="fromdaysdeptimprovement"
                                    placeholder="22"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="todaysdeptimprovement"
                                    id="todaysdeptimprovement"
                                    placeholder="99"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#E61E28" }}>
                                    Need improvement
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                </Card>
                <Card className="main-card mb-3 top-sec">
                    <CardTitle>Legal department</CardTitle>
                    <hr />
                    <Row form>
                        <Col className="col-lg-4">
                            <FormGroup className="form-top">
                                <span className="text-shead">Days with dept</span>
                            </FormGroup>
                        </Col>
                        <Col className="col-lg-8">
                            <FormGroup className="form-top">
                                <span className="text-shead">Performance</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="legaldeptexceptional">
                                    From
                                </Label>
                                <Input
                                    type="text"
                                    name="fromlegaldeptxceptional"
                                    id="fromlegaldeptxceptional"
                                    placeholder="0"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="tolegaldeptexceptional">
                                    To
                                </Label>
                                <Input
                                    type="text"
                                    name="tolegaldeptexceptional"
                                    id="tolegaldeptexceptional"
                                    placeholder="7"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <Label for="numberCompanyname" style={{ display: "block" }}>
                                    &nbsp;
                                </Label>
                                <span className="pending">
                                    Exceptional
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromlegaldeptgood"
                                    id="fromlegaldeptgood"
                                    placeholder="8"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tolegaldeptgood"
                                    id="tolegaldeptgood"
                                    placeholder="14"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#00D084" }}>
                                    Good
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromlegaldeptacceptable"
                                    id="fromlegaldeptacceptable"
                                    placeholder="15"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tolegaldeptacceptable"
                                    id="tolegaldeptacceptable"
                                    placeholder="21"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#FA831B" }}>
                                    Acceptable
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginBottom: "15px" }}>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromlegaldeptimprovement"
                                    id="fromlegaldeptimprovement"
                                    placeholder="22"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tolegaldeptimprovement"
                                    id="tolegaldeptimprovement"
                                    placeholder="99"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#E61E28" }}>
                                    Need improvement
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                </Card>
                <Card className="main-card mb-3 top-sec">
                    <CardTitle>Supply chain department</CardTitle>
                    <hr />
                    <Row form>
                        <Col className="col-lg-4">
                            <FormGroup className="form-top">
                                <span className="text-shead">Days with dept</span>
                            </FormGroup>
                        </Col>
                        <Col className="col-lg-8">
                            <FormGroup className="form-top">
                                <span className="text-shead">Performance</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="fromsupplychainexceptional">
                                    From
                                </Label>
                                <Input
                                    type="text"
                                    name="fromsupplychainexceptional"
                                    id="fromsupplychainexceptional"
                                    placeholder="0"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Label for="tosupplychainexceptional">
                                    To
                                </Label>
                                <Input
                                    type="text"
                                    name="tosupplychainexceptional"
                                    id="tosupplychainexceptional"
                                    placeholder="7"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <Label for="numberCompanyname" style={{ display: "block" }}>
                                    &nbsp;
                                </Label>
                                <span className="pending">
                                    Exceptional
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromsupplychaingood"
                                    id="fromsupplychaingood"
                                    placeholder="8"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tosupplychaingood"
                                    id="tosupplychaingood"
                                    placeholder="14"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#00D084" }}>
                                    Good
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromsupplychainacceptable"
                                    id="fromsupplychainacceptable"
                                    placeholder="15"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tosupplychainacceptable"
                                    id="tosupplychainacceptable"
                                    placeholder="21"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#FA831B" }}>
                                    Acceptable
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginBottom: "15px" }}>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="fromsupplychainimprovement"
                                    id="fromsupplychainimprovement"
                                    placeholder="22"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-2 col-3">
                            <FormGroup className="form-top">
                                <Input
                                    type="text"
                                    name="tosupplychainimprovement"
                                    id="tosupplychainimprovement"
                                    placeholder="99"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="text-head col-6">
                            <FormGroup className="form-top">
                                <span className="pending" style={{ color: "#E61E28" }}>
                                    Need improvement
                                </span>
                            </FormGroup>
                        </Col>
                    </Row>
                </Card>
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

export default DaysPendingActions;
