export const Regex = {
    phoneNumber: new RegExp('^[+]{1}7\[(]{1}[0-9]{3}[)]{1}[0-9]{3}-[0-9]{2}-[0-9]{2}$'),
    name: new RegExp('^[A-ZА-Я]{1}[a-zа-я]{2,25}$'),
    password: new RegExp('^[A-Za-zА-Яа-я0-9]{8,50}$'),
};

const DELETE_KEY = 46;
const BACKSPACE_KEY = 8;

export const ErrorMsg = {
    errorPhoneNumber: 'Формат телефона: +7(988)888-88-88',
    errorName: 'Длина не менее 3 символов',
    errorPassword: 'Длина не менее 8 символов',
    errorPasswordCMP: 'Пароли не совпадают',
};

export const Keypad = {
    deleteSymbols: [DELETE_KEY, BACKSPACE_KEY],
};

export const numberServiceSymbols = ['(', '-', ')'];

export const NumberPhoneFormat = {
    phoneBeginString: '+7(',
    formatters: [
        {symbol: '(', formatPositions: [2]},
        {symbol: ')', formatPositions: [6]},
        {symbol: '-', formatPositions: [10, 13]},
    ],
    /**
     * @function Осуществляет проверку на наличие нужного служебного
     *      символа на нужной позиции (данные хранятся в массиве formatters). В случае
     *      отсуствия - добавляет на нужную позицию с переносом остальных символов.
     * @param {Event} e - Объект, хранящий статусы инпутов страницы.
     */
    format(e) {
        this.formatters.forEach((obj) => {
            obj.formatPositions.forEach((num) => {
                if (e.target.value.length === num + 1 && e.target.value[num] !== this.symbol &&
                    !numberServiceSymbols.includes(e.target.value[e.target.value.length - 1])) {
                    e.target.value = e.target.value.slice(0, num) + obj.symbol + e.target.value.slice(num, num + 1);
                }
            });
        });
    }
};

/**
 * @function Проверяет все ли данные в форме находятся в валидном состоянии для отправки на сервер.
 * @param {Object} statusForm - Объект, хранящий статусы инпутов страницы.
 * @return {boolean} - Результат проверки на валидность.
 */
export function isAvailableForSend(statusForm) {
    return Object.entries(statusForm).every(([input, status]) => status);
}

/**
 * @function Определяет и возвращает положение курсора.
 * @param {Object} ctrl - Объект, хранящий статусы инпутов страницы.
 * @return {int} - Позиция курсора в строке.
 */
