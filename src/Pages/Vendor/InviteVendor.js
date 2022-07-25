import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import Tabs from "react-responsive-tabs";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Loader from "../Widgets/Loader/Loader";

// Child component
import InviteVendorContent from "./InviteVendorContent";
const InviteVendor = () => {
  const loading = useSelector((state) => state.vendors.loading);

  return (
    <Fragment>
      <PageTitle
        title="Invite Vendor"
        heading="Invite Vendor"
        breadcrumbName="inviteVendor"
        subheading="Provide vendor information"
        icon="pe-7s-graph text-success"
      />
      {loading ? (
        <Loader message="Please wait! Sending invite..."></Loader>
      ) : (
        <InviteVendorContent />
      )}
    </Fragment>
  );
};

export default InviteVendor;
