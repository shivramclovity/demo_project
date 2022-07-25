import React, { Fragment } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import MetisMenu from "react-metismenu";
import CustomLink from "./CustomLink";
import * as NavObj from "./NavItems";
/* const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}; */
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

const FixedBox = () => {
  return (
    <Fragment>
      <div className="app-sidebar__inner fixedBox">
        <MetisMenu
          content={GetNavlinks("secondary")}
          // activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          // classNameLinkActive="active-nav"
          classNameStateIcon="pe-7s-angle-down"
          LinkComponent={CustomLink}
        />
      </div>
    </Fragment>
  );
};
export default FixedBox;