export function getCursorPosition(ctrl) {
    let CaretPos = 0;
    if (document.selection) {
        ctrl.focus();
        let Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if (ctrl.selectionStart || ctrl.selectionStart === '0') {
        CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
}

/**
 * @function По указанной позиции position устанавливает курсор.
 * @param {Event} e - Событие.
 * @param {Object} position - Требуемая позиция курсора в поле input.
 */
export function setCursorPosition(e, position) {
    e.target.focus();
    e.target.setSelectionRange(e.target.value.length, position);
}

/**
 * @function Дополняет и форматирует номер телефона. В случае получения невалидных символов
 *      производится удаление их из поля ввода.
 * @param {Event} e - Событие.
 */
export function numberAutocomplete(e) {
    const val = e.target.value[e.target.value.length - 1];
    const currPos = getCursorPosition(e.target);

    if (!(val >= '0' && val <= '9' || numberServiceSymbols.includes(val))) {
        e.target.value = e.target.value.slice(0, currPos - 1) +
            e.target.value.slice(currPos, e.target.value.length);
        return;
    }

    NumberPhoneFormat.format(e);
}

/**
 * @function По событию e, вызывает автоматическое форматирование имени пользователя
 *      под нужный шаблон. Имя должно начинаться с заглавной буквы, остальные символы
 *      должны быть строчного типа.
 * @param {Event} e - Объект события, по которому вызывается функция.
 */
export function nameAutocomplete(e) {
    e.target.value = e.target.value
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

/**
 * @function Визуализирует ошибку. Применяет стили ошибки (поле для ввода
 *      выделяет красным цветом и снизу выводит текст ошибки
 * @param {NodeListOf<Element>} childList - Список элементов для применения стилей.
 * @param {string} error - Текст ошибки.
 */
function getVisibleError(childList, error) {
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
function removeVisibleError(childList) {
    for (let childNode of childList) {
        if (childNode.classList.contains('error')) {
            childNode.classList.remove('error');
        }
    }

    childList[1].classList.add('hidden');
}

/**
 * @function Меняет статус текущего поля после окончания ввода.
 * @param {Object} statusForm - Список статусов полей формы.
 * @param {string} elemID - ID поля формы.
 * @param {boolean} status - Статус поля формы (корректны данные или нет).
 */
function setFormStatus(statusForm, elemID, status) {
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

function IsPasswordNotEqual(val1, val2) {
    return val1 !== '' && val2 !== '' && val1 !== val2;
}

function getElemParameters(elemID) {
    const input = document.getElementById(elemID);

    return {
        value: input.children[0].value,
        childList: input.querySelectorAll('div > input, div'),
    };
}

function showError(statusForm, elemID, input, error) {
    setFormStatus(statusForm, elemID, false);
    getVisibleError(input.childList, error);
}

function hideError(statusForm, elemID, input) {
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

function checkPasswordFormat(statusForm, elemID, passwordField) {
    if (passwordField.value === '') {
        setFormStatus(statusForm, elemID, false);
        return false;
    }

    if (!Regex.password.exec(passwordField.value)) {
        showError(statusForm, elemID,
            passwordField, ErrorMsg.errorPassword);
        return false;
    }

    hideError(statusForm, elemID, passwordField);

    return true;
}

function setSuccessStatus(statusRegisterForm, firstInput, secondInput) {
    setFormStatus(statusRegisterForm, 'registerPassword', true);
    setFormStatus(statusRegisterForm, 'registerRepeatPassword', true);

    removeVisibleError(firstInput.childList);
    removeVisibleError(secondInput.childList);
}

/**
 * @function Проверяет на валидность и сверяет пароли.
 * @param {Event} e - Событие.
 * @param {Object} statusRegisterForm - Статусы полей формы.
 * @param {boolean} regularExpression - Регулярное выражение для проверки паролей на валидность.
 */
export function passwordController(e, statusRegisterForm, regularExpression) {
    const firstInput = getElemParameters('registerPassword');
    const secondInput = getElemParameters('registerRepeatPassword');

    // if (firstInput.value === '' || !regularExpression.exec(firstInput.value)) {
    //     showError(statusRegisterForm, 'registerPassword',
    //         firstInput, ErrorMsg.errorPassword);
    //     // setFormStatus(statusRegisterForm, 'registerPassword', false);
    //     // getVisibleError(firstInput.childList, ErrorMsg.errorPassword);
    //     return;
    // } else if (e.target.parentElement.getAttribute('id') === 'registerPassword') {
    //     hideError(statusRegisterForm, 'registerPassword', firstInput);
    //     // setFormStatus(statusRegisterForm, 'registerPassword', true);
    //     // removeVisibleError(firstInput.childList);
    //     return;
    // }

    if (!(checkPasswordFormat(statusRegisterForm, 'registerPassword', firstInput) &&
        checkPasswordFormat(statusRegisterForm, 'registerRepeatPassword', secondInput))) {
        return;
    }

    if (IsPasswordNotEqual(firstInput.value, secondInput.value)) {
        showError(statusRegisterForm, 'registerRepeatPassword',
            secondInput, ErrorMsg.errorPasswordCMP);
        // setFormStatus(statusRegisterForm, 'registerRepeatPassword', false);
        // getVisibleError(secondInput.childList, ErrorMsg.errorPasswordCMP);
        return;
    }

    setSuccessStatus(statusRegisterForm, firstInput, secondInput);
}
