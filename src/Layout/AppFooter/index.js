import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer fixed-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav">
                <li className="nav-item">© 2022 COX2M. All rights Reserved.</li>
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFooter;
