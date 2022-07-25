import { HOST } from "../config/envConfig";

export const API_USER = {
  LOGIN: `${HOST.url}/api/auth/login`,
  RESET_LINK: `${HOST.url}/api/auth/reset-password`,
  CHANGE_PASSWORD: `${HOST.url}/api/auth/change-password?token=`,
  LOGOUT: `${HOST.url}/api/auth/logout`,
};

export const API_VENDOR = {
  INVITE: `${HOST.url}/api/vendor/invite`,
  PROFILE: `${HOST.url}/api/vendor/info/`,
  SCORING: `${HOST.url}/api/application/review/`,
};

export const API_DASHBOARD = {
  VENDOR_LIST: `${HOST.url}/api/dashboard/vendor-list?page=`,
};

export const API_QUESTIONNAIRE = {
  LIST: `${HOST.url}/api/questionnaire/HORI/screens`,
  ANSWER_DATA: `${HOST.url}/api/questionnaire/`,
  SAVE: `${HOST.url}/api/questionnaire/save/`,
  FINAL: `${HOST.url}/api/application/submit/`,
  APP_INFO: `${HOST.url}/api/application/info/`,
};

export const API_LEGAL = {
  LIST: `${HOST.url}/api/document/list?parentType=APLN&docType=`,
  UPLOAD: `${HOST.url}/api/document/upload?parentType=APLN&uploadType=FILE&docType=`,
  DOWNLOAD: `${HOST.url}/api/document/download?documentId=`,
  FILE_OPTIONS: `${HOST.url}/api/document/docOptions?docType=`,
};

export const ENCRYPT = {
  PUBLICKEY: `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgFGVfrY4jQSoZQWWygZ83roKXWD4YeT2x2p41dGkPixe73rT2IW04glagN2vgoZoHuOPqa5and6kAmK2ujmCHu6D1auJhE2tXP+yLkpSiYMQucDKmCsWMnW9XlC5K7OSL77TXXcfvTvyZcjObEz6LIBRzs6+FqpFbUO9SJEfh6wIDAQAB`,
};
