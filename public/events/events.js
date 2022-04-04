// import * as api from '../api/api.js';
import { Event } from './entity/import.js';
import * as FORM from './common/status-form.js';
// import * as events from "events";

const EVENTS = {
    closeImg: Event.getFrameEvents(),

    loginPhone: Event.getPhoneFieldEvents('loginPhone', FORM.statusLoginForm),
    loginPassword: Event.singlePasswordFieldEvents(),
    loginButton: Event.getButtonEvents().loginButton,
    logoutButton: Event.getButtonEvents().logoutButton,

    registerPhone: Event.getPhoneFieldEvents('registerPhone', FORM.statusRegisterForm),
    registerName: Event.getNameFieldEvents('registerName', FORM.statusRegisterForm),
    registerPassword: Event.doublePasswordFieldEvents(),
    registerRepeatPassword: Event.doublePasswordFieldEvents(),
    registerButton: Event.getButtonEvents().registerButton,

    profileName: Event.getNameFieldEvents('profileName', FORM.statusPersonInfoForm),
    profilePhone: Event.getPhoneFieldEvents('profilePhone', FORM.statusPersonInfoForm),
    profileEmail: Event.getEmailFieldEvents('profileEmail', FORM.statusPersonInfoForm),
    // profile: [
    //     {
    //         type: 'click',
    //         listener (app, e) {
    //             const event = new CustomEvent('render-page', { detail: { section: 'profile' } });
    //             document.dispatchEvent(event);
    //         }
    //     }
    // ]
};

/**
 * @function Добавляет листенеры.
 * @param {Object} app - Объект приложения.
 */
export const addListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({
            type,
            listener
        }) => node.addEventListener(type, (e) => listener(app, e)));
    });
};

/**
 * @function Удаляет все листенеры.
 * @param {Object} app - Объект приложения.
 */
export const removeListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({
            type,
            listener
        }) => node.removeEventListener(type, (e) => listener(app, e)));
    });
};
