import React, { useEffect, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
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
} from "reactstrap";
import { vendorActions } from "../../../../_actions/vendor.actions";
import CustomDropdown from "../../../Widgets/CustomDropdown/CustomDropdown";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const VendorProfile = () => {
  const { checklogout } = Checklogoutbrowser();
  checklogout();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.vendors?.viewProfile);

  const [parms] = useSearchParams();
  const appno = parms.get("appno");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user.roles[0] !== "VNDR") {
        if (appno !== null) {
          dispatch(vendorActions.vendorProfile(appno));
        } else {
          navigate("/dashboard");
        }
      } else {
        dispatch(vendorActions.vendorProfile(""));
      }
    }
    window.scrollTo(0, 0);
  }, [dispatch, appno, navigate]);

  /*  const cityOptions = [
     { label: "Select city", value: "" },
     { label: "Adak", value: "Adak" },
     { label: "Akhiok", value: "Akhiok" },
     { label: "Akiak", value: "Akiak" },
   ]; */
  /*  const stateOptions = [
     { label: "Select state", value: "" },
     { label: "California", value: "CA" },
     { label: "Taxas", value: "TA" },
     { label: "Alaska", value: "AL" },
   ]; */
  const empSizeOptions = [
    { label: "0 - 51", value: "0 - 51" },
    { label: "51 - 100", value: "51 - 100" },
    { label: "100 - 1000", value: "100 - 1000" },
    { label: "1000 - 5000", value: "1000 - 5000" },
  ];
  const revenueOptions = [
    { label: "$500,00 - $500,000", value: "$500,00 - $500,000" },
    { label: "$500,000 - $500,000,0", value: "$500,000 - $500,000,0" },
    { label: "$500,000,0 - $500,000,00", value: "$500,000,0 - $500,000,00" },
    { label: "$500,000,00 +", value: "$500,000,00 + " },
  ];

  /* const formateDate = (dateStr) => {
    const date_format = new Date(dateStr);
    const mm =
      date_format.getMonth() < 10
        ? `0${date_format.getMonth()}`
        : date_format.getMonth();
    const dd =
      date_format.getDate() < 10
        ? `0${date_format.getDate()}`
        : date_format.getDate();
    return mm + "/" + dd + "/" + date_format.getFullYear();
  }; */

  const handleChange = (e) => {
    // console.log(e);
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
        <Card className="main-card mb-3 top-sec">
          <Row form>
            <Col sm={6}>
              <FormGroup className="form-top">
                <span className="status-vendor">
                  {/*      {profileData ?.pocFirstName} {profileData ?.pocLastName} */}
                  {profileData?.companyName}
                </span>
              </FormGroup>
            </Col>
            <Col sm={6} className="status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Status:{" "}
                  <span className="text-shead status-required">
                    &nbsp;{profileData?.applicationStatus}
                  </span>
                </span>
              </FormGroup>
            </Col>
            <div className="clearfix"></div>
            <Col sm={6} className="text-head">
              <FormGroup className="form-top">
                <span className="text-head">
                  Type:{" "}
                  <span className="text-shead">
                    {profileData?.applicationType}
                  </span>
                </span>
              </FormGroup>
            </Col>
            <Col sm={6} className="text-head status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Started:{" "}
                  <span className="text-shead">
                    {profileData?.applicationStarted}
                    {/* {formateDate(profileData?.applicationStarted)} */}
                  </span>
                </span>
              </FormGroup>
            </Col>
            <div className="clearfix"></div>
            <Col sm={6} className="text-head">
              <FormGroup className="form-top">
                <span className="text-head">
                  App No.:{" "}
                  <span className="text-shead">
                    {profileData?.applicationNo}
                  </span>
                </span>
              </FormGroup>
            </Col>
            <Col sm={6} className="text-head status-text-right">
              <FormGroup className="form-top">
                <span className="text-head">
                  Submitted:{" "}
                  <span className="text-shead">
                    {profileData?.applicationSubmited}
                    {/* {formateDate(profileData?.applicationSubmited)} */}
                  </span>
                </span>
              </FormGroup>
            </Col>
          </Row>
        </Card>
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Vendor Profile Details</CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="compayName">Company Name</Label>
                    <Input
                      type="text"
                      key={profileData?.companyName}
                      name="compayName"
                      id="compayName"
                      placeholder="Company name (eg.Vendor 768)"
                      readOnly
                      defaultValue={profileData?.companyName}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="companyAddress">Company Address</Label>
                    <Input
                      type="text"
                      key={profileData?.addressLine1}
                      name="companyAddress"
                      id="companyAddress"
                      placeholder="Company address line 1"
                      defaultValue={profileData?.addressLine1}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.addressLine2}
                      name="companyAddress2"
                      id="companyAddress2"
                      placeholder="Company address line 2"
                      defaultValue={profileData?.addressLine2}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.city}
                      name="city"
                      id="city"
                      placeholder="Select city"
                      defaultValue={profileData?.city}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.state}
                      name="state"
                      id="state"
                      placeholder="Select state"
                      defaultValue={profileData?.state}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.zip}
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zip code"
                      defaultValue={profileData?.zip}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="Web url"
                      disabled
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      // onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="pocFirstName">Contact Details</Label>
                    <Input
                      type="text"
                      key={profileData?.firstName}
                      name="pocFirstName"
                      id="pocFirstName"
                      placeholder="First name (eg. John)"
                      defaultValue={profileData?.firstName}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="viewoption" for="pocLastName">
                      &nbsp;
                    </Label>
                    <Input
                      type="text"
                      key={profileData?.lastName}
                      name="pocLastName"
                      id="pocLastName"
                      placeholder="Last name (eg. Doe)"
                      defaultValue={profileData?.lastName}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.email}
                      name="pocEmail"
                      id="pocEmail"
                      placeholder="Email (eg. johndoe@vendor768.com)"
                      defaultValue={profileData?.email}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      key={profileData?.phone}
                      name="cPhone"
                      id="cPhone"
                      placeholder="Phone (eg. 1 (800) 333 4444)"
                      defaultValue={profileData?.phone}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="companySize">Company Size (Employee)</Label>
                    <CustomDropdown
                      name="pocCity"
                      defaultValue={empSizeOptions[1]}
                      options={empSizeOptions}
                      placeholder="eg. 51 - 100"
                      disabled={true}
                    />
                    {profileData?.companySizeEmployee}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="companySizeRevenue">
                      Company Size (Revenue)
                    </Label>
                    <CustomDropdown
                      name="companySizeRevenue"
                      defaultValue={revenueOptions[1]}
                      options={revenueOptions}
                      placeholder="eg. $0 - $5,000,000"
                      disabled={true}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              {profileData?.companySegmentSmartCityUtility ? (
                <Row form>
                  <Col md={6}>
                    <Label
                      for="companySegment"
                      style={{ marginBottom: "12px" }}
                    >
                      Company Segment
                    </Label>
                    <FormGroup>
                      <label className="input">
                        Smart City Utility
                        <input
                          type="checkbox"
                          name="companySegment"
                          disabled
                          defaultChecked
                        />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
              ) : (
                <div></div>
              )}
              <hr />
              <Row form>
                <Col md={12}>
                  <Label for="businessType" style={{ marginBottom: "15px" }}>
                    Business Type
                  </Label>
                  {profileData?.bissinessTypePrivatelyOwned ? (
                    <FormGroup className="chkbx">
                      <label className="input">
                        Privately Owned
                        <input
                          type="checkbox"
                          name="privatelyOwned"
                          disabled
                          defaultChecked
                        />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  ) : (
                    <div></div>
                  )}
                </Col>
                {profileData?.womenOwned ? (
                  <Col md={12}>
                    <FormGroup className="chkbx">
                      <label className="input">
                        Women Owned
                        <input
                          type="checkbox"
                          name="womenOwned"
                          disabled
                          defaultChecked
                        />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  </Col>
                ) : (
                  <div></div>
                )}
                {profileData?.minorityOwned ? (
                  <Col md={12}>
                    <FormGroup className="chkbx">
                      <label className="input">
                        Minority Owned
                        <input
                          type="checkbox"
                          name="minorityOwned"
                          disabled
                          defaultChecked
                        />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  </Col>
                ) : (
                  <div></div>
                )}
              </Row>
              <hr />
              <Row form>
                <Col md={12}>
                  <Label for="companyCategory" style={{ marginBottom: "15px" }}>
                    Company Category
                  </Label>
                  {typeof profileData !== "undefined" &&
                    profileData != null &&
                    profileData.category?.map((info) => {
                      return (
                        <FormGroup className="chkbx" key={info}>
                          <label className="input" key={info}>
                            {info}
                            <input
                              key={info}
                              type="checkbox"
                              name={info}
                              disabled
                              defaultChecked
                            />
                            <span className="checkmark"></span>
                          </label>
                        </FormGroup>
                      );
                    })}

                  <div></div>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Label
                  for="companyCapability"
                  style={{ marginBottom: "15px", paddingLeft: "12px" }}
                >
                  Company Capability
                </Label>

                {profileData?.companyCapabiltySmartUtilities ? (
                  <Col md={12}>
                    <FormGroup>
                      <label className="input">
                        Smart Utilities
                        <input
                          type="checkbox"
                          name="smartUtilities"
                          disabled
                          defaultChecked
                        />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  </Col>
                ) : (
                  <div></div>
                )}
              </Row>
              <hr />
              <Row form>
                <Label
                  for="companyDocuments"
                  style={{ marginBottom: "20px", paddingLeft: "12px" }}
                >
                  Company Documents/Agreements
                </Label>
                <Col md={12}>
                  <FormGroup>
                    <div
                      id="dropZoon"
                      className="upload-area__drop-zoon drop-zoon"
                    >
                      <span className="drop-zoon__icon">
                        <i className="icon-File---Text"></i>
                      </span>
                      <p className="drop-zoon__paragraph">Certificate 1</p>
                    </div>

                    <div
                      id="dropZoon"
                      className="upload-area__drop-zoon drop-zoon"
                    >
                      <span className="drop-zoon__icon">
                        <i className="icon-File---Text"></i>
                      </span>
                      <p className="drop-zoon__paragraph">Certificate 2</p>
                    </div>
                    <div
                      id="dropZoon"
                      className="upload-area__drop-zoon drop-zoon"
                    >
                      <span className="drop-zoon__icon">
                        <i className="icon-File---Text"></i>
                      </span>
                      <p className="drop-zoon__paragraph">Certificate 3</p>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={12}>
                  <FormGroup style={{ paddingTop: "9px" }}>
                    <Label for="comapnyDemos">Company Demos</Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    {/* <div id="player-overlay"> */}
                    <video
                      style={{ width: "100%", maxHeight: "100%" }}
                      /*  autoPlay */
                      muted
                      loop
                      controls
                    >
                      <source
                        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="../static/video/10s.webm"
                        type='video/webm; codecs="vp8, vorbis"'
                      />
                      <source
                        src="../static/video/10s.ogv"
                        type='video/ogg; codecs="theora, vorbis"'
                      />
                      <source
                        src="http://techslides.com/demos/sample-videos/small.webm"
                        type="video/webm"
                      />
                      Your browser does not support the video tag.
                    </video>
                    {/* </div> */}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    {/* <div id="player-overlay"> */}
                    <video
                      style={{ width: "100%", maxHeight: "100%" }}
                      /*  autoPlay */
                      muted
                      loop
                      controls
                    >
                      <source
                        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="../static/video/10s.webm"
                        type='video/webm; codecs="vp8, vorbis"'
                      />
                      <source
                        src="../static/video/10s.ogv"
                        type='video/ogg; codecs="theora, vorbis"'
                      />
                      <source
                        src="http://techslides.com/demos/sample-videos/small.webm"
                        type="video/webm"
                      />
                      Your browser does not support the video tag.
                    </video>
                    {/* </div> */}
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="companyApis">Company API's</Label>
                    <Input
                      type="text"
                      key={profileData?.companyApi}
                      name="apiDetail"
                      id="apiDetail"
                      placeholder="Company api's (eg.  678 Interface)"
                      defaultValue={profileData?.companyApi}
                      readOnly
                    />
                  </FormGroup>
                  <FormGroup>
                    <div
                      id="dropZoon"
                      className="upload-area__drop-zoon drop-zoon"
                    >
                      <span className="drop-zoon__icon">
                        <i className="icon-File---Text"></i>
                      </span>
                      <p className="drop-zoon__paragraph">
                        API Instructions.pdf
                      </p>
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

export default VendorProfile;
