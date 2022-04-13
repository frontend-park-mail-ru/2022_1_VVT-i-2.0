import {autoEraseExtraSymbols} from '../../common/common-custom-prettiers.js'
import {EntityLengthLimit} from "../../common/config";

export const nameAutocomplete = (e) => {
    autoEraseExtraSymbols(e,'name', {});

    e.target.value = e.target.value
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}
