import React, { Fragment } from "react";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  UncontrolledButtonDropdown,
} from "reactstrap";

const AlertBox = () => {
  return (
    <Fragment>
      <div className="header-dots">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="link1" className="p-0 ">
            {/* <img width={42} className="rounded-circle" src={avatar1} alt="" /> */}
            <span className="alertBtn">
              <i
                className="icon-Bell icon-gradient1 bg-happy-fisher1"
                style={{ fontSize: "28px", color: "#2E6CE4" }}
              ></i>
              <div className="badge badge-dot badge-dot-sm badge-danger"></div>
            </span>
          </DropdownToggle>
          <DropdownMenu right className="rm-pointers dropdown-menu-lg">
            <Nav vertical>
              <NavItem className="nav-item-header">Activity</NavItem>
              {/* <NavItem>
                <Link className="nav-link" to="#">
                  Approved
                  <div className="ml-auto badge badge-pill badge-info">8</div>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="#">
                  Messages
                  <div className="ml-auto badge badge-warning">12</div>
                </Link>
              </NavItem> */}
            </Nav>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
    </Fragment>
  );
};

export default AlertBox;
