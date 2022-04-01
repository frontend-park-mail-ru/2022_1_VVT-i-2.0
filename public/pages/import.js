import mainPage from './Main/main.js';
import loginPage from './Login/login.js';
import registerPage from './Register/register.js';
import profilePreviewPage from './ProfilePreview/profile-preview.js';
import profilePage from './Profile/profile.js';
import productsPage from './Products/products.js';
import shoppingCartPage from './ShoppingCart/shopping-cart.js';
import orderingPage from './Ordering/ordering.js';

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
    },
    profilePreview: {
        render: profilePreviewPage,
        isModal: true
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
        order: shoppingCartPage,
        isModal: true
    },
    ordering: {
        order: orderingPage,
        isModal: false
    }
};

export default MENU;
