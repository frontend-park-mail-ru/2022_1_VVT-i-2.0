import * as api from '../api/api.js';
import * as VALIDATION from './validation.js';

const statusLoginForm = {
    isValidPhone: false,
    isValidPassword: false,
};

const statusRegisterForm = {
    isValidPhone: false,
    isValidName: false,
    isValidPassword: false,
    isValidRepeatPassword: false,
};

function getPhoneFieldEvents(formName) {
    return [
        {
            type: 'mouseup',
            /**
             * @function Осуществляет при активации пустого поля ввода номера
             *      создание шаблона номера '+7(' и устанавливает курсор в конец строки.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (e.target.value === '') {
                    e.target.value = VALIDATION.NumberPhoneFormat.phoneBeginString;
                    VALIDATION.setCursorPosition(e, e.target.value.length);
                }
            }
        },
        {
            type: 'keyup',
            /**
             * @function Проверяет: если код нажатой клавиши совпадает с кодом backspace или
             *      delete, то производит удаление символа перед курсором.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (VALIDATION.Keypad.deleteSymbols.includes(e.keyCode)) {
                    let currPos = VALIDATION.getCursorPosition(e.target);
                    if (VALIDATION.numberServiceSymbols.includes(e.target.value[currPos - 1])) {
                        e.target.value = e.target.value.slice(0, currPos - 1) +
                            e.target.value.slice(currPos, e.target.value.length);
                    }
                }
            }
        },
        {
            type: 'input',
            /**
             * @function При введении символа, осуществляет добавление служебных символов
             *      для соответствия требуемому шаблону.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                VALIDATION.numberAutocomplete(e);
            }
        },
        {
            type: 'change',
            /**
             * @function Осуществляет проверку телефона на валидность в форме авторизации.
             *      А также производит запись статуса в statusForm данной страницы. statusForm
             *      предназначен для быстрой проверки формы на валидность перед отправкой.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                VALIDATION.inputDataManager(
                    e, formName, statusLoginForm,
                    VALIDATION.Regex.phoneNumber, VALIDATION.ErrorMsg.errorPhoneNumber
                );
            }
        }
    ];
}

const passwordFieldEvents = [
    {
        type: 'change',
        /**
         * @function Осуществляет проверку пароля на валидность в форме авторизации.
         *      А также производит запись статуса в statusForm данной страницы. statusForm
         *      предназначен для быстрой проверки формы на валидность перед отправкой.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, e) {
            VALIDATION.inputDataManager(
                e, 'loginPassword', statusLoginForm,
                VALIDATION.Regex.password, VALIDATION.ErrorMsg.errorPassword
            );
        }
    }
];

const doublePasswordFieldEvents = [
    {
        type: 'change',
        /**
         * @function Осуществляет проверку пароля на валидность
         *      и проверку идентичности введенных паролей.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, e) {
            VALIDATION.passwordController(
                e, statusRegisterForm, VALIDATION.Regex.password
            );
        }
    }
];

const nameFieldEvents = [
    {
        type: 'input',
        /**
         * @function При каждом введении символа осуществляет форматирование введенного имени.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, e) {
            VALIDATION.nameAutocomplete(e);
        }
    },
    {
        type: 'change',
        /**
         * @function Осуществляет проверку имени пользователя на валидность.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, e) {
            VALIDATION.inputDataManager(
                e, 'registerName', statusRegisterForm,
                VALIDATION.Regex.name, VALIDATION.ErrorMsg.errorName);
        }
    }
];

const EVENTS = {
    closeImg: [
        {
            type: 'click',

            /**
             * @function Закрывает форму при нажатии на значок 'x'.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                app.modal.classList.remove('shown');
                app.modal.innerHTML = '';
                app.root.lastChild.classList.remove('hidden');
            }
        }
    ],
    loginPhone: getPhoneFieldEvents('loginForm'),
    loginPassword: passwordFieldEvents,
    loginButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
             *      в объекте statusLoginForm). Если все поля формы валидны,
             *      то производится отправка данных формы на сервер.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (!VALIDATION.isAvailableForSend(statusLoginForm)) {
                    return;
                }

                const phone = document.getElementById('loginPhone').children[0].value;
                const password = document.getElementById('loginPassword').children[0].value;

                api
                    .login({phone, password})
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Данные не валидны');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ],
    registerPhone: getPhoneFieldEvents('registerForm'),
    registerName: nameFieldEvents,
    registerPassword: doublePasswordFieldEvents,
    registerRepeatPassword: doublePasswordFieldEvents,
    registerButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
             *      в объекте statusRegisterForm). Если все поля формы валидны,
             *      то производится отправка данных формы на сервер.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (!VALIDATION.isAvailableForSend(statusRegisterForm)) {
                    return;
                }

                const phone = document.getElementById('registerPhone').children[0].value;
                const name = document.getElementById('registerName').children[0].value;
                const password = document.getElementById('registerPassword').children[0].value;

                api
                    .register({phone, name, password})
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Данные не валидны');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ],
    logoutButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет отправку запроса на ввыход пользователя из учетной записи.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                api
                    .logout()
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Ошибка!');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ]
};

/**
 * @function Добавляет листенеры.
 * @param {Object} app - Объект приложения.
 */
export const addListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.addEventListener(type, (e) => listener(app, e)));
    });
}

/**
 * @function Удаляет все листенеры.
 * @param {Object} app - Объект приложения.
 */
export const removeListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.removeEventListener(type, (e) => listener(app, e)));
    });
};
