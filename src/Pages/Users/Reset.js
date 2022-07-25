import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./User.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../_actions";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Reset = () => {
  const dispatch = useDispatch();
  const inputDefaults = {
    username_label: "",
    username: "",
    username_input: "",
  };
  const [inputs, setInputs] = useState(inputDefaults);

  const handleChange = (e, eventtype) => {
    const labelClassPrefix = "label_";
    const inputClassPrefix = "input_";
    const name = e.target.name;
    const value = e.target.value;
    const className = validateInpute(e, eventtype);

    setInputs({
      ...inputs,
      [name + "_label"]: labelClassPrefix + className,
      [name + "_input"]: inputClassPrefix + className,
      [name]: value,
    });
  };

  const validateInpute = (e, eventtype) => {
    const { value } = e.target;
    if (eventtype === "blur") {
      if (value === "") {
        return "error";
      }
      if (value !== "") {
        /* var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        ); */
        var pattern = new RegExp(
          /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[_a-zA-Z0-9-]+)?@[_a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/i
        );
        if (!pattern.test(value)) {
          return "error";
        } else return "success";
      }
      return "";
    } else if ((value === "" || value !== "") && eventtype !== "blur") {
      return "active";
    }
  };

  const handleSubmit = () => {
    if (inputs.username_input === "input_success") {
      dispatch(userActions.sendResetLink(inputs.username));
      setInputs(inputDefaults);
    } else {
      console.log("Invalid values");
    }
  };

  return (
    <Fragment>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={100}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className="main-card mb-3 card0 main-cardl">
          <CardBody className="loginCard ">
            <Col className="text-center col-lg-6 login-bg ">
              <Col className="cox-logo mt-reset-logo mt-reset-r">
                <img src="/images/cox-logo.png" alt="COX2M" />
              </Col>
              <h3 className="mb-4 font-weight-bold">Reset your password</h3>
              <p className="content content-l" style={{ marginBottom: "50px" }}>
                {/*   We are here to help you reset your password. Enter the code sent
                to your associated email address. Your new password must be
                different from previous used password. */}
                A link will be sent to this email address if it is registered in
                our system.
              </p>
              <Col className="mb-2"></Col>
            </Col>
            <Col className="col-lg-6 userarea">
              <Row form className="mb-4">
                <Col className="col-6 text-left mt-3 mb-4">
                  <Link
                    to="/"
                    className="support"
                    style={{ marginRight: "-6px" }}
                  >
                    Back to sign in
                  </Link>
                </Col>
                <Col className="col-6 text-right mt-3 mb-4">
                  <Link to="/" className="support">
                    Help/Support
                  </Link>
                </Col>
              </Row>
              <CardTitle className="text-center log-txt-h3">
                Reset Password
              </CardTitle>
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="username" className={inputs.username_label}>
                        Registered email
                      </Label>
                      <Input
                        type="username"
                        name="username"
                        id="username"
                        className={inputs.username_input}
                        autoComplete="off"
                        placeholder="user@cox2m.com"
                        value={inputs.username || ""}
                        onFocus={(e) => handleChange(e, "focus")}
                        onChange={(e) => handleChange(e, "focus")}
                        onBlur={(e) => handleChange(e, "blur")}
                      />
                      <span className="error_msg">
                        Please fill the input box.
                      </span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  {/*<Col md={6} style={{
                    paddingLeft: "5px", marginBottom: "8px"
                  }}>
                    <FormGroup check>
                      <Link
                        className="txt-forgot"
                        style={{
                          paddingTop: "0px",
                          marginRight: "8px",
                        }}
                        to="/reset"
                      >
                        Back to sign in
                      </Link>
                    </FormGroup>
                      </Col>*/}
                </Row>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-2 mb-5 btn btn-blue"
                      >
                        Reset Password
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Reset;
