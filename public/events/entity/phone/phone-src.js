import {EntityLengthLimit} from "../../common/config.js";
import {autoEraseExtraSymbols} from "../../common/common-custom-prettiers.js";
import * as CURSOR from "../../common/cursor";

export const numberServiceSymbols = ['(', '-', ')'];

const numberObjectExclude = {
    '+': true,
    '(': true,
    '-': true,
    ')': true,
};

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
    autoEraseExtraSymbols(e, 'phone', numberObjectExclude);

    e.target.value = e.target.value.slice(0, EntityLengthLimit.phoneNumber);
    NumberPhoneFormat.format(e);
}

export const isCursorAtInputEnd = (e) => {
    if (CURSOR.getCursorPosition(e.target) !== e.target.value.length) {
        console.log(CURSOR.getCursorPosition(e.target), e.target.value.length);
        CURSOR.setCursorPosition(e, e.target.value.length);

        return false;
    }

    return true;
}
