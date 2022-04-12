import * as FORM from '../../common/status-form.js';
import * as CONFIG from '../../common/config.js';

export const getEmailFieldEvents = (elemID, statusForm) => {
    return [
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
