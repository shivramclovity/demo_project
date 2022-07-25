import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";
import { dashboardActions } from "../../_actions/dashboard.actions";

const TableData = ({ user, currentPage }) => {
  const dispatch = useDispatch();
  const vendorData = useSelector((state) => state.dashboards?.vendorList);
  useEffect(() => {
    dispatch(dashboardActions.vendorList(currentPage));
  }, [dispatch, currentPage]);

  let tableRows = "";
  const legalAllowed = [
    "submitted",
    "approved",
    "onboarded",
    "application submitted",
    "application approved",
    "vendor onboarded",
  ];

  if (typeof vendorData !== "undefined" && vendorData != null) {
    tableRows = vendorData.vendorDTO.map((info) => {
      return (
        <tr className="bordered" key={info.id}>
          <td>{info.id}</td>
          <td>
            <Link
              to={`/vendor/vendor-information?appno=${info.applicationNo}`}
              className="support"
              style={{ marginRight: "-6px" }}
            >
              {info?.name}
            </Link>
          </td>
          <td>{info?.date}</td>
          <td>{info?.status ? info?.status : "Pending"}</td>
          <td>{info?.daysinS}</td>
          <td>{info?.daysInLG}</td>
          <td>{info?.daysinvnd} </td>
          {user.roles[0] !== "SMART_CITY_USER" && (
            <td className="text-center viewmore-icon">
              <div className="dropdowntbl">
                <span className="icon-More---Horiz dropbtntbl"></span>

                <div className="dropdown-tblcontent">
                  {user !== "" &&
                    user.roles[0] !== "SALE" &&
                    user.roles[0] !== "LEGL" &&
                    user.roles[0] !== "SMART_CITY_USER" && (
                      <Link to={`/questionnaire?appno=${info.applicationNo}`}>
                        Questionnaire
                      </Link>
                    )}

                  {user !== "" &&
                    (user.roles[0] !== "ADMN" ||
                      user.roles[0] !== "LEGL" ||
                      user.roles[0] !== "SALE") && (
                      <Link to={`/review-scoring?appno=${info.applicationNo}`}>
                        Review & Scoring
                      </Link>
                    )}

                  {user !== "" &&
                    legalAllowed.includes(info?.status.toLowerCase()) &&
                    (user.roles[0] !== "ADMN" || user.roles[0] !== "LEGL") && (
                      <Link to={`/vendor/legal?appno=${info.applicationNo}`}>
                        Legal Docs
                      </Link>
                    )}

                  {/* <Link
                      to={`/vendor/vendor-status?appno=${info.applicationNo}`}
                    >
                      Vendor status
                    </Link> */}
                </div>
              </div>
            </td>
          )}
        </tr>
      );
    });
  } else {
    tableRows = null;
  }

  return (
    <>
      {vendorData && (
        <table className="mb-0 table table-striped">
          <thead>
            <tr>
              <th>
                <span id="srno">#</span>
                <UncontrolledTooltip placement="top" target="srno">
                  Serail No
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="vendor_name"> Vendor name</span>{" "}
                <span className="icon-Sort---Text tbl-sort"></span>
                <UncontrolledTooltip placement="top" target="vendor_name">
                  Vendor name
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="invite_date">Invite date</span>
                <UncontrolledTooltip placement="top" target="invite_date">
                  Invite date
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="status">Status</span>{" "}
                <span className="icon-Sort---Text tbl-sort"></span>
                <UncontrolledTooltip placement="top" target="status">
                  Status
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="days_in_s">Days in S</span>
                <UncontrolledTooltip placement="top" target="days_in_s">
                  Days in Sales
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="days_in_lg">Days in Lg</span>
                <UncontrolledTooltip placement="top" target="days_in_lg">
                  Days in Legal
                </UncontrolledTooltip>
              </th>
              <th>
                <span id="days_with_vnd">Days with Vnd</span>
                <UncontrolledTooltip placement="top" target="days_with_vnd">
                  Days with Vendor
                </UncontrolledTooltip>
              </th>
              {user.roles[0] !== "SMART_CITY_USER" && (
                <th className="text-center">Action</th>
              )}
              {/*  <th className="text-center">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {tableRows ? (
              tableRows
            ) : (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>
                  No Data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableData;
