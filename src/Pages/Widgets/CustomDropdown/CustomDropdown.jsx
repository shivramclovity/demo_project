import React from "react";
import Select, { components } from "react-select";
import "./CustomDropdown.css";

const IndicatorSeparator = () => null;
const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const RotateIcon = (state) => ({
  fontSize: " 21px",
  fontWeight: 500,
  color: "#2e6ce4",
  transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
  transition: "all 0.35s ease-out",
});

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className="icon-Chevron---Down" style={RotateIcon(props)}></i>
    </components.DropdownIndicator>
  );
};

const colourStyles = {
  control: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "#f5f6fb" : "#fff",
      boxShadow: "none",
      borderColor: isFocused ? "#2e6ce4" : "#afb4c5",
    };
  },
};

const Control = ({ children, ...props }) => {
  return (
    <components.Control className={""} {...props}>
      {children}
    </components.Control>
  );
};

function CustomDropdown(props) {
  const optvalue = props.value ? props.value : ""; // props.options[0];
  return (
    <Select
      name={props.name}
      defaultValue={!props?.isMulti ? optvalue : null}
      closeMenuOnSelect={props?.isMulti ? false : true}
      components={{
        Control,
        Placeholder,
        IndicatorSeparator,
        DropdownIndicator,
      }}
      placeholder={
        props.placeholder ? props.placeholder : "Select " + props.name
      }
      required={true}
      className={props.className}
      styles={colourStyles}
      isMulti={props?.isMulti}
      onChange={props.onChange}
      options={props.options}
      isDisabled={props.disabled}
      isSearchable={false}
      classNamePrefix={props.classNamePrefix}
      maxMenuHeight={props.maxMenuHeight}
      menuPlacement={props.menuPlacement}
    />
  );
}

export default CustomDropdown;
