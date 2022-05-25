import { hideError, setFormStatus, showError, statusLoginForm } from "../../common/status-form";
import { getElemParameters } from "../../common/work-with-errors";

export const notRegisteredError = {
  confirmCodeErrorShow(errorMessage) {
    hideError(
      statusLoginForm,
      "loginPhone",
      getElemParameters("loginPhone")
    );
    showError(
      statusLoginForm,
      "loginPhone",
      getElemParameters("loginPhone"),
      errorMessage
    );
    setFormStatus(statusLoginForm, "loginPhone", false);
  },
};
