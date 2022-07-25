import React, { Fragment } from "react";
import { Progress } from "reactstrap";

const ProgressBar = (props) => {
  return (
    <Fragment>
      <Progress className="mb-2" value={props.value} />
      <div className="mb-2 text-center">{props.value}%</div>
    </Fragment>
  );
};

export default ProgressBar;
