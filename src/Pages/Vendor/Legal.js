import React, { Fragment, useEffect, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import PageTitle from "../../Layout/AppMain/PageTitle";
import { legalActions } from "../../_actions/legal.actions";
import { questionnaireActions } from "../../_actions/questionnaire.actions";
import { alertConstants } from "../../_constants";
import { API_LEGAL } from "../../_services/api.constants";
import { common } from "../../_services/common.service";
import { TruncateFileName } from "../Utility/Utility";
import LegalFilefield from "../Widgets/CustomeFilefield/LegalFilefield";
import Loader from "../Widgets/Loader/Loader";

const Legal = () => {
  const dispatch = useDispatch();
  const [parms] = useSearchParams();
  const appInfo = useSelector((state) => state.questionnaire?.appInfo);
  const ndaOptions = useSelector((state) => state.legal?.ndaOptions);
  const mouOptions = useSelector((state) => state.legal?.mouOptions);
  const msaOptions = useSelector((state) => state.legal?.msaOptions);

  const nda = useSelector((state) => state.legal?.ndaData);
  const mou = useSelector((state) => state.legal?.mouData);
  const msa = useSelector((state) => state.legal?.msaData);
  const ndaData = nda?.rows;
  const mouData = mou?.rows;
  const msaData = msa?.rows;

  const [NDAfile, setNDAfile] = useState(null);
  const [MOUfile, setMOUfile] = useState(null);
  const [MSAfile, setMSAfile] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  let appno = "";
  let companyName =
    appInfo?.loading === false ? appInfo?.data[0].companyName : "";

  if (user) {
    const role = user.roles[0];
    if (role === "VNDR") {
      appno = user.applicationNo;
    } else {
      appno = parms.get("appno");
    }
  }

  useEffect(() => {
    dispatch(questionnaireActions.getAppInfo(appno));
    dispatch(legalActions.getNDA(appno));
    dispatch(legalActions.getMOU(appno));
    dispatch(legalActions.getMSA(appno));

    dispatch(legalActions.getDocOptions("nda"));
    dispatch(legalActions.getDocOptions("mou"));
    dispatch(legalActions.getDocOptions("msa"));
  }, [dispatch, appno]);

  const handleFileChange = (file, TYPE) => {
    // console.log("TYPE , files:  == ", TYPE, file);
    if (TYPE === "NDA") {
      setNDAfile(file);
    } else if (TYPE === "MOU") {
      setMOUfile(file);
    } else if (TYPE === "MSA") {
      setMSAfile(file);
    }
  };

  const sumitDocument = (TYPE) => {
    let selectedFile = null; //eval(`${TYPE}file`);
    if (TYPE === "NDA") {
      selectedFile = NDAfile;
    } else if (TYPE === "MOU") {
      selectedFile = MOUfile;
    } else if (TYPE === "MSA") {
      selectedFile = MSAfile;
    }

    if (!selectedFile) {
      dispatch(failure(`Please select the ${TYPE} document`));
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile); //e.target.files[0]
    let uploadUrl = "";
    uploadUrl = `${API_LEGAL.UPLOAD}${TYPE.toLowerCase()}&parent=${appno}`;
    formData.append("externalUploadUrl", "");

    // dispatch(legalActions[eval("get" + TYPE(appno))]);

    dispatch(
      legalActions.uploadDocAction({
        docType: TYPE,
        actionType: "request",
      })
    );
    common.uploadFile({ url: uploadUrl, data: formData }).then(
      (data) => {
        if (data?.data?.errorCode) {
          dispatch(
            legalActions.uploadDocAction({
              docType: TYPE,
              actionType: "failure",
            })
          );
          dispatch(failure(data?.data?.errorLongMessage));
        } else {
          dispatch(
            legalActions.uploadDocAction({
              docType: TYPE,
              actionType: "success",
            })
          );
          dispatch(success("File uploaded successfully"));
        }
        // console.log("else after failure or success");
        if (TYPE === "NDA") {
          dispatch(legalActions.getNDA(appno));
          setNDAfile(null);
        } else if (TYPE === "MOU") {
          dispatch(legalActions.getMOU(appno));
          setMOUfile(null);
        } else if (TYPE === "MSA") {
          dispatch(legalActions.getMSA(appno));
          setMSAfile(null);
        }
      },
      (error) => {
        console.log(error);
        // dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function success(message) {
    return { type: alertConstants.SUCCESS, message };
  }

  function failure(message) {
    return { type: alertConstants.ERROR, message };
  }

  const getOption = (docOptions, optionName) => {
    if (optionName && optionName.length > 0) {
      let x = docOptions.find((data) => data.optionName === optionName);
      return x?.value;
    } else {
      return "";
    }
  };

  return (
    <Fragment>
      <PageTitle
        title="Legal docs"
        //   heading="Provide legal information"
        breadcrumbName="Legal"
        subheading="Provide legal information"
        icon="pe-7s-graph text-success"
      />
      <h5 style={{ fontSize: "16px", fontWeight: "600" }}>Legal documents</h5>
      <p style={{ fontSize: "14px", fontWeight: "400" }}>
        Company legal documents section
      </p>
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
            <CardTitle
              className="card-title_review"
              style={{ marginBottom: "25px" }}
            >
              Company name:
              <span style={{ color: "#2e6ce4" }}> {companyName}</span>
            </CardTitle>
            <div className="clearitem"></div>
            <CardTitle style={{ marginBottom: "1rem" }}>NDA</CardTitle>
            <hr className="hrdetail" />
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup style={{ paddingTop: "10px" }}>
                    <Label for="compayName" className="legal-file">
                      NDA is the most important legal document of any
                      organisation, whether it is a corporation, association or
                      partnership.
                    </Label>

                    <LegalFilefield
                      name="ndaFile"
                      placeholder="Upload Document"
                      custom="true"
                      handleFileChange={(e) => handleFileChange(e, "NDA")}
                      info={"Upload NDA document"}
                      fileOptions={ndaOptions}
                      fileInfo={NDAfile}
                      loading={nda.loading}
                    ></LegalFilefield>

                    <div className="clearitem"></div>
                    <Button
                      className="btn-primary upload_btn_legal"
                      onClick={() => sumitDocument("NDA")}
                      disabled={nda.loading}
                    >
                      Upload
                    </Button>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <div className="table-responsive legal-tbl">
                      <table className="mb-0 table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>File name</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nda.loading && (
                            <tr>
                              <td colSpan={4}>
                                <Loader
                                  styleMargin="0%"
                                  message="Please wait..."
                                ></Loader>
                              </td>
                            </tr>
                          )}
                          {ndaData &&
                            (ndaData && ndaData.length === 0 ? (
                              <tr>
                                <td style={{ textAlign: "center" }} colSpan={4}>
                                  No data available{" "}
                                </td>
                              </tr>
                            ) : (
                              ndaData.map((elem, indx) => {
                                return (
                                  <tr key={`nda_${indx}`}>
                                    <td>{indx + 1}. </td>
                                    <td>
                                      <div className="tbl-link">
                                        <span
                                          style={{
                                            cursor: "pointer",
                                            marginRight: "12px",
                                            verticalAlign: "sub",
                                          }}
                                          onClick={() =>
                                            common.downloadFile(
                                              API_LEGAL.DOWNLOAD + elem?.id,
                                              getOption(
                                                elem?.docOptions,
                                                "Name"
                                              )
                                            )
                                          }
                                        >
                                          {TruncateFileName(
                                            getOption(elem?.docOptions, "Name")
                                          )}
                                        </span>
                                      </div>
                                      <span
                                        className="icon-File---Download"
                                        onClick={() =>
                                          common.downloadFile(
                                            API_LEGAL.DOWNLOAD + elem?.id,
                                            getOption(elem?.docOptions, "Name")
                                          )
                                        }
                                        style={{
                                          fontSize: "18px",
                                          color: "#2e6ce4",
                                          cursor: "pointer",
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        id={`download_${elem?.id}`}
                                      >
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={`download_${elem?.id}`}
                                        >
                                          Download
                                        </UncontrolledTooltip>
                                      </span>
                                    </td>
                                    <td>{elem?.fullCreatedOn}</td>
                                    <td>
                                      {getOption(elem?.docOptions, "Status")}
                                    </td>
                                  </tr>
                                );
                              })
                            ))}
                        </tbody>
                      </table>
                      <div className="legal-notes">
                        Note: <strong>Sent</strong>: Uploaded by Cox2M,{" "}
                        <strong>Received</strong>: Uploaded by Vendor
                      </div>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>

        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle style={{ marginBottom: "1rem" }}>MOU</CardTitle>
            <hr className="hrdetail" />
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup style={{ paddingTop: "10px" }}>
                    <Label for="compayName" className="legal-file">
                      MOU is the most important legal document of any
                      organisation, whether it is a corporation, association or
                      partnership.
                    </Label>
                    <LegalFilefield
                      name="mouFile"
                      placeholder="Upload Document"
                      custom="true"
                      handleFileChange={(e) => handleFileChange(e, "MOU")}
                      info={"Upload MOU document"}
                      fileOptions={mouOptions}
                      fileInfo={MOUfile}
                      loading={mou.loading}
                    ></LegalFilefield>

                    <div className="clearitem"></div>
                    <Button
                      className="btn-primary upload_btn_legal"
                      onClick={() => sumitDocument("MOU")}
                      disabled={mou.loading}
                    >
                      Upload
                    </Button>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <div className="table-responsive legal-tbl">
                      <table className="mb-0 table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>File name</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mou.loading && (
                            <tr>
                              <td colSpan={4}>
                                <Loader
                                  styleMargin="0%"
                                  message="Please wait..."
                                ></Loader>
                              </td>
                            </tr>
                          )}
                          {mouData &&
                            (mouData && mouData.length === 0 ? (
                              <tr>
                                <td style={{ textAlign: "center" }} colSpan={4}>
                                  No data available{" "}
                                </td>
                              </tr>
                            ) : (
                              mouData.map((elem, indx) => {
                                return (
                                  <tr key={`nda_${indx}`}>
                                    <td>{indx + 1}. </td>
                                    <td>
                                      <div className="tbl-link">
                                        <span
                                          style={{
                                            cursor: "pointer",
                                            marginRight: "12px",
                                            verticalAlign: "sub",
                                          }}
                                          onClick={() =>
                                            common.downloadFile(
                                              API_LEGAL.DOWNLOAD + elem?.id,
                                              getOption(
                                                elem?.docOptions,
                                                "Name"
                                              )
                                            )
                                          }
                                        >
                                          {TruncateFileName(
                                            getOption(elem?.docOptions, "Name")
                                          )}
                                        </span>
                                      </div>
                                      <span
                                        className="icon-File---Download"
                                        onClick={() =>
                                          common.downloadFile(
                                            API_LEGAL.DOWNLOAD + elem?.id,
                                            getOption(elem?.docOptions, "Name")
                                          )
                                        }
                                        style={{
                                          fontSize: "18px",
                                          color: "#2e6ce4",
                                          cursor: "pointer",
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        id={`mou_download_${elem?.id}`}
                                      >
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={`mou_download_${elem?.id}`}
                                        >
                                          Download
                                        </UncontrolledTooltip>
                                      </span>
                                    </td>
                                    <td>{elem?.fullCreatedOn}</td>
                                    <td>
                                      {getOption(elem?.docOptions, "Status")}
                                    </td>
                                  </tr>
                                );
                              })
                            ))}
                        </tbody>
                      </table>
                      <div className="legal-notes">
                        Note: <strong>Sent</strong>: Uploaded by Cox2M,{" "}
                        <strong>Received</strong>: Uploaded by Vendor
                      </div>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>

        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle style={{ marginBottom: "1rem" }}>MSA</CardTitle>
            <hr className="hrdetail" />
            <Form>
              <Row form>
                <Col md={4}>
                  <FormGroup style={{ paddingTop: "10px" }}>
                    <Label for="compayName" className="legal-file">
                      MSA is the most important legal document of any
                      organisation, whether it is a corporation, association or
                      partnership.
                    </Label>

                    <LegalFilefield
                      name="msaFile"
                      placeholder="Upload Document"
                      custom="true"
                      handleFileChange={(e) => handleFileChange(e, "MSA")}
                      info={"Upload MSA document"}
                      fileOptions={msaOptions}
                      fileInfo={MSAfile}
                      loading={msa.loading}
                    ></LegalFilefield>

                    <div className="clearitem"></div>
                    <Button
                      className="btn-primary upload_btn_legal"
                      onClick={() => sumitDocument("MSA")}
                      disabled={msa.loading}
                    >
                      Upload
                    </Button>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <div className="table-responsive legal-tbl">
                      <table className="mb-0 table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>File name</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {msa.loading && (
                            <tr>
                              <td colSpan={4}>
                                <Loader
                                  styleMargin="0%"
                                  message="Please wait..."
                                ></Loader>
                              </td>
                            </tr>
                          )}
                          {msaData &&
                            (msaData && msaData.length === 0 ? (
                              <tr>
                                <td style={{ textAlign: "center" }} colSpan={4}>
                                  No data available{" "}
                                </td>
                              </tr>
                            ) : (
                              msaData.map((elem, indx) => {
                                return (
                                  <tr key={`nda_${indx}`}>
                                    <td>{indx + 1}. </td>
                                    <td>
                                      <div className="tbl-link">
                                        <span
                                          style={{
                                            cursor: "pointer",
                                            marginRight: "12px",
                                            verticalAlign: "sub",
                                          }}
                                          onClick={() =>
                                            common.downloadFile(
                                              API_LEGAL.DOWNLOAD + elem?.id,
                                              getOption(
                                                elem?.docOptions,
                                                "Name"
                                              )
                                            )
                                          }
                                        >
                                          {TruncateFileName(
                                            getOption(elem?.docOptions, "Name")
                                          )}
                                        </span>
                                      </div>
                                      <span
                                        className="icon-File---Download"
                                        onClick={() =>
                                          common.downloadFile(
                                            API_LEGAL.DOWNLOAD + elem?.id,
                                            getOption(elem?.docOptions, "Name")
                                          )
                                        }
                                        style={{
                                          fontSize: "18px",
                                          color: "#2e6ce4",
                                          cursor: "pointer",
                                          position: "relative",
                                          top: "-2px",
                                        }}
                                        id={`msa_download_${elem?.id}`}
                                      >
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={`msa_download_${elem?.id}`}
                                        >
                                          Download
                                        </UncontrolledTooltip>
                                      </span>
                                    </td>
                                    <td>{elem?.fullCreatedOn}</td>
                                    <td>
                                      {getOption(elem?.docOptions, "Status")}
                                    </td>
                                  </tr>
                                );
                              })
                            ))}
                        </tbody>
                      </table>
                      <div className="legal-notes">
                        Note: <strong>Sent</strong>: Uploaded by Cox2M,{" "}
                        <strong>Received</strong>: Uploaded by Vendor
                      </div>
                    </div>
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
export default Legal;
