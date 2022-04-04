import { ErrorMsg } from './config.js';

export const loginFormInputs = ['loginPhone', 'loginPassword'];
export const registerFormInputs = ['registerPhone', 'registerName', 'registerPassword', 'registerRepeatPassword'];
export const personInfoInputs = ['profileName', 'profilePhone', 'profileEmail'];

export const statusLoginForm = {
    isValidPhone: false,
    isValidPassword: false,
};

export const statusRegisterForm = {
    isValidPhone: false,
    isValidName: false,
    isValidPassword: false,
    isValidRepeatPassword: false,
};

export const statusPersonInfoForm = {
    isValidName: false,
    isValidPhone: false,
    isValidEmail: false,
};

export function getElemParameters (elemID) {
    const input = document.getElementById(elemID);

    return {
        value: input.children[0].value,
        childList: input.querySelectorAll('div > input, div'),
    };
}

function IsInputOnEmpty (elemID) {
    const input = document.getElementById(elemID);
    return input.children[0].value === '';
}

function getEmptyInputs (formInputs) {
    let emptyInputs = [];
    formInputs.forEach((elemID) => {
        if (IsInputOnEmpty(elemID)) {
            emptyInputs.push(elemID);
        }
    });

    return emptyInputs;
}

export function showEmptyInputs (statusForm, formInputs) {
    const emptyInputs = getEmptyInputs(formInputs);
    emptyInputs.forEach((elemID) => {
        showError(statusForm, elemID, getElemParameters(elemID), ErrorMsg.errorEmptyInput);
    });
}

export function hideEmptyInputs (statusForm, formInputs) {
    const emptyInputs = getEmptyInputs(formInputs);
    emptyInputs.forEach((elemID) => {
        removeVisibleError(getElemParameters(elemID).childList);
    });
}

/**
 * @function Меняет статус текущего поля после окончания ввода.
 * @param {Object} statusForm - Список статусов полей формы.
 * @param {string} elemID - ID поля формы.
 * @param {boolean} status - Статус поля формы (корректны данные или нет).
 */
export function setFormStatus (statusForm, elemID, status) {
    switch (elemID) {
        case 'registerName':
        case 'profileName':
            statusForm.isValidName = status;
            break;
        case 'loginPhone':
        case 'registerPhone':
        case 'profilePhone':
            statusForm.isValidPhone = status;
            break;
        case 'profileEmail':
            statusForm.isValidEmail = status;
            break;
        case 'loginPassword':
        case 'registerPassword':
            statusForm.isValidPassword = status;
            break;
        case 'registerRepeatPassword':
            statusForm.isValidRepeatPassword = status;
            break;
    }
}

/**
 * @function Визуализирует ошибку. Применяет стили ошибки (поле для ввода
 *      выделяет красным цветом и снизу выводит текст ошибки
 * @param {NodeListOf<Element>} childList - Список элементов для применения стилей.
 * @param {string} error - Текст ошибки.
 */
function getVisibleError (childList, error) {
    for (let childNode of childList) {
        childNode.classList.add('error');
        if (childNode.classList.contains('hidden')) {
            childNode.innerText = error;
            childNode.classList.remove('hidden');
        }
    }
}

/**
 * @function Скрывает ошибку.
 * @param {NodeListOf<Element>} childList - Список элементов для применения стилей.
 */
export function removeVisibleError (childList) {
    for (let childNode of childList) {
        if (childNode.classList.contains('error')) {
            childNode.classList.remove('error');
        }
    }

    childList[1].classList.add('hidden');
}

/**
 * @function Проверяет все ли данные в форме находятся в валидном состоянии для отправки на сервер.
 * @param {Object} statusForm - Объект, хранящий статусы инпутов страницы.
 * @return {boolean} - Результат проверки на валидность.
 */
export function isAvailableForSend (statusForm) {
    return Object.entries(statusForm).every(([input, status]) => status);
}

export function showError (statusForm, elemID, input, error) {
    setFormStatus(statusForm, elemID, false);
    getVisibleError(input.childList, error);
}

export function hideError (statusForm, elemID, input) {
    setFormStatus(statusForm, elemID, true);
    console.log(statusForm);
    removeVisibleError(input.childList);
}

/**
 * @function Меняет статусы полей в форме. В случае невалидных данных отображает ошибку,
 *      в случае валидных - скрывает ошибку.
 * @param {Event} e - Событие.
 * @param {string} elemID - ID поля формы.
 * @param {Object} statusForm - Статус полей формы.
 * @param {RegExp} regularExpression - Регулярное выражение для данных поля на валидность.
 * @param {string} errorMsg - Текст ошибки.
 */
export function inputDataManager (e, elemID, statusForm, regularExpression, errorMsg) {
    const elem = getElemParameters(elemID);

    if (e.target.value !== '' && !regularExpression.test(e.target.value)) {
        showError(statusForm, elemID, elem, errorMsg);
        return;
    }

    hideError(statusForm, elemID, elem);
}
