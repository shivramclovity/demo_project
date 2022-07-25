import { useSelector } from "react-redux";

const GetAnswerObject = (itemId) => {
  const questObj = useSelector(
    (state) => state?.questionnaire?.answerData?.data
  );
  const ansObj = questObj.find((data) => data?.questionMaster?.id === itemId);
  return ansObj;
};

const GetAnswer = (qxnMID) => {
  const questObj = useSelector(
    (state) => state?.questionnaire?.answerData?.data
  );
  const ansObj = questObj.find((data) => data?.questionMaster?.id === qxnMID);
  let ans = "";
  if (ansObj?.questionMaster?.id === qxnMID) {
    switch (ansObj?.questionMaster?.control?.key) {
      case "SLST":
        let label =
          ansObj?.options[0]?.optionMaster?.optionDetail?.shortDescription;
        let value = ansObj?.options[0]?.optionMaster?.id;
        ans = label && value ? { label: label, value: value } : null;
        break;
      default:
        ans = ansObj?.options[0]?.additionalDetail;
        break;
    }
  }
  return ans;
};

export { GetAnswer, GetAnswerObject };
