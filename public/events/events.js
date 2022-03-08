import * as api from '../api/api.js';
import * as VALIDATION from './validation.js';

/*
*
* МОЖНО СОЗДАТЬ ОБЬЕКТ ДЛЯ СОХРАНЕНИЯ СТАТУСА ПОЛЕЙ,
* И ПРИ ОТПРАВКЕ ПРОВЕРКА ТОЛЬКО ПОЛЕЙ ЭТОГО ОБЬЕКТА
*
* */

const EVENTS = {
    closeImg: [
        {
            type: 'click',
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
            listener(app, e) {
                VALIDATION.numberAutocomplete(e);
                VALIDATION.inputDataManager(e, 'loginPhone', VALIDATION.Regex.phoneNumber);
            }
        }
    ],
    loginPassword: [
        {
            type: 'input',
            listener(app, e) {
                VALIDATION.inputDataManager(e, 'loginPassword', VALIDATION.Regex.password);
            }
        }
    ],
    loginButton: [
        {
            type: 'click',
            listener(app, e) {
                const phone = document.getElementById('loginPhone').value;
                const password = document.getElementById('loginPassword').value;

                api
                    .login({ phone, password })
                    .then((res) => {
                        console.log(res.data);
                    });
            }
        }
    ],
    registerPhone: [
        {
            type: 'input',
            listener(app, e) {
                VALIDATION.numberAutocomplete(e);
                VALIDATION.inputDataManager(e, 'registerPhone', VALIDATION.Regex.phoneNumber);
            }
        }
    ],
    registerName: [
        {
            type: 'input',
            listener(app, e) {
                VALIDATION.nameAutocomplete(e);
                VALIDATION.inputDataManager(e, 'registerName', VALIDATION.Regex.name);
            }
        }
    ],
    registerPassword: [
        {
            type: 'input',
            listener(app, e) {
                VALIDATION.passwordController(e, VALIDATION.Regex.password);
            }
        }
    ],
    registerRepeatPassword: [
        {
            type: 'input',
            listener(app, e) {
                VALIDATION.passwordController(e, VALIDATION.Regex.password);
            }
        }
    ],
    registerButton: [
        {
            type: 'click',
            listener(app, e) {
                const phone = document.getElementById('registerPhone').value;
                const name = document.getElementById('registerName').value;
                const password = document.getElementById('registerPassword').value;
                const repeatPassword = document.getElementById('registerRepeatPassword').value;

                if (password !== repeatPassword) {
                    return;
                }

                api
                    .register({ phone, name, password })
                    .then((res) => {
                        console.log(res);
                    });
            }
        }
    ],
};

export default EVENTS;
