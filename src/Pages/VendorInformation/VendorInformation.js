import React, { Fragment, useEffect } from "react";
import PageTitle from "../../Layout/AppMain/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { vendorInfoActions } from "../../_actions/vendorInfo.actions";
import { useSearchParams } from "react-router-dom";
import Loader from "../Widgets/Loader/Loader";
import ScreenContents from "./ScreenContents";
import Tabs from "react-responsive-tabs";

const VendorInformation = () => {
  const dataObj = useSelector((state) => state.vendorInfo.infoData);
  const ansObj = useSelector((state) => state.vendorInfo.answers);
  const [parms] = useSearchParams();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  let appno = "";
  if (user) {
    const role = user.roles[0];
    if (role === "VNDR") {
      appno = user.applicationNo;
    } else {
      appno = parms.get("appno");
    }
  }

  useEffect(() => {
    dispatch(vendorInfoActions.getAnswerData(appno));
    dispatch(vendorInfoActions.getScreens());
  }, [dispatch, appno]);

  const tabsContent = [
    {
      title: "Vendor Profile ",
      content: <ScreenContents screens={dataObj} />,
      key: 0,
    },
  ];

  return (
    <Fragment>
      {(!dataObj || !ansObj) && (
        <Loader message="Please wait! Loading..."></Loader>
      )}

      <PageTitle
        title="Vendor Information"
        // currentTab={currentTab()}
        breadcrumbName="Vendor Information"
        subheading="General Information Section"
        icon="pe-7s-graph text-success"
      />
      {dataObj && ansObj && (
        <>
          <p style={{ fontSize: "14px", fontWeight: "400" }}></p>
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout"
            transform={false}
            showInkBar={true}
            selectedTabKey={0}
            items={tabsContent}
          />
        </>
      )}
    </Fragment>
  );
};

export default VendorInformation;
