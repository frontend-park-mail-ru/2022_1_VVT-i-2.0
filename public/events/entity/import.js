import {getFrameEvents} from './frame/frame-events.js';
import {getButtonEvents} from './button/button-events.js';
import {getNameFieldEvents} from './name/name-events.js';
import {getPhoneFieldEvents} from './phone/phone-events.js';
import {getEmailFieldEvents} from './email/email-events.js';
import {
    singlePasswordFieldEvents,
    doublePasswordFieldEvents
} from './password/password-events.js';
import { productEvents } from './product/product-events.js';

const Event = {
    getFrameEvents,
    getButtonEvents,
    getNameFieldEvents,
    getPhoneFieldEvents,
    getEmailFieldEvents,
    singlePasswordFieldEvents,
    doublePasswordFieldEvents,
    productEvents
};

export default Event;
