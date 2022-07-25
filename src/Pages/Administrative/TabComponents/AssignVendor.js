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
    Input,
    Table,
    Button,
} from "reactstrap";
import CustomSelect from "../../Widgets/CustomSelect/CustomSelect";

const AssignVendor = ({ handleSubComp, disabled }) => {
    const optionClass = 'custom-options-tbl';
    useEffect(() => {
        CustomSelect(optionClass);
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
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="numberCompanyname">
                                    Vendor status
                                </Label>
                                <Input
                                    type="text"
                                    name="numberCompanyname"
                                    id="numberCompanyname"
                                    placeholder="ABC LLC company"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form style={{ marginBottom: "0.5rem" }}>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="numberCompanyname">
                                    Current account manager
                                </Label>
                                <Input
                                    type="text"
                                    name="numberCompanyname"
                                    id="numberCompanyname"
                                    placeholder="ABC LLC company"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="numberUsLocations" style={{ display: "block" }}>
                                    &nbsp;
                                </Label>
                                <Button className="mt-2 btn-default" name="find" style={{ float: "left", marginTop: "3px" }}> Search </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Card>
                <Card className="main-card mb-3">
                    <CardBody>
                        <CardTitle>Vendor list <span style={{ color: "#ff0000", float: "right" }}>Mockup is not completed</span></CardTitle>
                        <Form>
                            < Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Table striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th>V. id</th>
                                                    <th>Vendor name</th>
                                                    <th>Invite date</th>
                                                    <th>Status</th>
                                                    <th>Acct. manager</th>
                                                    <th>Days in S</th>
                                                    <th>Days in Lg</th>
                                                    <th>Days with Vnd</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bordered">
                                                    <td>
                                                        #01
                                                    </td>
                                                    <td>Vendor 891</td>
                                                    <td>03/16/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #02
                                                    </td>
                                                    <td>Vendor 765</td>
                                                    <td>03/16/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #03
                                                    </td>
                                                    <td>Vendor 564</td>
                                                    <td>03/15/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #04
                                                    </td>
                                                    <td>Vendor 425</td>
                                                    <td>03/14/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #05
                                                    </td>
                                                    <td>Vendor 123</td>
                                                    <td>03/12/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #06
                                                    </td>
                                                    <td>Vendor 851</td>
                                                    <td>03/11/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #07
                                                    </td>
                                                    <td>Vendor 425</td>
                                                    <td>03/10/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #08
                                                    </td>
                                                    <td>Vendor 123</td>
                                                    <td>03/09/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #09
                                                    </td>
                                                    <td>Vendor 234</td>
                                                    <td>03/08/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr className="bordered">
                                                    <td>
                                                        #10
                                                    </td>
                                                    <td>Vendor 891</td>
                                                    <td>03/07/2022</td>
                                                    <td>Pending submission</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-user"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>N/A</td>
                                                    <td>N/A</td>
                                                    <td>12</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                {/*<span className="tblcard"></span>*/}
                                <Col md={8}>
                                    <FormGroup style={{ float: "right", alignItem: "right", marginBottom: "0.2rem", paddingTop: "13px" }}>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup style={{ marginBottom: "0.2rem", paddingTop: "13px" }}>
                                        <div style={{
                                            paddingTop: "7px", fontSize: "14px", display: "inline", float: "left", width: "90px"
                                        }}>Show items: </div>
                                        <div id="showpage">
                                            <select
                                                name="Items"
                                                id="Items"
                                                className="custom-select"
                                                placeholder="10"
                                            >
                                                {/*   <option value="DH">
                        
                      </option> */}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            {/*  <select >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select> */}</div>

                                    </FormGroup>
                                </Col>
                                <Col md={1}>

                                    <FormGroup style={{ float: "right", alignItem: "right", marginBottom: "0.2rem", paddingTop: "17px" }}>
                                        <span style={{ padding: "3px 8px 0px 8px", marginRight: "8px", fontSize: "20px", border: "1px solid #c4c9d9", borderRadius: "4px" }}><i className="icon-Chevron---Left"></i></span>
                                        <span style={{ padding: "3px 8px 0px 8px", border: "1px solid #c4c9d9", fontSize: "20px", borderRadius: "4px" }}><i className="icon-Chevron---Right"></i></span>
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

export default AssignVendor;
