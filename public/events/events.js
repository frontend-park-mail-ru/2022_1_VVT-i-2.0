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
    loginPhone: [
        {
            type: 'input',
            /**
             * @function Осуществляет форматирование и автодополнение телефона
             *      в форме авторизации.
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
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                VALIDATION.inputDataManager(
                    e, 'loginPhone', statusLoginForm,
                    VALIDATION.Regex.phoneNumber, VALIDATION.ErrorMsg.errorPhoneNumber
                );

            }
        }
    ],
    loginPassword: [
        {
            type: 'change',
            /**
             * @function Осуществляет проверку пароля на валидность в форме авторизации.
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
    ],
    loginButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы авторизации. Если все поля формы валидны
             *      производится отправка формы на сервер.
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

                        const event = new CustomEvent('render-page', { detail: { section: 'main' } })
                        document.dispatchEvent(event);
                    });
            }
        }
    ],
    registerPhone: [
        {
            type: 'input',
            /**
             * @function Осуществляет форматирование и автодополнение
             *      телефона в форме регистрации.
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
             * @function Осуществляет проверку телефона на валидность в форме регистрации.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                VALIDATION.inputDataManager(
                    e, 'registerPhone', statusRegisterForm,
                    VALIDATION.Regex.phoneNumber, VALIDATION.ErrorMsg.errorPhoneNumber
                );
            }
        }
    ],
    registerName: [
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
    ],
    registerPassword: [
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
    ],
    registerRepeatPassword: [
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
    ],
    registerButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы регистрации. Если все поля формы валидны
             *      производится отправка формы на сервер.
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

                        const event = new CustomEvent('render-page', { detail: { section: 'main' } })
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

                        const event = new CustomEvent('render-page', { detail: { section: 'main' } })
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
