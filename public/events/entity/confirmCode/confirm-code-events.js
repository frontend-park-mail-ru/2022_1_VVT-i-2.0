import * as CONFIG from '../../common/config.js';
import * as FORM from '../../common/status-form.js';
import {EntityLengthLimit} from '../../common/config.js';
import {autoEraseExtraSymbols} from "../../common/common-custom-prettiers";

export const getConfirmCodeFieldEvents = (elemID, statusForm) => {
    return [
        {
            type: 'input',
            selector: 'id',
            listener(app, store, e) {
                autoEraseExtraSymbols(e, 'confirmCode', {});
                e.target.value = e.target.value.slice(0, EntityLengthLimit.confirmCode);
            }
        },
        {
            type: 'change',
            selector: 'id',
            listener(app, store, e) {
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.confirmCode, CONFIG.ErrorMsg.errorConfirmCode);
            }
        }
    ];
}
