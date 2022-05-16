import { hideError, setFormStatus, showError } from "../../common/status-form";
import { statusConfirmCodeForm } from "../../common/status-form";
import { getElemParameters } from "../../common/work-with-errors";

export const confirmCodeError = {
  confirmCodeErrorShow(errorMessage) {
    hideError(statusConfirmCodeForm, 'confirmCode', getElemParameters('confirmCode'));
    showError(statusConfirmCodeForm, 'confirmCode', getElemParameters('confirmCode'), errorMessage);
    setFormStatus(statusConfirmCodeForm, 'confirmCode', false);
    console.log(statusConfirmCodeForm);
  },
}

