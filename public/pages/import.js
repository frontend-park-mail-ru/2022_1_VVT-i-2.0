import mainPage from './Main/main.js';
import loginPage from './Login/login.js';
import registerPage from './Register/register.js';
import confirmCodePage from './ConfirmCode/confirm-code.js';
import profilePreviewPage from './ProfilePreview/profile-preview.js';
import profilePage from './Profile/profile.js';
import productsPage from './Products/products.js';
import shoppingCartPage from './ShoppingCart/shopping-cart.js';
import orderingPage from './Ordering/ordering.js';
import suggestsPage from './Suggests/suggests.js';
import networkErrors from './NetworkErrors/network-errors.js';

const MENU = {
    main: {
        render: mainPage,
        isModal: false
    },
    login: {
        render: loginPage,
        isModal: true,
        position: 'modal-center',
    },
    register: {
        render: registerPage,
        isModal: true,
        position: 'modal-center',
    },
    confirmCode: {
        render: confirmCodePage,
        isModal: true,
        position: 'modal-center',
    },
    profilePreview: {
        render: profilePreviewPage,
        isModal: true,
        position: 'modal-right',
    },
    profile: {
        render: profilePage,
        isModal: false
    },
    products: {
        render: productsPage,
        isModal: false
    },
    shoppingCart: {
        render: shoppingCartPage,
        isModal: true,
        position: 'modal-right',
    },
    ordering: {
        render: orderingPage,
        isModal: false
    },
    suggests: {
        render: suggestsPage,
        isModal: true,
        position: 'modal-top'
    },
    networkErrors: {
        render: networkErrors,
        isModal: false
    },
};

export default MENU;
