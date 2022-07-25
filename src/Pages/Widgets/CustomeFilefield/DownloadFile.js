import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { common } from "../../../_services/common.service";

const DownloadFile = (props) => {
  const custom = props.custom;
  return (
    <Fragment>
      <input type="file" name={props.name} hidden="hidden" />
      {custom && (
        <div
          id="dropZoon"
          className="upload-area__drop-zoon drop-zoon"
          onClick={() => common.downloadFile(props.url, props.placeholder)}
        >
          <span
            id={`download_${props?.name}`}
            className="icon-Info file-tooltip"
          ></span>
          <UncontrolledTooltip
            placement="top"
            target={`download_${props?.name}`}
          >
            {props?.info}ss
          </UncontrolledTooltip>
          <span className="drop-zoon__icon">
            <i className="icon-File---Text"></i>
            <i
              className="icon-Checkbox---Circle fileupload_success"
              style={{ display: "none" }}
            ></i>
          </span>
          <p className="drop-zoon__paragraph">{props.placeholder}</p>
        </div>
      )}
    </Fragment>
  );
};
export default DownloadFile;
