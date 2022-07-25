import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { FormGroup, Input } from "reactstrap";
import "./CustomDatepicker.css";

const CustomInput = ({ openCalendar, value, handleValueChange, disabled }) => {
  return (
    <>
      <FormGroup>
        <span
          className="date icon-Calendar---Dates"
          onClick={!disabled ? openCalendar : () => {}}
        ></span>
        <Input
          disabled={disabled}
          onFocus={openCalendar}
          value={value}
          onChange={handleValueChange}
        />
      </FormGroup>
    </>
  );
};

const CustomDatepicker = (props) => {
  const [localProps, setLocalProps] = useState({
    value: props.value ? props.value : "", // new Date(),
    format: "MM/DD/YYYY",
    onChange: (date) => {
      props.handleChange(date.format(), props.inputData);
    },
  });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  return (
    <DatePicker
      months={months}
      weekDays={weekDays}
      {...localProps}
      onPropsChange={setLocalProps}
      arrow={false}
      render={<CustomInput disabled={props.disabled} />}
    />
  );
};
export default CustomDatepicker;
