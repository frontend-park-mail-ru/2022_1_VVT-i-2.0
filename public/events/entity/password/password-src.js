import * as FORM from '../../common/status-form.js';
import * as CONFIG from '../../common/config.js';

function IsPasswordNotEqual(val1, val2) {
    return val1 !== '' && val2 !== '' && val1 !== val2;
}

function checkPasswordFormat(statusForm, elemID, passwordField) {
    if (passwordField.value === '') {
        FORM.setFormStatus(statusForm, elemID, false);
        return false;
    }

    if (!CONFIG.Regex.password.exec(passwordField.value)) {
        FORM.showError(statusForm, elemID,
            passwordField, CONFIG.ErrorMsg.errorPassword);
        return false;
    }

    FORM.hideError(statusForm, elemID, passwordField);

    return true;
}

function setSuccessStatus(statusRegisterForm, firstInput, secondInput) {
    FORM.setFormStatus(statusRegisterForm, 'registerPassword', true);
    FORM.setFormStatus(statusRegisterForm, 'registerRepeatPassword', true);

    FORM.removeVisibleError(firstInput.childList);
    FORM.removeVisibleError(secondInput.childList);
}

/**
 * @function Проверяет на валидность и сверяет пароли.
 * @param {Event} e - Событие.
 * @param {Object} statusRegisterForm - Статусы полей формы.
 */
export function passwordController(e, statusRegisterForm) {
    const firstInput = FORM.getElemParameters('registerPassword');
    const secondInput = FORM.getElemParameters('registerRepeatPassword');

    if (!(checkPasswordFormat(statusRegisterForm, 'registerPassword', firstInput) &&
        checkPasswordFormat(statusRegisterForm, 'registerRepeatPassword', secondInput))) {
        return;
    }

    if (IsPasswordNotEqual(firstInput.value, secondInput.value)) {
        FORM.showError(statusRegisterForm, 'registerRepeatPassword',
            secondInput, CONFIG.ErrorMsg.errorPasswordCMP);
        return;
    }

    setSuccessStatus(statusRegisterForm, firstInput, secondInput);
}