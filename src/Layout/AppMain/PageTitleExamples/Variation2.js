import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import {
  faStar,
  faBusinessTime,
  faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toast, Slide } from "react-toastify";

const TostifyButton = () => {
  const toastAlert = () => {
    toast("Another toastify example!!!", {
      //   transition: Slide,
      //   closeButton: true,
      //   autoClose: 5000,
      //   position: "bottom-left",
      type: "success",
    });
  };

  return (
    <Button
      className="btn-shadow mr-3"
      onClick={toastAlert}
      color="dark"
      id="Tooltip-1234"
    >
      <FontAwesomeIcon icon={faAirFreshener} />
    </Button>
  );
};

export default class TitleComponent2 extends Component {
  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  notify22 = () =>
    (this.toastId = toast("Another toastify example!!!", {
      transition: Slide,
      closeButton: true,
      autoClose: 5000,
      position: "bottom-center",
      type: "success",
    }));

  render() {
    return (
      <Fragment>
        <Button
          className="btn-shadow mr-3"
          onClick={this.notify22}
          color="dark"
          id="Tooltip-123"
        >
          <FontAwesomeIcon icon={faStar} />
        </Button>
        <TostifyButton />
        <UncontrolledTooltip placement="left" target={"Tooltip-1234"}>
          Show a Toastify notification example!
        </UncontrolledTooltip>
        <UncontrolledDropdown className="d-inline-block">
          <DropdownToggle color="info" className="btn-shadow" caret>
            <span className="btn-icon-wrapper pr-2 opacity-7">
              <FontAwesomeIcon icon={faBusinessTime} />
            </span>
            Buttons
          </DropdownToggle>
          <DropdownMenu right>
            <Nav vertical>
              <NavItem>
                <Link to="#" className="nav-link">
                  <i className="nav-link-icon lnr-inbox"> </i>
                  <span>Inbox</span>
                  <div className="ml-auto badge badge-pill badge-secondary">
                    86
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link">
                  <i className="nav-link-icon lnr-book"> </i>
                  <span>Book</span>
                  <div className="ml-auto badge badge-pill badge-danger">5</div>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#" className="nav-link">
                  <i className="nav-link-icon lnr-picture"> </i>
                  <span>Picture</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link disabled to="#" className="nav-link">
                  <i className="nav-link-icon lnr-file-empty"> </i>
                  <span>File Disabled</span>
                </Link>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
