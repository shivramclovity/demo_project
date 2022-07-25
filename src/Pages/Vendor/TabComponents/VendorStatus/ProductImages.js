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

const ProductImages = ({ handleSubComp }) => {

  const inputDefaults = {
    Items: "",
  };

  const { checklogout } = Checklogoutbrowser();

  const [inputs, setInputs] = useState(inputDefaults);

  // const optionClass = 'custom-options-width';
  /* useEffect(() => {
    CustomSelect(optionClass);
  }, []); */

  checklogout();
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
            <CardTitle>Vendor Profile Details</CardTitle>
            <Form>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginBottom: "15px" }}>
                <Col className="col-6">
                  <FormGroup style={{ paddingTop: "8px", marginBottom: "0.5rem" }}>
                    {/*<div className="video-drop_txt">Show items: </div>*/}
                    <div className="video-drop">
                      <CustomDropdown
                        name="Items"
                        options={itemOptions}
                        placeholder="18"
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
                <Col md={12}>
                  <FormGroup>
                    <div className="imagegrid">
                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=1" alt="" />

                      </a>

                      <a href="/" className="vertical">
                        <img src="https://source.unsplash.com/600x800/?sig=12" alt="" />
                      </a>

                      <a href="/" className="horizontal">
                        <img src="https://source.unsplash.com/800x600/?sig=71" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=40" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=32" alt="" />
                      </a>

                      <a href="/" className="big">
                        <img src="https://source.unsplash.com/800x800/?sig=7" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=111" alt="" />
                      </a>

                      <a href="/" className="vertical">
                        <img src="https://source.unsplash.com/600x800/?sig=94" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=11" alt="" />
                      </a>

                      <a href="/" className="horizontal">
                        <img src="https://source.unsplash.com/800x600/?sig=68" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=24" alt="" />
                      </a>

                      <a href="/" className="big">
                        <img src="https://source.unsplash.com/800x800/?sig=55" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=56" alt="" />
                      </a>

                      <a href="/" className="horizontal">
                        <img src="https://source.unsplash.com/800x600/?sig=186" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=117" alt="" />
                      </a>

                      <a href="/" className="big">
                        <img src="https://source.unsplash.com/800x800/?sig=157" alt="" />
                      </a>

                      <a href="/">
                        <img src="https://source.unsplash.com/600x600/?sig=287" alt="" />
                      </a>

                      <a href="/" className="vertical">
                        <img src="https://source.unsplash.com/600x800/?sig=307" alt="" />
                      </a>
                    </div>
                  </FormGroup>
                </Col>

              </Row>

            </Form>
          </CardBody>
        </Card>
        {/*<Button
          className="secondrybtn"
          style={{
            display: "inline"
          }}
        >
          Next
        </Button>*/}
        <Button
          className="secondryabbtn"
          style={{ display: "inline", float: "left" }}
          onClick={() => handleSubComp("prev")}
        >
          Back
        </Button>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default ProductImages;
