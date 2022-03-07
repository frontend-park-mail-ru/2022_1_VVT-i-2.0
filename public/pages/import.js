import mainPage from './Main/main.js';
import loginPage from './Login/login.js';
import registerPage from './Register/register.js';

const MENU = {
    main: {
        draw: mainPage,
        isModal: false
    },
    login: {
        draw: loginPage,
        isModal: true
    },
    register: {
        draw: registerPage,
        isModal: true
    }
};

export default MENU;
