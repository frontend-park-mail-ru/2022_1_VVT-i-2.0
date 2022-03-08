import mainPage from './Main/main.js';
import loginPage from './Login/login.js';
import registerPage from './Register/register.js';

const MENU = {
    main: {
        render: mainPage,
        isModal: false
    },
    login: {
        render: loginPage,
        isModal: true
    },
    register: {
        render: registerPage,
        isModal: true
    }
};

export default MENU;
