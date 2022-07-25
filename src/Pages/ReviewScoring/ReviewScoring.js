import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Label,
  Input,
  Button,
  FormGroup,
  UncontrolledTooltip,
} from "reactstrap";

import { FormatToTitleCase } from "../Utility/Utility";

const ReviewScoring = ({ data }) => {
  const ratingClass = (str) => {
    const classList = {
      average: "saverage",
      below: "sbelow",
      good: "sgood",
      high: "shigh",
      not: "szero",
    };
    let txt = str.split(" ").slice(0, 1)[0];
    return classList[txt.toLowerCase()];
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
        <Card className="main-card mb-3 review-card">
          <CardBody style={{ padding: "0px" }}>
            <CardTitle></CardTitle>
            {data && (
              <>
                <CardTitle className="card-title_review">
                  Company name:&nbsp;
                  <span style={{ color: "#2e6ce4" }}>
                    {data?.companyName ? data?.companyName : "N/A"}
                  </span>
                </CardTitle>

                <div className="clearitem"></div>
                <Button
                  className="btn-primary review-btn"
                  style={{
                    backgroundColor: "#2e6ce4 !important",
                  }}
                >
                  Contact Vendor
                </Button>
              </>
            )}
            <div className="clearitem"></div>
            <Row form className="mrg-tp">
              {data &&
                Object.entries(data?.scorings).map(([propKey, scoreCard]) => {
                  return (
                    <Col md={6} className="col-xl-3" key={propKey}>
                      <FormGroup className="review-shadow">
                        <Label for="option" className="label-scoring">
                          <span id={propKey}>{FormatToTitleCase(propKey)}</span>
                        </Label>
                        <UncontrolledTooltip placement="top" target={propKey}>
                          {FormatToTitleCase(propKey)}
                        </UncontrolledTooltip>
                        <div className="dropdown show-more-opt">
                          <button className="dropbtn">
                            <span className="icon-More---Horiz"></span>
                          </button>
                          <div className="dropdown-content dropdown-review">
                            <Link
                              to="#"
                              style={{ cursor: "not-allowed" }}
                              onClick={(e) => e.preventDefault()}
                            >
                              Override
                            </Link>
                          </div>
                        </div>
                        <div className="clearitem"></div>
                        <Row>
                          <Col md={12}>
                            <FormGroup className="scoring-hr">
                              <Label className="text-center review-main">
                                {scoreCard?.weightedScore.toFixed(1)}
                              </Label>
                              <span className="text-center review-span">
                                Score
                              </span>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <FormGroup className="text-center average-break-mb">
                              <span
                                className={ratingClass(scoreCard?.performance)}
                                data-value={scoreCard?.performance}
                              ></span>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} style={{ display: "none" }}>
                            <FormGroup className="scorehr">
                              <Label className="text-center override-main">
                                {!scoreCard?.accumulativeScore
                                  ? 0
                                  : scoreCard?.accumulativeScore}
                              </Label>
                              <div
                                className="edit-score-sec"
                                style={{ display: "none" }}
                              >
                                <Input
                                  type="text"
                                  name="editaccuscore"
                                  id="editaccuscore"
                                  placeholder="0"
                                />
                              </div>

                              <span className="text-center override-span">
                                Accumulative
                                <br />
                                score
                              </span>
                            </FormGroup>
                          </Col>
                          <Col md={6} style={{ display: "none" }}>
                            <FormGroup className="scorehr">
                              <Label className="text-center override-main">
                                70.1
                              </Label>
                              <div className="edit-score-sec">
                                <Input
                                  type="text"
                                  name="editaccuscore"
                                  id="editaccuscore"
                                  placeholder="0"
                                />
                              </div>
                              <span className="text-center override-span">
                                Overriden
                                <br />
                                score
                              </span>
                            </FormGroup>
                          </Col>
                        </Row>
                        <hr className="scoring-hr" />

                        {scoreCard?.details && (
                          <>
                            <Row>
                              <Col md={12}>
                                <FormGroup className="break-mb">
                                  <Label className="breakdown">Breakdown</Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="col-sm-6 col-6">
                                <FormGroup className="text-left review-break-mb">
                                  <span></span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span
                                    id="review_value"
                                    className="review-break-txt"
                                  >
                                    Value
                                  </span>
                                  <UncontrolledTooltip
                                    placement="top"
                                    target="review_value"
                                  >
                                    Value
                                  </UncontrolledTooltip>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span
                                    id="review_points"
                                    className="review-break-txt"
                                  >
                                    Points
                                  </span>
                                  <UncontrolledTooltip
                                    placement="top"
                                    target="review_points"
                                  >
                                    Points
                                  </UncontrolledTooltip>
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row style={{ display: "none" }}>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-left review-break-mb">
                                  <span></span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">
                                    Value
                                  </span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">
                                    Points
                                  </span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">
                                    Overriden
                                    <br />
                                    points
                                  </span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <hr className="scoring-hr" />
                            <Row style={{ display: "none" }}>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-left review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">
                                    Company...
                                  </span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">
                                    350 peo...
                                  </span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-center review-break-mb break-txt-scoring">
                                  <span className="review-break-txt">25</span>
                                </FormGroup>
                              </Col>
                              <Col className="col-sm-3 col-3">
                                <FormGroup className="text-left review-break-mb">
                                  <div className="edit-inner-score">
                                    <Input
                                      type="text"
                                      name="editaccuscore"
                                      id="editaccuscore"
                                      placeholder="0"
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </>
                        )}
                        {scoreCard?.details ? (
                          scoreCard?.details.map((row, i) => {
                            return (
                              <Fragment key={i}>
                                <Row>
                                  <Col className="col-sm-6 col-6">
                                    <FormGroup className="text-left review-break-mb break-txt-scoring">
                                      <span
                                        className="review-break-txt"
                                        // title={row?.option}
                                      >
                                        <span
                                          id={`${propKey.toLowerCase()}-row-${i}`}
                                        >
                                          {row?.questionShortDescription}
                                        </span>
                                      </span>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target={`${propKey.toLowerCase()}-row-${i}`}
                                      >
                                        {row?.questionShortDescription}
                                      </UncontrolledTooltip>
                                    </FormGroup>
                                  </Col>
                                  <Col className="col-sm-3 col-3">
                                    <FormGroup className="text-center review-break-mb break-txt-scoring">
                                      <span
                                        id={`${propKey.toLowerCase()}-value-${i}`}
                                        className="review-break-txt"
                                        style={{ textTransform: "capitalize" }}
                                      >
                                        {row?.optionValue.toLowerCase()}
                                      </span>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target={`${propKey.toLowerCase()}-value-${i}`}
                                        style={{ textTransform: "capitalize" }}
                                      >
                                        {row?.optionValue.toLowerCase()}
                                      </UncontrolledTooltip>
                                    </FormGroup>
                                  </Col>
                                  <Col className="col-sm-3 col-3">
                                    <FormGroup className="text-center review-break-mb break-txt-scoring">
                                      <span className="review-break-txt">
                                        {row?.systemScore}
                                      </span>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <hr className="scoring-hr" />
                              </Fragment>
                            );
                          })
                        ) : (
                          <Fragment>
                            <Row>
                              <Col className="col-sm-12 col-12">
                                <FormGroup className="text-center review-break-mb">
                                  <span className="review-break-txt">
                                    No Data Available
                                  </span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <hr className="scoring-hr" />
                          </Fragment>
                        )}
                        <Row style={{ display: "none" }}>
                          <Col className="col-sm-6 col-6">
                            <FormGroup className="text-center average-break-mb">
                              <Button
                                className="review-btn"
                                style={{
                                  display: "inline",
                                  float: "right",
                                }}
                              >
                                Cancel
                              </Button>
                            </FormGroup>
                          </Col>
                          <Col className="col-sm-6 col-6">
                            <FormGroup className="text-center average-break-mb">
                              <Button
                                className="btn-primary"
                                style={{
                                  display: "inline",
                                  borderColor: "#2e6ce4",
                                  padding: "7px 16px !important",
                                  float: "left",
                                }}
                              >
                                Save
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  );
                })}
            </Row>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default ReviewScoring;
