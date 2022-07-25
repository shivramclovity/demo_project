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
    Label,
    Input,
    Table,
} from "reactstrap";

import CustomSelect from "../../Widgets/CustomSelect/CustomSelect";

const Users = ({ handleSubComp, disabled }) => {
    const optionClass = 'custom-options-users';

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
                    <Form>
                        <Row form style={{ marginBottom: "0.5rem" }}>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="numberCompanyname">
                                        Search user
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
                    </Form>
                </Card>
                <Card className="main-card mb-3">
                    <CardBody>
                        <CardTitle>123 llc users list <span style={{ color: "#ff0000", float: "right" }}>Mockup is not completed</span></CardTitle>
                        <Form>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Table striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>User name</th>
                                                    <th>User</th>
                                                    <th>User role</th>
                                                    <th>Department</th>
                                                    <th>Status</th>
                                                    <th style={{ textAlign: "center" }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bordered">
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Sales</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>pparker</td>
                                                    <td>Peter parker</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select">
                                                                <option>Assigned legal</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Legal</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>ckent</td>
                                                    <td>Clark kent</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Cox2m user</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Product team</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>llane</td>
                                                    <td>louse lane</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Supply chain user</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Supply chain</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Vendor owner</option>
                                                            </select>
                                                        </div>
                                                    </td>

                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Vendor owner</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Vendor owner</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Vendor owner</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="tblicon">
                                                            <i className="icon-User---Circle"></i>
                                                        </span>
                                                    </th>
                                                    <td>jdoe1</td>
                                                    <td>John due</td>
                                                    <td>
                                                        <div id="tabledrop">
                                                            <select
                                                                className="custom-select custom-select-tbl"
                                                                placeholder="Select"
                                                            >
                                                                <option>Vendor owner</option>
                                                            </select>
                                                        </div>

                                                    </td>
                                                    <td>Sales</td>
                                                    <td>Active</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span className="icon-Trash tblaction"></span>
                                                        <span className="icon-More---Horiz tblaction"></span>
                                                    </td>
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
                                        <div id="showitem">
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
                        display: "inline",
                    }}
                    onClick={() => handleSubComp("next")}
                >
                    Next
                </Button>

            </ReactCSSTransitionGroup>
        </Fragment >
    );
};

export default Users;
