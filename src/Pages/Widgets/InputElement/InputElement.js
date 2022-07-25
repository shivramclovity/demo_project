import React, { Fragment } from "react";
import { FormGroup, Input } from "reactstrap";
import CustomDatepicker from "../CustomDatepicker/CustomDatepicker";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomFilefield from "../CustomeFilefield/CustomFilefield";

/* 
NUMI  Number Input
TXTI	Text Input
TXTA	Text Area
CLDR	Calendar control
FLPB	File upload control basic
FLPA	File upload control advance
RDBN	Radio Button
CHKB  CheckBox
SLST	Single select dropdown
MLST	Multi select dropdown
*/

const InputElement = (props) => {
  // console.log("====", props.value);
  let element = "";
  switch (props.type) {
    case "TXTI":
      element = (
        <Input
          disabled={props.disabled}
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onChange={(e) => props.handleChange(e.target.value, props.inputData)}
        />
      );
      break;
    case "NUMI":
      element = (
        <Input
          disabled={props.disabled}
          type="number"
          name={props.name}
          placeholder={isNaN(props.placeholder) ? 0 : props.placeholder}
          defaultValue={props.value}
          onChange={(e) => props.handleChange(e.target.value, props.inputData)}
        />
      );
      break;

    case "TXTA":
      element = (
        <Input
          disabled={props.disabled}
          type="textarea"
          name={props.name}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onChange={(e) => props.handleChange(e.target.value, props.inputData)}
        />
      );
      break;

    case "CLDR":
      element = (
        <>
          <CustomDatepicker
            name={props.name}
            disabled={props.disabled ? props.disabled : false}
            value={props.value}
            handleChange={props.handleChange}
            inputData={props.inputData}
          />
        </>
      );
      break;

    case "FLPB":
      element = (
        <>
          <CustomFilefield {...props} />
        </>
      );
      break;

    case "FLPA":
      element = (
        <>
          <CustomFilefield name={props.name} custom="true" {...props} />
        </>
      );
      break;

    case "CHKB":
      element = (
        <>
          <FormGroup className="chkbx">
            <label className="input">
              {props.placeholder ? props.placeholder : props.name}
              <input type="checkbox" name={props.className} />
              <span className="checkmark"></span>
            </label>
          </FormGroup>
        </>
      );
      break;

    case "RDBN":
      element = (
        <>
          <FormGroup>
            <label className="input">
              {props.placeholder ? props.placeholder : props.name}
              <Input type="radio" name={props.name} />
            </label>
          </FormGroup>
        </>
      );
      break;

    case "SLST":
      element = (
        <CustomDropdown
          disabled={props.disabled ? props.disabled : false}
          value={props.value ? props.value : null}
          name={props.name}
          options={
            props.options
              ? props.options
              : [{ label: "Select " + props.name, value: "" }]
          }
          onChange={(selected) =>
            props.handleChange(selected.value, props.inputData, true)
          }
        />
      );
      break;

    case "MLST": //MLST
      element = (
        <CustomDropdown
          defaultValue={props.value}
          name={props.name}
          options={
            props.options
              ? props.options
              : [{ label: "Select " + props.name, value: "" }]
          }
          isSeleted={true}
          onChange={(selected) =>
            props.handleChange(selected, props.inputData, true)
          }
          isMulti={true}
        />
      );
      break;

    default:
      break;
  }

  return <Fragment>{element}</Fragment>;
};

export default InputElement;
