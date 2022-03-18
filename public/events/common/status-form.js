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

export function getElemParameters(elemID) {
    const input = document.getElementById(elemID);

    return {
        value: input.children[0].value,
        childList: input.querySelectorAll('div > input, div'),
    };
}

/**
 * @function Меняет статус текущего поля после окончания ввода.
 * @param {Object} statusForm - Список статусов полей формы.
 * @param {string} elemID - ID поля формы.
 * @param {boolean} status - Статус поля формы (корректны данные или нет).
 */
export function setFormStatus(statusForm, elemID, status) {
    switch (elemID) {
        case 'loginPhone':
            statusForm.isValidPhone = status;
            break;
        case 'loginPassword':
            statusForm.isValidPassword = status;
            break;
        case 'registerPhone':
            statusForm.isValidPhone = status;
            break;
        case 'registerName':
            statusForm.isValidName = status;
            break;
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
export function getVisibleError(childList, error) {
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
export function removeVisibleError(childList) {
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
export function isAvailableForSend(statusForm) {
    return Object.entries(statusForm).every(([input, status]) => status);
}

export function showError(statusForm, elemID, input, error) {
    setFormStatus(statusForm, elemID, false);
    getVisibleError(input.childList, error);
}

export function hideError(statusForm, elemID, input) {
    setFormStatus(statusForm, elemID, true);
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
export function inputDataManager(e, elemID, statusForm, regularExpression, errorMsg) {
    const elem = getElemParameters(elemID);

    if (e.target.value !== '' && !regularExpression.exec(e.target.value)) {
        showError(statusForm, elemID, elem, errorMsg);
        return;
    }

    hideError(statusForm, elemID, elem);
}

