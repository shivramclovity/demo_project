import React from "react";
import { NavLink } from "react-router-dom";

/* class CustomLink extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log("---------", e);
    if (this.props.hasSubMenu) this.props.toggleSubMenu(e);
    else {
      /*
       * your own operation using "to"
       * myGotoFunc(this.props.to);
       * or
       * this.props.activateMe( Parameters to pass "onSelected" event listener );
       *
      this.props.activateMe({
        newLocation: this.props.to,
        selectedMenuLabel: this.props.label,
        // activeClassName: "active-nav",
      });
    }
  }

  render() {
    return (
      <NavLink
        className={`metismenu-link ${this.props.active ? "" : ""}`}
        to={this.props.to}
        onClick={this.onClick}
      >
        {this.props.children}
      </NavLink>
    );
  }
}

export default CustomLink; */

import PropTypes from "prop-types";
import classnames from "classnames";

const CustomLink = ({
  className,
  classNameActive,
  classNameHasActiveChild,
  active,
  hasActiveChild,
  to,
  externalLink,
  hasSubMenu,
  toggleSubMenu,
  activateMe,
  children,
}) => {
  let hasChildClass = hasSubMenu ? "hasChildren" : "noChildren";
  return (
    <NavLink
      className={classnames(
        className,
        hasChildClass,
        //   active && classNameActive,
        hasActiveChild && classNameHasActiveChild
      )}
      to={to}
      onClick={hasSubMenu ? toggleSubMenu : activateMe}
      target={externalLink ? "_blank" : undefined}
    >
      {children}
    </NavLink>
  );
};

CustomLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null,
};

CustomLink.propTypes = {
  className: PropTypes.string.isRequired,
  classNameActive: PropTypes.string.isRequired,
  classNameHasActiveChild: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default CustomLink;
