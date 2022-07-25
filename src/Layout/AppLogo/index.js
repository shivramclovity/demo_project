import React, { Fragment } from "react";
import { connect } from "react-redux";

import AppMobileMenu from "../AppMobileMenu";

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";
import { Link } from "react-router-dom";

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    let { enableClosedSidebar } = this.props;

    // const {} = this.state;

    return (
      <Fragment>
        <div className="app-header__logo">
          {!enableClosedSidebar && (
            <div className="logo-src brand-logo">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                COXCC
              </Link>
            </div>
          )}
          {enableClosedSidebar && (
            <div className="logo-src1 brand-logo">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#ffffff" }}
                className="moblogo"
              >
                CC
              </Link>
            </div>
          )}
          {/* <div className="header__pane ml-auto">
            <div
              onClick={this.toggleEnableClosedSidebar}
              style={{ display: enableClosedSidebar ? "block" : "none" }}
            >
              <Hamburger
                active={enableClosedSidebar}
                type="elastic"
                onClick={() => this.setState({ active: !this.state.active })}
              />
            </div>
          </div> */}
        </div>
        <AppMobileMenu />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
