import * as CURSOR from '../../common/cursor.js';
import {Regex} from '../../common/config.js';

const IsSymbolLetter = (char) => {
    return Regex.letterSymbol.test(char);
}

const eraseNotLetterSymbols = (e) => {
    const val = e.target.value[e.target.value.length - 1];
    const currPos = CURSOR.getCursorPosition(e.target);

    if (!IsSymbolLetter(val)) {
        e.target.value = e.target.value.slice(0, currPos - 1) +
            e.target.value.slice(currPos, e.target.value.length);
    }
}

export const nameAutocomplete = (e) => {
    eraseNotLetterSymbols(e);

    e.target.value = e.target.value
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}
