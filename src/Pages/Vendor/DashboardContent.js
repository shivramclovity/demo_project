import React, { Fragment, useState } from "react";
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
import { Link } from "react-router-dom";
import TableData from "./TableData";
import ChartComponent from "./ChartComponent";
import { useSelector } from "react-redux";
import Loader from "../Widgets/Loader/Loader";

const DashboardContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataObj = useSelector((state) => state.dashboards?.vendorList);
  const totalCount = useSelector(
    (state) => state.dashboards?.vendorList?.count
  );

  const pageLimit = 10;
  const count = totalCount > pageLimit ? Math.ceil(totalCount / pageLimit) : 1;

  let options = [];
  for (let i = 1; i <= count; i++) {
    options.push(i);
  }

  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const handleListNav = (direction) => {
    switch (direction) {
      case "next":
        if (currentPage < count) {
          setCurrentPage(currentPage + 1);
        }
        break;
      case "prev":
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        break;
      default:
        console.log("Invalid navigation");
        break;
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
        <div className="main-card mb-3">
          <Row>
            <Col md="7" className="dashbar">
              <Card className="main-card mb-2 card-section dash-graph">
                <div className="card-header">Average completion times</div>
                <div className="card-footer cardpd">
                  <Row>
                    <Col md="4" className="cardbox">
                      <div className="card mb-2 widget-chart widget-sec card-section">
                        <div className="widget-chart-content">
                          <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg" />
                            <i className="icon-File---Plus" />
                          </div>
                          <span className="icon-Info infialgn"></span>
                          <div className="widget-numbers">
                            <span className="alignblok">11</span>{" "}
                            <span className="alignblokbtm">Days</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-subheading widget-btmhead">
                        Vendor
                      </div>
                    </Col>
                    <Col md="4" className="cardbox">
                      <div className="card mb-2 widget-chart widget-sec card-section">
                        <div className="widget-chart-content">
                          <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg" />
                            <i className="icon-File---Check" />
                          </div>
                          <span className="icon-Info infialgn"></span>
                          <div className="widget-numbers">
                            <span className="alignblok">5</span>{" "}
                            <span className="alignblokbtm">Days</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-subheading widget-btmhead">
                        Supply chain
                      </div>
                    </Col>
                    <Col md="4" className="cardbox">
                      <div className="card mb-2 widget-chart widget-sec card-section">
                        <div className="widget-chart-content">
                          <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg" />
                            <i className="icon-File---Agreement" />
                          </div>
                          <span className="icon-Info infialgn"></span>
                          <div className="widget-numbers">
                            <span className="alignblok">7</span>{" "}
                            <span className="alignblokbtm">Days</span>
                          </div>
                        </div>
                      </div>
                      <div className="widget-subheading widget-btmhead">
                        Legal
                      </div>
                    </Col>
                  </Row>
                  <Row className="mr-btm-dash">
                    <Col md="12">
                      <hr className="htcls" />
                      <label className="days-lbl">
                        <span className="badge-dott"></span>Your average
                        completion time:{" "}
                        <span className="color-green">13 Days</span>
                      </label>
                      <hr className="htclss" />
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col md="5" className="dashbar">
              <Card className="main-card mb-2 card-section dash-graph">
                <div className="card-header">Days in department</div>
                <div className="card-footer">
                  <ChartComponent charttype={"line"} />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        {user !== "" && user.roles[0] !== "VNDR" && (
          <Card className="main-card mb-1 card-section">
            <CardBody>
              <CardTitle>Vendor list</CardTitle>
              {/*<UncontrolledButtonDropdown>
                      <DropdownToggle caret className="mb-2 mr-2 icon-more">
                          <span className="icon-More---Horiz"></span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-shadow icon-more-drop">
                          <DropdownItem>Download pdf</DropdownItem>
                          <DropdownItem>Download xls</DropdownItem>
                      </DropdownMenu>
                </UncontrolledButtonDropdown>*/}
              <div className="dropdown">
                <button className="dropbtn">
                  <span className="icon-More---Horiz"></span>
                </button>
                <div className="dropdown-content">
                  <Link to="/dashboard/#">Download pdf</Link>
                  <Link to="/dashboard/#">Download xls</Link>
                </div>
              </div>
              <hr />
              {!dataObj && (
                <Loader
                  styleMargin="7%"
                  message="Please wait! Loading..."
                ></Loader>
              )}
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <div className="table-responsive">
                        <TableData user={user} currentPage={currentPage} />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  {/*<span className="tblcard"></span>*/}
                  <Col className="col-12 pagi-sec">
                    <div className="pagi-nxt-prv">
                      <FormGroup
                        style={{
                          float: "right",
                          alignItem: "right",
                          marginBottom: "0.2rem",
                          paddingTop: "17px",
                        }}
                      >
                        <span
                          className={`tbl-nxt-prv ${
                            currentPage <= 1 ? "disabledBtn" : ""
                          }`}
                          onClick={() => handleListNav("prev")}
                        >
                          <i className="icon-Chevron---Left"></i>
                        </span>
                        <span
                          className={`tbl-nxt-prv ${
                            currentPage >= count ? "disabledBtn" : ""
                          }`}
                          onClick={() => handleListNav("next")}
                        >
                          <i className="icon-Chevron---Right"></i>
                        </span>
                      </FormGroup>
                    </div>
                    <FormGroup
                      style={{ marginBottom: "0.2rem", paddingTop: "13px" }}
                    >
                      <div className="foot-select-opt">
                        <div
                          style={{
                            paddingTop: "7px",
                            fontSize: "14px",
                            display: "inline",
                            float: "left",
                            width: "90px",
                          }}
                        >
                          Show page:{" "}
                        </div>
                        <div className="tablebtm-select">
                          <select
                            style={{ paddingTop: "0.25rem" }}
                            className="form-control tb-foot-select"
                            value={parseInt(currentPage)}
                            onChange={(e) =>
                              setCurrentPage(parseInt(e.target.value))
                            }
                          >
                            {totalCount &&
                              options.map((elem) => {
                                return (
                                  <option key={`pg-${elem}`} value={elem}>
                                    {elem}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        )}
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default DashboardContent;
