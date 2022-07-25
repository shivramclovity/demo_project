import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  UncontrolledButtonDropdown,
} from "reactstrap";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar1 from "../../../assets/utils/images/avatars/user.jpg";

const UserInfo = () => {
  const data = { name: "", role: "" };
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const lname = user?.lastName ? user?.lastName : "";
    if (user.firstName) {
      data["name"] = `${user.firstName} ${lname}`;
    } else {
      data["name"] = `${user.username}`;
    }
    data.role = user.roles[0];
  }
  return data;
};

const UserBox = () => {
  const userInfo = UserInfo();
  return (
    <Fragment>
      <div className="header-btn-lg pr-0">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="link" className="p-0">
                  <img
                    width={42}
                    className="rounded-circle"
                    src={avatar1}
                    alt=""
                  />
                  <FontAwesomeIcon
                    className="ml-2 opacity-8"
                    icon={faAngleDown}
                  />
                </DropdownToggle>
                <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                  <Nav vertical>
                    <NavItem className="nav-item-header">
                      {userInfo.name}
                      <p
                        className="userrole"
                        style={{
                          marginBottom: " 0.2rem",
                          textTransform: "capitalize",
                        }}
                      >
                        {userInfo.role}
                      </p>
                    </NavItem>
                    {userInfo.role === "VNDR" && (
                      <NavItem>
                        <Link
                          className="nav-link"
                          to="/vendor/vendor-information/"
                        >
                          My Profile
                        </Link>
                      </NavItem>
                    )}
                  </Nav>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div
              className="widget-content-left  ml-3 header-user-info"
              style={{ display: "none" }}
            >
              <div className="widget-heading">{}</div>
              <div className="widget-subheading">Cox Admin User</div>
            </div>

            {/*<div className="widget-content-right header-user-info ml-3">
                    <Button className="btn-shadow p-1" size="sm" onClick={this.notify2} color="info"
                            id="Tooltip-1">
                        <FontAwesomeIcon className="mr-2 ml-2" icon={faCalendarAlt}/>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
                        Click for Toastify Notifications!
                    </UncontrolledTooltip>
                </div>*/}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserBox;
