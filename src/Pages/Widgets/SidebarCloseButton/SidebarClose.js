import React from "react";
import { connect, useDispatch } from "react-redux";
import { setEnableClosedSidebar } from "../../../reducers/ThemeOptions";
import "./sidebarClose.css";

const SidebarClose = (props) => {
  const dispatch = useDispatch();
  const { enableClosedSidebar } = props;

  const handleToogle = () => {
    dispatch(setEnableClosedSidebar(!enableClosedSidebar));
  };

  return (
    <div
      onClick={handleToogle}
      className={`commonStyle ${
        !enableClosedSidebar
          ? "openStyle icon-Chevron---Left"
          : "closeStyle icon-Chevron---Right"
      }`}
    ></div>
  );
};

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
});

export default connect(mapStateToProps)(SidebarClose);
