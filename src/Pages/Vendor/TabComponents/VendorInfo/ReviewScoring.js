import React, { Fragment, useEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
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
import { scoringActions } from "../../../../_actions/scoring.actions";
import Checklogoutbrowser from "../../../Utility/Checklogout";
import { FormatToTitleCase } from "../../../Utility/Utility";

const ReviewScoring = () => {
  const { checklogout } = Checklogoutbrowser();
  const [parms] = useSearchParams();
  const appNo = parms.get("appno");
  checklogout();
  const data = useSelector((state) => state.scoring.scoringData);
  const dispatch = useDispatch();
  const ratingClass = {
    //Average: "saverage",
    //Below: "sbelow",
    //Good: "sgood",
    //Low: "low",
    //High: "shigh",
    //Zero: "slow",
    Average: "saverage",
    Below: "sbelow",
    Good: "sgood",
    High: "shigh",
    Zero: "szero",
  };

  useEffect(() => {
    dispatch(scoringActions.getScoring(appNo));
  }, [appNo, dispatch]);

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
                <CardTitle className="card-title_review">Company name: {data[0]?.companyName}</CardTitle>

                <div className="clearitem"></div>
                <Button
                  className="btn-primary review-btn review-btn"
                >
                  Contact Vendor
                </Button>
              </>
            )}
            <div className="clearitem"></div>
            <Row form className="mrg-tp">
              {data &&
                Object.entries(data[0]?.scorings).map(
                  ([propKey, scoreCard]) => {
                    return (
                      <Col md={6} className="col-xl-3" key={propKey}>
                        <FormGroup className="review-shadow">
                          <Label
                            for="option"
                            className="label-scoring"
                          >
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
                                  {scoreCard?.score}
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
                                  className={
                                    scoreCard?.score === 0
                                      ? ratingClass["Zero"]
                                      : ratingClass[scoreCard?.performance]
                                  }
                                  data-value={`${scoreCard.score === 0
                                    ? " Low"
                                    : scoreCard?.performance
                                    } Performer`}
                                ></span>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <FormGroup className="scorehr">
                                <Label className="text-center override-main">
                                  {!scoreCard?.accumulative
                                    ? 0
                                    : scoreCard?.accumulative}
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

                          {scoreCard?.breakDown && (
                            <>
                              <Row>
                                <Col md={12}>
                                  <FormGroup className="break-mb">
                                    <Label className="breakdown">
                                      Breakdown
                                    </Label>
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
                                  <FormGroup className="text-center review-break-mb">
                                    <span className="review-break-txt">
                                      Value
                                    </span>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-3 col-3">
                                  <FormGroup className="text-center review-break-mb">
                                    <span className="review-break-txt">
                                      Points
                                    </span>
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
                                  <FormGroup className="text-center review-break-mb">
                                    <span className="review-break-txt">
                                      Value
                                    </span>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-3 col-3">
                                  <FormGroup className="text-center review-break-mb">
                                    <span className="review-break-txt">
                                      Points
                                    </span>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-3 col-3">
                                  <FormGroup className="text-center review-break-mb">
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
                                  <FormGroup className="text-center review-break-mb">
                                    <span className="review-break-txt">
                                      350 peo...
                                    </span>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-3 col-3">
                                  <FormGroup className="text-center review-break-mb">
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
                          {scoreCard?.breakDown ? (
                            scoreCard?.breakDown.map((row, i) => {
                              return (
                                <Fragment key={i}>
                                  <Row>
                                    <Col className="col-sm-6 col-6">
                                      <FormGroup className="text-left review-break-mb break-txt-scoring">
                                        <span
                                          className="review-break-txt"
                                        // title={row?.option}
                                        >
                                          <span id={`${propKey.toLowerCase()}-row-${i}`}>{row?.option}</span>
                                          {/* {Truncate(row?.option)}*/}
                                        </span>
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={`${propKey.toLowerCase()}-row-${i}`}
                                        >
                                          {row?.option}
                                        </UncontrolledTooltip>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-3 col-3">
                                      <FormGroup className="text-center review-break-mb">
                                        <span className="review-break-txt">
                                          {row?.value}
                                        </span>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-3 col-3">
                                      <FormGroup className="text-center review-break-mb">
                                        <span className="review-break-txt">
                                          {row?.score}
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
                  }
                )}
            </Row>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default ReviewScoring;
