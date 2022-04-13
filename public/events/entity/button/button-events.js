import * as FORM from '../../common/status-form.js';
import { hideEmptyInputs, showEmptyInputs } from '../../common/status-form.js';
import { renderAndUpdateURN } from '../../../render/render.js';

export const getButtonEvents = () => {
    return {
        loginButton: [
            {
                type: 'click',
                selector: 'id',
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

                    let phone = document.getElementById('loginPhone').children[0].value;
                    sessionStorage.setItem('phone', phone);

                    phone = phone.replace('+', '');
                    phone = phone.replace('(', '');
                    phone = phone.replace(')', '');
                    phone = phone.replaceAll('-', '');

                    sessionStorage.setItem('logicType', 'login');

                    store.actions.sendCode(phone).then((result) => renderAndUpdateURN('/confirmCode'));
                }
            }
        ],
        confirmCodeButton: [
            {
                type: 'click',
                selector: 'id',
                listener(app, store, e) {
                    const logicType = sessionStorage.getItem('logicType');
                    sessionStorage.removeItem('logicType');

                    let phone = sessionStorage.getItem('phone');
                    sessionStorage.removeItem('phone');

                    phone = phone.replace('+', '');
                    phone = phone.replace('(', '');
                    phone = phone.replace(')', '');
                    phone = phone.replaceAll('-', '');

                    const name = sessionStorage.getItem('name');
                    sessionStorage.removeItem('name');

                    const email = sessionStorage.getItem('email');
                    sessionStorage.removeItem('email');

                    const code = document.getElementById('confirmCode').children[0].value;

                    if (logicType === 'login') {
                        store.actions.login({ phone, code }).then(() => renderAndUpdateURN('/'));
                    } else if (logicType === 'register') {
                        store.actions.register({ phone, code, email, name }).then(() => renderAndUpdateURN('/'));
                    }
                }
            }
        ],
        sendCodeButton: [
            {
                type: 'click',
                selector: 'id',
                listener(app, store, e) {
                    let phone = sessionStorage.getItem('phone');

                    phone = phone.replace('+', '');
                    phone = phone.replace('(', '');
                    phone = phone.replace(')', '');
                    phone = phone.replaceAll('-', '');

                    store.actions.sendCode(phone).then((result) => renderAndUpdateURN('/confirmCode'));
                }
            }
        ],
        logoutButton: [
            {
                type: 'click',
                selector: 'id',
                /**
                 * @function Осуществляет отправку запроса на ввыход пользователя из учетной записи.
                 * @param {Object} app - Объект приложения.
                 * @param {Event} e - Событие.
                 */
                listener(app, store, e) {
                    store.actions.logout().then(() => renderAndUpdateURN('/'));
                }
            }
        ],
        registerButton: [
            {
                type: 'click',
                selector: 'id',
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

                    let phone = document.getElementById('registerPhone').children[0].value;
                    sessionStorage.setItem('phone', phone);

                    phone = phone.replace('+', '');
                    phone = phone.replace('(', '');
                    phone = phone.replace(')', '');
                    phone = phone.replaceAll('-', '');

                    const name = document.getElementById('registerName').children[0].value;
                    const email = document.getElementById('registerEmail').children[0].value;

                    sessionStorage.setItem('name', name);
                    sessionStorage.setItem('email', email);

                    sessionStorage.setItem('logicType', 'register');

                    store.actions.sendCode(phone).then((result) => renderAndUpdateURN('/confirmCode'));
                }
            }
        ],
        changeAvatarButton: [
            {
                type: 'click',
                selector: 'id',
                listener(app, store, e) {
                    let input = document.createElement('input');
                    input.type = 'file';
                    input.onchange = () => {
                        console.log(input, input.files[0]);
                        const preview = document.getElementById('user-avatar');
                        const file    = input.files[0];
                        const reader  = new FileReader();

                        reader.onloadend = function () {
                            preview.src = reader.result;
                        }

                        if (file) {
                            reader.readAsDataURL(file);
                        } else {
                            preview.src = "";
                        }
                    };

                    input.click();
                }
            }
        ],
        personInfoSaveButton: [
            {
                type: 'click',
                selector: 'id',
                listener(app, store, e) {
                    // TODO: ТАКЖЕ ПРОВЕРИТЬ ЕСЛИ ИНПУТЫ ПУСТЫЕ ТО ЭТО НОРМ

                    if (!FORM.isAvailableForSend(FORM.statusPersonInfoForm)) {
                        showEmptyInputs(FORM.statusPersonInfoForm, FORM.personInfoInputs);
                        setTimeout(hideEmptyInputs, 400, FORM.statusPersonInfoForm, FORM.personInfoInputs);
                        return;
                    }

                    const name = document.getElementById('profileName').children[0].value;
                    const email = document.getElementById('profileEmail').children[0].value;

                    console.log(name, email);

                    store.actions.updateUser({ name, email }).then(() => renderAndUpdateURN('/'));
                }
            }
        ],
        // profilePreviewButton: [
        //     {
        //         type: 'click',
        //         selector: 'id',
        //         listener(app, store, e) {
        //             console.log(e.target);
        //             if (sessionStorage.getItem('profilePreviewStatus') === 'activated') {
        //
        //                 sessionStorage.setItem('profilePreviewStatus', 'deactivated');
        //                 const root = sessionStorage.getItem('root') || 'main';
        //
        //                 renderAndUpdateURN(root);
        //
        //                 return;
        //             }
        //
        //             sessionStorage.setItem('profilePreviewStatus', 'activated');
        //             renderAndUpdateURN('/profilePreview');
        //         }
        //     }
        // ],
        // shoppingCartButton: [
        //     {
        //         type: 'click',
        //         selector: 'id',
        //         listener(app, store, e) {
        //             if (sessionStorage.getItem('shoppingCartStatus') === 'activated') {
        //                 sessionStorage.setItem('shoppingCartStatus', 'deactivated');
        //                 renderAndUpdateURN('/products/main');
        //                 return;
        //             }
        //
        //             sessionStorage.setItem('shoppingCart', 'activated');
        //             renderAndUpdateURN('/shoppingCart')
        //         }
        //     }
        // ]
    };
}
