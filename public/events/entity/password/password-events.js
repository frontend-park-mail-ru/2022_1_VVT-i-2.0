import * as VALIDATION from "./password-src.js";
import * as FORM from '../../common/status-form.js';
import * as CONFIG from '../../common/config.js';

export function singlePasswordFieldEvents () {
    return [
        {
            type: 'change',
            /**
             * @function Осуществляет проверку пароля на валидность в форме авторизации.
             *      А также производит запись статуса в statusForm данной страницы.
             *      statusForm редназначен для быстрой проверки формы на валидность перед отправкой.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                FORM.inputDataManager(
                    e, 'loginPassword', FORM.statusLoginForm,
                    CONFIG.Regex.password, CONFIG.ErrorMsg.errorPassword
                );
            }
        }
    ];
}

export function doublePasswordFieldEvents () {
    return [
        {
            type: 'change',
            /**
             * @function Осуществляет проверку паролей на валидность и идентичность в форме авторизации.
             *      А также производит запись статуса в statusForm данной страницы.
             *      statusForm редназначен для быстрой проверки формы на валидность перед отправкой.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                VALIDATION.passwordController(
                    e, FORM.statusRegisterForm
                );
            }
        }
    ];
}
