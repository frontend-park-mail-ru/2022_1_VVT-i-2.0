import * as CURSOR from '../../common/cursor.js';

export const numberServiceSymbols = ['(', '-', ')'];

export const NumberPhoneFormat = {
    phoneBeginString: '+7(',
    formatters: [
        {symbol: '(', formatPositions: [2]},
        {symbol: ')', formatPositions: [6]},
        {symbol: '-', formatPositions: [10, 13]},
    ],
    /**
     * @function Осуществляет проверку на наличие нужного служебного
     *      символа на нужной позиции (данные хранятся в массиве formatters). В случае
     *      отсуствия - добавляет на нужную позицию с переносом остальных символов.
     * @param {Event} e - Объект, хранящий статусы инпутов страницы.
     */
    format(e) {
        this.formatters.forEach((obj) => {
            obj.formatPositions.forEach((num) => {
                if (e.target.value.length === num + 1 && e.target.value[num] !== this.symbol &&
                    !numberServiceSymbols.includes(e.target.value[e.target.value.length - 1])) {
                    e.target.value = e.target.value.slice(0, num) + obj.symbol + e.target.value.slice(num, num + 1);
                }
            });
        });
    }
};

/**
 * @function Дополняет и форматирует номер телефона. В случае получения невалидных символов
 *      производится удаление их из поля ввода.
 * @param {Event} e - Событие.
 */
export const numberAutocomplete = (e) => {
    const val = e.target.value[e.target.value.length - 1];
    const currPos = CURSOR.getCursorPosition(e.target);

    if (!(val >= '0' && val <= '9' || numberServiceSymbols.includes(val))) {
        e.target.value = e.target.value.slice(0, currPos - 1) +
            e.target.value.slice(currPos, e.target.value.length);
        return;
    }

    NumberPhoneFormat.format(e);
}
