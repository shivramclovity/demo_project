import React, { Fragment } from "react";
import MetisMenu from "react-metismenu";

import * as NavObj from "./NavItems";
import CustomLink from "./CustomLink";
import { useSelector } from "react-redux";

const GetNavlinks = (NavType) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const role = user.roles[0];
    let data = NavObj[`${role}_${NavType}`];
    if (data === undefined) {
      data = NavObj[`USER_${NavType}`];
    }
    return data;
  }
};
const Nav = () => {
  const legalAllowed = [
    "submitted",
    "approved",
    "onboarded",
    "application submitted",
    "application approved",
    "vendor onboarded",
  ];
  const finalSubmitted = useSelector(
    (state) => state.questionnaire?.finalSubmitted
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.roles[0];
  return (
    <Fragment>
      {/* <h5 className="app-sidebar__heading"></h5> */}
      <MetisMenu
        content={GetNavlinks("dashboard")}
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
        LinkComponent={CustomLink}
      />
      {role !== "VNDR" && (
        <MetisMenu
          content={GetNavlinks("primary")}
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="icon-Chevron---Down"
          style={{ marginTop: "5px" }}
          LinkComponent={CustomLink}
        />
      )}
      {role === "VNDR" && (
        <>
          <MetisMenu
            content={GetNavlinks("questionnaire")}
            className="vertical-nav-menu"
            iconNamePrefix=""
            classNameStateIcon="pe-7s-angle-down"
            LinkComponent={CustomLink}
          />
          {(legalAllowed.includes(user?.status.toLowerCase()) ||
            finalSubmitted) && (
            <MetisMenu
              content={GetNavlinks("legal")}
              className="vertical-nav-menu"
              iconNamePrefix=""
              classNameStateIcon="pe-7s-angle-down"
              LinkComponent={CustomLink}
            />
          )}
        </>
      )}
    </Fragment>
  );
};
/* isPathActive(path) {
    console.log("path ", path);
    // return this.props.location.pathname.startsWith(path);
  } */

// export default withRouter(Nav);
export default Nav;
