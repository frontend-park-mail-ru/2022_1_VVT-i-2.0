import {EntityLengthLimit, Regex} from "./config.js";
import {setCursorPosition} from "./cursor.js";

function IsSymbolLetter(char) {
    return Regex.letterSymbol.test(char);
}

function IsSymbolNumeric(char) {
    return Regex.numericSymbol.test(char);
}

export const autoEraseExtraSymbols = (e, entity, ObjectExcludes) => {
    let func = new Function();
    let lengthLimit = 0;

    switch (entity) {
        case 'phone':
            func = IsSymbolNumeric;
            lengthLimit = EntityLengthLimit.phoneNumber;
            break;
        case 'email':
            func = IsSymbolLetter;
            lengthLimit = EntityLengthLimit.email;
            break;
        case 'name':
            func = IsSymbolLetter;
            lengthLimit = EntityLengthLimit.name;
            break;
        case 'confirmCode':
            func = IsSymbolNumeric;
            lengthLimit = EntityLengthLimit.confirmCode;
            break;
    }

    e.target.value = e.target.value.slice(0, lengthLimit);

    for (let i = 0; i < e.target.value.length; ++i) {
        if (!func(e.target.value[i]) && !ObjectExcludes[e.target.value[i]]) {
            e.target.value = e.target.value.slice(0, i) +
                e.target.value.slice(i + 1, e.target.value.length);
            setCursorPosition(e, i);
            break;
        }
    }
}
