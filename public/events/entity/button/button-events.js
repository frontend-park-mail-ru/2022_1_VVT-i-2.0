import * as FORM from '../../common/status-form.js';
import { hideEmptyInputs, showEmptyInputs } from '../../common/status-form.js';
import { render } from '../../../render/render.js';

export const getButtonEvents = () => {
    return {
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
                listener(app, store, e) {
                    if (!FORM.isAvailableForSend(FORM.statusLoginForm)) {
                        showEmptyInputs(FORM.statusLoginForm, FORM.loginFormInputs);
                        setTimeout(hideEmptyInputs, 400, FORM.statusLoginForm, FORM.loginFormInputs);
                        return;
                    }

                    const phone = document.getElementById('loginPhone').children[0].value;
                    const password = document.getElementById('loginPassword').children[0].value;

                    // api
                    //     .login({
                    //         phone,
                    //         password
                    //     })
                    //     .then((res) => {
                    //         if (res.status !== 200) {
                    //             alert('Данные не валидны');
                    //             return;
                    //         }
                    //
                    render('/');
                    //     });
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
                listener(app, store, e) {
                    // api
                    //     .logout()
                    //     .then((res) => {
                    //         if (res.status !== 200) {
                    //             alert('Ошибка!');
                    //             return;
                    //         }

                    render('/');
                    // });
                }
            }
        ],
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
                listener(app, store, e) {
                    if (!FORM.isAvailableForSend(FORM.statusRegisterForm)) {
                        showEmptyInputs(FORM.statusRegisterForm, FORM.registerFormInputs);
                        setTimeout(hideEmptyInputs, 400, FORM.statusRegisterForm, FORM.registerFormInputs);
                        return;
                    }

                    const phone = document.getElementById('registerPhone').children[0].value;
                    const name = document.getElementById('registerName').children[0].value;
                    const password = document.getElementById('registerPassword').children[0].value;

                    // api
                    //     .register({
                    //         phone,
                    //         name,
                    //         password
                    //     })
                    //     .then((res) => {
                    //         if (res.status !== 200) {
                    //             alert('Данные не валидны');
                    //             return;
                    //         }

                    render('/');
                        // });
                }
            }
        ],
        personInfoSaveButton: [
            {
                type: 'click',
                listener(app, store, e) {
                    // TODO: ТАКЖЕ ПРОВЕРИТЬ ЕСЛИ ИНПУТЫ ПУСТЫЕ ТО ЭТО НОРМ

                    if (!FORM.isAvailableForSend(FORM.statusPersonInfoForm)) {
                        showEmptyInputs(FORM.statusPersonInfoForm, FORM.personInfoInputs);
                        setTimeout(hideEmptyInputs, 400, FORM.statusPersonInfoForm, FORM.personInfoInputs);
                        return;
                    }

                    const name = document.getElementById('profileName').children[0].value;
                    const phone = document.getElementById('profilePhone').children[0].value;
                    const email = document.getElementById('profileEmail').children[0].value;

                    // api
                    //     .savePersonInfoSettings({
                    //         name,
                    //         phone,
                    //         email
                    //     })
                    //     .then((res) => {
                    //         if (res.status !== 200) {
                    //             alert('Данные не валидны');
                    //             return;
                    //         }

                    // render('/');
                    // });
                }
            }
        ]
    };
}
