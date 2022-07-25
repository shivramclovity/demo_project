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
  Button,
} from "reactstrap";
//import CustomSelect from "../../../Widgets/CustomSelect/CustomSelect";
import CustomDropdown from "../../../Widgets/CustomDropdown/CustomDropdown";
import Checklogoutbrowser from "../../../Utility/Checklogout";

const Videos = ({ handleSubComp }) => {

  const inputDefaults = {
    Items: "",
  };
  const { checklogout } = Checklogoutbrowser();

  const [inputs, setInputs] = useState(inputDefaults);

  checklogout();
  // const optionClass = 'custom-options-width';
  /* useEffect(() => {
    CustomSelect(optionClass);
  }, []);
 */
  const handleDropdown = (e, name) => {
    setInputs({
      ...inputs,
      [name]: e.value,
    });
  };

  const itemOptions = [
    { label: "Show item", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

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
                <span className="status-vendor">Vendor 123</span>
              </FormGroup>
            </Col>
            <Col sm={6} className="status-text-right">
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
            <Col sm={6} className="text-head status-text-right">
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
            <Col sm={6} className="text-head status-text-right">
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
            <CardTitle>Company demo videos</CardTitle>
            <Form>
              <Row form style={{ marginBottom: "15px" }}>
                <Col className="col-6">
                  <FormGroup style={{ paddingTop: "8px", marginBottom: "0.5rem" }}>

                    {/*<div className="video-drop_txt" >Show items: </div>*/}
                    <div className="video-drop" >
                      <CustomDropdown
                        name="Items"
                        options={itemOptions}
                        placeholder="Item"
                        className=""
                        outerClassName=""
                        isSelected={true}
                        onChange={(e) => handleDropdown(e, "item")}
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col className="col-6">
                  <FormGroup className="icon-align">
                    <span className="video-next-prev"><i className="icon-Chevron---Left"></i></span>
                    <span className="video-next-prev"><i className="icon-Chevron---Right"></i></span>
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup id="outer">
                    {/* <div id="player-overlay"> */}
                    <video className="video"
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
                <Col md={6}>
                  <FormGroup id="outer">
                    {/* <div id="player-overlay"> */}
                    <video className="video"
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
              <Row form>
                <Col md={6}>
                  <FormGroup id="outer">
                    {/* <div id="player-overlay"> */}
                    <video className="video"
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
                <Col md={6}>
                  <FormGroup id="outer">
                    {/* <div id="player-overlay"> */}
                    <video className="video"
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


            </Form>
          </CardBody>
        </Card>
        <Button
          className="btn-primary"
          style={{
            display: "inline",
            borderColor: "#2e6ce4",
            padding: "7px 16px !important",
          }}
          onClick={() => handleSubComp("next")}
        >
          Next
        </Button>
        <Button
          className="secondryabbtn"
          style={{ display: "inline", float: "left" }}
          onClick={() => handleSubComp("prev")}
        >
          Back
        </Button>
      </ReactCSSTransitionGroup>
    </Fragment >
  );
};

export default Videos;
