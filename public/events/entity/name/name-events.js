import * as VALIDATION from './name-src.js';
import * as FORM from '../../common/status-form.js';
import * as CONFIG from '../../common/config.js';

export function getNameFieldEvents (elemID, statusForm) {
    return [
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
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.name, CONFIG.ErrorMsg.errorName);
            }
        }
    ];
};
