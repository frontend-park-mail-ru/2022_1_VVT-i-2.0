import * as CONFIG from '../../common/config.js';
import * as FORM from '../../common/status-form.js';
import {EntityLengthLimit} from '../../common/config.js';

export const getEmailFieldEvents = (elemID, statusForm) => {
    return [
        {
            type: 'input',
            selector: 'id',
            listener(app, store, e) {
                e.target.value = e.target.value.slice(0, EntityLengthLimit.email);
            }
        },
        {
            type: 'change',
            selector: 'id',
            listener(app, store, e) {
                FORM.inputDataManager(
                    e, elemID, statusForm,
                    CONFIG.Regex.email, CONFIG.ErrorMsg.errorEmail);
            }
        }
    ];
}
