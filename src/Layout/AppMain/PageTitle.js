import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import cx from "classnames";
import {
  setBreadcrumbName,
  setCurrentPageTitle,
  setCurrentPageSubTitle,
  setCurrentPageSubHeading,
  setActiveScreenTab,
} from "../../reducers/ThemeOptions";

const PageTitle = (props) => {
  const dispatch = useDispatch();
  let {
    enablePageTitleIcon,
    enablePageTitleSubheading,
    heading,
    icon,
    subheading,
  } = props;

  useEffect(() => {
    dispatch(setActiveScreenTab(props?.currentTab));
    dispatch(setBreadcrumbName(props.breadcrumbName));
    dispatch(setCurrentPageTitle(props.title));
    dispatch(setCurrentPageSubTitle(props.heading));
    dispatch(setCurrentPageSubHeading(props.subheading));
  });

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div
            className={cx("page-title-icon", {
              "d-none": !enablePageTitleIcon,
            })}
          >
            <i className={icon} />
          </div>
          <div style={{ display: "none" }}>
            {heading}
            <div
              className={cx("page-title-subheading", {
                "d-none": !enablePageTitleSubheading,
              })}
            >
              {subheading}
            </div>
          </div>
        </div>
        {/* <div className="page-title-actions">
            <TitleComponent2 />            
          </div> */}
      </div>
    </div>
  );
  /*  } */
};

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({
  //  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
