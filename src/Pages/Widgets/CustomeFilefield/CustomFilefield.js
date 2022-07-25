import React, { Fragment, useRef, useState } from "react";
import { Button } from "reactstrap";
import { common } from "../../../_services/common.service";

const CustomFilefield = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  const fileDefaults = {
    invalid: false,
    selected: { name: "No file chosen,yet" },
  };
  const [File, setFile] = useState(fileDefaults);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files.length === 0) {
      setFile(fileDefaults);
    } else {
      console.log("file upload---", e);
      // props.handleFile(fileUploaded); //handleFile is a function passed through props
      // const uploadedData = common.uploadFile(e);

      common.uploadFile(e).then(
        (data) => {
          console.log(data);
          // dispatch(success(data.data));
        },
        (error) => {
          console.log(error);
          // dispatch(failure(error.toString()));
          // dispatch(alertActions.error(error.toString()));
        }
      );

      setFile((previousState) => {
        return {
          ...previousState,
          selected: e.target.files[0],
        };
      });
      props.handleChange(e.target.files[0].name, props.inputData);
      return;
    }
  };

  const custom = props.custom;
  return (
    <Fragment>
      {/* {console.log("----", File.selected.name)} */}
      <input
        type="file"
        id={props.name}
        name={props.name}
        hidden="hidden"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      {custom && (
        <div
          id={`doc_` + props.name}
          className="upload-area__drop-zoon drop-zoon"
          onClick={handleClick}
        >
          <span className="icon-Info file-tooltip"></span>
          <span className="drop-zoon__icon">
            <i className="icon-File---Text"></i>
            <i
              className="icon-Checkbox---Circle fileupload_success"
              style={{ display: "none" }}
            ></i>
          </span>
          <p className="drop-zoon__paragraph">
            {props.placeholder ? props.placeholder : props.name}
          </p>
        </div>
      )}
      {!custom && (
        <div>
          <Button type="button" id={`doc_` + props.name} onClick={handleClick}>
            Choose a file
          </Button>
          <span id={`file_` + props.name}> {File.selected.name}</span>
        </div>
      )}
    </Fragment>
  );
};
export default CustomFilefield;
