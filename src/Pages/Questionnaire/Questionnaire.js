import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionnaireActions } from "../../_actions/questionnaire.actions";
import { useSearchParams } from "react-router-dom";
import Loader from "../Widgets/Loader/Loader";

// Questionnaire components
import PageTitle from "../../Layout/AppMain/PageTitle";
import StepperSection from "./StepperSection";
import Screen from "./Screen";
import ScreenReview from "./ScreenReview";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const [parms] = useSearchParams();
  const [initialize, setInitialize] = useState(true);

  const dataObj = useSelector((state) => state.questionnaire?.pageData?.data);
  const qxnLoading = useSelector(
    (state) => state.questionnaire.pageData?.loading
  );
  const ansLoading = useSelector(
    (state) => state.questionnaire.answerData?.loading
  );
  const savingStatus = useSelector((state) => state.questionnaire?.saving);
  const isSubmitted = useSelector((state) => state.questionnaire?.isSubmitted);
  const appInfo = useSelector((state) => state.questionnaire?.appInfo);

  const initalState = {
    screenCount: 0,
    activeScreen: 0,
    tabCount: 0,
    activeTab: 0,
  };
  const [screenData, setScreenData] = useState(initalState);

  const user = JSON.parse(localStorage.getItem("user"));

  let finalSubmitted = false;
  if (appInfo?.loading === false) {
    finalSubmitted =
      appInfo?.data[0].status === "Application Submitted" ? true : false;
  }
  let appno = "";
  let role = "";
  if (user) {
    role = user.roles[0];
    if (role === "VNDR") {
      appno = user.applicationNo;
    } else {
      appno = parms.get("appno");
    }
  }

  useEffect(() => {
    dispatch(questionnaireActions.getAppInfo(appno));
    dispatch(questionnaireActions.getAnswerData(appno));
    setTimeout(() => {
      dispatch(questionnaireActions.getScreens());
    }, 100);
  }, [dispatch, appno]);

  useEffect(() => {
    // Functional update for setting screen data
    if (dataObj && initialize) {
      localStorage.removeItem("activeScreenItem");
      setScreenData((prevScreenData) => ({
        ...prevScreenData,
        screenCount: dataObj ? dataObj?.length + 1 : 0,
        tabCount: dataObj[0]?.sections ? dataObj[0]?.sections.length : 0,
        activeTab: 0,
      }));
      setInitialize(false);
    }
  }, [dataObj, initialize]);

  const handleStepChange = (screenId) => {
    if (screenId !== screenData.activeScreen) {
      let tabCount =
        screenId >= dataObj.length
          ? 1 // dataObj.length
          : dataObj[screenId].sections.length;

      setScreenData({
        ...screenData,
        activeScreen: screenId,
        activeTab: 0,
        tabCount: tabCount,
      });
    }
  };

  const handleCurrentTab = (tabId) => {
    setScreenData({
      ...screenData,
      activeTab: tabId,
    });
  };

  const handleButtonChange = (direction) => {
    switch (direction) {
      case "next":
        if (screenData.activeTab + 1 < screenData.tabCount) {
          setScreenData({
            ...screenData,
            activeTab: screenData.activeTab + 1,
          });
        } else if (
          screenData.activeTab + 1 >= screenData.tabCount &&
          screenData.activeScreen + 1 <= screenData.screenCount
        ) {
          handleStepChange(screenData.activeScreen + 1);
        }
        saveFormData(); //Save Screen Data
        break;

      case "prev":
        if (screenData.activeTab - 1 >= 0) {
          setScreenData({
            ...screenData,
            activeTab: screenData.activeTab - 1,
          });
        } else if (
          screenData.activeTab - 1 < 0 &&
          screenData.activeScreen - 1 >= 0
        ) {
          handleStepChange(screenData.activeScreen - 1);
        }
        break;
      case "final":
        finalSubmit();
        break;
      default:
        console.log(`Sorry, we are out of ${direction}.`);
    }
  };

  const currentTab = () => {
    let item = "";
    if (screenData.activeScreen === screenData.screenCount) {
      item = ["Application Submitted"];
    } else if (screenData.activeScreen === screenData.screenCount - 1) {
      item = ["Application Review"];
    } else if (screenData.activeScreen < screenData.screenCount - 1) {
      const screenId = screenData.activeScreen;
      const tabId = screenData.activeTab;
      item = [
        dataObj[screenId]?.shortDescription,
        dataObj[screenId]?.sections[tabId]?.shortDescription,
      ];
    } else {
      item = [];
    }
    localStorage.setItem("activeScreenItem", JSON.stringify(item));
  };

  const saveFormData = () => {
    const frmName = "inputData";
    const formData = JSON.parse(localStorage.getItem(frmName));
    if (formData.length > 0) {
      dispatch(
        questionnaireActions.saveQuestionnare({
          appNo: appno,
          formData: JSON.parse(localStorage.getItem(frmName)),
        })
      );
    }
  };

  const finalSubmit = () => {
    if (appno) {
      dispatch(questionnaireActions.finalQuestionnare(appno));
    }
  };

  let showScreen = false;

  if (qxnLoading === false && ansLoading === false && savingStatus === false) {
    showScreen = true;
    currentTab();
  }
  if (isSubmitted && screenData.activeScreen === screenData.screenCount - 1) {
    setScreenData({
      ...screenData,
      activeScreen: screenData.activeScreen + 1,
      activeTab: 0,
    });
    user.status = "Application Submitted";
    localStorage.setItem("user", JSON.stringify(user));
  }
  let currentTabStr = JSON.parse(localStorage.getItem("activeScreenItem"));

  return (
    <Fragment>
      {!showScreen && <Loader message="Please wait! Loading..."></Loader>}
      <PageTitle
        title="Questionnaire"
        currentTab={currentTabStr}
        breadcrumbName="questionnaire"
        subheading="General Information Section"
        icon="pe-7s-graph text-success"
      />

      {showScreen && (
        <StepperSection
          data={dataObj}
          changeScreen={handleStepChange}
          screenData={screenData}
          finalSubmitted={finalSubmitted}
        />
      )}

      {showScreen && screenData.activeScreen < dataObj.length ? (
        <Screen
          key={dataObj[screenData.activeScreen]?.id}
          data={dataObj[screenData.activeScreen]}
          screenData={screenData}
          setCurrentTab={handleCurrentTab}
          handleButtonChange={handleButtonChange}
          finalSubmitted={finalSubmitted}
          userRole={role}
        />
      ) : (
        showScreen && (
          <ScreenReview
            key="screenReview"
            data={dataObj}
            screenData={screenData}
            setCurrentTab={handleCurrentTab}
            handleButtonChange={handleButtonChange}
            isSubmitted={isSubmitted}
            finalSubmitted={finalSubmitted}
          />
        )
      )}
    </Fragment>
  );
};

export default Questionnaire;
