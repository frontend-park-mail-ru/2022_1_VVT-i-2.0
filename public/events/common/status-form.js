import {
  getVisibleError,
  getElemParameters,
  removeVisibleError,
  getEmptyInputs,
} from "./work-with-errors";
import { ErrorMsg } from "./config";

export const loginFormInputs = ["loginPhone"];
export const registerFormInputs = [
  "registerPhone",
  "registerName",
  "registerEmail",
];
export const personInfoInputs = [
  "profileName",
  /*'profilePhone',*/ "profileEmail",
];

export const statusLoginForm = {
  isValidPhone: false,
};

export const statusRegisterForm = {
  isValidPhone: false,
  isValidName: false,
  isValidEmail: false,
};

export const statusPersonInfoForm = {
  isValidName: true,
  // isValidPhone: true,
  isValidEmail: true,
};

export const statusConfirmCodeForm = {
  isValidCode: false,
};

/**
 * @function Меняет статус текущего поля после окончания ввода.
 * @param {Object} statusForm - Список статусов полей формы.
 * @param {string} elemID - ID поля формы.
 * @param {boolean} status - Статус поля формы (корректны данные или нет).
 */
export const setFormStatus = (statusForm, elemID, status) => {
  switch (elemID) {
    case "registerName":
    case "profileName":
      statusForm.isValidName = status;
      break;
    case "loginPhone":
    case "registerPhone":
    case "profilePhone":
      statusForm.isValidPhone = status;
      break;
    case "profileEmail":
    case "registerEmail":
      statusForm.isValidEmail = status;
      break;
    case "loginPassword":
    case "registerPassword":
      statusForm.isValidPassword = status;
      break;
    case "registerRepeatPassword":
      statusForm.isValidRepeatPassword = status;
      break;
  }
};

export const showError = (statusForm, elemID, input, error) => {
  setFormStatus(statusForm, elemID, false);
  getVisibleError(input.childList, error);
};

export const hideError = (statusForm, elemID, input) => {
  setFormStatus(statusForm, elemID, true);
  removeVisibleError(input.childList);
};

export const showEmptyInputs = (statusForm, formInputs) => {
  const emptyInputs = getEmptyInputs(formInputs);
  emptyInputs.forEach((elemID) => {
    showError(
      statusForm,
      elemID,
      getElemParameters(elemID),
      ErrorMsg.errorEmptyInput
    );
  });
};

/**
 * @function Проверяет все ли данные в форме находятся в валидном состоянии для отправки на сервер.
 * @param {Object} statusForm - Объект, хранящий статусы инпутов страницы.
 * @return {boolean} - Результат проверки на валидность.
 */
export const isAvailableForSend = (statusForm) => {
  return Object.entries(statusForm).every(([input, status]) => status);
};

/**
 * @function Меняет статусы полей в форме. В случае невалидных данных отображает ошибку,
 *      в случае валидных - скрывает ошибку.
 * @param {Event} e - Событие.
 * @param {string} elemID - ID поля формы.
 * @param {Object} statusForm - Статус полей формы.
 * @param {RegExp} regularExpression - Регулярное выражение для данных поля на валидность.
 * @param {string} errorMsg - Текст ошибки.
 */
export const inputDataManager = (
  e,
  elemID,
  statusForm,
  regularExpression,
  errorMsg
) => {
  const elem = getElemParameters(elemID);

  if (e.target.value === "") {
    hideError(statusForm, elemID, elem);
    setFormStatus(statusForm, elemID, false);
    return;
  }

  if (!regularExpression.test(e.target.value)) {
    hideError(statusForm, elemID, elem);
    showError(statusForm, elemID, elem, errorMsg);
    return;
  }

  hideError(statusForm, elemID, elem);
};
