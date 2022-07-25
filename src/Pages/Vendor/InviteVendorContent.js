import React, { Fragment, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
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
import { useDispatch } from "react-redux";
import { vendorActions } from "../../_actions/vendor.actions";
import CustomDropdown from "../Widgets/CustomDropdown/CustomDropdown";
import Statelist from "../../data/StateList";
import Checklogoutbrowser from "../Utility/Checklogout";

const InviteVendorContent = () => {
  const inputDefaults = {
    companyName: "",
    companyName_label: "",
    companyName_input: "",
    firstName: "",
    firstName_input: "",
    firstName_label: "",
    lastName: "",
    lastName_input: "",
    lastName_label: "",
    category: "",
    category_label: "",
    category_input: "",
    website: "",
    website_label: "",
    website_input: "",
    email: "",
    email_input: "",
    addressLine1: "",
    addressLine1_label: "",
    addressLine1_input: "",
    addressLine2: "",
    addressLine2_label: "",
    addressLine2_input: "",
    phone: "",
    phone_input: "",
    city: "",
    city_label: "",
    city_input: "",
    state: "",
    stateName: "",
    state_label: "",
    state_input: "",
    zip: "",
    zip_label: "",
    zip_input: "",
    shortDescription: "",
    shortDescription_label: "",
    shortDescription_input: "",
  };
  const catOptions = [
    { label: "Hardware", value: "Hardware" },
    { label: "Software", value: "Software" },
    { label: "Services", value: "Services" },
  ];

  const { checklogout } = Checklogoutbrowser();
  const [inputs, setInputs] = useState(inputDefaults);
  const [selectedValue, setSelectedValue] = useState(catOptions);
  const [selectedValuestate, setselectedValuestate] = useState(Statelist);
  let catvalue = [];
  let isdisabled = false;

  /*  useEffect(() => {
    setselectedValuestate(Statelist);
  }, [selectedValuestate]); */

  const handleDropdown = (e, name) => {
    catvalue = Array.isArray(e) ? e.map((x) => x.value) : [];
    const labelClassPrefix = "label_";
    const inputClassPrefix = "input_";

    if (name === "category") {
      setInputs({
        ...inputs,
        [name]: Array.isArray(e) ? e.map((x) => x.value) : [],
      });
      //  const name1 = "category";
      if (catvalue.length !== 0) {
        setInputs({
          ...inputs,
          [name]: catvalue,
          [name + "_label"]: labelClassPrefix + "success",
          [name + "_input"]: inputClassPrefix + "success",
        });
      } else {
        setInputs({
          ...inputs,
          [name]: catvalue,
          [name + "_label"]: labelClassPrefix + "error",
          [name + "_input"]: inputClassPrefix + "error",
        });
      }
    } else {
      setInputs({
        ...inputs,
        // ["state"]: e.value,
      });
      // console.log("drop: ", name, e.value, inputs);
      if (e.value !== "") {
        setInputs({
          ...inputs,
          [name + "_label"]: labelClassPrefix + "success",
          [name + "_input"]: inputClassPrefix + "success",
        });
      } else {
        setInputs({
          ...inputs,
          [name + "_label"]: labelClassPrefix + "",
          [name + "_input"]: inputClassPrefix + "",
        });
      }
      // setselectedValuestate(e);
    }
  };

  const handleChange = (e, eventtype, validtype) => {
    const labelClassPrefix = "label_";
    const inputClassPrefix = "input_";
    const name = e.target.name;
    const value = e.target.value;
    const className = validateInpute(e, eventtype, validtype);

    setInputs({
      ...inputs,
      [name + "_label"]: labelClassPrefix + className,
      [name + "_input"]: inputClassPrefix + className,
      [name]: value,
    });
  };

  const blockInvalidChar = (e) =>
    ["e", "E"].includes(e.key) && e.preventDefault();

  const validateInpute = (e, eventtype, validtype) => {
    const { name, value } = e.target;

    if (validtype === "mandatory") {
      if (eventtype === "blur") {
        if (value === "") {
          return "error";
        } else if (value !== "" && name !== "email" && name !== "phone") {
          var patternblank = new RegExp("^\\s+$");
          if (patternblank.test(value)) {
            return "error";
          } else return "success";
        } else if (name === "email") {
          if (value !== "") {
            var pattern = new RegExp(
              /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[_a-zA-Z0-9-]+)?@[_a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/i
            );
            if (!pattern.test(value)) {
              return "error";
            } else return "success";
          }
        } else if (name === "phone") {
          if (value.length > 13 || value.length < 10) {
            return "error";
          }
        }

        return "success";
      } else if ((value === "" || value !== "") && eventtype !== "blur") {
        return "active";
      }
    }

    if (validtype === "na") {
      if (eventtype === "blur") {
        if (value === "") {
          return "";
        } else if (value !== "") return "success";
      } else if ((value === "" || value !== "") && eventtype !== "blur") {
        return "active";
      }
    }
  };

  const clearinputs = () => {
    Object.keys(inputs).forEach((key) => removeValidation(key));
    setselectedValuestate([]);
    setSelectedValue([]);
    inputs.category = [];
    setSelectedValue(catOptions);
  };

  const removeValidation = (control) => {
    inputs[control] = "";
    setInputs({
      ...inputs,
      [inputs.control]: "",
    });
  };

  const validatesubmit = () => {
    if (inputs.companyName === "") {
      inputs.companyName_label = "label_error";
      inputs.companyName_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.companyName_label]: "label_error",
        [inputs.companyName_input]: "input_error",
      });
    }
    if (inputs.firstName === "") {
      inputs.firstName_label = "label_error";
      inputs.firstName_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.firstName_label]: "label_error",
        [inputs.firstName_input]: "input_error",
      });
    }
    if (inputs.lastName === "") {
      inputs.lastName_label = "label_error";
      inputs.lastName_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.lastName_label]: "label_error",
        [inputs.lastName_input]: "input_error",
      });
    }
    if (inputs.email === "") {
      inputs.email_label = "label_error";
      inputs.email_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.email_label]: "label_error",
        [inputs.email_input]: "input_error",
      });
    }

    if (inputs.category.length === 0) {
      inputs.category_label = "label_error";
      inputs.category_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.category_label]: "label_error",
        [inputs.category_input]: "input_error",
      });
    }

    if (inputs.phone === "") {
      inputs.phone_input = "input_error";
      setInputs({
        ...inputs,
        [inputs.phone_label]: "label_error",
        [inputs.phone_input]: "input_error",
      });
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    checklogout();
    const {
      companyName,
      firstName,
      lastName,
      email,
      phone,
      category,
      website,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      shortDescription,
    } = inputs;

    validatesubmit();

    if (companyName && firstName && lastName && email && phone && category) {
      dispatch(
        vendorActions.inviteVendor({
          contact: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
          },
          company: {
            name: companyName,
            website: website,
            categories: category,
            address: {
              addressLine1: addressLine1,
              addressLine2: addressLine2,
              city: city,
              state: state,
              zip: zip,
            },
            shortDescription: shortDescription,
          },
        })
      );

      isdisabled = true;
      setTimeout(() => {
        clearinputs();
      }, 0);
      isdisabled = false;
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
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle className="card-mb">
              Vendor Information
              <span className="required">* Required field</span>
            </CardTitle>
            <hr />
            <Form>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label
                      for="companyName"
                      className={inputs.companyName_label}
                    >
                      Company Name <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company name"
                      className={inputs.companyName_input}
                      //  onChange={(e) => handleChange(e)}
                      onFocus={(e) => handleChange(e, "focus", "mandatory")}
                      onChange={(e) => handleChange(e, "focus", "mandatory")}
                      onBlur={(e) => handleChange(e, "blur", "mandatory")}
                      value={inputs.companyName}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Label
                      for="contactDetails"
                      className={inputs.firstName_label}
                    >
                      Contact Details <span className="text-danger">*</span>
                    </Label>

                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      className={inputs.firstName_input}
                      //   onChange={(e) => handleChange(e)}
                      onFocus={(e) => handleChange(e, "focus", "mandatory")}
                      onChange={(e) => handleChange(e, "focus", "mandatory")}
                      onBlur={(e) => handleChange(e, "blur", "mandatory")}
                      value={inputs.firstName}
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Label className="viewoption" for="contactDetails">
                      {" "}
                      &nbsp;
                    </Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      className={inputs.lastName_input}
                      //   onChange={(e) => handleChange(e)}
                      onFocus={(e) => handleChange(e, "focus", "mandatory")}
                      onChange={(e) => handleChange(e, "focus", "mandatory")}
                      onBlur={(e) => handleChange(e, "blur", "mandatory")}
                      value={inputs.lastName}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      //  onChange={(e) => handleChange(e)}
                      className={inputs.email_input}
                      onFocus={(e) => handleChange(e, "focus", "mandatory")}
                      onChange={(e) => handleChange(e, "focus", "mandatory")}
                      onBlur={(e) => handleChange(e, "blur", "mandatory")}
                      value={inputs.email}
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className={inputs.phone_input}
                      //  onChange={(e) => handleChange(e)}
                      onFocus={(e) => handleChange(e, "focus", "mandatory")}
                      onChange={(e) => handleChange(e, "focus", "mandatory")}
                      onBlur={(e) => handleChange(e, "blur", "mandatory")}
                      value={inputs.phone}
                      onKeyDown={blockInvalidChar}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="category" className={inputs.category_label}>
                      Category <span className="text-danger">*</span>
                    </Label>
                    <CustomDropdown
                      isMulti={true}
                      name="category"
                      key={`my_unique_select_key__${selectedValue}`}
                      options={selectedValue}
                      placeholder="Select Category"
                      classNamePrefix={inputs.category_input}
                      //  defaultValue={selectedValue}
                      value={selectedValue}
                      onChange={(e) => handleDropdown(e, "category")}
                    />
                  </FormGroup>
                </Col>

                <Col sm={6}>
                  <FormGroup>
                    <Label for="web" className={inputs.website_label}>
                      Website
                    </Label>
                    <Input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="URL (https://)"
                      className={inputs.website_input}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.website}
                      // onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label for="address" className={inputs.addressLine1_label}>
                      Address
                    </Label>
                    <Input
                      type="text"
                      name="addressLine1"
                      id="addressLine1"
                      placeholder="Address line 1"
                      className={inputs.addressLine1_input}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.addressLine1}
                      //    onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="addressLine2"
                      id="addressLine2"
                      placeholder="Address line 2"
                      //   onChange={(e) => handleChange(e)}
                      className={inputs.addressLine2_input}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.addressLine2}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form style={{ marginBottom: "10px" }}>
                <Col md={4}>
                  <FormGroup>
                    <Label for="city" className={inputs.city_label}>
                      City
                    </Label>

                    {/*  <CustomDropdown
                      name="city"
                      options={cityOptions}
                      placeholder="Select city"
                      className=""
                      outerClassName=""
                      isSelected={true}
                      onChange={(e) => handleDropdown(e, "city")}
                    /> */}

                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder=""
                      //   onChange={(e) => handleChange(e)}
                      className={inputs.city_input}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.city}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="state" className={inputs.state_label}>
                      State
                    </Label>
                    <CustomDropdown
                      name="state"
                      key={`unique_select_key__${selectedValuestate}`}
                      options={selectedValuestate}
                      placeholder="Select State"
                      onChange={(e) => handleDropdown(e, "state")}
                      maxMenuHeight={300}
                      menuPlacement="auto"
                      classNamePrefix={inputs.state_input}
                      //   value={inputs.state}
                      value={selectedValuestate}
                    />
                  </FormGroup>
                </Col>
                <Col sm={4}>
                  <FormGroup>
                    <Label for="zip" className={inputs.zip_label}>
                      Zip / Postal Code
                    </Label>
                    <Input
                      type="number"
                      name="zip"
                      id="zip"
                      placeholder=""
                      //   onChange={(e) => handleChange(e)}
                      className={inputs.zip_input}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.zip}
                      onKeyDown={blockInvalidChar}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup>
                    <Label
                      for="shortDescription"
                      className={inputs.shortDescription_label}
                    >
                      Short Description
                    </Label>
                    <Input
                      type="textarea"
                      name="shortDescription"
                      id="shortDescription"
                      className={inputs.shortDescription_input}
                      //   onChange={(e) => handleChange(e)}
                      onFocus={(e) => handleChange(e, "focus", "na")}
                      onChange={(e) => handleChange(e, "focus", "na")}
                      onBlur={(e) => handleChange(e, "blur", "na")}
                      value={inputs.shortDescription}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col sm={12}>
                  <FormGroup className="text-right">
                    <Button
                      type="button"
                      className="mt-2 right btn-primary"
                      onClick={handleSubmit}
                      disabled={isdisabled}
                    >
                      Invite
                    </Button>
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

export default InviteVendorContent;
