import * as VALIDATION from './phone-src.js';
import * as CURSOR from '../../common/cursor.js';
import * as CONFIG from '../../common/config.js';
import * as FORM from '../../common/status-form.js';

export function getPhoneFieldEvents (elemID, statusForm) {
    return [
        {
            type: 'mouseup',
            /**
             * @function Осуществляет при активации пустого поля ввода номера
             *      создание шаблона номера '+7(' и устанавливает курсор в конец строки.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener (app, e) {
                if (e.target.value === '') {
                    e.target.value = VALIDATION.NumberPhoneFormat.phoneBeginString;
                    CURSOR.setCursorPosition(e, e.target.value.length);
                }
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.phoneNumber, CONFIG.ErrorMsg.errorPhoneNumber
                );
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
            listener (app, e) {
                if (CONFIG.Keypad.deleteSymbols.includes(e.keyCode)) {
                    let currPos = CURSOR.getCursorPosition(e.target);
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
            listener (app, e) {
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
            listener (app, e) {
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.phoneNumber, CONFIG.ErrorMsg.errorPhoneNumber
                );
            }
        }
    ];
}
