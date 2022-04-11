import * as FORM from '../../common/status-form.js';
import * as CONFIG from '../../common/config.js';

export const getEmailFieldEvents = (elemID, statusForm) => {
    return [
        {
            type: 'change',
            selector: 'id',
            /**
             * @function Осуществляет проверку имени пользователя на валидность.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, store, e) {
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.email, CONFIG.ErrorMsg.errorEmail);
            }
        }
    ];
}
