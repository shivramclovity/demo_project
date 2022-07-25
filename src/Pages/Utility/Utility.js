import { useState } from "react";

const ToggleEye = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const handlePasswordVisibility = (checkstate) => {
    checkstate === "new"
      ? setPasswordVisibility(!passwordVisibility)
      : setConfirmPasswordShown(!confirmPasswordShown);
  };

  return {
    passwordVisibility,
    confirmPasswordShown,
    handlePasswordVisibility,
  };
};

const Truncate = (str, max = 20, suffix = "...") =>
  str?.length < max
    ? str
    : `${str?.substr(
        0,
        str?.substr(0, max - suffix.length).lastIndexOf(" ")
      )}${suffix}`;

const TruncateFileName = (fullStr, strLen = 30, separator = "...") => {
  if (fullStr.length <= strLen) return fullStr;

  var sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
};

const FormatToTitleCase = (textStr) => {
  const result = textStr.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export { ToggleEye, Truncate, FormatToTitleCase, TruncateFileName };
