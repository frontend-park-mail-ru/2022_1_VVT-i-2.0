// import * as api from '../api/api.js';
import Event from './entity/import.js';
import * as FORM from './common/status-form.js';
// import * as events from "events";

const EVENTS = {
    closeImg: Event.getFrameEvents(),

    loginPhone: Event.getPhoneFieldEvents('loginPhone', FORM.statusLoginForm),
    loginPassword: Event.singlePasswordFieldEvents('loginPassword', FORM.statusLoginForm),
    loginButton: Event.getButtonEvents().loginButton,
    logoutButton: Event.getButtonEvents().logoutButton,

    registerPhone: Event.getPhoneFieldEvents('registerPhone', FORM.statusRegisterForm),
    registerName: Event.getNameFieldEvents('registerName', FORM.statusRegisterForm),
    registerEmail: Event.getEmailFieldEvents('registerEmail', FORM.statusRegisterForm),
    // registerPassword: Event.doublePasswordFieldEvents(),
    // registerRepeatPassword: Event.doublePasswordFieldEvents(),
    registerButton: Event.getButtonEvents().registerButton,

    profileName: Event.getNameFieldEvents('profileName', FORM.statusPersonInfoForm),
    profilePhone: Event.getPhoneFieldEvents('profilePhone', FORM.statusPersonInfoForm),
    profileEmail: Event.getEmailFieldEvents('profileEmail', FORM.statusPersonInfoForm),
    // profile: [
    //     {
    //         type: 'click',
    //         listener (app, store, e) {
    //             const event = new CustomEvent('render-page', { detail: { section: 'profile' } });
    //             document.dispatchEvent(event);
    //         }
    //     }
    // ]

    confirmCodeButton: Event.getButtonEvents().confirmCodeButton,
    sendCodeButton: Event.getButtonEvents().sendCodeButton,

    addToCart: Event.productEvents(),
};

/**
 * @function Добавляет листенеры.
 * @param {Object} app - Объект приложения.
 */
export const addListeners = (app, store) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (node) {
            events
                .filter(({ selector }) => selector === 'id')
                .forEach(({ type, listener }) => node.addEventListener(type, (e) => listener(app, store, e)));
        }

        const nodes = document.getElementsByClassName(name);
        if (nodes) {
            events
                .filter(({ selector }) => selector === 'class')
                .forEach(({ type, listener }) => {
                    Array.from(nodes).forEach((node) => node.addEventListener(type, (e) => listener(app, store, e)));
                });
        }
    });
};

/**
 * @function Удаляет все листенеры.
 * @param {Object} app - Объект приложения.
 */
export const removeListeners = (app, store) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (node) {
            events
                .filter(({ selector }) => selector === 'id')
                .forEach(({ type, listener }) => node.removeEventListener(type, (e) => listener(app, store, e)));
        }

        const nodes = document.getElementsByClassName(name);
        if (nodes) {
            events
                .filter(({ selector }) => selector === 'class')
                .forEach(({ type, listener }) => {
                    Array.from(nodes).forEach((node) => node.removeEventListener(type, (e) => listener(app, store, e)));
                });
        }
    });
};
