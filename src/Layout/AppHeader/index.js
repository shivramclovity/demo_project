import React, { Fragment } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import HeaderLogo from "../AppLogo";

// import SearchBox from "./Components/SearchBox";
import UserBox from "./Components/UserBox";
import AlertBox from "./Components/AlertBox";
import { Breadcrumb } from "../AppNav/Breadcrumb";

class Header extends React.Component {
  render() {
    const breadcrumbMap = new Map(Breadcrumb.map((i) => [i.id, i]));

    let {
      breadcrumbName,
      heading,
      activeScreenTab,
      // subHeading,
      // subHeadingActive,
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    const bCrumbs = breadcrumbMap.get(breadcrumbName);

    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <HeaderLogo />

          <div
            className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall,
            })}
          >
            <div className="app-header-left">
              <div className="head-title">{heading}</div>
              <div>
                <nav
                  className=""
                  aria-label="breadcrumb"
                  style={{ marginTop: "50px" }}
                >
                  {activeScreenTab && bCrumbs?.element.length > 0 && (
                    <ol className="breadcrumb">
                      {bCrumbs?.element.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <li className="breadcrumb-item ">
                              {index !== 0 ? (
                                <Link to={item.to}> {item.label}</Link>
                              ) : (
                                item.label
                              )}
                            </li>

                            {activeScreenTab.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`breadcrumb-item ${
                                    activeScreenTab.length - 1 === index
                                      ? " active"
                                      : " "
                                  }`}
                                >
                                  {item}
                                </li>
                              );
                            })}
                          </Fragment>
                        );
                      })}
                    </ol>
                  )}
                </nav>
              </div>

              {/* <SearchBox/> */}
            </div>
            <div className="app-header-right">
              <AlertBox />
              <UserBox />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  breadcrumbName: state.ThemeOptions.breadcrumbName,
  activeScreenTab: state.ThemeOptions.activeScreenTab,
  heading: state.ThemeOptions.currentPageTitle,
  subHeading: state.ThemeOptions.currentPageSubTitle,
  subHeadingActive: state.ThemeOptions.currentPageSubHeading,
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({
  // setActiveScreenTab: (enable) => dispatch(setEnableClosedSidebar(enable)),
  // setActiveScreenTab: () => setActiveScreenTab(""),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
