import React, { Fragment, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./User.css";
import { ToggleEye } from "./../Utility/Utility";
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

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [parms] = useSearchParams();
  const token = parms.get("token");
  const mode = parms.get("mode");
  const inputDefaults = {
    password_label: "",
    password: "",
    confirmpassword_label: "",
    confirmpassword: "",
    password_val: "",
    confirmpassword_val: "",
  };
  const [inputs, setInputs] = useState(inputDefaults);

  const handleChange = (e, eventtype) => {
    const labelClassPrefix = "label_";
    const inputClassPrefix = "input_";
    const name = e.target.name;
    const value = e.target.value;
    const className = validateInpute(e, eventtype);

    if (className === "success") {
      // inputs.confirmpassword_label = labelClassPrefix + className;
      inputs.password_label = labelClassPrefix + className;
      // inputs.confirmpassword = inputClassPrefix + className;
      inputs.password = inputClassPrefix + className;
    } else if (className === "error" || className === "warning") {
      inputs.confirmpassword_label = labelClassPrefix + className;
      inputs.password_label = labelClassPrefix + className;
      inputs.confirmpassword = inputClassPrefix + className;
      inputs.password = inputClassPrefix + className;
    }
    setInputs({
      ...inputs,
      [name + "_label"]: labelClassPrefix + className,
      [name]: inputClassPrefix + className,
      [name + "_val"]: value,
    });
  };

  const validateInpute = (e, eventtype) => {
    const { name, value } = e.target;
    if (eventtype === "blur") {
      if (value === "") {
        return "error";
      }

      if (name === "password") {
        var pattern = new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        );
        if (!pattern.test(value)) {
          return "error";
        }
        if (inputs.password_val !== "" && inputs.confirmpassword_val !== "") {
          if (inputs.password_val === inputs.confirmpassword_val) {
            return "success";
          }
          return "error";
        } else return "success";
      } else if (name === "confirmpassword") {
        if (inputs.password_val !== "" && inputs.confirmpassword_val !== "") {
          if (inputs.password_val === inputs.confirmpassword_val) {
            return "success";
          }
          return "error";
        }
      }
    } else if ((value === "" || value !== "") && eventtype !== "blur") {
      return "active";
    }
  };

  const handleSubmit = () => {
    if (
      inputs.password === "input_success" &&
      inputs.confirmpassword === "input_success"
    ) {
      dispatch(
        userActions.changePassword({
          password: inputs.password_val,
          token: token,
          mode: mode,
        })
      );
      setInputs(inputDefaults);
    } else {
      console.log("Password and Confirm password should be same");
    }
  };

  const { passwordVisibility, confirmPasswordShown, handlePasswordVisibility } =
    ToggleEye();
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
              <Col className="cox-logo mt-reset-logo mt-logo-cp">
                <img src="/images/cox-logo.png" alt="COX2M" />
              </Col>
              <h3 className="mb-4 font-weight-bold">Change your password</h3>
              <p className="content content-l">
                {/*  We are here to help you reset your password. Enter the code sent
                to your associated email address. Your new password must be
                different from previous used password. */}
                Strong passwords are required. Passwords must contain an
                uppercase character, a lowercase character, a number, and a
                symbol. Passwords must be a minimum of 8 characters long, and
                must be different from your previous password.
              </p>
              <Col className="mb-2"></Col>
            </Col>
            <Col className="col-lg-6 userarea">
              <Row form>
                <Col className="col-6 text-left mt-3 mb-4">
                  {/*<Link
                    to="/"
                    className="support"
                    style={{ marginRight: "-6px" }}
                  >
                    Back to sign in
                  </Link>*/}
                </Col>
                <Col className="col-6 text-right mt-3 mb-4">
                  <Link to="/" className="support">
                    Help/Support
                  </Link>
                </Col>
              </Row>
              <CardTitle className="text-center log-txt-h3">
                Change Password
              </CardTitle>
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label className={inputs.password_label} for="password">
                        New password
                      </Label>
                      <Input
                        type={passwordVisibility ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder=""
                        className={inputs.password}
                        onFocus={(e) => handleChange(e, "focus")}
                        onChange={(e) => handleChange(e, "focus")}
                        onBlur={(e) => handleChange(e, "blur")}
                        value={inputs.password_val || ""}
                      />
                      {/*    {error.password && <span className='err'>{error.password}</span>} */}
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
                  <Col md={12}>
                    <FormGroup>
                      <Label
                        for="confirmpassword"
                        className={inputs.confirmpassword_label}
                      >
                        Confirm new password
                      </Label>
                      <Input
                        type={confirmPasswordShown ? "text" : "password"}
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder=""
                        className={inputs.confirmpassword}
                        onFocus={(e) => handleChange(e, "focus")}
                        onChange={(e) => handleChange(e, "focus")}
                        onBlur={(e) => handleChange(e, "blur")}
                        value={inputs.confirmpassword_val || ""}
                      />
                      {/*     {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
                      <i
                        onClick={() => handlePasswordVisibility("confirm")}
                        className={
                          confirmPasswordShown
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
                  <Col md={12}>
                    <FormGroup>
                      <Button
                        onClick={handleSubmit}
                        className="mt-2 mb-5 btn btn-blue"
                      >
                        Submit
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

export default ChangePassword;
