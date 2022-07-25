import React, { Fragment, useState, useEffect, useRef } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";
import { ToggleEye } from "./../Utility/Utility";
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);

  /* If logged in redirect accordingly */
  useEffect(() => {
    if (isLoggedIn) {
      location.state?.from
        ? navigate(location?.state?.from)
        : navigate("/dashboard");
    }
  }, [isLoggedIn, location, navigate]);

  const inputDefaults = {
    username_label: "",
    username: "",
    username_input: "",
    password: "",
    password_input: "",
    password_val: "",
  };
  const [inputs, setInputs] = useState(inputDefaults);
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

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
    const { name, value } = e.target;
    if (eventtype === "blur") {
      if (value === "") {
        return "error";
      } else if (name === "password") {
        if (value !== "") {
          return "success";
        }
        /* else if (value.length > 8) {
          return "success";
      } */
      } else if (value !== "" && name === "username") {
        /*  var pattern = new RegExp(
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
    const { username, password, username_input, password_input } = inputs;
    if (
      inputs.username_input === "input_success" &&
      inputs.password_input === "input_success"
    ) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/vendor" } };
      dispatch(userActions.login(username, password, from));
      setInputs(inputDefaults);
    } else if (
      username !== "" &&
      password !== "" &&
      (username_input === "input_active" ||
        username_input === "input_success") &&
      (password_input === "input_active" || password_input === "input_success")
    ) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/vendor" } };
      dispatch(userActions.login(username, password, from));
      setInputs(inputDefaults);
    } else {
      console.log("Invalid values");
    }
  };

  const { passwordVisibility, handlePasswordVisibility } = ToggleEye();

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
        <Card className="main-card card0 main-cardl card">
          <CardBody className="loginCard card-body">
            <Col className="text-center col-lg-6 login-bg ">
              <Col className="cox-logo mt-logo mt-logo-l">
                <img src="/images/cox-logo.png" alt="COX2M" />
              </Col>
              <h3 className="mb-4 font-weight-bold">Login to your account</h3>
              <p className="content content-l">
                Access to this system is by invitation only. To log in, use the
                email address registered on the system.
              </p>
              <Col className="mb-2"></Col>
            </Col>
            <Col className="col-lg-6 userarea">
              <Col className="col-12 text-right mt-3 mb-4">
                <Link
                  to="/"
                  className="support"
                  style={{ marginRight: "-3px" }}
                >
                  Help/Support
                </Link>
              </Col>
              <CardTitle className="text-center log-txt-h3">Sign In</CardTitle>
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="email" className={inputs.username_label}>
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="username"
                        id="username"
                        //  autoComplete="off"
                        ref={emailField}
                        placeholder="user@cox2m.com"
                        value={inputs.username || ""}
                        className={inputs.username_input}
                        //autofill={true}
                        //   onChange={handleChange}
                        onFocus={(e) => handleChange(e, "focus")}
                        onChange={(e) => handleChange(e, "focus")}
                        onBlur={(e) => handleChange(e, "blur")}
                        onKeyDown={handleKeyDown}
                      />
                      <span className="error_msg">
                        Please fill the input box.
                      </span>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="password" className={inputs.password_label}>
                        Password
                      </Label>
                      <Input
                        type={passwordVisibility ? "text" : "password"}
                        name="password"
                        id="password"
                        ref={passwordField}
                        placeholder=""
                        className={inputs.password_input}
                        value={inputs.password || ""}
                        //  onChange={handleChange}
                        onFocus={(e) => handleChange(e, "focus")}
                        onChange={(e) => handleChange(e, "focus")}
                        onBlur={(e) => handleChange(e, "blur")}
                        onKeyDown={handleKeyDown}
                      />
                      <i
                        onClick={() => handlePasswordVisibility("new")}
                        className={
                          passwordVisibility
                            ? "eyeview icon-Eye"
                            : "eyeview icon-Eye---Slash"
                        }
                      ></i>
                      <span className="error_msg">
                        Please fill the input box.
                      </span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} className="rembemberme">
                    <FormGroup
                      className="col-12"
                      style={{ marginLeft: "0px", visibility: "hidden" }}
                    >
                      <label className="input" style={{ marginLeft: "18px" }}>
                        Remember me
                        <input type="checkbox" name="chkFruit" />
                        <span className="checkmark"></span>
                      </label>
                    </FormGroup>
                  </Col>
                  <Col
                    md={6}
                    className="mobsect"
                    style={{ paddingLeft: "5px" }}
                  >
                    <FormGroup check>
                      <Link
                        className="txt-forgot"
                        style={{
                          float: "right",
                          paddingTop: "5px",
                          marginRight: "0px",
                        }}
                        to="/reset"
                      >
                        Forgot Password?
                      </Link>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form style={{ marginTop: "-13px" }}>
                  <Col md={12}>
                    <FormGroup>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-2 mb-5 btn btn-blue"
                      >
                        Sign In
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

export default Login;
