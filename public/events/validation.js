export const Regex = {
    phoneNumber: new RegExp('^[+]{1}7\[(]{1}[0-9]{3}[)]{1}[0-9]{3}-[0-9]{2}-[0-9]{2}$'),
    name: new RegExp('^[A-ZА-Я]{1}[a-zа-я]{2,25}$'),
    password: new RegExp('^[A-Za-zА-Яа-я0-9]{8,50}$'),
};

export const ErrorMsg = {
    errorPhoneNumber: 'Формат телефона: +7(988)888-88-88',
    errorName: 'Длина > 1 символа(без спецсимволов)',
    errorPassword: 'Длина > 7 символов(без спецсимволов)',
    errorPasswordCMP: 'Пароли не совпадают',
};

export const phoneBeginString = '+7(';
export const Keypad = {
    delete: 46,
    backspace: 8,
};
export const numberServiceSymbols = ['(', '-', ')'];

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
export function getCursorPosition( ctrl ) {
    let CaretPos = 0;
    if ( document.selection ) {
        ctrl.focus ();
        let Sel = document.selection.createRange();
        Sel.moveStart ('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if ( ctrl.selectionStart || ctrl.selectionStart === '0' ) {
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
 * @function Дополняет и форматирует номер телефона.
 * @param {Event} e - Событие.
 */
export function numberAutocomplete(e) {
    const formatPositions = [10, 13];

    if (e.target.value.length === 6) {
        e.target.value += ')';
    }

    if (formatPositions.includes(e.target.value.length)) {
        e.target.value += '-';
    }
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
    const elem = document.getElementById(elemID);
    const childList = elem.querySelectorAll('div > input, div');

    if (e.target.value !== '' && !regularExpression.exec(e.target.value)) {
        setFormStatus(statusForm, elemID, false);
        getVisibleError(childList, errorMsg);
        return;
    }

    setFormStatus(statusForm, elemID, true);
    removeVisibleError(childList);
}

/**
 * @function Проверяет на валидность и сверяет пароли.
 * @param {Event} e - Событие.
 * @param {Object} statusRegisterForm - Статусы полей формы.
 * @param {boolean} regularExpression - Регулярное выражение для проверки паролей на валидность.
 */
export function passwordController(e, statusRegisterForm, regularExpression) {
    const pass1 = document.getElementById('registerPassword');
    const pass2 = document.getElementById('registerRepeatPassword');

    const passVal1 = pass1.children[0].value;
    const passVal2 = pass2.children[0].value;

    const childList1 = pass1.querySelectorAll('div > input, div');
    const childList2 = pass2.querySelectorAll('div > input, div');

    if (passVal1 === '' || !regularExpression.exec(passVal1)) {
        setFormStatus(statusRegisterForm, 'registerPassword', false);
        getVisibleError(childList1, ErrorMsg.errorPassword);
        return;
    } else if (e.target.parentElement.getAttribute('id') === 'registerPassword') {
        setFormStatus(statusRegisterForm, 'registerPassword', true);
        removeVisibleError(childList1);
        return;
    }

    if (passVal2 !== '' && passVal1 !== '' && passVal1 !== passVal2) {
        setFormStatus(statusRegisterForm, 'registerRepeatPassword', false);
        getVisibleError(childList2, ErrorMsg.errorPasswordCMP);
        return;
    }

    setFormStatus(statusRegisterForm, 'registerPassword', true);
    setFormStatus(statusRegisterForm, 'registerRepeatPassword', true);

    removeVisibleError(childList1);
    removeVisibleError(childList2);
}
