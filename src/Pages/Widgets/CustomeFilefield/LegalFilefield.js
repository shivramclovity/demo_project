import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, UncontrolledTooltip } from "reactstrap";
import { alertConstants } from "../../../_constants";
// import { legal } from "../../../_services/legal.service";

const getFileOptions = (docOptions, optionName) => {
  if (docOptions && optionName && optionName.length > 0) {
    let x = docOptions.find((data) => data.optionName === optionName);
    return x?.value;
  } else {
    return "";
  }
};

const LegalFilefield = (props) => {
  // Create a reference to the hidden file input element
  const selectdFile = props.fileInfo ? props?.fileInfo?.name : null;
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const fileDefaults = {
    invalid: false,
    selected: { name: "Upload Document" },
  };
  const [File, setFile] = useState(fileDefaults);

  const handleClick = () => {
    if (!props.loading) {
      //If not in loading state.
      setFile(fileDefaults);
      props.handleFileChange(null);
      hiddenFileInput.current.value = null;
    }
    hiddenFileInput.current.click();
  };
  const fileTypes = getFileOptions(props.fileOptions, "Allowed Extensions");
  const allowedExts = fileTypes.toLowerCase().split("|");
  const allowedSize = getFileOptions(props.fileOptions, "Max Size");
  const extMessage = allowedExts.map((ext) => `.${ext}`).join(", ");

  const handleChange = (e) => {
    if (e.target.files.length === 0) {
      setFile(fileDefaults);
      props.handleFileChange(null);
    } else {
      const fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(2); // IN MB

      let error = null;
      let ext = e.target.files[0].name
        ? e.target.files[0].name.split(".").pop()
        : null;

      if (allowedExts && ext && !allowedExts.includes(ext.toLowerCase())) {
        error = `Please select valid file types. e.g(${extMessage} only)`;
      } else if (fileSize > parseInt(allowedSize)) {
        console.log("File size: ", fileSize + "MB");
        error = `File size can not be more than ${allowedSize} MB`;
      }

      if (error) {
        setFile(fileDefaults);
        props.handleFileChange(null);
        dispatch(failure(error));
        return;
      }

      setFile((previousState) => {
        return {
          ...previousState,
          selected: e.target.files[0],
        };
      });
      props.handleFileChange(e.target.files[0]);
      return;
    }
  };

  function failure(message) {
    return { type: alertConstants.ERROR, message };
  }

  const custom = props.custom;
  return (
    <Fragment>
      <input
        type="file"
        id={props.name}
        name={props.name}
        hidden="hidden"
        ref={hiddenFileInput}
        onChange={handleChange}
        disabled={props.loading}
      />
      {custom && (
        <div
          id={`doc_` + props.name}
          className="upload-area__drop-zoon drop-zoon"
          onClick={() => handleClick()}
        >
          <span className="icon-Info file-tooltip" id={`upload_${props.name}`}>
            <UncontrolledTooltip
              placement="top"
              target={`upload_${props.name}`}
            >
              {/* {props?.info} */}
              Accepted types: .pdf, .doc, .docx, .xls, .xlsx
              <br />
              Max size: 10 MB
            </UncontrolledTooltip>
          </span>
          <span className="drop-zoon__icon">
            <i className="icon-File---Text"></i>
            <i
              className="icon-Checkbox---Circle fileupload_success"
              style={{ display: "none" }}
            ></i>
          </span>
          <p className="drop-zoon__paragraph">
            {selectdFile ? selectdFile : props.placeholder}
          </p>
        </div>
      )}
      {!custom && (
        <div>
          <Button
            type="button"
            id={`doc_` + props.name}
            onClick={() => handleClick()}
          >
            Choose a file
          </Button>
          <span id={`file_` + props.name}> {File.selected.name}</span>
        </div>
      )}
    </Fragment>
  );
};
export default LegalFilefield;
