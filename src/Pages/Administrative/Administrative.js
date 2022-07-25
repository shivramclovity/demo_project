import React, { Fragment, useState } from "react";
import PageTitle from "../../Layout/AppMain/PageTitle";
import Tabs from "react-responsive-tabs";

// Child component
import Users from "./TabComponents/Users";
import AssignVendor from "./TabComponents/AssignVendor";
import DaysPendingActions from "./TabComponents/DaysPendingActions";


const Administrative = () => {
    const [currentTabName, setCurrentTabName] = useState("Search Vendor by name");
    const [currentTab, setCurrentTab] = useState(0);
    const tabCount = 2;


    const tabsContent = [
        {
            title: "USERS",
            content: (
                <Users
                    handleSubComp={(direction) => handleSubComp(direction)}
                />
            ),
        },
        {
            title: "ASSIGN VENDOR",
            content: (
                <AssignVendor
                    handleSubComp={(direction) => handleSubComp(direction)}
                />
            ),
        },
        {
            title: "DAYS PENDING ACTION",
            content: (
                <DaysPendingActions
                    handleSubComp={(direction) => handleSubComp(direction)}
                />
            ),
        },
    ];

    function getTabs() {
        return tabsContent.map((tab, index) => ({
            title: tab.title,
            getContent: () => tab.content,
            key: index,
        }));
    }
    function tabChange(value) {
        setCurrentTab(value);
        getTabsName(value);
    }

    const handleSubComp = (direction) => {
        console.log("current tab default" + currentTab);
        switch (direction) {
            case "next":
                if (currentTab < tabCount) {
                    setCurrentTab(currentTab + 1);
                    getTabsName(currentTab + 1);
                }
                break;

            case "prev":
                if (currentTab > 0) {
                    setCurrentTab(currentTab - 1)
                    getTabsName(currentTab - 1);
                }
                break;
            default:
                console.log(`Sorry, we are unable to handle ${direction}.`);
        }
    };


    function getTabsName(value) {
        if (value === 0) {
            setCurrentTabName("Search Vendor by name");
        }
        else if (value === 1) {
            setCurrentTabName("Search by assign vendor ");
        }
        else if (value === 2) {
            setCurrentTabName("Vendor days pending action");
        }
    }

    return (
        <Fragment>
            <PageTitle
                title="Administrative"
                heading="Vendor status information"
                subheading="Provide status information"
                icon="pe-7s-graph text-success"
            />
            <h5 style={{ fontSize: "16px", fontWeight: "600" }}>Administrative Settings</h5>
            <p style={{ fontSize: "14px", fontWeight: "400" }}>{currentTabName}</p>
            <Tabs
                tabsWrapperClass="body-tabs body-tabs-layout"
                transform={false}
                showInkBar={true}
                selectedTabKey={currentTab}
                items={getTabs()}
                onChange={(e) => tabChange(e)}
            />
        </Fragment>
    );
};

export default Administrative;
